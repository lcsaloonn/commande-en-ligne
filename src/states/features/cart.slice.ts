import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCart } from "mocks/initialCart.mock";
import { ICartItem } from "types/cart/cart.interface";
import { generateUniqueID } from "utils/generateId.utils";

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const data = { id: generateUniqueID(), ...action.payload };
      state.items.push(data);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const indexToRemove = state.items.findIndex((object) => {
        return object.id === action.payload;
      });
      state.items.splice(indexToRemove, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
