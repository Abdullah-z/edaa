import {View, ScrollView} from 'react-native';
import React from 'react';
import {Block, Text} from '../components';
import {useTheme} from '../hooks';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import {
  Avatar,
  Button,
  CheckIcon,
  FormControl,
  Input,
  Select,
} from 'native-base';

export default function SubRed({route}) {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [service, setService] = React.useState('');
  const {type} = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Block margin={sizes.sm}>
        <Block white overflow="hidden" style={{borderRadius: 20}}>
          <Block row paddingHorizontal={sizes.sm} paddingVertical={sizes.xs}>
            <Block row align="center">
              <Avatar
                bg="green.500"
                source={{
                  uri: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01104813/1268-768x591.png',
                }}
              />
              <Text semibold p primary marginLeft={sizes.xs}>
                FranchiseMe
              </Text>
            </Block>
            <Block align="flex-end" justify="center">
              <Text success p semibold>
                1,000,0000
              </Text>
              <Text gray semibold>
                Buying Power
              </Text>
            </Block>
          </Block>
          <Block>
            <LinearGradient
              colors={type === 1 ? ['#d2ffb1', '#fff'] : ['#ffb5b5', '#fff']}>
              <Block marginHorizontal={sizes.sm}>
                <FormControl.Label>Company Selection</FormControl.Label>
                <Input backgroundColor={'white'} />
                <Block row>
                  <Block marginRight={sizes.xs}>
                    <FormControl.Label>Holding Amount</FormControl.Label>
                    <Input backgroundColor={'white'} />
                  </Block>
                  <Block marginLeft={sizes.xs}>
                    <FormControl.Label>Holding Units</FormControl.Label>
                    <Input backgroundColor={'white'} />
                  </Block>
                </Block>
                <Block row>
                  <Block marginRight={sizes.xs}>
                    <FormControl.Label>Previous Nav</FormControl.Label>
                    <Input backgroundColor={'white'} />
                  </Block>
                  <Block marginLeft={sizes.xs}>
                    <FormControl.Label>Nav Price</FormControl.Label>
                    <Input backgroundColor={'white'} />
                  </Block>
                </Block>
                <FormControl.Label>Subscription Amount</FormControl.Label>

                <Input backgroundColor={'white'} />
                <Block row align="center">
                  <FormControl.Label>Category</FormControl.Label>
                  <Block align="flex-end">
                    <Select
                      backgroundColor={'white'}
                      selectedValue={service}
                      minWidth="200"
                      accessibilityLabel="Choose Service"
                      placeholder="Choose Service"
                      _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={1}
                      onValueChange={(itemValue) => setService(itemValue)}>
                      <Select.Item label="UX Research" value="ux" />
                      <Select.Item label="Web Development" value="web" />
                      <Select.Item
                        label="Cross Platform Development"
                        value="cross"
                      />
                      <Select.Item label="UI Designing" value="ui" />
                      <Select.Item
                        label="Backend Development"
                        value="backend"
                      />
                    </Select>
                  </Block>
                </Block>
              </Block>
              <Block align="center" marginVertical={sizes.sm}>
                <Button rounded={'full'} width={'30%'}>
                  CONFIRM
                </Button>
              </Block>
            </LinearGradient>
          </Block>
        </Block>
        <Block
          white
          style={{borderRadius: 20}}
          marginVertical={sizes.sm}
          padding={sizes.sm}>
          <Block row>
            <Text primary bold>
              Overview
            </Text>
            <Text gray> (Past 24 hrs)</Text>
          </Block>
          <Block marginTop={sizes.xs}>
            <Block row style={{borderColor: colors.gray, borderBottomWidth: 1}}>
              <View width={'60%'}>
                <Text>No. of Trades</Text>
              </View>
              <Block align="flex-end">
                <Text>458</Text>
              </Block>
            </Block>
            <Block row style={{borderColor: colors.gray, borderBottomWidth: 1}}>
              <View width={'60%'}>
                <Text>Avg. Ownership Transfer Size</Text>
              </View>
              <Block align="flex-end">
                <Text>758</Text>
              </Block>
            </Block>
            <Block row style={{borderColor: colors.gray, borderBottomWidth: 1}}>
              <View width={'60%'}>
                <Text>Volume Ownership Transfer</Text>
              </View>
              <Block align="flex-end">
                <Text>206,759 SAR</Text>
              </Block>
            </Block>
            <Block row style={{borderColor: colors.gray, borderBottomWidth: 1}}>
              <View width={'60%'}>
                <Text>High</Text>
              </View>
              <Block align="flex-end">
                <Text>15 SAR</Text>
              </Block>
            </Block>
            <Block row>
              <View width={'60%'}>
                <Text>Low</Text>
              </View>
              <Block align="flex-end">
                <Text>10 SAR</Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}
