import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productMock } from "mocks/product.mock";
import { IProduct } from "types/product/product.interface";
import { IExtra, IExtras } from "types/product/extras.interface";
import { extrasMock } from "mocks/extras.mock";
import {
  defaultProductSelected,
  ProductSelected,
} from "types/product/productSelected.interface";

const extras: IExtras[] = extrasMock;
const initialProduct: IProduct[] = productMock;

export const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: initialProduct,
    productSelected: defaultProductSelected,
    extrasList: extras,
  },
  reducers: {
    updateSelectProduct: (state, action: PayloadAction<ProductSelected>) => {
      state.productSelected = action.payload;
    },
    selectProduct: (state, action: PayloadAction<IProduct>) => {
      state.productSelected = {
        product: action.payload,
        extras: [],
        quantity: 1,
        totalProduct: 0,
        isBeeingUpdate: false,
      };
    },

    addExtraToProductSelected: (state, action: PayloadAction<IExtra>) => {
      state.productSelected.extras.push(action.payload);
    },
    removeExtraToProductSelected: (state, action: PayloadAction<IExtra>) => {
      if (state.productSelected.extras.length) {
        const indexToRemove = state.productSelected.extras.findIndex(
          (object) => {
            return object.id === action.payload.id;
          }
        );
        state.productSelected.extras.splice(indexToRemove, 1);
      }
    },
  },
});

export const {
  selectProduct,
  updateSelectProduct,
  addExtraToProductSelected,
  removeExtraToProductSelected,
} = productSlice.actions;

export default productSlice.reducer;
