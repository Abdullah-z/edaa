import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import NavBar from './NavBar';
import SubRed from '../screens/SubRed';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import AcountStatement from '../screens/AcountStatement';
import OrderList from '../screens/OrderList';
import Holdings from '../screens/Holdings';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator
      screenOptions={screenOptions.stack}
      initialRouteName="Welcome Screen">
      <Stack.Screen
        name="Home"
        component={NavBar}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Holdings"
        component={Holdings}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Subscription Redemption"
        component={SubRed}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Welcome Screen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account Statement"
        component={AcountStatement}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order List"
        component={OrderList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
