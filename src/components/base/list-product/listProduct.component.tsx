import { ProductCardComponent } from "components/composite/cards/zindex";
import { IProduct, ProductCategory } from "types/product/product.interface";
import "./listProduct.scss";

export function ListProductComponent({
  title,
  productList,
  productCategory,
}: {
  title: string;
  productList: IProduct[];
  productCategory: ProductCategory;
}) {
  const products = productList.filter(
    (element) => element.category === productCategory
  );

  return (
    <div className="list-product">
      <div className="list-product-title">{title}</div>
      <div className="list-product-container grid grid-cols-12 gap-y-6 gap-x-3">
        {products.map((item: IProduct, id: number) => (
          <div
            className="list-product-container-item col-span-9 xlp:col-span-6"
            key={id}
          >
            <ProductCardComponent product={item} isDisable={item.isAvalable} />
          </div>
        ))}
      </div>
    </div>
  );
}
