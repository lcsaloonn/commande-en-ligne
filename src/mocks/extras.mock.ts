import { IExtras, TypeExtraEnum } from "types/product/extras.interface";

export const extrasMock: IExtras[] = [
  {
    id: 1,
    type: TypeExtraEnum.PIZZA,
    extras: [
      {
        name: "Jambon Parma",
        price: 2.75,
        isSelected: false,
      },
      {
        name: "Jambon blanc",
        price: 2.75,
        isSelected: false,
      },
      {
        name: "Burrata",
        price: 3.5,
        isSelected: false,
      },
      {
        name: "Salami Piccante",
        price: 3.5,
        isSelected: false,
      },
      {
        name: "Champignon",
        price: 1,
        isSelected: false,
      },
    ],
  },
];
