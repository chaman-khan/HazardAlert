import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Dimensions} from 'react-native';
import {scale, verticalScale} from '../../../Theme/Dimensions';
import Feather from 'react-native-vector-icons/Feather';

const CustomTextInput = ({
  value,
  placeHolder,
  setValue,
  secure,
  keyboardType,
}) => {
  const [show, setShow] = useState(true);
  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.9,
        height: verticalScale(55),
        borderWidth: 0.7,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        alignSelf: 'center',
        marginTop: verticalScale(15),
      }}>
      <TextInput
        placeholder={placeHolder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secure ? show : false}
        keyboardType={keyboardType}
        style={{
          width: secure
            ? Dimensions.get('window').width * 0.9 - verticalScale(55)
            : Dimensions.get('window').width * 0.9,
          height: '100%',
          padding: 0,
          color: 'black',
          paddingHorizontal: scale(10),
          fontSize: verticalScale(16),
        }}
      />
      {secure && (
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}
          style={{
            width: verticalScale(55),
            height: verticalScale(55),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name={show ? 'eye' : 'eye-off'} color="#0A242A" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
