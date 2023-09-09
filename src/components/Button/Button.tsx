import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { buttonStyle } from './style';

type Props = {
  isDisabled?: boolean;
  title: string;
  onPress?: PressableProps['onPress'];
};

const Button = ({ title, isDisabled, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[buttonStyle.button, isDisabled && buttonStyle.disabledButton]}
    >
      <Text style={buttonStyle.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
