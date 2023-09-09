import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleVertical,
} from '../../utils/scale-dimension';

export const registrationStyle = StyleSheet.create({
  container: {
    marginHorizontal: scaleHorizontal(25),
    justifyContent: 'center',
    flex: 1,
  },
  backButtonContainer: {
    marginTop: scaleVertical(7),
    marginLeft: scaleHorizontal(14),
  },
  headerContainer: {
    marginBottom: scaleHorizontal(24),
  },
  nameContainer: {
    marginBottom: scaleHorizontal(24),
  },
  emailContainer: {
    marginBottom: scaleHorizontal(24),
  },
  passwordContainer: {
    marginBottom: scaleHorizontal(24),
  },
  registerBtnContainer: {
    marginBottom: scaleHorizontal(24),
  },
  registerStatus: {
    fontSize: scaleFontSize(16),
    fontFamily: 'Inter',
    marginBottom: scaleHorizontal(24),
  },
  registerStatusSuccess: {
    color: '#2979F2',
  },
  registerStatusFailed: {
    color: 'red',
  },
});
