import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {Home} from '../screens';
import {Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '../hooks';
import MyWallet from '../screens/MyWallet';

const BottomTab = createBottomTabNavigator();

export default function NavBar() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  function Orders() {
    return (
      <View style={styles.container}>
        <Text>Orders</Text>
      </View>
    );
  }

  function MyWatch() {
    return (
      <View style={styles.container}>
        <Text>My Watch</Text>
      </View>
    );
  }

  function Favourites() {
    return (
      <View style={styles.container}>
        <Text>Favourites</Text>
      </View>
    );
  }

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              as={Ionicons}
              name={'newspaper-outline'}
              size="5"
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="My Watch"
        component={MyWatch}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              as={Ionicons}
              name={'desktop-outline'}
              size="5"
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              as={Ionicons}
              name={'home-outline'}
              size="5"
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="My Wallet"
        component={MyWallet}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              as={Ionicons}
              name={'wallet-outline'}
              size="5"
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              as={Ionicons}
              name={'heart-outline'}
              size="5"
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
