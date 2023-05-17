import {
  View,
  Image,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {SliderBox} from 'react-native-image-slider-box';
import {useNavigation} from '@react-navigation/core';

import Background_Image from '../assets/images/Background_Register.jpg';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    // <ScrollView>
    //   <LinearGradient
    //     colors={['#fac6ef', '#076597', '#021021']}
    //     style={{minHeight: Dimensions.get('screen').height}}>
    //     <Block marginHorizontal={sizes.sm} paddingTop={sizes.md}>
    //       <Text marginTop={sizes.sm} p white semibold align="right">
    //         English
    //       </Text>
    //       <Block align="center" marginTop={sizes.l}>
    //         <Image
    //           style={{width: 200, height: 100}}
    //           source={require('../../assets/logo-black.png')}
    //         />
    //         <Button
    //           radius={100}
    //           color={colors.white}
    //           width={'100%'}
    //           marginTop={sizes.sm}>
    //           <Text p semibold primary>
    //             Secure Login
    //           </Text>
    //         </Button>
    //         <Button
    //           radius={100}
    //           width={'100%'}
    //           marginTop={sizes.sm}
    //           style={{borderWidth: 1, borderColor: colors.white}}>
    //           <Text p semibold white>
    //             Register
    //           </Text>
    //         </Button>
    //       </Block>
    //       <Block>
    //         <Text p semibold white align="left">
    //           Forget Password
    //         </Text>
    //       </Block>
    //     </Block>
    //   </LinearGradient>
    // </ScrollView>

    <ImageBackground
      source={Background_Image}
      resizeMode="cover"
      style={{
        minHeight: Dimensions.get('window').height + StatusBar.currentHeight,
      }}>
      <ScrollView>
        <Block paddingTop={sizes.md} marginHorizontal={sizes.sm}>
          <Block marginTop={sizes.sm}>
            <Text p semibold white align="right">
              English
            </Text>
          </Block>
          <Block align="center" marginTop={sizes.l}>
            <Image
              style={{width: 200, height: 100}}
              source={require('../../assets/logo-black.png')}
            />
          </Block>
          <Block>
            <Button
              onPress={() => navigation.navigate('Login')}
              radius={100}
              color={colors.white}
              width={'100%'}
              marginTop={sizes.sm}>
              <Text p semibold primary>
                Secure Login
              </Text>
            </Button>
            <Button
              radius={100}
              width={'100%'}
              marginTop={sizes.sm}
              onPress={() => navigation.navigate('Register')}
              style={{borderWidth: 1, borderColor: colors.white}}>
              <Text p semibold white>
                Register
              </Text>
            </Button>
            <Text marginTop={sizes.sm} p semibold white align="left">
              Forget Password
            </Text>
          </Block>
          <Block align="center" marginTop={sizes.sm}>
            <SliderBox
              images={[
                'https://source.unsplash.com/1024x768/?stockmarket',
                'https://source.unsplash.com/1024x768/?debitcard',
                'https://source.unsplash.com/1024x768/?finance',
                'https://source.unsplash.com/1024x768/?banking',
              ]}
              sliderBoxHeight={200}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
              }
            />
          </Block>
          <Block>
            <Text white>
              Edaa Saudi Arabia. P.O. Box 0000, Riyadh 11482, Kingdom of Saudi
              Arabia. Regulated by the Saudi Arabia Capital Market Authority
              (License number: 08094-37){'\n'}
              {'\n'}Edaa Copyright 2023 all rights reserved. By using this app,
              you agree to the Electronic Services and Privacy Terms.
            </Text>
          </Block>
        </Block>
      </ScrollView>
    </ImageBackground>
  );
}
