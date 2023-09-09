import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { RootState } from '../store';

export type UserData = {};

export type UserState = {
  isLoggedIn: boolean;
  avtUri: string;
  displayName?: string;
  token?: string;
  email?: string;
};

const initialState: UserState = {
  isLoggedIn: false,
  avtUri:
    'https://www.figma.com/file/xIST4wekmGsvoRDgHBVAMt/Donation-Mobile-App-(Community)?type=design&node-id=2-8&mode=dev',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state: UserState, { payload }: PayloadAction<UserData>) {
      state = { ...state, isLoggedIn: true, ...payload };
      return state;
    },
    resetUserState(state) {
      return initialState;
    },
    logout(state) {
      return initialState;
    },
    setToken(state, { payload }: PayloadAction<UserState['token']>) {
      state.token = payload;
    },
  },
});

export const { setUserData, resetUserState, logout, setToken } =
  userSlice.actions;
export const selectUser = ({ user }: RootState) => user;
export default userSlice.reducer;
