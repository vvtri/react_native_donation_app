import React from 'react';
import { View, Text } from 'react-native';
import { headerStyle } from './style';

type Props = {
  title: string;
  type: 1 | 2 | 3;
};

const Header = ({ title, type }: Props) => {
  const getTitleStyle = (type: Props['type']) => {
    switch (type) {
      case 1:
        return headerStyle.title1;
      case 2:
        return headerStyle.title2;
      case 3:
        return headerStyle.title3;
      default:
        return headerStyle.title1;
    }
  };

  return (
    <View>
      <Text style={[getTitleStyle(type)]}>{title}</Text>
    </View>
  );
};

export default Header;
