import React, {useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Animated as RNAnimated,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {scale, verticalScale} from '../../Theme/Dimensions';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Animated from 'react-native-reanimated';
import Theme from '../../Theme/Theme';

const {width, height} = Dimensions.get('window');

const Data = [
  {
    image: require('../../assets/images/hazard.png'),
  },
  {
    image: require('../../assets/images/hazard.png'),
  },
  {
    image: require('../../assets/images/hazard.png'),
  },
];

const FlatListData = [
  {
    heading: 'Contacts',
    further: [
      {
        img: require('../../assets/images/1.png'),
        tag: 'Fire Rescue',
      },
      {
        img: require('../../assets/images/11.png'),
        tag: 'Rescue',
      },
      {
        img: require('../../assets/images/111.png'),
        tag: 'Hospital',
      },
      {
        img: require('../../assets/images/1111.png'),
        tag: 'Police',
      },
    ],
  },
  {
    heading: 'Services',
    further: [
      {
        img: require('../../assets/images/2.png'),
        tag: 'Discovery',
      },
      {
        img: require('../../assets/images/22.png'),
        tag: 'Hazard Alert',
      },
      {
        img: require('../../assets/images/222.png'),
        tag: 'Wildlife',
      },
      {
        img: require('../../assets/images/2222.png'),
        tag: 'Emergency',
      },
    ],
  },
  {
    heading: 'Information',
    further: [
      {
        img: require('../../assets/images/3.png'),
        tag: 'Precautions',
      },
      {
        img: require('../../assets/images/33.png'),
        tag: 'First Aid',
      },
      {
        img: require('../../assets/images/111.png'),
        tag: 'Hospital',
      },
      {
        img: require('../../assets/images/1111.png'),
        tag: 'Police',
      },
    ],
  },
];

const HomeScreen = ({}) => {
  const i_am_moving = useRef(new RNAnimated.Value(0)).current;

  const cardOpacity = number =>
    i_am_moving.interpolate({
      inputRange: [width * number, width * (number + 1)],
      outputRange: [1, 0],
    });

  const cardPosition = number =>
    i_am_moving.interpolate({
      inputRange: [width * number, width * (number + 1)],
      outputRange: [0, -width],
    });

  const cardSize = number =>
    i_am_moving.interpolate({
      inputRange: [width * number, width * (number + 1)],
      outputRange: [1, 0],
    });

  const dotOpacity = number =>
    i_am_moving.interpolate({
      inputRange: [width * (number - 1), width * number, width * (number + 1)],
      outputRange: [0.6, 1, 0.6],
      extrapolate: 'clamp',
    });

  const dotLength = number =>
    i_am_moving.interpolate({
      inputRange: [width * (number - 1), width * number, width * (number + 1)],
      outputRange: [scale(5), scale(20), scale(5)],
      extrapolate: 'clamp',
    });

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: scale(18),
            fontWeight: '700',
            marginLeft: width * 0.05,
            marginTop: verticalScale(15),
            marginBottom: verticalScale(5),
          }}>
          {item.heading}
        </Text>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#858585',
            width: width * 0.9,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            paddingVertical: verticalScale(20),
          }}>
          {item.further.map(k => {
            return (
              <View
                style={{
                  width: (width * 0.9) / 4,
                  alignItems: 'center',
                }}>
                <Image
                  source={k.img}
                  style={{
                    width: '50%',
                    height: (width * 0.9) / 4.5,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: scale(14),
                    fontWeight: 'normal',
                    color: 'black',
                  }}>
                  {k.tag}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: verticalScale(10),
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{
            width: verticalScale(46),
            height: verticalScale(46),
            borderRadius: 8,
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: width * 0.05,
          }}>
          <View
            style={{
              transform: [
                {
                  rotate: '90deg',
                },
              ],
            }}>
            <Feather name="bar-chart-2" color="black" size={18} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animated.Image
            sharedTransitionTag="AppLogo"
            source={require('../../assets/images/logo.png')}
            style={{
              height: verticalScale(65),
              width: verticalScale(65),
            }}
          />
          <Animated.Text
            sharedTransitionTag="AppName"
            style={{
              color: Theme.colors.secondary,
              fontSize: scale(16),
              fontWeight: '500',
            }}>
            Hazard Alert
          </Animated.Text>
        </View>

        <TouchableOpacity
          style={{
            width: verticalScale(46),
            height: verticalScale(46),
            borderRadius: 8,
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: width * 0.05,
          }}>
          <SimpleLineIcons name="bell" color="black" size={18} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <RNAnimated.ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width}
          onScroll={RNAnimated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: i_am_moving,
                  },
                },
              },
            ],
            //   {useNativeDriver: true},
          )}>
          {Data.map((k, kindex) => {
            return (
              <RNAnimated.View
                style={{
                  width: width,
                  height: verticalScale(240),
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: cardOpacity(kindex),
                  transform: [
                    {
                      scale: cardSize(kindex),
                    },
                    {
                      translateX: cardPosition(kindex),
                    },
                  ],
                }}>
                <Image
                  source={k.image}
                  style={{
                    width: width * 0.9,
                    height: '90%',
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: width * 0.9,
                    height: verticalScale(240) * 0.9,
                    justifyContent: 'flex-end',
                    paddingLeft: scale(20),
                    paddingBottom: scale(10),
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: scale(24),
                      fontWeight: '700',
                    }}>
                    2019
                    <Text
                      style={{
                        fontSize: scale(16),
                      }}>
                      {'\t'}Fire Disaster
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: scale(12),
                      fontWeight: 'normal',
                    }}>
                    Lorem Ipsum City
                  </Text>
                </View>
              </RNAnimated.View>
            );
          })}
        </RNAnimated.ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          {Data.map((kindex, k) => {
            return (
              <RNAnimated.View
                style={[
                  {
                    width: dotLength(parseInt(k)),
                    marginHorizontal: parseInt(k) === 1 ? scale(5) : 0,
                    opacity: dotOpacity(parseInt(k)),
                    height: scale(5),
                    backgroundColor: Theme.colors.primary,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  },
                ]}
              />
            );
          })}
        </View>
        <FlatList data={FlatListData} renderItem={renderItem} />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
