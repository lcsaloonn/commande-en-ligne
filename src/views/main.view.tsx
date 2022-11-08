import {
  CartComponent,
  CartModalComponent,
  ChooseAdditionalComponent,
  ListProductComponent,
} from "components/base/zindex";
import { useState } from "react";
import { useAppSelector } from "states/hoocks";

export function MainView() {
  const [openModal, setOpenModal] = useState(false);
  const products = useAppSelector((state) => state.products).allProducts;
  const selectedProduct = useAppSelector(
    (state) => state.products.productSelected
  ).product;

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
            <ChooseAdditionalComponent product={selectedProduct} />
          </CartModalComponent>
        </div>
      </div>
    </div>
  );
}
