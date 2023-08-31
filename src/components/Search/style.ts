import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleVertical,
} from '../../utils/scale-dimension';

export const searchStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F9',
    borderRadius: scaleHorizontal(50),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleVertical(12),
    paddingLeft: scaleHorizontal(14),
    flexDirection: 'row',
  },
  inputText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#686C7A',
    flex: 1,
    overflow: 'scroll',
    marginLeft: scaleHorizontal(6),
    marginRight: scaleHorizontal(6),
  },
});
