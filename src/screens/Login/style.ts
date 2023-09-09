import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleHorizontal } from '../../utils/scale-dimension';

export const loginStyle = StyleSheet.create({
  container: {
    marginHorizontal: scaleHorizontal(25),
    justifyContent: 'center',
    flex: 1,
  },
  headerContainer: {
    marginBottom: scaleHorizontal(24),
  },
  emailContainer: {
    marginBottom: scaleHorizontal(24),
  },
  passwordContainer: {
    marginBottom: scaleHorizontal(24),
  },
  loginBtnContainer: {
    marginBottom: scaleHorizontal(24),
  },
  registrationTextContainer: {
    alignItems: 'center',
  },
  loginStatus: {
    fontSize: scaleFontSize(16),
    fontFamily: 'Inter',
    marginBottom: scaleHorizontal(24),
  },
  loginStatusSuccess: {
    color: '#2979F2',
  },
  loginStatusFailed: {
    color: 'red',
  },
});
