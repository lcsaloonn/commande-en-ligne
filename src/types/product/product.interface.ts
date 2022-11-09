import { IImage } from "types/img.type";

export interface IProduct {
  id: number;
  title: string;
  ingredients: string;
  price: number;
  extrasID: number;
  isAvalable: boolean;
  img: IImage;
}
