import firebaseAuth from '@react-native-firebase/auth';
import { FIREBASE_AUTH_ERROR_CODES } from '../configs/firebase.config';
import { setToken, UserData } from '../redux/slices/user.slice';
import { store } from '../redux/store';

export const createUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const userCred = await firebaseAuth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await userCred.user.updateProfile({ displayName: name });

    return userCred;
  } catch (error: any) {
    if (error.code === FIREBASE_AUTH_ERROR_CODES.EMAIL_EXISTS) {
      return { error: 'Email already in used' };
    } else if (error.code === FIREBASE_AUTH_ERROR_CODES.INVALID_EMAIL) {
      return { error: 'Invalid email' };
    } else {
      return { error: 'Some error happen' };
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCred = await firebaseAuth().signInWithEmailAndPassword(
      email,
      password,
    );
    const token = await userCred.user.getIdToken();

    return {
      status: true,
      data: {
        displayName: userCred.user.displayName,
        token,
        email: userCred.user.email,
      } as UserData,
    };
  } catch (error: any) {
    console.log('error', error);
    if (error.code === FIREBASE_AUTH_ERROR_CODES.INVALID_PASSWORD) {
      return { status: false, error: 'Wrong password' };
    } else if (error.code === FIREBASE_AUTH_ERROR_CODES.INVALID_EMAIL) {
      return { status: false, error: 'Invalid email' };
    } else if (error.code === FIREBASE_AUTH_ERROR_CODES.USER_NOT_FOUND) {
      return { status: false, error: 'Email is not existed' };
    } else {
      return { status: false, error: 'Some error happen' };
    }
  }
};

export const signOutFirebase = async () => {
  try {
    firebaseAuth().signOut();
  } catch (error) {
    console.log('error sign out', error);
  }
};

export const updateToken = async () => {
  console.log('update token');
  try {
    const newToken = await firebaseAuth().currentUser?.getIdToken();
    store.dispatch(setToken(newToken));
  } catch (error) {
    console.log('error updateToken', error);
  }
};
