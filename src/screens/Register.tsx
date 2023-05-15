import React, {useCallback, useEffect, useState, useRef} from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  StatusBar,
  Linking,
  Platform,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Image, Text, Checkbox} from '../components/';

import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {Icon, HStack, CheckIcon, Input, Select} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {transparentize} from 'native-base/lib/typescript/theme/v33x-theme/tools';

import PhoneInput from 'react-native-phone-number-input';

import Background_Image from '../assets/images/Background_Register.jpg';
//import {position} from 'native-base/lib/typescript/theme/styled-system';

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

const Register = () => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const {isDark} = useData();
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

  console.log('Value : ' + value);
  return (
    <Block primary paddingTop={sizes.md}>
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
            <Block style={{paddingTop: '13%', minHeight: 400}}>
              <Block marginHorizontal={sizes.sm}>
                <Block
                  style={{
                    borderRadius: 20,
                  }}
                  blur
                  intensity={25}
                  radius={sizes.sm}
                  overflow="hidden"
                  tint={colors.blurTint}
                  paddingVertical={sizes.sm}>
                  <Text h4 bold center white>
                    {t('register.title')}
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
                      bold
                      white
                      marginBottom={sizes.xs}
                      marginLeft={sizes.s}>
                      {t('common.email')}
                    </Text>

                    <Input
                      borderRadius="10"
                      focusOutlineColor={'white'}
                      style={{color: 'white'}}
                      size="m"
                      placeholderTextColor={'white'}
                      cursorColor={'white'}
                      autoCapitalize="none"
                      placeholder={t('common.emailPlaceholder')}
                      onChangeText={(value) => handleChange({email: value})}
                    />

                    <Text
                      bold
                      white
                      marginBottom={sizes.s}
                      marginTop={sizes.sm}>
                      {t('common.mobilenumber')}
                    </Text>
                    <PhoneInput
                      defaultCode={'SA'}
                      codeTextStyle={{color: colors.white}}
                      countryPickerButtonStyle={{
                        backgroundColor: 'white',
                        borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,
                      }}
                      onChangeCountry={(text) => {
                        console.log(text);
                      }}
                      containerStyle={{
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: colors.white,
                        borderRadius: 10,
                        width: '100%',
                      }}
                      textInputStyle={{
                        color: colors.white,
                      }}
                      textContainerStyle={{
                        backgroundColor: 'transparent',
                      }}
                      layout="first"
                      onChangeText={(text) => {
                        setValue(text);
                      }}
                      onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                      }}
                      textInputProps={{placeholderTextColor: '#ffffff'}}
                      autoFocus
                    />

                    <Text
                      bold
                      white
                      marginBottom={sizes.s}
                      marginTop={sizes.sm}
                      marginLeft={sizes.s}>
                      {t('register.id_title')}
                    </Text>
                    <Input
                      style={{color: 'white'}}
                      borderRadius="10"
                      focusOutlineColor={'white'}
                      size="m"
                      placeholderTextColor={'white'}
                      cursorColor={'white'}
                      secureTextEntry
                      autoCapitalize="none"
                      marginBottom={sizes.s}
                      placeholder={t('register.id_placeholder')}
                      onChangeText={(value) => handleChange({password: value})}
                    />
                    <Button
                      white
                      radius={50}
                      shadow={!isAndroid}
                      marginVertical={sizes.s}
                      marginHorizontal={sizes.sm}
                      onPress={() => navigation.navigate('Otp')}>
                      <Text bold primary transform="uppercase">
                        {t('common.submit')}
                      </Text>
                    </Button>
                  </Block>
                </Block>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    </Block>
  );
};
export default Register;

{
  /* //           row> */
}
{
  /* //           <Icon */
}
{
  /* //             as={<Ionicons name={'chevron-back-outline'} />}
    //             size={7}
    //             mr="2"
    //             color="white"
    //           />
    //           <Text semibold white p>
    //             Back
    //           </Text>
    //         </Block>
    //       </TouchableOpacity> */
}

