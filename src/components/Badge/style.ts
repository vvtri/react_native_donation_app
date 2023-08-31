import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleVertical,
} from '../../utils/scale-dimension';

export const badgeStyle = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    justifyContent: 'center',
    borderRadius: scaleHorizontal(100),
    paddingVertical: scaleVertical(5),
    paddingHorizontal: scaleHorizontal(10),
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12.1),
    textAlign: 'center',
    color: '#fff',
  },
});
