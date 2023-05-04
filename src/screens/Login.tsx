import {View, ScrollView, Dimensions, StatusBar} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {LinearGradient} from 'expo-linear-gradient';
import {FormControl, Input, Switch} from 'native-base';

export default function Login() {
  const navigation = useNavigation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <ScrollView scrollEnabled={false}>
      <Block primary paddingTop={sizes.md}>
        <Block row>
          <Block padding={sizes.sm}>
            <Text semibold white p>
              Back
            </Text>
          </Block>
          <Block align="center" padding={sizes.sm}>
            <Text semibold white p>
              Login
            </Text>
          </Block>
          <Block padding={sizes.sm}>
            <Text align="right" semibold white p>
              English
            </Text>
          </Block>
        </Block>

        <Block
          style={{
            justifyContent: 'center',
          }}>
          <LinearGradient
            colors={['#fac6ef', '#076597', '#021021']}
            style={{
              minHeight: Dimensions.get('window').height,
              paddingVertical: '50%',
            }}>
            <Block marginHorizontal={sizes.sm} marginTop={sizes.sm}>
              <Block
                style={{
                  backgroundColor: 'rgba(112, 154, 195, .5)',
                  borderRadius: 20,
                  marginBottom: sizes.sm,
                  maxHeight: 350,
                }}
                paddingHorizontal={sizes.sm}>
                <Text white h4 center paddingTop={sizes.sm}>
                  Login
                </Text>

                <Text white semibold>
                  Email
                </Text>
                <Input />
                <Text white semibold marginTop={sizes.sm}>
                  Password
                </Text>
                <Input />

                <Block row align="center">
                  <Switch size="md" />
                  <Text white semibold>
                    Remember me
                  </Text>
                </Block>
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
              </Block>
            </Block>
          </LinearGradient>
        </Block>
      </Block>
    </ScrollView>
  );
}
