import { NavBarScrollComponent } from "components/composite/zindex";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "states/hoocks";
import "./navbar.scss";

export function NavBarComponent() {
  const [isScroll, setIsScroll] = useState(false);
  const productCategory = useAppSelector(
    (state) => state.category.productCategory
  );
  const menu = useRef<HTMLInputElement>(null);
  // menu.current.offsetTop
  useEffect(() => {
    const handleScroll = () => {
      if (menu.current)
        if (window.scrollY >= menu.current.offsetTop && isScroll === false) {
          setIsScroll(true);
        } else if (
          window.scrollY < menu.current.offsetTop + 10 &&
          isScroll === true
        ) {
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

          <div className="nav-bar-links" ref={menu}>
            <NavBarScrollComponent category={productCategory} />
          </div>
        </div>
        <div className="nav-bar-right">
          <img src="../assets/img/header-img.png" alt="" />
        </div>
      </div>
    );
  else
    return (
      <div className="fixed top-0 w-full h-auto">
        <div className="nav-bar-sticky relative" ref={menu}>
          <NavBarScrollComponent category={productCategory} />
        </div>
      </div>
    );
}
