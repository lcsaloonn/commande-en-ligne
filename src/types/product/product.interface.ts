import { IImage } from "types/img.type";

export interface IProduct {
  id: number;
  title: string;
  ingredients: string;
  price: number;
  extrasID: number;
  isDisable: boolean;
  img: IImage;
}
