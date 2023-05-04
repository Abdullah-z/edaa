import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';

import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import {useTheme} from '../hooks';

import {Divider, Icon, Image} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {Block, Text} from '../components';

export default function PortfolioCard() {
  const [isCollapsed, setisCollapsed] = useState(true);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          isCollapsed ? setisCollapsed(false) : setisCollapsed(true);
        }}>
        <Block
          white
          marginHorizontal={sizes.xs}
          marginTop={sizes.sm}
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: isCollapsed ? 10 : 0,
            borderBottomRightRadius: isCollapsed ? 10 : 0,
          }}
          justify="center"
          row>
          {isCollapsed ? (
            <>
              <Block align="center">
                <Text paddingTop={sizes.sm} primary h4 semibold>
                  My Portfolio
                </Text>
                <Icon
                  as={Ionicons}
                  name="chevron-down-outline"
                  size="8"
                  color={colors.gray}
                />
              </Block>
            </>
          ) : (
            <Block align="center">
              <Text paddingTop={sizes.sm} primary h4 semibold>
                100,000
              </Text>
              <Text gray semibold>
                Available Cash
              </Text>
            </Block>
          )}
        </Block>
      </TouchableWithoutFeedback>
      <Collapsible collapsed={isCollapsed}>
        <Block
          white
          marginHorizontal={sizes.xs}
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Block row>
            <Block marginHorizontal={sizes.sm} paddingVertical={sizes.sm}>
              <Text h5>1,900,000</Text>
              <Text gray semibold>
                Total Cash
              </Text>
            </Block>
            <Divider orientation="vertical" marginBottom={sizes.xs} />
            <Block
              align="flex-end"
              marginHorizontal={sizes.sm}
              paddingVertical={sizes.sm}>
              <Block row>
                <Text h5>185.3k</Text>
                <Text p primary marginLeft={sizes.xs}>
                  +3.16%
                </Text>
              </Block>

              <Text gray semibold>
                Holding
              </Text>
            </Block>
          </Block>
          <Divider />
          <Block row>
            <Block marginHorizontal={sizes.sm} paddingVertical={sizes.sm}>
              <Block row>
                <Text h5>65.3k</Text>
                <Text p primary marginLeft={sizes.xs}>
                  +0.36%
                </Text>
              </Block>
              <Text gray semibold>
                Unrealized G/L
              </Text>
            </Block>
            <Divider orientation="vertical" marginBottom={sizes.xs} />
            <Block
              align="flex-end"
              marginHorizontal={sizes.sm}
              paddingVertical={sizes.sm}>
              <Block row>
                <Text h5>2.9k</Text>
                <Text p danger marginLeft={sizes.xs}>
                  -2.36%
                </Text>
              </Block>

              <Text gray semibold>
                Realized G/L
              </Text>
            </Block>
          </Block>
          <Block align="center" paddingHorizontal={sizes.sm}>
            <Icon
              onPress={() => {
                isCollapsed ? setisCollapsed(false) : setisCollapsed(true);
              }}
              as={Ionicons}
              name="chevron-up-outline"
              size="8"
              color={colors.gray}
            />
          </Block>
        </Block>
      </Collapsible>
    </>
  );
}
