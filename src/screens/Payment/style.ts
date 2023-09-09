import { StyleSheet } from 'react-native';
import { scaleHorizontal, scaleVertical } from '../../utils/scale-dimension';

export const paymentStyle = StyleSheet.create({
  container: {
    marginHorizontal: scaleHorizontal(24),
    marginTop: scaleVertical(20),
  },
  supportTextContainer: {
    marginTop: scaleVertical(12),
  },
  buttonContainer: {
    marginHorizontal: scaleHorizontal(24),
    paddingVertical: scaleVertical(10),
  },
  cardForm: {
    height: scaleVertical(300),
    marginTop: scaleVertical(12),
  },
});
