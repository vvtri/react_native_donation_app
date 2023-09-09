import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { donations } from '../../data/donation.data';
import { RootState } from '../store';

export type Donation = {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: number[];
  price: string;
};

export type DonationState = {
  donations: Donation[];
  selectedDonationId?: number;
  selectedDonation?: Donation;
};

const initialState: DonationState = {
  donations,
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    resetDonation() {
      return initialState;
    },
    setSelectedDonationId(state, { payload }: PayloadAction<number>) {
      state.selectedDonationId = payload;
      state.selectedDonation = donations.find(
        item => item.donationItemId === payload,
      );
    },
  },
});

export const { resetDonation, setSelectedDonationId } = donationSlice.actions;
export const selectDonations = ({ donation }: RootState) => donation.donations;
export const selectSelectedDonation = ({ donation }: RootState) =>
  donation.selectedDonation;

export default donationSlice.reducer;
