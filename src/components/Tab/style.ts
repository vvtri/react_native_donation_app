import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleVertical,
} from '../../utils/scale-dimension';

export const tabStyle = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    justifyContent: 'center',
    borderRadius: scaleHorizontal(50),
    paddingVertical: scaleVertical(17),
    paddingHorizontal: scaleHorizontal(33),
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Inter-Medium',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(16.94),
    textAlign: 'center',
    color: '#fff',
  },
  inactivatedTab: {
    backgroundColor: '#F3F5F9',
  },
  inactivatedText: {
    color: '#79869F',
  },
});
