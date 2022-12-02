import CartContainerComponent from "components/base/cart/cart-container/cart.container";
import { TimePickerComponent } from "components/composite/button/z-index";

export default function InformationPaiementView() {
  //if cart is empty return menu
  return (
    <div className="info-view">
      <div className="info-view-cart">
        <CartContainerComponent>
          <div></div>
        </CartContainerComponent>
      </div>
      <div className="info-view-information"></div>
      <div className="info-view-paiement"></div>
      <TimePickerComponent nextTime="12:55" />
    </div>
  );
}
