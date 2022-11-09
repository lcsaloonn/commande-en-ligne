import { ICart, ICartItem } from "types/cart/cart.interface";

export const initialCart: ICart = {
  items: [] as ICartItem[],
  amountItems: 0,
  total: 0,
};
