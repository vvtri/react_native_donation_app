import { Dimensions, StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleVertical,
} from '../../utils/scale-dimension';

export const singleDonationItemScreenStyle = StyleSheet.create({
  container: {
    marginTop: scaleVertical(7),
    marginHorizontal: scaleHorizontal(21),
  },
  image: {
    width: '100%',
    height: scaleVertical(240),
    marginTop: scaleVertical(12),
  },
  badgeContainer: {
    marginTop: scaleVertical(29),
    alignItems: 'flex-start',
  },
  headerContainer: {
    marginTop: scaleVertical(21),
  },
  descContainer: {
    marginTop: scaleVertical(7),
    marginHorizontal: scaleHorizontal(7),
    fontFamily: 'Inter',
  },
  buttonContainer: {
    marginHorizontal: scaleHorizontal(24),
    paddingVertical: scaleVertical(10),
  },
});
