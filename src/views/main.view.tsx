import {
  CartComponent,
  CartModalComponent,
  ListProductComponent,
} from "components/base/zindex";
import { productMock } from "mocks/product.mock";
import { useState } from "react";

const mock = productMock;
export function MainView() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="main">
      <div className="main-view-body grid grid-cols-12 gap-4">
        <div className="main-view-body-products col-span-8">
          <ListProductComponent title={"Antipasti"} productList={mock} />
        </div>

        <div className="main-view-body-cart col-span-4">
          <CartComponent />

          <CartModalComponent
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>
      </div>

      <button onClick={() => setOpenModal(!openModal)}>a</button>
    </div>
  );
}
