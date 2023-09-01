import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories } from '../../data/category.data';
import { RootState } from '../store';

export type Category = {
  categoryId: number;
  name: string;
};

export type CategoryState = {
  categories: Category[];
  selectedCategoryId?: number;
};

const initialState: CategoryState = {
  categories,
  selectedCategoryId: categories[0].categoryId,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    resetCategory() {
      return initialState;
    },
    setSelectedCategoryId(
      state,
      { payload }: PayloadAction<CategoryState['selectedCategoryId']>,
    ) {
      state.selectedCategoryId = payload;
    },
  },
});

export const { resetCategory, setSelectedCategoryId } = categorySlice.actions;
export const selectCategories = ({ category }: RootState) =>
  category.categories;
export const selectSelectedCategoryId = ({ category }: RootState) =>
  category.selectedCategoryId;

export default categorySlice.reducer;
