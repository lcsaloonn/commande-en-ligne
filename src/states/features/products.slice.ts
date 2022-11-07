import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productMock } from "mocks/product.mock";
import { IProduct } from "types/product/product.interface";

const initialState: IProduct[] = productMock;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<IProduct[]>) => {
      state = action.payload;
    },
  },
});

export const { create } = productSlice.actions;

export default productSlice.reducer;
