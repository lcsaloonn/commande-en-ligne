import { ListProductComponent } from "components/base/zindex";
import { productMock } from "mocks/product.mock";

const mock = productMock;
export function MainView() {
  return (
    <>
      <div className="main-view-body grid grid-cols-12 gap-4">
        <div className="main-view-body-products col-span-8">
          <ListProductComponent title={"Antipasti"} productList={mock} />
        </div>
        <div className="main-view-body-cart col-span-4"></div>
      </div>
    </>
  );
}
