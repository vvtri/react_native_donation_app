import React, { LegacyRef, useRef, useState } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import { scaleHorizontal } from '../../utils/scale-dimension';
import { tabStyle } from './style';

type Props = {
  isInactivated?: boolean;
  title: string;
  onPress?: PressableProps['onPress'];
};

const Tab = ({ title, isInactivated, onPress }: Props) => {
  const textRef = useRef<Text | null>(null);
  const [textWidth, setTextWidth] = useState(0);

  const padding = 33;
  const width = scaleHorizontal(padding * 2 + textWidth);

  return (
    <Pressable
      onPress={onPress}
      style={[tabStyle.tab, isInactivated && tabStyle.inactivatedTab]}>
      <Text
        ref={textRef}
        onTextLayout={e => {
          setTextWidth(e.nativeEvent.lines[0].width);
        }}
        numberOfLines={1}
        style={[tabStyle.text, isInactivated && tabStyle.inactivatedText]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
