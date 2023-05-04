import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';

export default function App() {
  return (
    <DataProvider>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </DataProvider>
  );
}
