/* eslint-disable prettier/prettier */
import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../hooks';
import {useNavigation} from '@react-navigation/core';
import {Block, Button, Text} from '../components';
import {HStack, VStack, Avatar, Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export default function Dashboard() {
  const navigation = useNavigation();
  const [request, setRequest] = useState(1);
  const [date, setDate] = useState('');
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [end_State, setEnd_State] = useState(1);
  const [current_index, setCurrent_index] = useState(2);
  const [like, setlike] = useState(false);

  const getCurrentTime = () => {
    let today = new Date();
    return today;
  };

  const carouselItems = [
    {
      title: 'Fund Name 1 Compatible item English or Urdu',
      text1: 'Text 1',
      text2: '23% ',
    },
    {
      title: 'Fund Name 2 Compatible item English or Urdu',
      text1: 'Text 2',
      text2: '23% ',
    },
    {
      title: 'Fund Name 3 Compatible item English or Urdu',
      text1: 'Text 3',
      text2: '23% ',
    },
    {
      title: 'Fund Name 4 Compatible item English or Urdu',
      text1: 'Text 4',
      text2: '23% ',
    },
    {
      title: 'Fund Name 5 Compatible item English or Urdu',
      text1: 'Text 5',
      text2: '23% ',
    },
  ];

  const handleSnapToItem = (index) => {
    setCurrent_index(index);
  };

  console.log('Index :' + current_index);

  const _renderItem = ({item}) => {
    return (
      <Block radius={20} marginTop={sizes.xs} white padding={sizes.s}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <HStack>
          <VStack>
            <Text primary bold p marginTop={sizes.sm}>
              {item.text1}
            </Text>
            <Text success bold>
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

  return (
    <>
      <View>
        <ScrollView
          scrollEnabled={false}
          onResponderMove={() => {
            console.log('outer responding');
          }}>
          <Block primary>
            <Block row paddingTop={sizes.md}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Block
                  marginTop={sizes.sm}
                  marginLeft={sizes.s}
                  marginRight={sizes.md}
                  row>
                  <Icon
                    as={<Ionicons name={'chevron-back-outline'} />}
                    size={7}
                    mr="2"
                    color="white"
                  />
                  <Text semibold white p>
                    Back
                  </Text>
                </Block>
              </TouchableOpacity>

              <Block
                align="center"
                marginTop={sizes.sm}
                marginLeft={sizes.xs}
                marginBottom={sizes.l}>
                <Text bold white h5>
                  Dashboard
                </Text>
              </Block>

              <Block row marginTop={sizes.xs} marginLeft={sizes.xs}>
                <Icon
                  marginTop={2}
                  as={<Ionicons name={'search-outline'} />}
                  size={8}
                  mr="2"
                  color="white"
                />
                <Block>
                  <Avatar mr="1">
                    <Icon
                      as={<Ionicons name="person-circle-outline" />}
                      color="white"
                      size={16}
                    />
                  </Avatar>
                </Block>
              </Block>
            </Block>
          </Block>
          <Text primary h5 bold marginLeft={sizes.sm} marginTop={sizes.sm}>
            Snap-Crausel
          </Text>
          <Block align="center">
            <Carousel
              layout={'default'}
              sliderWidth={400}
              itemWidth={150}
              data={carouselItems}
              renderItem={_renderItem}
              onSnapToItem={handleSnapToItem}
              initialScrollIndex={2}
            />
          </Block>

          <HStack
            style={{justifyContent: 'center'}}
            marginTop={sizes.xs}
            marginBottom={sizes.xs}>
            <Icon
              as={
                <Ionicons
                  name={current_index === 0 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 1 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 2 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 3 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 4 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
          </HStack>

          <Text
            primary
            h5
            bold
            marginLeft={sizes.sm}
            marginRight={sizes.sm}
            paddingTop={sizes.sm}
            style={{borderTopWidth: 1, borderTopColor: 'silver'}}>
            Snap-Crausel
          </Text>
          <Block align="center">
            <Carousel
              layout={'default'}
              sliderWidth={400}
              itemWidth={150}
              data={carouselItems}
              renderItem={_renderItem}
              onSnapToItem={handleSnapToItem}
              initialScrollIndex={2}
            />
          </Block>

          <HStack
            style={{justifyContent: 'center'}}
            marginTop={sizes.xs}
            marginBottom={sizes.xs}>
            <Icon
              as={
                <Ionicons
                  name={current_index === 0 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 1 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 2 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 3 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 4 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
          </HStack>

          <Text
            primary
            h5
            bold
            marginLeft={sizes.sm}
            marginRight={sizes.sm}
            paddingTop={sizes.sm}
            style={{borderTopWidth: 1, borderTopColor: 'silver'}}>
            Snap-Crausel
          </Text>
          <Block align="center">
            <Carousel
              layout={'default'}
              sliderWidth={400}
              itemWidth={150}
              data={carouselItems}
              renderItem={_renderItem}
              onSnapToItem={handleSnapToItem}
              initialScrollIndex={2}
            />
          </Block>

          <HStack
            style={{justifyContent: 'center'}}
            marginTop={sizes.xs}
            marginBottom={sizes.xs}>
            <Icon
              as={
                <Ionicons
                  name={current_index === 0 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 1 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 2 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 3 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
            <Icon
              as={
                <Ionicons
                  name={current_index === 4 ? 'ellipse' : 'ellipse-outline'}
                />
              }
              size={4}
              mr="2"
              color={colors.gray}
            />
          </HStack>
        </ScrollView>
      </View>
    </>
  );
}
