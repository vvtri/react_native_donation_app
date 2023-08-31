import React, { LegacyRef, useRef, useState } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import { scaleHorizontal } from '../../utils/scale-dimension';
import { badgeStyle } from './style';

type Props = {
  title: string;
};

const Badge = ({ title }: Props) => {
  return (
    <View style={[badgeStyle.badge]}>
      <Text numberOfLines={1} style={[badgeStyle.text]}>
        {title}
      </Text>
    </View>
  );
};

export default Badge;
