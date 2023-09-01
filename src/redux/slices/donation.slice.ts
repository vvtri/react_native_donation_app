import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { donations } from '../../data/donation.data';

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
    },
  },
});

export const { resetDonation, setSelectedDonationId } = donationSlice.actions;
export default donationSlice.reducer;
