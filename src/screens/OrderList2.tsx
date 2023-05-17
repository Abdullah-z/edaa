/* eslint-disable prettier/prettier */
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../hooks';
import {useNavigation} from '@react-navigation/core';
import {Block, Button, Text} from '../components';
import {HStack, Avatar, Icon, Divider} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

export default function OrderList2() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [end_State, setEnd_State] = useState(1);
  const [request, setRequest] = useState(1);
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
                  OrderList
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

          <Block row marginTop={sizes.sm} marginHorizontal={sizes.sm}>
            <Block marginHorizontal={sizes.xs}>
              <Button
                style={{
                  borderWidth: 2,
                  borderColor: end_State === 1 ? colors.primary : 'silver',
                }}
                onPress={() => setEnd_State(1)}>
                <Text
                  bold
                  color={end_State === 1 ? colors.primary : colors.gray}>
                  Close End
                </Text>
              </Button>
            </Block>
            <Block marginHorizontal={sizes.xs}>
              <Button
                style={{
                  borderWidth: 2,
                  borderColor: end_State === 2 ? colors.primary : 'silver',
                }}
                onPress={() => setEnd_State(2)}>
                <Text
                  bold
                  color={end_State === 2 ? colors.primary : colors.gray}>
                  Open End
                </Text>
              </Button>
            </Block>
            <Block marginHorizontal={sizes.xs}>
              <Button
                primary
                radius={100}
                rounded
                style={{borderColor: colors.primary, borderWidth: 1}}>
                <Text white bold>
                  Export
                </Text>
              </Button>
            </Block>
          </Block>
          <Block row margin={sizes.sm}>
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: 'silver',
                width: '60%',
              }}>
              <Block>
                <Text primary bold h5>
                  SAR 140,000.4795
                </Text>
                <Text gray bold>
                  Opening Balance
                </Text>
              </Block>
            </View>
            <View style={{width: '40%'}}>
              <Block align="flex-end">
                <Block row>
                  <Text primary>From: </Text>
                  <Text gray>Apr 10,2023</Text>
                </Block>
                <Block row>
                  <Text primary>To: </Text>
                  <Text gray>May 10,2023</Text>
                </Block>
              </Block>
            </View>
          </Block>
          <Block primary row paddingHorizontal={sizes.s}>
            <Block marginVertical={sizes.xs}>
              <TouchableOpacity
                onPress={() => setRequest(1)}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: sizes.xl,
                  backgroundColor: request === 1 ? 'white' : colors.primary,
                  borderRadius: 20,
                }}>
                <Text bold color={request === 1 ? colors.gray : 'white'}>
                  Request In
                </Text>
              </TouchableOpacity>
            </Block>

            <Block marginVertical={sizes.xs}>
              <TouchableOpacity
                onPress={() => setRequest(2)}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: sizes.xl,
                  backgroundColor: request === 2 ? '#ffffff' : colors.primary,
                  borderRadius: 20,
                }}>
                <Text bold color={request === 2 ? colors.gray : 'white'}>
                  Request Out
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>

          {/* <View style={{height: '80%'}}></View> */}
        </ScrollView>
      </View>
      <ScrollView>
        <Block marginHorizontal={sizes.sm} marginTop={sizes.sm}>
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
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FxjVQeF27wP7Af--EQpUemvrY_RptOp7Xw&usqp=CAU',
                  }}
                  style={{width: 30, height: 30}}
                />
                <Text bold marginLeft={sizes.xs}>
                  012
                </Text>
                <Divider marginX={2} thickness={2} orientation="vertical" />
              </View>
              <View style={{width: '75%', flexDirection: 'row'}}>
                <Block>
                  <Block row justify="flex-start">
                    <Text gray>Order No: </Text>
                    <Text>012</Text>
                  </Block>
                  <Block row justify="flex-start">
                    <Text gray>Quantity: </Text>
                    <Text>4956</Text>
                  </Block>
                </Block>
                <Block>
                  <Block row justify="flex-end">
                    <Text success>Buy</Text>
                  </Block>
                  <Block row justify="flex-end">
                    <Text gray>May 23, 2023</Text>
                  </Block>
                </Block>
              </View>
            </Block>
          </Block>
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
                    <Text gray>Order No: </Text>
                    <Text>016</Text>
                  </Block>
                  <Block row justify="flex-start">
                    <Text gray>Quantity: </Text>
                    <Text>4956</Text>
                  </Block>
                </Block>
                <Block>
                  <Block row justify="flex-end">
                    <Text danger>Sell</Text>
                  </Block>
                  <Block row justify="flex-end">
                    <Text gray>May 23, 2023</Text>
                  </Block>
                </Block>
              </View>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </>
  );
}
