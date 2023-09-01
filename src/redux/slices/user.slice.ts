import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type UserState = {
  firstName: string;
  lastName: string;
  avtUri: string;
};

const initialState: UserState = {
  firstName: 'Nata',
  lastName: 'Vo',
  avtUri:
    'https://www.figma.com/file/xIST4wekmGsvoRDgHBVAMt/Donation-Mobile-App-(Community)?type=design&node-id=2-8&mode=dev',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName(state, { payload }: PayloadAction<string>) {
      state.firstName = payload;
    },
    resetState(state) {
      state = initialState;
    },
  },
});

export const { setFirstName, resetState } = userSlice.actions;
export const selectUser = ({ user }: RootState) => user;
export default userSlice.reducer;
