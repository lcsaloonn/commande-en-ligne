import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productMock } from "mocks/product.mock";
import { IProduct } from "types/product/product.interface";

const initialProduct: IProduct[] = productMock;

export const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: initialProduct,
    productSelected: initialProduct[1],
  },
  reducers: {
    // triggerProduct: (state, action: PayloadAction<number>) => {
    //   state.find((p) => p.id === action.payload);
    // },
    selectProduct: (state, action: PayloadAction<IProduct>) => {
      state.productSelected = action.payload;
    },
  },
});

export const { selectProduct } = productSlice.actions;

export default productSlice.reducer;
