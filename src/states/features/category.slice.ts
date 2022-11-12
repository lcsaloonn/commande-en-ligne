import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoryProductMock } from "mocks/category.mock";
import { IProductCategory } from "types/product-category/product-category.interface";

export const categorySlice = createSlice({
  name: "category",
  initialState: { productCategory: categoryProductMock },
  reducers: {
    addToCategory: (state, action: PayloadAction<IProductCategory>) => {
      state.productCategory.push(action.payload);
    },
  },
});
export const { addToCategory } = categorySlice.actions;
export default categorySlice.reducer;
