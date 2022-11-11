import { ProductSelected } from "types/product/productSelected.interface";

export interface ICart {
  items: ICartItem[];
  amountItems: number;
  total: number;
}

export interface ICartItem {
  id: string;
  item: ProductSelected;
}

export const initialCart: ICart = {
  items: [] as ICartItem[],
  amountItems: 0,
  total: 0,
};
