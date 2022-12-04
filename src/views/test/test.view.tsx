import { NavBarComponent } from "components/base/zindex";

import "./test.scss";
export function TestView() {
  return (
    <>
      <NavBarComponent />
      <div>
        <div id="antipasti" className="heigttest">
          antipasti
        </div>
        <div id="pizzas" className="heigttest">
          pizzas
        </div>
        <div id="3" className="heigttest">
          3
        </div>
        <div id="4" className="heigttest">
          4
        </div>
        <div id="softs" className="heigttest">
          softs
        </div>
        <div id="desserts" className="heigttest">
          desserts
        </div>
      </div>
    </>
  );
}
