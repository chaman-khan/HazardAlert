import React, {useRef} from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Theme from '../../Theme/Theme';
import {scale, verticalScale} from '../../Theme/Dimensions';

const {width, height} = Dimensions.get('window');

const screens_to_Render = 3;

const IntroScreen = ({navigation}) => {
  const i_am_moving = useRef(new Animated.Value(0)).current;

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

  const nextButtonOpacity = i_am_moving.interpolate({
    inputRange: [0, width, width * 2],
    outputRange: [0, 0, 1],
  });

  const skipButtonOpacity = i_am_moving.interpolate({
    inputRange: [0, width, width * 2],
    outputRange: [1, 1, 0],
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Animated.View
        style={{
          opacity: cardOpacity(0),
          transform: [
            {
              scale: cardSize(0),
            },
            {
              translateX: cardPosition(0),
            },
          ],
          alignItems: 'center',
          justifyContent: 'center',
          width: width,
          height: height,
          position: 'absolute',
        }}>
        <Image
          source={require('../../assets/images/intro0.png')}
          style={{
            width: verticalScale(348),
            height: verticalScale(348),
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: scale(20),
            fontWeight: '500',
            color: Theme.colors.heading,
            marginTop: verticalScale(50),
          }}>
          Headline
        </Text>
        <Text
          style={{
            color: Theme.colors.description,
            fontSize: scale(16),
            fontWeight: 'normal',
            textAlign: 'center',
            width: width - scale(20),
            marginTop: verticalScale(20),
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          opacity: cardOpacity(1),
          transform: [
            {
              scale: cardSize(1),
            },
            {
              translateX: cardPosition(1),
            },
          ],
          alignItems: 'center',
          justifyContent: 'center',
          width: width,
          height: height,
          position: 'absolute',
        }}>
        <Image
          source={require('../../assets/images/intro1.png')}
          style={{
            width: verticalScale(348),
            height: verticalScale(348),
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: scale(20),
            fontWeight: '500',
            color: Theme.colors.heading,
            marginTop: verticalScale(50),
          }}>
          Headline
        </Text>
        <Text
          style={{
            color: Theme.colors.description,
            fontSize: scale(16),
            fontWeight: 'normal',
            textAlign: 'center',
            width: width - scale(20),
            marginTop: verticalScale(20),
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          opacity: cardOpacity(2),
          transform: [
            {
              scale: cardSize(2),
            },
            {
              translateX: cardPosition(2),
            },
          ],
          alignItems: 'center',
          justifyContent: 'center',
          width: width,
          height: height,
          position: 'absolute',
        }}>
        <Image
          source={require('../../assets/images/intro2.png')}
          style={{
            width: verticalScale(348),
            height: verticalScale(348),
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: scale(20),
            fontWeight: '500',
            color: Theme.colors.heading,
            marginTop: verticalScale(50),
          }}>
          Headline
        </Text>
        <Text
          style={{
            color: Theme.colors.description,
            fontSize: scale(16),
            fontWeight: 'normal',
            textAlign: 'center',
            width: width - scale(20),
            marginTop: verticalScale(20),
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
      </Animated.View>
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={width}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        onScroll={Animated.event(
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
        {Array.from(Array(screens_to_Render).keys()).map(k => {
          return <View style={styles.dummyView} />;
        })}
      </Animated.ScrollView>
      <View style={styles.dotWrapper}>
        {Array.from(Array(screens_to_Render).keys()).map(k => {
          return (
            <Animated.View
              style={[
                styles.dummyDot,
                {
                  width: dotLength(parseInt(k)),
                  marginHorizontal: parseInt(k) === 1 ? scale(5) : 0,
                  opacity: dotOpacity(parseInt(k)),
                },
              ]}
            />
          );
        })}
      </View>
      <Animated.Text
        onPress={() => {
          navigation.navigate('Auth');
        }}
        style={{
          color: Theme.colors.secondary,
          fontWeight: '500',
          fontSize: scale(18),
          top: verticalScale(10),
          right: scale(10),
          position: 'absolute',
          opacity: skipButtonOpacity,
        }}>
        SKIP
      </Animated.Text>
      <Animated.Text
        onPress={() => {
          navigation.navigate('Auth');
        }}
        style={{
          color: Theme.colors.secondary,
          fontWeight: '500',
          fontSize: scale(18),
          top: verticalScale(10),
          right: scale(10),
          position: 'absolute',
          opacity: nextButtonOpacity,
        }}>
        NEXT
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dummyView: {
    width: width,
    height: height,
  },
  dummyDot: {
    height: scale(5),
    backgroundColor: Theme.colors.primary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  dotWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: verticalScale(100),
  },
});

export default IntroScreen;
