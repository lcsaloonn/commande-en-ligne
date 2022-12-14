import { ProductCardComponent } from "components/composite/cards/zindex";

import { IProduct } from "types/product/product.interface";
import "./listProduct.scss";

export function ListProductComponent({
  title,
  productList,
}: {
  title: string;
  productList: IProduct[];
}) {
  if (productList.length) {
    return (
      <div className="list-product" id={title.toLocaleLowerCase()}>
        <div className="list-product-title">{title}</div>
        <div className="list-product-container grid grid-cols-6 md:grid-cols-12 gap-y-6 gap-x-3">
          {productList.map((item: IProduct, id: number) => (
            <div
              className="list-product-container-item col-span-6 md:col-span-9 xl:col-span-6 2xl:col-span-5"
              key={id}
            >
              <ProductCardComponent
                product={item}
                isDisable={!item.isAvalable}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
