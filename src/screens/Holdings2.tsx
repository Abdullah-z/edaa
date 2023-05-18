/* eslint-disable prettier/prettier */
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useData, useTheme} from '../hooks';
import {useNavigation} from '@react-navigation/core';
import {Block, Text} from '../components';
import {HStack, Avatar, Icon, Divider} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {VictoryPie} from 'victory-native';
import {Table, Rows} from 'react-native-table-component';
import {Table_data} from './Data';
import Animated, {
  BounceInLeft,
  BounceInRight,
  BounceOutLeft,
  BounceOutRight,
  FadeInUp,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  SlideOutUp,
} from 'react-native-reanimated';

export default function Holdings2() {
  const navigation = useNavigation();
  const {colors, sizes} = useTheme();
  const {animationSpeed} = useData();

  const Data = [
    {label: 'FranchiseMe', y: 1, x: '10%'},
    {label: 'S-Watch', y: 1, x: '20%'},
    {label: 'Cyber Play', y: 5, x: '40%'},
  ];

  const tableData = Table_data.map((item) => [
    item.id,
    item.symbol,
    item.high_24h,
    item.ath,
  ]);

  return (
    <>
      <View>
        <ScrollView
          scrollEnabled={false}
          onResponderMove={() => {
            console.log('outer responding');
          }}>
          <Animated.View entering={FadeInUp.duration(animationSpeed)}>
            <Block primary paddingTop={sizes.m}>
              <Block row align={'center'} paddingVertical={sizes.sm}>
                <Block>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Block row align="center">
                      <Icon
                        as={<Ionicons name={'chevron-back-outline'} />}
                        size={7}
                        color="white"
                      />
                      <Text semibold white p>
                        Back
                      </Text>
                    </Block>
                  </TouchableOpacity>
                </Block>

                <Block align="center" justify="center">
                  <Animated.View entering={SlideInUp.duration(animationSpeed)}>
                    <Text bold white h5 center>
                      Holdings
                    </Text>
                  </Animated.View>
                </Block>

                <Block row justify="flex-end" align="center">
                  <Block justify="center" align="flex-end">
                    <Icon
                      as={<Ionicons name={'search-outline'} />}
                      size={8}
                      color="white"
                    />
                  </Block>
                  <Block align="flex-end" marginRight={sizes.sm}>
                    <Avatar
                      size={'md'}
                      source={{
                        uri: 'https://bit.ly/broken-link',
                      }}>
                      RS
                    </Avatar>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Animated.View>

          <Block white margin={sizes.sm} radius={20}>
            <Block>
              <Text bold primary p paddingTop={sizes.sm} paddingLeft={sizes.sm}>
                Holdings Allocation
              </Text>
              <HStack>
                <Block
                  style={{
                    alignItems: 'center',
                  }}>
                  <Animated.View
                    entering={SlideInUp.duration(animationSpeed).delay(400)}>
                    <VictoryPie
                      events={[
                        {
                          target: 'data',
                          eventHandlers: {
                            onPress: () => {
                              return [
                                {
                                  target: 'data',
                                  mutation: ({style}) => {
                                    return style.fill === '#c43a31'
                                      ? null
                                      : {
                                          style: {
                                            fill: '#c43a31',
                                            fillOpacity: 1,
                                            stroke: '#fff',
                                            strokeWidth: 4,
                                          },
                                        };
                                  },
                                },
                                {
                                  target: 'labels',
                                  mutation: ({text, datum}) => {
                                    return text === datum.x
                                      ? null
                                      : {text: datum.x};
                                  },
                                },
                              ];
                            },
                          },
                        },
                      ]}
                      data={Data}
                      height={250}
                      colorScale={'cool'}
                      style={{
                        data: {
                          fillOpacity: 1,
                          stroke: '#fff',
                          strokeWidth: 4,
                        },
                        labels: {fill: colors.primary, fontWeight: 'bold'},
                      }}
                    />
                  </Animated.View>
                </Block>
              </HStack>
            </Block>
          </Block>
        </ScrollView>
      </View>
      {/* <Animated.View entering={BounceInRight.duration(500)}> */}
      <ScrollView>
        <Block marginHorizontal={sizes.sm}>
          <Animated.View entering={SlideInRight.duration(animationSpeed)}>
            <Block card marginVertical={sizes.xs}>
              <Block row>
                <View
                  style={{
                    width: '25%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{
                      uri: 'https://jenchapmancreative.com/wp-content/uploads/2020/12/phoenix-logo-design-canyon.jpg',
                    }}
                    style={{width: 30, height: 30}}
                  />
                  <Text bold marginLeft={sizes.xs}>
                    016
                  </Text>
                  <Divider marginX={2} thickness={2} orientation="vertical" />
                </View>
                <View style={{width: '75%', flexDirection: 'row'}}>
                  <Block>
                    <Block row justify="flex-start">
                      <Text gray>Available Units: </Text>
                      <Text>1362</Text>
                    </Block>
                    <Block row justify="flex-start">
                      <Text gray>Market Value: </Text>
                      <Text>49586</Text>
                    </Block>
                    <Block row justify="flex-start">
                      <Text gray>Unrealized G/L%: </Text>
                      <Text success>1.36%</Text>
                    </Block>
                  </Block>
                </View>
              </Block>
            </Block>
          </Animated.View>
          <Animated.View entering={SlideInRight.duration(animationSpeed)}>
            <Block card marginVertical={sizes.xs}>
              <Block row>
                <View
                  style={{
                    width: '25%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{
                      uri: 'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
                    }}
                    style={{width: 30, height: 30}}
                  />
                  <Text bold marginLeft={sizes.xs}>
                    018
                  </Text>
                  <Divider marginX={2} thickness={2} orientation="vertical" />
                </View>
                <View style={{width: '75%', flexDirection: 'row'}}>
                  <Block>
                    <Block row justify="flex-start">
                      <Text gray>Available Units: </Text>
                      <Text>1259</Text>
                    </Block>
                    <Block row justify="flex-start">
                      <Text gray>Market Value: </Text>
                      <Text>65762</Text>
                    </Block>
                    <Block row justify="flex-start">
                      <Text gray>Unrealized G/L%: </Text>
                      <Text danger>0.64%</Text>
                    </Block>
                  </Block>
                </View>
              </Block>
            </Block>
          </Animated.View>
        </Block>
      </ScrollView>
      {/* </Animated.View> */}
    </>
  );
}
