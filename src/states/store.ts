import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products.slice";
import modalReducer from "./features/modal.slice";
import cartReducer from "./features/cart.slice";
import categoryReducer from "./features/category.slice";
import scrollReducer from "./features/scroll.slice";

const store = configureStore({
  reducer: {
    products: productReducer,
    modal: modalReducer,
    cart: cartReducer,
    category: categoryReducer,
    scroll: scrollReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
