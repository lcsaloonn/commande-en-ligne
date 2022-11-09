import { IExtra } from "types/product/extras.interface";
import { IProduct } from "types/product/product.interface";

export interface ICart {
  items: ICartItem[];
  amountItems: number;
  total: number;
}

export interface ICartItem {
  id?: string;
  product: IProduct;
  extras: IExtra[] | null;
  quantity: number;
  totalProduct: number;
}
