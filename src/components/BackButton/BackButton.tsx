import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Pressable } from 'react-native';
import { backButtonStyle } from './style';

type Props = {
  onPress?: () => any;
};

const BackButton = ({ onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={[backButtonStyle.container]}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
