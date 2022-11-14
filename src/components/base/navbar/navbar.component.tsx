import { NavBarScrollComponent } from "components/composite/zindex";
import { useEffect, useState } from "react";
import { useAppSelector } from "states/hoocks";
import "./navbar.scss";

export function NavBarComponent() {
  const [isScroll, setIsScroll] = useState(false);
  const productCategory = useAppSelector(
    (state) => state.category.productCategory
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && isScroll === false) {
        setIsScroll(true);
      } else if (window.scrollY < 200 && isScroll === true) {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll]);

  if (!isScroll)
    return (
      <div className="nav-bar">
        <div className="nav-bar-left">
          <div className="nav-bar-title">
            <span>La Thomás</span>
            <span>Ristorante & Pizza</span>
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
  // with styky
  else
    return (
      <div className="nav-bar-sticky">
        <NavBarScrollComponent category={productCategory} />
      </div>
    );
}
