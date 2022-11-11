import { IExtra } from "./extras.interface";
import { IProduct } from "./product.interface";

export interface ProductSelected {
  cartID?: string;
  product: IProduct;
  extras: IExtra[];
  quantity: number;
  totalProduct: number;
  isBeeingUpdate: boolean;
}

export const defaultProductSelected: ProductSelected = {
  product: {} as IProduct,
  extras: [] as IExtra[],
  quantity: 1,
  totalProduct: 0,
  isBeeingUpdate: false,
};
