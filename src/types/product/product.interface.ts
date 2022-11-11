import { IImage } from "types/img.type";

export interface IProduct {
  id: number;
  title: string;
  category: ProductCategory;
  ingredients: string;
  price: number;
  extrasID: number;
  isAvalable: boolean;
  img: IImage;
}

export enum ProductCategory {
  STARTERS = 1,
  MAIN = 2,
  DERSERT = 3,
  DRINKS = 4,
  SIDES = 5,
}
