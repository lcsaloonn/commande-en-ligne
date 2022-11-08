import { IExtras, TypeExtraEnum } from "types/product/extras.interface";

export const extrasMock: IExtras[] = [
  {
    id: 1,
    type: TypeExtraEnum.PIZZA,
    extras: [
      {
        id: 1,
        name: "Jambon Parma",
        price: 2.75,
        isSelected: false,
      },
      {
        id: 2,
        name: "Jambon blanc",
        price: 2.75,
        isSelected: false,
      },
      {
        id: 3,
        name: "Burrata",
        price: 3.5,
        isSelected: false,
      },
      {
        id: 4,
        name: "Salami Piccante",
        price: 3.5,
        isSelected: false,
      },
      {
        id: 5,
        name: "Champignon",
        price: 1,
        isSelected: false,
      },
    ],
  },
];
