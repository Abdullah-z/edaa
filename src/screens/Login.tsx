import {
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {FormControl, Input, HStack, Center, Switch} from 'native-base';
import Background_Image from '../assets/images/Background_Register.jpg';

const isAndroid = Platform.OS === 'android';

export default function Login() {
  const navigation = useNavigation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Block primary paddingTop={sizes.xl}>
      <View>
        <HStack
          space={20}
          justifyContent="center"
          marginX={sizes.s}
          paddingBottom={sizes.xs}>
          <Block>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text bold white p>
                Back
              </Text>
            </TouchableOpacity>
          </Block>

          <Block align="flex-end">
            <Text bold white p>
              English
            </Text>
          </Block>
        </HStack>
      </View>

      <Block>
        <ImageBackground
          source={Background_Image}
          resizeMode="cover"
          style={{
            minHeight:
              Dimensions.get('window').height + StatusBar.currentHeight,
          }}>
          <ScrollView>
            <KeyboardAvoidingView
              behavior="position"
              keyboard
              kyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
              <Block marginVertical={sizes.md} marginHorizontal={sizes.md}>
                <Block
                  blur
                  intensity={15}
                  overflow="hidden"
                  tint={colors.blurTint}
                  style={{
                    borderRadius: 20,
                    maxHeight: 400,
                  }}
                  paddingHorizontal={sizes.sm}>
                  <Text white h4 center paddingTop={sizes.sm}>
                    Login
                  </Text>

                  <Text white semibold marginBottom={sizes.s}>
                    Email
                  </Text>
                  <Input />
                  <Text
                    white
                    semibold
                    marginTop={sizes.sm}
                    marginBottom={sizes.s}>
                    Password
                  </Text>
                  <Input />

                  <View style={{marginTop: sizes.sm, alignSelf: 'flex-start'}}>
                    <Switch size="md" alignSelf={'flex-end'} />
                  </View>
                  <Text white semibold>
                    Remember me
                  </Text>

                  <Button
                    onPress={() => navigation.navigate('Home')}
                    radius={100}
                    color={colors.white}
                    width={'100%'}
                    marginVertical={sizes.sm}>
                    <Text p semibold primary>
                      Login
                    </Text>
                  </Button>
                  {/* <Text white center>
                    Forget Password?
                  </Text> */}
                </Block>
              </Block>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </Block>
    </Block>
  );
}
