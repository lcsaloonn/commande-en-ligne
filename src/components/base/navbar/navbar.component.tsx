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
      <div className="nav-bar grid grid-cols-6 md:grid-cols-12 gap-3">
        <div className="col-start-2 col-end-4 md:col-end-8 lg:col-end-10 flex flex-col">
          <div className="nav-bar-title">
            <span>La Thomás</span>
            <span>Ristorante & Pizza</span>
          </div>
          <div className="nav-bar-links" ref={menu}>
            <NavBarScrollComponent category={productCategory} />
          </div>
        </div>
        <div className="nav-bar-img md:col-span-4 lg:col-span-3">
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
