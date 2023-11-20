import React, {useRef, useEffect} from 'react';
import {Animated, View, Dimensions} from 'react-native';
import {scale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const {width} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  const Animate = useRef(new Animated.Value(0)).current;
  const AnimateAgain = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    AnimateIt();
  }, []);

  const AnimateIt = () => {
    Animated.timing(Animate, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(AnimateAgain, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        navigation.replace('IntroScreen');
      }, 1000);
    }, 1500);
  };

  const MoveIt = Animate.interpolate({
    inputRange: [0, 1],
    outputRange: [width, 0],
  });

  const ScaleIt = AnimateAgain.interpolate({
    inputRange: [0, 1],
    outputRange: [1.3, 1],
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.Image
        source={require('../../assets/images/logo.png')}
        style={{
          width: scale(170),
          height: scale(170),
          resizeMode: 'contain',
          marginBottom: scale(-30),
          transform: [
            {
              translateX: MoveIt,
            },
            {
              scale: ScaleIt,
            },
          ],
        }}
      />
      <Animated.Text
        style={{
          color: Theme.colors.secondary,
          fontSize: scale(32),
          fontWeight: '600',
          opacity: AnimateAgain,
        }}>
        Hazard Alert
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;
