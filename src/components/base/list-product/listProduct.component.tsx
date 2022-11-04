import { ProductCardComponent } from "components/composite/cards";
import { IProduct } from "types/product/product.interface";
import "./listProduct.scss";

export function ListProductComponent({
  title,
  productList,
}: {
  title: string;
  productList: IProduct[];
}) {
  return (
    <div className="list-product">
      <div className="list-product-title">{title}</div>
      <div className="list-product-container grid grid-cols-12 gap-y-6 gap-x-3">
        {productList.map((item: IProduct, id: number) => (
          <div
            className="list-product-container-item col-span-9 xlp:col-span-6"
            key={id}
          >
            <ProductCardComponent
              title={item.title}
              text={item.text}
              price={item.price}
              img={item.img}
              isDisable={item.isDisable}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
