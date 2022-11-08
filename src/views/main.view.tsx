import {
  CartComponent,
  CartModalComponent,
  ChooseAdditionalComponent,
  ListProductComponent,
} from "components/base/zindex";
import { useState } from "react";
import { useAppSelector } from "states/hoocks";

//A SUPP
const mock = {
  title: "Bustina Vert",
  ingredients:
    "Mozza fior di latte, Saumon frais, crème de mascarpone citronnée, ciboulette & échalotes coupées finement, épinard frais, parmigiano reggiano 22 mois AOP, tomates cerises.",
  price: 26.95,
  additionals: {
    title: "Pizza",
    additions: [
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
      {
        name: "Jambon Parma",
        price: 2.25,
      },
    ],
  },
};

export function MainView() {
  const [openModal, setOpenModal] = useState(false);
  const products = useAppSelector((state) => state.products).allProducts;
  const selectedProduct = useAppSelector(
    (state) => state.products.productSelected
  );

  function triggerModal() {
    setOpenModal(!openModal);
  }

  return (
    <div className="main">
      <div className="main-view-body grid grid-cols-12 gap-4">
        <div className="main-view-body-products col-span-8">
          <ListProductComponent
            title={"Antipasti"}
            productList={products}
            redirection={triggerModal}
          />
        </div>

        <div className="main-view-body-cart col-span-4">
          <CartComponent />

          <CartModalComponent
            open={openModal}
            onClose={() => setOpenModal(false)}
          >
            <ChooseAdditionalComponent
              title={selectedProduct.title}
              ingredients={selectedProduct.ingredients}
              additionals={mock.additionals}
              price={selectedProduct.price}
            />
          </CartModalComponent>
        </div>
      </div>
    </div>
  );
}
