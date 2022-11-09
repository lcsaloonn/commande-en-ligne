import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCart } from "mocks/initialCart.mock";
import { ICartItem } from "types/cart/cart.interface";

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
