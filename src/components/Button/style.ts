import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleVertical,
} from '../../utils/scale-dimension';

export const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    justifyContent: 'center',
    borderRadius: scaleHorizontal(50),
    paddingVertical: scaleVertical(19),
  },
  text: {
    fontFamily: 'Inter-Medium',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19.36),
    textAlign: 'center',
    color: '#fff',
  },
  disabledButton: {
    opacity: 0.5,
  },
});
