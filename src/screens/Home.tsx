import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';

import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import {useTheme} from '../hooks';

import {Avatar, Divider, Icon, Image} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {Block, Button, Text} from '../components';
import PortfolioCard from '../components/PortfolioCard';
import {VictoryChart, VictoryLine, VictoryGroup} from 'victory-native';
import FundsDropdown from '../components/FundsDropdown';

export default function Home() {
  const [isCollapsed, setisCollapsed] = useState(true);
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  return (
    <ScrollView>
      <Block marginHorizontal={sizes.sm}>
        <PortfolioCard />
        <FundsDropdown />
      </Block>
    </ScrollView>
  );
}
