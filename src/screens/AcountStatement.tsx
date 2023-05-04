import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks';

export default function AcountStatement() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <ScrollView style={{paddingTop: sizes.md}}>
      <Text>AcountStatement</Text>
    </ScrollView>
  );
}
