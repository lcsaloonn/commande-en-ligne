import { TimePickerComponent } from "components/composite/button/z-index";
import { InputTextComponent, RadioButtonComponent } from "../element/z-index";
import "./order-information.scss";

export default function OrderInformationComponent() {
  return (
    <div className="order-information">
      <div className="basic-title">Informations</div>
      <TimePickerComponent nextTime="12:55" />
      <div className="order-information-gender">
        <RadioButtonComponent
          label="Mr"
          id="1"
          family="gender"
          isChecked={true}
        />
        <RadioButtonComponent label="Mme" id="2" family="gender" />
      </div>
      <InputTextComponent type="text" attributes={{ placeholder: "Prénom" }} />
      <InputTextComponent type="text" attributes={{ placeholder: "Nom" }} />
    </div>
  );
}
