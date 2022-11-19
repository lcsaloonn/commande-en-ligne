import { NavBarScrollComponent } from "components/composite/zindex";
import { useEffect, useRef, useState } from "react";
import { updateScroll } from "states/features/scroll.slice";

import { useAppDispatch, useAppSelector } from "states/hoocks";
import "./navbar.scss";

export function NavBarComponent() {
  const [isScroll, setIsScroll] = useState(false);
  const dispatch = useAppDispatch();
  const productCategory = useAppSelector(
    (state) => state.category.productCategory
  );
  const menu = useRef<HTMLInputElement>(null);
  const nav = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (menu.current && nav.current)
        if (window.scrollY >= nav.current.offsetTop && isScroll === false) {
          setIsScroll(true);
          dispatch(updateScroll(true));
        } else if (
          window.scrollY < menu.current.offsetHeight - 96 &&
          isScroll === true
        ) {
          setIsScroll(false);
          dispatch(updateScroll(false));
        }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll]);

  return (
    <div className="nav-bar grid grid-cols-6 md:grid-cols-12 gap-3" ref={menu}>
      <div className="col-start-2 col-end-4 md:col-end-8 lg:col-end-10 flex flex-col">
        <div className="nav-bar-title">
          <span>La Thomás</span>
          <span>Ristorante & Pizza</span>
        </div>
        <div className={` nav-bar-links ${isScroll ? "sticky" : ""}`} ref={nav}>
          <NavBarScrollComponent category={productCategory} />
        </div>
      </div>
      <div className="nav-bar-img md:col-span-4 lg:col-span-3 ">
        <img
          src="../assets/img/header-img.png"
          alt=""
          className={isScroll ? "hidden" : ""}
        />
      </div>
    </div>
  );
}
