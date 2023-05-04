import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';

import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import {useTheme} from '../hooks';
import {useNavigation} from '@react-navigation/core';
import {Avatar, Divider, Icon, Image} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {Block, Text} from '../components';
import PortfolioCard from '../components/PortfolioCard';
import {VictoryChart, VictoryLine, VictoryGroup} from 'victory-native';
export default function FundsDropdown() {
  const [isCollapsed, setisCollapsed] = useState(true);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          isCollapsed ? setisCollapsed(false) : setisCollapsed(true);
        }}>
        <Block
          align="center"
          marginHorizontal={sizes.xs}
          marginTop={sizes.sm}
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: isCollapsed ? 10 : 0,
            borderBottomRightRadius: isCollapsed ? 10 : 0,
          }}
          row>
          <Avatar
            style={{borderWidth: 3, borderColor: colors.primary}}
            bg="green.500"
            source={{
              uri: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01104813/1268-768x591.png',
            }}>
            AJ
          </Avatar>
          <Text h5 marginLeft={sizes.sm}>
            FranchiseMe
          </Text>
          <Block row justify="flex-end" align="center">
            <Text p primary>
              No. of Funds: 3
            </Text>
            <Icon
              marginLeft={sizes.xs}
              as={Ionicons}
              name={
                isCollapsed
                  ? 'chevron-down-circle-outline'
                  : 'chevron-up-circle-outline'
              }
              size="8"
              color={colors.gray}
            />
          </Block>
        </Block>
      </TouchableWithoutFeedback>
      <Collapsible collapsed={isCollapsed}>
        <Block marginVertical={sizes.sm}>
          <Block card marginVertical={sizes.xs}>
            <Block row>
              <View style={{width: '80%'}}>
                <Text bold>BLOM Solidere Compound RE Fund</Text>
                <Block row>
                  <Text semibold primary>
                    150.2
                  </Text>
                  <Text semibold success marginLeft={sizes.xs}>
                    +0.23%
                  </Text>
                </Block>
              </View>

              <Block align="flex-end">
                <Block row>
                  <VictoryGroup height={55} width={55}>
                    <VictoryLine
                      interpolation={'natural'}
                      style={{
                        data: {stroke: colors.primary},
                      }}
                      data={[
                        {x: 1, y: 1},
                        {x: 2, y: 3},
                        {x: 3, y: 2},
                        {x: 4, y: 4},
                        {x: 5, y: 6},
                        {x: 6, y: 8},
                        {x: 7, y: 7},
                        {x: 8, y: 9},
                        {x: 9, y: 10},
                        {x: 10, y: 5},
                      ]}
                    />
                  </VictoryGroup>
                </Block>
              </Block>
            </Block>
            <Block row marginTop={sizes.sm}>
              <View style={{width: '10%'}}>
                <Icon
                  as={Ionicons}
                  name="heart-outline"
                  size="6"
                  color={colors.black}
                />
              </View>

              <Block>
                <Text h5 gray>
                  Details
                </Text>
              </Block>
              <Block>
                <Text
                  h5
                  success
                  onPress={() =>
                    navigation.navigate('Subscription Redemption', {type: 1})
                  }>
                  Subscribe
                </Text>
              </Block>
              <Block>
                <Text
                  h5
                  danger
                  align="right"
                  onPress={() =>
                    navigation.navigate('Subscription Redemption', {type: 2})
                  }>
                  Redeem
                </Text>
              </Block>
            </Block>
          </Block>
          <Block card marginVertical={sizes.xs}>
            <Block row>
              <View style={{width: '70%'}}>
                <Text bold>BLOM Solidere Compound RE Fund</Text>
                <Block row>
                  <Text semibold primary>
                    150.2
                  </Text>
                  <Text semibold success marginLeft={sizes.xs}>
                    +0.23%
                  </Text>
                </Block>
              </View>

              <Block align="flex-end">
                <Block row>
                  <VictoryGroup height={50} width={50}>
                    <VictoryLine
                      interpolation={'natural'}
                      style={{
                        data: {stroke: colors.primary},
                      }}
                      data={[
                        {x: 1, y: 2},
                        {x: 2, y: 6},
                        {x: 3, y: 4},
                        {x: 4, y: 5},
                        {x: 5, y: 3},
                        {x: 6, y: 1},
                        {x: 7, y: 4},
                        {x: 8, y: 7},
                        {x: 9, y: 5},
                        {x: 10, y: 6},
                      ]}
                    />
                  </VictoryGroup>
                </Block>
              </Block>
            </Block>
            <Block row marginTop={sizes.sm}>
              <View style={{width: '10%'}}>
                <Icon
                  as={Ionicons}
                  name="heart-outline"
                  size="6"
                  color={colors.black}
                />
              </View>

              <Block>
                <Text h5 gray>
                  Details
                </Text>
              </Block>
              <Block>
                <Text h5 success>
                  Subscribe
                </Text>
              </Block>
              <Block>
                <Text h5 danger align="right">
                  Redeem
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </Collapsible>
    </>
  );
}
