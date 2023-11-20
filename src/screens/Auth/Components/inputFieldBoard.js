import React from 'react';
import {View} from 'react-native';

import CustomTextInput from './index';

const InputFieldBoard = ({inputFields}) => {
  return (
    <View>
      {inputFields.map(k => {
        return (
          <CustomTextInput
            value={k.value}
            setValue={k.setValue}
            placeHolder={k.placeHolder}
            secure={k.secure}
            keyboardType={k.keyboardType}
          />
        );
      })}
    </View>
  );
};

export default InputFieldBoard;
