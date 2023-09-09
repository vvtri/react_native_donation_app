import { StyleSheet } from 'react-native';
import { scaleHorizontal, scaleVertical } from '../../utils/scale-dimension';

export const singleDonationItemStyle = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: scaleVertical(170),
  },
  badge: {
    position: 'absolute',
    top: scaleVertical(18),
    left: scaleHorizontal(20),
    alignItems: 'flex-start',
  },
  informationContainer: {
    marginTop: scaleVertical(16),
  },
  price: {
    marginTop: scaleVertical(3),
  },
});
