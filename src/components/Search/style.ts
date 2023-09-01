import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleVertical,
} from '../../utils/scale-dimension';

export const searchStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F9',
    borderRadius: scaleHorizontal(15),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleVertical(10),
    paddingLeft: scaleHorizontal(16),
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
