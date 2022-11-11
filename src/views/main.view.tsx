import {
  CartComponent,
  CartModalComponent,
  ListProductComponent,
  ModalContentCartComponent,
} from "components/base/zindex";
import { useAppSelector } from "states/hoocks";
import { ProductCategory } from "types/product/product.interface";

export function MainView() {
  const products = useAppSelector((state) => state.products).allProducts;
  const selectedProduct = useAppSelector(
    (state) => state.products.productSelected
  );

  return (
    <div className="main main-container">
      <div className="main-view-body grid grid-cols-12 gap-4">
        <div className="main-view-body-products col-span-12 md:col-span-7 xl:col-span-8">
          <ListProductComponent
            title={"Antipasti"}
            productList={products}
            productCategory={ProductCategory.STARTERS}
          />
          <ListProductComponent
            title={"Pizzas"}
            productList={products}
            productCategory={ProductCategory.MAIN}
          />
        </div>

        <div className="main-view-body-cart md:col-span-5 xl:col-span-4">
          <CartComponent />

          <CartModalComponent>
            <ModalContentCartComponent productSelected={selectedProduct} />
          </CartModalComponent>
        </div>
      </div>
    </div>
  );
}
