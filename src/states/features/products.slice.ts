import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productMock } from "mocks/product.mock";
import { IProduct } from "types/product/product.interface";
import { IExtra, IExtras } from "types/product/extras.interface";
import { extrasMock } from "mocks/extras.mock";

const extras: IExtras[] = extrasMock;
const initialProduct: IProduct[] = productMock;

export const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: initialProduct,
    productSelected: {
      product: initialProduct[1],
      extras: [
        {
          id: 2,
          name: "Jambon blanc",
          price: 2.75,
          isSelected: false,
        },
      ],
    },
    extrasList: extras,
  },
  reducers: {
    selectProduct: (state, action: PayloadAction<IProduct>) => {
      state.productSelected.product = action.payload;
      state.productSelected.extras = [];
    },

    addExtraToProductSelected: (state, action: PayloadAction<IExtra>) => {
      state.productSelected.extras.push(action.payload);
    },
    removeExtraToProductSelected: (state, action: PayloadAction<IExtra>) => {
      const indexToRemove = state.productSelected.extras.findIndex((object) => {
        return object.id === action.payload.id;
      });
      state.productSelected.extras.splice(indexToRemove, 1);
    },
  },
});

export const {
  selectProduct,
  addExtraToProductSelected,
  removeExtraToProductSelected,
} = productSlice.actions;

export default productSlice.reducer;
