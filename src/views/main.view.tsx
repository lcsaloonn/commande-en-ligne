import {
  CartComponent,
  CartModalComponent,
  ListProductComponent,
  ModalContentCartComponent,
} from "components/base/zindex";
import { useAppSelector } from "states/hoocks";
import { IProductCategory } from "types/product-category/product-category.interface";
import { IProduct } from "types/product/product.interface";

export function MainView() {
  const { allProducts: products, productSelected } = useAppSelector(
    (state) => state.products
  );
  const productCategory = useAppSelector(
    (state) => state.category.productCategory
  );

  function findProductBycateogory(idCategory: number) {
    let array: IProduct[] = [];
    products.forEach((element) => {
      if (element.categoryID === idCategory) {
        array.push(element);
      }
    });
    return array;
  }

  return (
    <div className="main main-container">
      <div className="main-view-body grid grid-cols-12 gap-4">
        <div className="main-view-body-products col-span-12 md:col-span-7 xl:col-span-8">
          {productCategory.map((element: IProductCategory, key: number) => {
            return (
              <ListProductComponent
                title={element.name}
                productList={findProductBycateogory(element.id)}
                key={key}
              />
            );
          })}
        </div>

        <div className="main-view-body-cart md:col-span-5 xl:col-span-4">
          <CartComponent />

          <CartModalComponent>
            <ModalContentCartComponent productSelected={productSelected} />
          </CartModalComponent>
        </div>
      </div>
    </div>
  );
}