{
  /* //       <Block
    //         align="center"
    //         marginTop={sizes.sm}
    //         marginLeft={sizes.s}
    //         marginBottom={sizes.l}>
    //         <Text bold white h5>
    //           Registration
    //         </Text>
    //       </Block>

    //       <Block marginTop={sizes.xs} marginLeft={sizes.md}>
    //         <Block>
    //           <Select
    //             color={'white'}
    //             variant={'underlined'}
    //             defaultValue="eng"
    //             selectedValue={language}
    //             maxWidth={sizes.m}
    //             accessibilityLabel="Choose Language"
    //             placeholder="Choose Language"
    //             _selectedItem={{
    //               bg: colors.primary,
    //               endIcon: <CheckIcon size="2" />,
    //             }}
    //             onValueChange={(itemValue) => setLanguage(itemValue)}>
    //             <Select.Item label="English" value="eng" />
    //             <Select.Item label="Arabic" value="arab" />
    //           </Select>
    //         </Block>
    //       </Block>
    //     </Block>
    //   </Block>

    //   <ScrollView
    //     style={{borderWidth: 2, borderColor: 'red'}}
    //     contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
    //     <Block keyboard behavior={!isAndroid ? 'padding' : 'height'}>
    //       <Block
    //         marginHorizontal={'8%'}
    //         radius={sizes.sm}
    //         shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
    //       >
    //         <Block
    //           blur
    //           intensity={35}
    //           radius={sizes.sm}
    //           overflow="hidden"
    //           justify="space-evenly"
    //           tint={colors.blurTint}
    //           paddingVertical={sizes.sm}>
    //           <Text h4 bold center white>
    //             {t('register.title')}
    //           </Text>

    //           <Block
    //             row
    //             flex={0}
    //             align="center"
    //             justify="center"
    //             marginBottom={sizes.sm}
    //             paddingHorizontal={sizes.xxl}></Block>

    //           <Block paddingHorizontal={sizes.sm}>
    //             <Text bold white marginBottom={sizes.xs} marginLeft={sizes.s}>
    //               {t('common.email')}
    //             </Text>

    //             <Input
    //               borderRadius="10"
    //               focusOutlineColor={'white'}
    //               style={{color: 'white'}}
    //               size="m"
    //               placeholderTextColor={'white'}
    //               cursorColor={'white'}
    //               autoCapitalize="none"
    //               placeholder={t('common.emailPlaceholder')}
    //               onChangeText={(value) => handleChange({email: value})}
    //             />

    //             <Text bold white marginBottom={sizes.s} marginTop={sizes.sm}>
    //               {t('common.mobilenumber')}
    //             </Text>
    //             <PhoneInput
    //               defaultCode={'SA'}
    //               codeTextStyle={{color: colors.white}}
    //               countryPickerButtonStyle={{
    //                 backgroundColor: 'white',
    //                 borderBottomLeftRadius: 10,
    //                 borderTopLeftRadius: 10,
    //               }}
    //               onChangeCountry={(text) => {
    //                 console.log(text);
    //               }}
    //               containerStyle={{
    //                 backgroundColor: 'transparent',
    //                 borderWidth: 1,
    //                 borderColor: colors.white,
    //                 borderRadius: 10,
    //                 width: '100%',
    //               }}
    //               textInputStyle={{
    //                 color: colors.white,
    //               }}
    //               textContainerStyle={{
    //                 backgroundColor: 'transparent',
    //               }}
    //               layout="first"
    //               onChangeText={(text) => {
    //                 setValue(text);
    //               }}
    //               onChangeFormattedText={(text) => {
    //                 setFormattedValue(text);
    //               }}
    //               textInputProps={{placeholderTextColor: '#ffffff'}}
    //               withDarkTheme
    //               autoFocus
    //             />

    //             <Text
    //               bold
    //               white
    //               marginBottom={sizes.s}
    //               marginTop={sizes.sm}
    //               marginLeft={sizes.s}>
    //               {t('common.password')}
    //             </Text>
    //             <Input
    //               style={{color: 'white'}}
    //               borderRadius="10"
    //               focusOutlineColor={'white'}
    //               size="m"
    //               placeholderTextColor={'white'}
    //               cursorColor={'white'}
    //               secureTextEntry
    //               autoCapitalize="none"
    //               marginBottom={sizes.s}
    //               placeholder={t('common.passwordPlaceholder')}
    //               onChangeText={(value) => handleChange({password: value})}
    //             />
    //           </Block>
    //           <Button
    //             white
    //             radius={50}
    //             shadow={!isAndroid}
    //             marginVertical={sizes.s}
    //             marginHorizontal={sizes.sm}
    //             onPress={() => navigation.navigate('Otp')}>
    //             <Text bold primary transform="uppercase">
    //               {t('common.submit')}
    //             </Text>
    //           </Button>
    //         </Block>
    //       </Block>
    //     </Block>
    //   </ScrollView>
    // </ImageBackground>
  );
}; */
}
