import { NavBarScrollComponent } from "components/composite/zindex";
import { useAppSelector } from "states/hoocks";
import "./navbar.scss";

export function NavBarComponent() {
  const productCategory = useAppSelector(
    (state) => state.category.productCategory
  );
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <div className="nav-bar-title">
          <span>La Thomás</span>
          <span>Ristorante & Pizza</span>{" "}
        </div>

        <div className="nav-bar-links">
          <NavBarScrollComponent category={productCategory} />
        </div>
      </div>
      <div className="nav-bar-right">
        <img src="../assets/img/header-img.png" alt="" />
      </div>
    </div>
  );
}
