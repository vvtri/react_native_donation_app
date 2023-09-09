import { StyleSheet } from 'react-native';
import { scaleHorizontal } from '../../utils/scale-dimension';

export const backButtonStyle = StyleSheet.create({
  container: {
    width: scaleHorizontal(44),
    height: scaleHorizontal(44),
    borderRadius: 44,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
