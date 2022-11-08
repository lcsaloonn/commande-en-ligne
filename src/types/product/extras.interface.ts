export interface IExtras {
  id: number;
  type: TypeExtraEnum;
  extras: IExtra[];
}

export enum TypeExtraEnum {
  PIZZA = "pizza",
  DESSERT = "dessert",
  ANY = "any",
}

export interface IExtra {
  id: number;
  name: string;
  price: number;
  isSelected: boolean;
}
