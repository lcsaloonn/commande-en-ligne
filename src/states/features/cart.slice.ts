import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCart } from "types/cart/cart.interface";
import { ProductSelected } from "types/product/productSelected.interface";
import { generateUniqueID } from "utils/generateId.utils";

function updatePrice(totalPrice: number, oldprice: number, newPrice: number) {
  return totalPrice - oldprice + newPrice;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductSelected>) => {
      const data = { id: generateUniqueID(), item: action.payload };
      state.items.push(data);
      state.total += action.payload.totalProduct;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const indexToRemove = state.items.findIndex((object) => {
        return object.id === action.payload;
      });
      state.total -= state.items[indexToRemove].item.totalProduct;
      state.items.splice(indexToRemove, 1);
    },

    updateProductFromCart: (state, action: PayloadAction<ProductSelected>) => {
      const index = state.items.findIndex(
        (element) => element.id === action.payload.cartID
      );
      state.total = updatePrice(
        state.total,
        state.items[index].item.totalProduct,
        action.payload.totalProduct
      );

      state.items[index].item = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, updateProductFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
