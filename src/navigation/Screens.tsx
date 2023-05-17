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
import Otp from '../screens/Otp';
import AccounStatement2 from '../screens/AccounStatement2';
import OrderList2 from '../screens/OrderList2';
import Holdings2 from '../screens/Holdings2';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator
      screenOptions={screenOptions.stack}
      initialRouteName="My Wallet">
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
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />

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
      <Stack.Screen
        name="Account Statement2"
        component={AccounStatement2}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Order List2"
        component={OrderList2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Holdings2"
        component={Holdings2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
