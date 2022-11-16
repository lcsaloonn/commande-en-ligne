import { IProduct } from "types/product/product.interface";

export const productMock: IProduct[] = [
  {
    id: 1,
    title: "BURRATA NATURE",
    categoryID: 1,
    ingredients: "Filet d'huile d'olive, roquette, sel, poivre.",
    price: 7.0,
    isAvalable: true,
  },
  {
    id: 2,
    title: "BURRATA TRUFFE",
    categoryID: 1,
    ingredients: "Huile d'olive, sel, poivre.",
    price: 8.0,
    isAvalable: true,
    img: {
      link: "../assets/test-produit.jpg",
      alt: "#",
    },
  },
  {
    id: 3,
    title: "BURRATA FUMEE SPECK",
    categoryID: 1,
    ingredients:
      "Speck AOP, tomates confites, roquette, huile d'olive, sel, poivre.",
    price: 11.0,
    isAvalable: true,
    img: {
      link: "../assets/img/product-img/burrata-fumee-speck.jpg",
      alt: "burrata-fumee-speck",
    },
  },
  {
    id: 4,
    title: "ASSORTIMENT CHARCUTERIE",
    categoryID: 1,
    ingredients: "",
    price: 12.0,
    isAvalable: true,
  },
  {
    id: 5,
    title: "PETIT PAIN PARMESAN",
    categoryID: 1,
    ingredients: "Fait maison.",
    price: 7.0,
    isAvalable: false,
    img: {
      link: "../assets/img/product-img/petit-apin-maison.jpg",
      alt: "petit pain maison",
    },
  },
  {
    id: 6,
    title: "Thomás PARMA",
    categoryID: 2,
    ingredients:
      "Mozza fior di latte, jambon di parma AOP, tomates confites, touche de pesto maison, provolone fumé, copeaux de parmigiano reggiano 22 mois AOP, roquette, crème balsamique, origan.",
    price: 14.0,
    extrasID: 1,
    isAvalable: true,
    img: {
      link: "../assets/img/product-img/thomas-parma.jpg",
      alt: "thomas-parma",
    },
  },
  {
    id: 7,
    title: "Thomás Saumon",
    categoryID: 2,
    ingredients:
      "Mozza fior di latte, Saumon frais, crème de mascarpone citronnée, ciboulette & échalotes coupées finement, épinard frais, parmigiano reggiano 22 mois AOP, tomates cerises.",
    price: 16.0,
    extrasID: 1,
    isAvalable: true,
    img: {
      link: "../assets/img/product-img/thomas-saumon.jpg",
      alt: "thomas-saumon",
    },
  },
  {
    id: 8,
    title: "Thomás POLLO",
    categoryID: 2,
    ingredients:
      "Mozza fior di latte, Poulet fermier, provolone fumé, oignons rouges, parmigiano reggiano 22 mois AOP, tomates confites, roquette, crème de balsamique.",
    price: 14.0,
    extrasID: 1,
    isAvalable: true,
    img: {
      link: "../assets/img/product-img/thomas-pollo.jpg",
      alt: "thomas-pollo",
    },
  },

  {
    id: 9,
    title: "MARGHERITA",
    categoryID: 3,
    ingredients: "Sauce tomate, mozza fior di latte, basilic frais.",
    price: 10.0,
    extrasID: 1,
    isAvalable: true,
    img: {
      link: "../assets/img/product-img/margherita.jpg",
      alt: "margherita",
    },
  },

  {
    id: 10,
    title: "FUMO MARGHERITA",
    categoryID: 3,
    ingredients: "Sauce tomate, mozza fior di latte fumée, basilic frais.",
    price: 11.0,
    extrasID: 1,
    isAvalable: true,
    img: {
      link: "../assets/img/product-img/fumo-margherita.jpg",
      alt: "fumo-margherita",
    },
  },
  {
    id: 11,
    title: "REGINA",
    categoryID: 3,
    ingredients:
      "Sauce tomate, mozza fior di latte, jambon blanc supérieur grillé au romarin, champignons frais de Paris.",
    price: 14.0,
    extrasID: 1,
    isAvalable: true,
    img: {
      link: "../assets/img/product-img/regina.jpg",
      alt: "regina",
    },
  },
  {
    id: 12,
    title: "5 FORMAGGI",
    categoryID: 3,
    ingredients:
      "Crème de parmigiano reggiano 22 mois AOP, mozza fior di latte, gorgonzola doux AOP, provolone fumé, pecorino AOP, poivre noir.",
    price: 14.0,
    extrasID: 1,
    isAvalable: true,
    img: {
      link: "../assets/img/product-img/5-fromagi.jpg",
      alt: "5 fromagi",
    },
  },
  {
    id: 6,
    title: "BUSTINA PARMA",
    categoryID: 7,
    ingredients:
      " Mozza fior di latte, Saumon frais, crème de mascarpone citronnée, ciboulette & échalotes coupées finement, épinard frais, parmigiano reggiano 22 mois AOP, tomates cerises.",
    price: 44.0,
    extrasID: 1,
    isAvalable: false,
  },
];
