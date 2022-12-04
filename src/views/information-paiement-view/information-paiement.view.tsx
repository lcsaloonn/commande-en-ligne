import CartContainerComponent from "components/base/cart/cart-container/cart.container";
import OrderInformationComponent from "components/composite/form/order-information/order-information.form.component";

export default function InformationPaiementView() {
  //if cart is empty return menu
  return (
    <div className="info-view mx-40">
      <div className="grid grid-cols-12 gap-10">
        <div className="info-view-cart col-span-4">
          <CartContainerComponent>
            <div></div>
          </CartContainerComponent>
        </div>
        <div className="info-view-information col-span-4">
          <OrderInformationComponent />
        </div>
        <div className="info-view-paiement col-span-4"></div>

        <input type="checkbox" />
      </div>
    </div>
  );
}
