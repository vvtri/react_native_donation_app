import { Dimensions, StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleVertical,
} from '../../utils/scale-dimension';

const donationSectionMarginX = scaleHorizontal(24);
const donationItemGap = scaleHorizontal(20);
const donationItemWidth =
  Dimensions.get('screen').width / 2 -
  donationSectionMarginX -
  donationItemGap / 2;

export const homeStyle = StyleSheet.create({
  headerContainer: {
    marginHorizontal: scaleHorizontal(24),
    marginTop: scaleVertical(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19.36),
    color: '#636776',
  },
  headerUserNameWrapper: {
    marginTop: scaleVertical(5),
  },
  headerAvtImage: {
    marginTop: scaleVertical(6),
    width: scaleHorizontal(50),
    height: scaleHorizontal(50),
  },
  searchWrapper: {
    marginTop: scaleVertical(20),
    marginHorizontal: scaleHorizontal(24),
  },
  bannerWrapper: {
    marginHorizontal: scaleHorizontal(24),
    marginTop: scaleVertical(20),
  },
  bannerImg: {
    width: '100%',
    height: scaleVertical(160),
  },
  categoryHeaderWrapper: {
    marginTop: scaleVertical(20),
    marginHorizontal: scaleHorizontal(24),
    marginBottom: scaleVertical(16),
  },
  categoryContainer: {
    marginHorizontal: scaleHorizontal(24),
  },
  categoryWrapper: {
    marginRight: scaleHorizontal(10),
  },
  donationContainer: {
    marginTop: scaleVertical(20),
    marginHorizontal: donationSectionMarginX,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: donationItemGap,
  },
  donationItem: {
    width: donationItemWidth,
  },
});
