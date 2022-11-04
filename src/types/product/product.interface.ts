import { IImage } from "types/img.type";

export interface IProduct {
  title: string;
  text: string;
  price: number;
  isDisable: boolean;
  img: IImage;
}
