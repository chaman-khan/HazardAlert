import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated as RNAnimated,
} from 'react-native';
import Animated from 'react-native-reanimated';

import Theme from '../../Theme/Theme';
import {scale, verticalScale} from '../../Theme/Dimensions';

import InputFieldBoard from './Components/inputFieldBoard';

const {width, height} = Dimensions.get('window');

const Auth = ({navigation}) => {
  //SignUp Variables
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');

  //Login Variables
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  //Styling Variables
  const [screenInFocus, setScreenInFocus] = useState('signup');
  const screenPosition = useRef(new RNAnimated.Value(0)).current;

  const getMeLogin = () => {
    RNAnimated.timing(screenPosition, {
      toValue: -width,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const getMeSignUp = () => {
    RNAnimated.timing(screenPosition, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const otherScreenPosition = screenPosition.interpolate({
    inputRange: [-width, 0],
    outputRange: [0, width],
  });

  const onPressLoginButton = () => {
    navigation.navigate('HomeScreen');
  };

  const onPressSignUpButton = () => {
    getMeLogin();
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
      contentContainerStyle={{
        width: width,
        height: height,
      }}>
      <View>
        <Animated.Image
          sharedTransitionTag="AppLogo"
          source={require('../../assets/images/logo.png')}
          style={{
            width: verticalScale(113),
            height: verticalScale(113),
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: verticalScale(50),
          }}
        />
        <Animated.Text
          sharedTransitionTag="AppName"
          style={{
            color: Theme.colors.secondary,
            fontWeight: '700',
            alignSelf: 'center',
            fontSize: scale(24),
            marginTop: verticalScale(-15),
          }}>
          Hazard Alert
        </Animated.Text>
      </View>
      <RNAnimated.View
        style={{
          transform: [
            {
              translateX: screenPosition,
            },
          ],
        }}>
        <Text
          style={{
            color: '#2E2E2E',
            fontSize: scale(18),
            fontWeight: '600',
            alignSelf: 'center',
            marginVertical: verticalScale(70),
          }}>
          Create Your Account
        </Text>
        <InputFieldBoard
          inputFields={[
            {
              value: signUpName,
              setValue: setSignUpName,
              placeHolder: 'Enter Your Name',
              keyboardType: 'default',
            },
            {
              value: signUpEmail,
              setValue: setSignUpEmail,
              placeHolder: 'Enter your email address',
              keyboardType: 'email-address',
            },
            {
              value: signUpPassword,
              setValue: setSignUpPassword,
              placeHolder: 'Create password',
              secure: true,
              keyboardType: 'default',
            },
            {
              value: signUpConfirmPassword,
              setValue: setSignUpConfirmPassword,
              placeHolder: 'Confirm Password',
              secure: true,
              keyboardType: 'default',
            },
          ]}
        />
        <TouchableOpacity
          onPress={onPressSignUpButton}
          style={{
            width: width * 0.9,
            height: verticalScale(55),
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Theme.colors.primary,
            alignSelf: 'center',
            marginVertical: verticalScale(50),
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: verticalScale(18),
              fontWeight: 'bold',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: verticalScale(12),
            fontWeight: 'normal',
            color: '#555555',
            marginBottom: verticalScale(50),
          }}>
          Already have an account?
          <Text
            onPress={() => {
              getMeLogin();
            }}
            style={{
              color: Theme.colors.primary,
              fontWeight: '500',
            }}>
            {'\t'}Login
          </Text>
        </Text>
      </RNAnimated.View>
      <RNAnimated.View
        style={{
          transform: [
            {
              translateX: otherScreenPosition,
            },
            {
              translateY: verticalScale(-675),
            },
          ],
        }}>
        <Text
          style={{
            color: '#2E2E2E',
            fontSize: scale(18),
            fontWeight: '600',
            alignSelf: 'center',
            marginVertical: verticalScale(70),
          }}>
          Sign In to your account
        </Text>
        <InputFieldBoard
          inputFields={[
            {
              value: loginEmail,
              setValue: setLoginEmail,
              placeHolder: 'Enter your email address',
              keyboardType: 'email-address',
            },
            {
              value: loginPassword,
              setValue: setLoginPassword,
              placeHolder: 'Enter your password',
              secure: true,
              keyboardType: 'default',
            },
          ]}
        />
        <Text
          style={{
            textAlign: 'right',
            fontSize: verticalScale(12),
            fontWeight: 'normal',
            color: '#555555',
            marginRight: width * 0.05,
            marginTop: verticalScale(10),
          }}>
          <Text
            style={{
              color: Theme.colors.primary,
              fontWeight: '500',
            }}>
            Forgot Password?
          </Text>
        </Text>
        <TouchableOpacity
          onPress={onPressLoginButton}
          style={{
            width: width * 0.9,
            height: verticalScale(55),
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Theme.colors.primary,
            alignSelf: 'center',
            marginVertical: verticalScale(50),
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: verticalScale(18),
              fontWeight: 'bold',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: verticalScale(12),
            fontWeight: 'normal',
            color: '#555555',
            marginBottom: verticalScale(50),
          }}>
          Dont have an account?
          <Text
            onPress={() => {
              getMeSignUp();
            }}
            style={{
              color: Theme.colors.primary,
              fontWeight: '500',
            }}>
            {'\t'}Sign Up
          </Text>
        </Text>
      </RNAnimated.View>
    </ScrollView>
  );
};

export default Auth;
