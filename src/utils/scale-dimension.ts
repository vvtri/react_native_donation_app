import {Dimensions} from 'react-native';
import {hasNotch} from 'react-native-device-info';

const {height, width} = Dimensions.get('window');

const isSmall = width <= 375 && !hasNotch();

const getBaselineWidth = () => {
  if (isSmall) return 330;
  return 350;
};

const getBaselineHeight = () => {
  if (isSmall) return 550;
  else if (width > 410) return 620;
  return 680;
};

export const scaleHorizontal = (size: number) =>
  size * (width / getBaselineWidth());

export const scaleVertical = (size: number) =>
  size * (height / getBaselineHeight());

export const scaleFontSize = (fontSize: number) =>
  Math.round(fontSize * (width / getBaselineWidth()));
