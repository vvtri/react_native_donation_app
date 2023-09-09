import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { inputStyle } from './style';

type Props = {
  label: string;
  onChangeText?: (newValue: string) => any;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  placeholder?: string;
};

const Input = ({
  label,
  onChangeText,
  secureTextEntry,
  keyboardType,
  placeholder,
}: Props) => {
  const [value, setValue] = useState('');

  const handleChange: TextInputProps['onChangeText'] = newValue => {
    setValue(newValue);
    onChangeText?.(newValue);
  };

  return (
    <View>
      <Text style={inputStyle.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        style={inputStyle.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
