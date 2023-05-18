import React, {useRef, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {Pressable} from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';
import {
  VictoryArea,
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryStack,
} from 'victory-native';

export default function MyWallet() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <>
      <ScrollView>
        <Block marginHorizontal={sizes.sm}>
          <Block row marginTop={sizes.sm}>
            <Block>
              <Text h4>My Wallet</Text>
            </Block>
            <Block align="flex-end">
              <Button success width={'75%'} marginBottom={sizes.xs}>
                <Text p semibold white>
                  Buy
                </Text>
              </Button>
              <Button danger width={'75%'}>
                <Text p semibold white>
                  Sell
                </Text>
              </Button>
            </Block>
          </Block>
          <View style={styles.animationContainer}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 350,
                height: 350,
                backgroundColor: '#E9ECEF',
              }}
              resizeMode="cover"
              source={require('../../assets/123978-liquid-circle.json')}
            />
            <Text h5 style={{position: 'absolute', top: '49%'}}>
              Show Balance
            </Text>
          </View>
          <Block card align="center" marginBottom={sizes.sm}>
            <VictoryChart
              events={[
                {
                  childName: 'all',
                  target: 'data',
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          childName: 'area-1',
                          target: 'data',
                          mutation: (props) => ({
                            style: Object.assign({}, props.style, {
                              fill: 'gold',
                            }),
                          }),
                        },
                        {
                          childName: 'area-2',
                          target: 'data',
                          mutation: (props) => ({
                            style: Object.assign({}, props.style, {
                              fill: 'orange',
                            }),
                          }),
                        },
                        {
                          childName: 'area-3',
                          target: 'data',
                          mutation: (props) => ({
                            style: Object.assign({}, props.style, {
                              fill: 'red',
                            }),
                          }),
                        },
                      ];
                    },
                  },
                },
              ]}>
              <VictoryStack animate colorScale={'cool'}>
                <VictoryArea
                  name="area-1"
                  data={[
                    {x: 1, y: 2},
                    {x: 2, y: 3},
                    {x: 3, y: 5},
                    {x: 4, y: 4},
                    {x: 5, y: 7},
                  ]}
                />
                <VictoryArea
                  name="area-2"
                  data={[
                    {x: 1, y: 2},
                    {x: 2, y: 3},
                    {x: 3, y: 5},
                    {x: 4, y: 4},
                    {x: 5, y: 7},
                  ]}
                />
                <VictoryArea
                  name="area-3"
                  data={[
                    {x: 1, y: 2},
                    {x: 2, y: 3},
                    {x: 3, y: 5},
                    {x: 4, y: 4},
                    {x: 5, y: 7},
                  ]}
                />
              </VictoryStack>
            </VictoryChart>
          </Block>
        </Block>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9ECEF',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
