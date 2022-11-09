import {
  CartComponent,
  CartModalComponent,
  ListProductComponent,
  ModalContentCartComponent,
} from "components/base/zindex";
import { useAppSelector } from "states/hoocks";

export function MainView() {
  const products = useAppSelector((state) => state.products).allProducts;
  const selectedProduct = useAppSelector(
    (state) => state.products.productSelected
  ).product;

  return (
    <div className="main main-container">
      <div className="main-view-body grid grid-cols-12 gap-4">
        <div className="main-view-body-products col-span-8">
          <ListProductComponent title={"Antipasti"} productList={products} />
        </div>

        <div className="main-view-body-cart col-span-4">
          <CartComponent />

          <CartModalComponent>
            <ModalContentCartComponent product={selectedProduct} />
          </CartModalComponent>
        </div>
      </div>
    </div>
  );
}
