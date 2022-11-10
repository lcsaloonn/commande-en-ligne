import { IExtra } from "./extras.interface";
import { IProduct } from "./product.interface";

export interface ProductSelected {
  product: IProduct;
  extras: IExtra[];
  quantity: number;
  totalProduct: number;
}

export const defaultProductSelected: ProductSelected = {
  product: {} as IProduct,
  extras: [] as IExtra[],
  quantity: 0,
  totalProduct: 0,
};
