/* eslint-disable prettier/prettier */
import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../hooks';
import {useNavigation} from '@react-navigation/core';
import {Block, Button, Text} from '../components';
import {HStack, VStack, Avatar, Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {VictoryPie} from 'victory-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import {Table_data} from './Data';

export default function Dashboard() {
  const navigation = useNavigation();
  const [request, setRequest] = useState(1);
  const [date, setDate] = useState('');
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [end_State, setEnd_State] = useState(1);
  const [current_index, setCurrent_index] = useState(2);
  const [like, setlike] = useState(false);

  const getCurrentTime = () => {
    let today = new Date();
    return today;
  };

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
  const _renderItem = ({item}) => {
    return (
      <Block radius={20} marginTop={sizes.xs} white padding={sizes.s}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <HStack>
          <VStack>
            <Text primary bold p marginTop={sizes.sm}>
              {item.text1}
            </Text>
            <Text success bold>
              {item.text2}
            </Text>
          </VStack>
          <Block align="flex-end" justify="center">
            <TouchableOpacity
              onPress={(c) => {
                like === true ? setlike(false) : setlike(true);
              }}>
              <Icon
                as={
                  <Ionicons name={like === true ? 'heart' : 'heart-outline'} />
                }
                size={7}
                color="black"
              />
            </TouchableOpacity>
          </Block>
        </HStack>
      </Block>
    );
  };

  return (
    <>
      <View>
        <ScrollView
          scrollEnabled={false}
          onResponderMove={() => {
            console.log('outer responding');
          }}>
          <Block primary>
            <Block row paddingTop={sizes.md}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Block
                  marginTop={sizes.sm}
                  marginLeft={sizes.s}
                  marginRight={sizes.md}
                  row>
                  <Icon
                    as={<Ionicons name={'chevron-back-outline'} />}
                    size={7}
                    mr="2"
                    color="white"
                  />
                  <Text semibold white p>
                    Back
                  </Text>
                </Block>
              </TouchableOpacity>

              <Block
                align="center"
                marginTop={sizes.sm}
                marginLeft={sizes.xs}
                marginBottom={sizes.l}>
                <Text bold white h5>
                  Holdings
                </Text>
              </Block>

              <Block row marginTop={sizes.xs} marginLeft={sizes.xs}>
                <Icon
                  marginTop={2}
                  as={<Ionicons name={'search-outline'} />}
                  size={8}
                  mr="2"
                  color="white"
                />
                <Block>
                  <Avatar mr="1">
                    <Icon
                      as={<Ionicons name="person-circle-outline" />}
                      color="white"
                      size={16}
                    />
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
                  height={300}
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
              {/* <VStack style={{justifyContent: 'center'}}>
                <Icon
                  as={<Ionicons name={'ellipse-outline'} />}
                  size={7}
                  mr="2"
                  color="silver"
                />
                <Text>FranchiseMe</Text>
                <Icon
                  as={<Ionicons name={'ellipse-outline'} />}
                  size={7}
                  color={colors.primary}
                />
                <Text>S-Watch</Text>
                <Icon
                  as={<Ionicons name={'ellipse-outline'} />}
                  size={7}
                  mr="2"
                  color="silver"
                />
                <Text>Cyber Play</Text>
              </VStack> */}
            </HStack>
          </Block>
          <Block row>
            <Block style={{borderRightWidth: 1, borderRightColor: 'silver'}}>
              <Text
                bold
                primary
                paddingLeft={sizes.m}
                marginTop={sizes.sm}
                paddingBottom={sizes.sm}>
                Funds
              </Text>
            </Block>
            <Block style={{borderRightWidth: 1, borderRightColor: 'silver'}}>
              <Text bold primary align="center">
                Available Units
              </Text>
            </Block>
            <Block style={{borderRightWidth: 1, borderRightColor: 'silver'}}>
              <Text bold primary paddingLeft={sizes.sm} align="center">
                Market Value
              </Text>
            </Block>
            <Block style={{borderRightWidth: 1, borderRightColor: 'silver'}}>
              <Text bold primary paddingLeft={sizes.xs} align="center">
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
