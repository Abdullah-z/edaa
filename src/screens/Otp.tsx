import React, {useCallback, useEffect, useState, useRef} from 'react';
import {
  ImageBackground,
  View,
  Dimensions,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Image, Text, Checkbox} from '../components/';

import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {Icon, CheckIcon, Select, Input, HStack} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {transparentize} from 'native-base/lib/typescript/theme/v33x-theme/tools';

import PhoneInput from 'react-native-phone-number-input';
import Background_Image from '../assets/images/Background_Register.jpg';

const isAndroid = Platform.OS === 'android';

interface IRegistration {
  name: string;
  email: string;
  password: string;
  agreed: boolean;
}
interface IRegistrationValidation {
  name: boolean;
  email: boolean;
  password: boolean;
  agreed: boolean;
}

const Otp = () => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const {isDark} = useData();
  const [timer, setTimer] = useState(60);
  const {t} = useTranslation();
  const navigation = useNavigation();

  const [isValid, setIsValid] = useState<IRegistrationValidation>({
    name: false,
    email: false,
    password: false,
    agreed: false,
  });
  const [registration, setRegistration] = useState<IRegistration>({
    name: '',
    email: '',
    password: '',
    agreed: false,
  });
  const {assets, colors, gradients, sizes} = useTheme();
  const [language, setLanguage] = useState('');

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({...state, ...value}));
    },
    [setRegistration],
  );

  const handleSignUp = useCallback(() => {
    if (!Object.values(isValid).includes(false)) {
      /** send/save registratin data */
      console.log('handleSignUp', registration);
    }
  }, [isValid, registration]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      name: regex.name.test(registration.name),
      email: regex.email.test(registration.email),
      password: regex.password.test(registration.password),
      agreed: registration.agreed,
    }));
  }, [registration, setIsValid]);

  const Count_Down = () => {};
  useEffect(() => {
    if (timer === 0) {
      console.log('TIME LEFT IS 0');
      setTimer(0);
    }
    // exit early when we reach 0
    if (!timer) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timer]);

  return (
    <Block primary paddingTop={sizes.m}>
      <View>
        <HStack
          paddingBottom={sizes.s}
          justifyContent="center"
          marginX={sizes.s}>
          <Block align="flex-start">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text bold white p marginTop={sizes.s}>
                Back
              </Text>
            </TouchableOpacity>
          </Block>

          <Block align="flex-end">
            <Text bold white p marginTop={sizes.s}>
              English
            </Text>
          </Block>
        </HStack>
      </View>
      <ImageBackground
        source={Background_Image}
        resizeMode="cover"
        style={{
          minHeight: Dimensions.get('window').height + StatusBar.currentHeight,
        }}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior="position"
            keyboard
            kyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
            <Block style={{paddingTop: '13%'}}>
              <Block marginHorizontal={sizes.sm}>
                <Block
                  style={{
                    borderRadius: 20,
                    minHeight: 370,
                    maxHeight: 370,
                  }}
                  blur
                  intensity={25}
                  radius={sizes.sm}
                  overflow="hidden"
                  justify="space-evenly"
                  tint={colors.blurTint}
                  paddingVertical={sizes.sm}>
                  <Text h4 bold center white>
                    {t('otp.subtitle')}
                  </Text>

                  <Block
                    row
                    flex={0}
                    align="center"
                    justify="center"
                    marginBottom={sizes.sm}
                    paddingHorizontal={sizes.xxl}></Block>

                  <Block paddingHorizontal={sizes.sm}>
                    <Text
                      align="center"
                      white
                      marginBottom={sizes.xs}
                      marginLeft={sizes.sm}
                      marginRight={sizes.sm}>
                      {t('otp.body')}
                    </Text>

                    <Text bold white marginBottom={sizes.s} align="center">
                      {t('otp.heading')}
                    </Text>

                    <Text
                      bold
                      white
                      marginBottom={sizes.s}
                      marginTop={sizes.sm}>
                      OTP
                    </Text>
                    <Input
                      style={{color: 'white'}}
                      borderRadius="10"
                      focusOutlineColor={'white'}
                      size="m"
                      inputMode="numeric"
                      placeholderTextColor={'white'}
                      cursorColor={'white'}
                      autoCapitalize="none"
                      marginBottom={sizes.xs}
                      placeholder={t('common.passwordPlaceholder')}
                      onChangeText={(value) => handleChange({password: value})}
                    />
                    <HStack>
                      <Text align="left" white bold>
                        {t('otp.time')}
                      </Text>
                      <Text bold color={'#EE4B2B'}>
                        {timer + ' ' + 'secs'}
                      </Text>
                    </HStack>

                    <TouchableOpacity
                      style={{
                        justifyContent: 'flex-end',
                        alignSelf: 'flex-end',
                        paddingRight: sizes.m,
                      }}>
                      <Text
                        bold
                        white
                        p
                        style={{textDecorationLine: 'underline'}}>
                        Resend
                      </Text>
                    </TouchableOpacity>

                    <Button
                      white
                      radius={50}
                      shadow={!isAndroid}
                      marginVertical={sizes.s}
                      marginHorizontal={sizes.sm}
                      onPress={() => navigation.navigate('Home')}>
                      <Text bold primary transform="uppercase">
                        {t('otp.button')}
                      </Text>
                    </Button>
                  </Block>
                </Block>
                <Block marginTop={sizes.sm} marginHorizontal={sizes.xl} row>
                  <Icon
                    marginRight={sizes.xs}
                    as={<Ionicons name={'checkmark-circle-outline'} />}
                    size={8}
                    color={colors.success}
                  />
                  <Text white bold width={'90%'}>
                    {t('otp.footer')}
                  </Text>
                </Block>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    </Block>
  );
};

export default Otp;
