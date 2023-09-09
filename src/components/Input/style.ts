import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleVertical,
} from '../../utils/scale-dimension';

export const inputStyle = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(12),
    color: '#36455A',
  },
  input: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19.36),
    paddingVertical: scaleVertical(12),
    borderBottomWidth: scaleHorizontal(1),
    borderColor: 'rgba(167, 167, 167, 0.5)',
  },
});
