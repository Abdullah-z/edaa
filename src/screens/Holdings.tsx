/* eslint-disable prettier/prettier */
import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks';
import {useNavigation} from '@react-navigation/core';
import {Block, Text} from '../components';
import {HStack, Avatar, Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {VictoryPie} from 'victory-native';
import {Table, Rows} from 'react-native-table-component';
import {Table_data} from './Data';

export default function Holdings() {
  const navigation = useNavigation();
  const {colors, sizes} = useTheme();

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
                <Text bold white h5 center>
                  Holdings
                </Text>
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
          <Block white margin={sizes.sm} radius={20}>
            <Text bold primary p paddingTop={sizes.sm} paddingLeft={sizes.sm}>
              Holdings Allocation
            </Text>
            <HStack>
              <Block
                style={{
                  alignItems: 'center',
                }}>
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
              </Block>
            </HStack>
          </Block>
          <Block row>
            <Block style={{borderRightWidth: 1, borderRightColor: 'silver'}}>
              <Text
                bold
                primary
                align="center"
                paddingTop={sizes.m}
                paddingBottom={sizes.sm}>
                Funds
              </Text>
            </Block>
            <Block style={{borderRightWidth: 1, borderRightColor: 'silver'}}>
              <Text
                bold
                primary
                align="center"
                paddingTop={sizes.s}
                paddingBottom={sizes.sm}>
                Available Units
              </Text>
            </Block>
            <Block style={{borderRightWidth: 1, borderRightColor: 'silver'}}>
              <Text
                bold
                primary
                align="center"
                paddingTop={sizes.s}
                paddingBottom={sizes.sm}>
                Market Value
              </Text>
            </Block>
            <Block style={{borderRightWidth: 1, borderRightColor: 'silver'}}>
              <Text
                bold
                primary
                align="center"
                paddingTop={sizes.s}
                paddingBottom={sizes.sm}>
                Unrealized G/L %
              </Text>
            </Block>
          </Block>
        </ScrollView>
      </View>
      <ScrollView
        onResponderMove={() => {
          console.log('Inner responding');
        }}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Rows data={tableData} textStyle={{textAlign: 'center'}} />
        </Table>
      </ScrollView>
    </>
  );
}
