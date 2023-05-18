/* eslint-disable prettier/prettier */
import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../hooks';
import {useNavigation} from '@react-navigation/core';
import {Block, Text} from '../components';
import {HStack, VStack, Avatar, Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Animated, {
  BounceInLeft,
  BounceInRight,
  BounceOutLeft,
  BounceOutRight,
  SlideInDown,
  SlideInUp,
  SlideOutUp,
} from 'react-native-reanimated';

export default function Dashboard() {
  const navigation = useNavigation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [current_index_1, setCurrent_index_1] = useState(2);
  const [current_index_2, setCurrent_index_2] = useState(2);
  const [current_index_3, setCurrent_index_3] = useState(2);
  const [like, setlike] = useState(false);

  const [activeSlide_1, setActiveSlide_1] = useState(2);
  const [activeSlide_2, setActiveSlide_2] = useState(2);
  const [activeSlide_3, setActiveSlide_3] = useState(2);

  const [entries_1, setEntries_1] = useState(0);
  const [entries_2, setEntries_2] = useState(0);
  const [entries_3, setEntries_3] = useState(0);

  const carouselItems_1 = [
    {
      title: 'Profit Compatible item English or Urdu',
      text1: 'Text 1',
      text2: '23% ',
      state: 'profit',
    },
    {
      title: 'Profit Compatible item English or Urdu',
      text1: 'Text 2',
      text2: '23% ',
      state: 'profit',
    },
    {
      title: 'Profit Compatible item English or Urdu',
      text1: 'Text 3',
      text2: '23% ',
      state: 'profit',
    },
    {
      title: 'Profit Compatible item English or Urdu',
      text1: 'Text 4',
      text2: '23% ',
      state: 'profit',
    },
    {
      title: 'Profit Compatible item English or Urdu',
      text1: 'Text 5',
      text2: '23% ',
      state: 'profit',
    },
  ];
  const carouselItems_2 = [
    {
      title: 'Loss Compatible item English or Urdu',
      text1: 'Text 1',
      text2: '23% ',
      state: 'loss',
    },
    {
      title: 'Loss Compatible item English or Urdu',
      text1: 'Text 2',
      text2: '23% ',
      state: 'loss',
    },
    {
      title: 'Loss Compatible item English or Urdu',
      text1: 'Text 3',
      text2: '23% ',
      state: 'loss',
    },
    {
      title: 'Loss Compatible item English or Urdu',
      text1: 'Text 4',
      text2: '23% ',
      state: 'loss',
    },
    {
      title: 'Loss Compatible item English or Urdu',
      text1: 'Text 5',
      text2: '23% ',
      state: 'loss',
    },
  ];
  const carouselItems_3 = [
    {
      title: 'Active Name 1 Compatible item English or Urdu',
      text1: 'Text 1',
      text2: '23% ',
      state: 'Active',
    },
    {
      title: 'Active Name 2 Compatible item English or Urdu',
      text1: 'Text 2',
      text2: '23% ',
      state: 'Active',
    },
    {
      title: 'Active Name 3 Compatible item English or Urdu',
      text1: 'Text 3',
      text2: '23% ',
      state: 'Active',
    },
    {
      title: 'Active Name 4 Compatible item English or Urdu',
      text1: 'Text 4',
      text2: '23% ',
      state: 'Active',
    },
    {
      title: 'Active Name 5 Compatible item English or Urdu',
      text1: 'Text 5',
      text2: '23% ',
      state: 'Active',
    },
  ];

  useEffect(() => {
    setEntries_1(carouselItems_1.length);
    setEntries_2(carouselItems_2.length);
    setEntries_3(carouselItems_3.length);
  }, []);

  const handleSnapToItem = (data, index) => {
    console.log('Called');
    console.log('Index:' + index);
    console.log('Data' + data);
    {
      data.map((e) => {
        e.state === 'profit'
          ? setCurrent_index_1(index)
          : e.state === 'loss'
          ? setCurrent_index_2(index)
          : e.state === 'Active'
          ? setCurrent_index_3(index)
          : '';
      });
    }
    console.log('Current_Index1' + current_index_1);
  };

  const Map_Dots = (data) => {
    // console.log(entries);
    return (
      <HStack>
        {data.map((e, index) => {
          return (
            <Icon
              as={
                <Ionicons
                  name={
                    e.state === 'Active'
                      ? current_index_3 === index
                        ? 'ellipse'
                        : 'ellipse-outline'
                      : e.state === 'profit'
                      ? current_index_1 === index
                        ? 'ellipse'
                        : 'ellipse-outline'
                      : e.state === 'loss'
                      ? current_index_2 === index
                        ? 'ellipse'
                        : 'ellipse-outline'
                      : ''
                  }
                />
              }
              size={4}
              color={colors.gray}
            />
          );
        })}
      </HStack>
    );
  };

  const _renderItem = ({item}) => {
    return (
      <Block radius={20} paddingTop={sizes.xs} white padding={sizes.s}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <HStack>
          <VStack>
            <Text primary bold p marginTop={sizes.sm}>
              {item.text1}
            </Text>
            <Text
              bold
              color={
                item.state === 'profit'
                  ? colors.success
                  : item.state === 'loss'
                  ? colors.danger
                  : item.state === 'Active'
                  ? colors.success
                  : ''
              }>
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

  const pagination = (entry, data) => {
    // e.state === 'Active'
    //                   ? current_index_3 === index
    //                     ? 'ellipse'
    //                     : 'ellipse-outline'
    //                   : e.state === 'profit'
    //                   ? current_index_1 === index
    //                     ? 'ellipse'
    //                     : 'ellipse-outline'
    //                   : e.state === 'loss'
    //                   ? current_index_2 === index
    //                     ? 'ellipse'
    //                     : 'ellipse-outline'
    //                   : ''
    return (
      <Pagination
        dotsLength={entry}
        activeDotIndex={
          data.state === 'Active'
            ? current_index_3
            : data.state === 'profit'
            ? current_index_1
            : data.state === 'loss'
            ? current_index_2
            : ''
        }
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'silver',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <>
      <View>
        <ScrollView
          onResponderMove={() => {
            console.log('outer responding');
          }}>
          <Animated.View
            entering={SlideInUp.duration(800)}
            exiting={SlideOutUp.duration(600)}>
            <Block primary>
              <Block
                row
                align={'center'}
                paddingVertical={sizes.sm}
                paddingTop={sizes.md}>
                <Block>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Block row align="center">
                      <Icon
                        as={<Ionicons name={'chevron-back-outline'} />}
                        size={7}
                        color="white"
                      />
                      <Text semibold white p>
                        Back
                      </Text>
                    </Block>
                  </TouchableOpacity>
                </Block>

                <Block align="center" justify="center">
                  <Text bold white h5 center>
                    Holdings
                  </Text>
                </Block>

                <Block row justify="flex-end" align="center">
                  <Block justify="center" align="flex-end">
                    <Icon
                      as={<Ionicons name={'search-outline'} />}
                      size={8}
                      color="white"
                    />
                  </Block>
                  <Block align="flex-end" marginRight={sizes.sm}>
                    <Avatar
                      size={'md'}
                      source={{
                        uri: 'https://bit.ly/broken-link',
                      }}>
                      RS
                    </Avatar>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Animated.View>
        </ScrollView>
      </View>

      <Animated.View
        entering={BounceInRight.duration(800)}
        exiting={BounceOutLeft}>
        <ScrollView
          scrollEnabled={true}
          onResponderMove={() => {
            console.log('Inner responding');
          }}>
          <Text primary h5 bold padding={sizes.s}>
            Top-Gainers By 1%
          </Text>
          <Block align="center">
            <Carousel
              layout={'default'}
              sliderWidth={400}
              itemWidth={150}
              data={carouselItems_1}
              renderItem={_renderItem}
              onSnapToItem={(v) => handleSnapToItem(carouselItems_1, v)}
              initialScrollIndex={2}
            />
            {pagination(entries_1, activeSlide_1)}
          </Block>
          <Block align="center" marginTop={sizes.sm} marginBottom={sizes.sm}>
            {Map_Dots(carouselItems_1)}
          </Block>

          <Text
            primary
            h5
            bold
            padding={sizes.s}
            style={{borderTopWidth: 1, borderTopColor: 'silver'}}>
            Top Losers by 1%
          </Text>
          <Block align="center">
            <Carousel
              layout={'default'}
              sliderWidth={400}
              itemWidth={150}
              data={carouselItems_2}
              renderItem={_renderItem}
              onSnapToItem={(v) => handleSnapToItem(carouselItems_2, v)}
              initialScrollIndex={2}
            />
            {pagination(entries_2, carouselItems_2)}
          </Block>
          <Block align="center" marginTop={sizes.sm} marginBottom={sizes.sm}>
            {Map_Dots(carouselItems_2)}
          </Block>

          <Text
            primary
            h5
            bold
            padding={sizes.s}
            style={{borderTopWidth: 1, borderTopColor: 'silver'}}>
            Most Active (By Volume)
          </Text>
          <Block align="center">
            <Carousel
              layout={'default'}
              sliderWidth={400}
              itemWidth={150}
              data={carouselItems_3}
              renderItem={_renderItem}
              onSnapToItem={(v) => handleSnapToItem(carouselItems_3, v)}
              initialScrollIndex={2}
            />
            {pagination(entries_3, carouselItems_3)}
          </Block>
          <Block align="center" marginTop={sizes.sm} marginBottom={sizes.sm}>
            {Map_Dots(carouselItems_3)}
          </Block>
        </ScrollView>
      </Animated.View>
    </>
  );
}
