import {Image, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {ScrollView} from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import {Icon} from 'native-base';
import Collapsible from 'react-native-collapsible';

export default function AccounStatement2() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [time, setTime] = useState('D');
  const [isCollapsed, setisCollapsed] = useState(true);
  return (
    <ScrollView>
      <Block marginHorizontal={sizes.sm}>
        <Block row>
          <Block width={'50%'} marginTop={sizes.sm}>
            <Text h4>Account Statement</Text>
          </Block>
          <Block marginTop={sizes.sm} align="flex-end">
            <Button primary radius={10} width={'50%'}>
              <Text white>Export</Text>
            </Button>
          </Block>
        </Block>
        <Block row>
          <Block card marginVertical={sizes.sm}>
            <Block row>
              <Text semibold h5 primary>
                100,000.4595
              </Text>
              <Text gray marginLeft={sizes.xs}>
                SAR
              </Text>
            </Block>

            <Text semibold gray>
              Opening Balance
            </Text>
          </Block>
          <Block></Block>
        </Block>

        <View style={{flexDirection: 'row'}}>
          <View style={{width: '80%'}}>
            <Block primary row radius={10} overflow="hidden">
              <Block
                padding={8}
                justify="center"
                style={{
                  backgroundColor: time === 'D' ? colors.white : colors.primary,
                }}
                radius={time === 'D' ? 10 : 0}>
                <Pressable onPress={() => setTime('D')}>
                  <Text
                    center
                    w
                    color={time === 'D' ? colors.primary : colors.white}
                    hite
                    semibold
                    h5>
                    D
                  </Text>
                </Pressable>
              </Block>

              <Block
                padding={8}
                justify="center"
                style={{
                  backgroundColor: time === 'W' ? colors.white : colors.primary,
                }}
                radius={time === 'W' ? 10 : 0}>
                <Pressable onPress={() => setTime('W')}>
                  <Text
                    center
                    color={time === 'W' ? colors.primary : colors.white}
                    semibold
                    h5>
                    W
                  </Text>
                </Pressable>
              </Block>
              <Block
                padding={8}
                justify="center"
                style={{
                  backgroundColor: time === 'M' ? colors.white : colors.primary,
                }}
                radius={time === 'M' ? 10 : 0}>
                <Pressable onPress={() => setTime('M')}>
                  <Text
                    center
                    color={time === 'M' ? colors.primary : colors.white}
                    semibold
                    h5>
                    M
                  </Text>
                </Pressable>
              </Block>
              <Block
                padding={8}
                justify="center"
                style={{
                  backgroundColor: time === 'Y' ? colors.white : colors.primary,
                }}
                radius={time === 'Y' ? 10 : 0}>
                <Pressable onPress={() => setTime('Y')}>
                  <Text
                    center
                    color={time === 'Y' ? colors.primary : colors.white}
                    semibold
                    h5>
                    Y
                  </Text>
                </Pressable>
              </Block>
            </Block>
          </View>
          <View style={{width: '20%'}}>
            <Block
              radius={10}
              primary
              marginLeft={sizes.sm}
              align="center"
              justify="center">
              <Icon
                as={Ionicons}
                name="options-outline"
                size="8"
                color={colors.white}
              />
            </Block>
          </View>
        </View>
        <Block marginTop={sizes.sm}>
          {/* <Pressable
            onPress={() =>
              isCollapsed ? setisCollapsed(false) : setisCollapsed(true)
            }>
            <Block card marginVertical={sizes.xs}>
              <Block row>
                <Block justify="center">
                  <Image
                    source={{
                      uri: 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png',
                    }}
                    style={{width: 30, height: 30}}
                  />
                </Block>

                <Block>
                  <Block row justify="center" align="center">
                    <Text h5>5,360.0581</Text>
                    <Text gray marginLeft={sizes.xs}>
                      SAR
                    </Text>
                  </Block>
                </Block>
                <Block align="flex-end" justify="center">
                  <Text danger bold>
                    Buy
                  </Text>
                  <Text gray center>
                    15 May 2023
                  </Text>
                </Block>
              </Block>
              <Collapsible collapsed={isCollapsed}>
                <Block>
                  <Block row>
                    <Text gray>Debit: </Text>
                    <Text semibold align="right">
                      56,518.0156
                    </Text>
                  </Block>
                  <Block row>
                    <Text gray>Credit: </Text>
                    <Text semibold align="right">
                      56,518.0156
                    </Text>
                  </Block>
                </Block>
              </Collapsible>
            </Block>
          </Pressable> */}

          <Pressable
            onPress={() =>
              isCollapsed ? setisCollapsed(false) : setisCollapsed(true)
            }>
            <Block card marginVertical={sizes.xs}>
              <Block row>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={{width: '10%'}}>
                    <Block justify="center">
                      <Image
                        source={{
                          uri: 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png',
                        }}
                        style={{width: 30, height: 30}}
                      />
                    </Block>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      alignItems: 'flex-start',
                      marginLeft: sizes.xs,
                    }}>
                    <Block>
                      <Block row align="center">
                        <Text h5>5,360.0581</Text>
                        <Text gray marginLeft={sizes.xs}>
                          SAR
                        </Text>
                      </Block>
                    </Block>
                  </View>

                  <View style={{width: '40%'}}>
                    <Block
                      align="flex-end"
                      justify="center"
                      marginRight={sizes.xs}>
                      <Text danger bold>
                        Buy
                      </Text>
                      <Text gray center>
                        15 May 2023
                      </Text>
                    </Block>
                  </View>
                </View>
              </Block>

              <Collapsible collapsed={isCollapsed}>
                <Block row marginTop={sizes.xs}>
                  <Block>
                    <Block row>
                      <Text gray>Fund: </Text>
                      <Text semibold align="right">
                        001
                      </Text>
                    </Block>
                    <Block row>
                      <Text gray>Name: </Text>
                      <Text semibold align="right">
                        Fund A
                      </Text>
                    </Block>
                  </Block>

                  <Block align="flex-end">
                    <Block row>
                      <Text gray>Debit: </Text>
                      <Text semibold align="right">
                        56,518.0156
                      </Text>
                    </Block>
                    <Block row>
                      <Text gray>Credit: </Text>
                      <Text semibold align="right">
                        56,518.0156
                      </Text>
                    </Block>
                  </Block>
                </Block>
              </Collapsible>
              <Block align="center">
                <Icon
                  as={Ionicons}
                  name={
                    isCollapsed ? 'chevron-down-outline' : 'chevron-up-outline'
                  }
                  size="4"
                  color={colors.black}
                />
              </Block>
            </Block>
          </Pressable>
        </Block>
      </Block>
    </ScrollView>
  );
}
