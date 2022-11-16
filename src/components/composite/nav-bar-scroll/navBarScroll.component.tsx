import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./navBarScroll.scss";
import { useRef } from "react";
import { TextUnderlineAnimation } from "../text/zindex";

export function NavBarScrollComponent({
  category,
}: {
  category: { id: number; name: string }[];
}) {
  const slider = useRef<HTMLInputElement>(null);

  function slide(dirrection: "right" | "left") {
    if (slider.current) {
      if (dirrection === "left")
        slider.current.scrollLeft = slider.current.scrollLeft - 150;
      else if (dirrection === "right")
        slider.current.scrollLeft = slider.current.scrollLeft + 150;
    }
  }
  return (
    <div className="nav-bar-scroll">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="nav-bar-scroll-icons"
        onClick={() => slide("left")}
      />
      <div className="nav-bar-scroll-items scrollbar-hide" ref={slider}>
        {category.map((element, number) => (
          <TextUnderlineAnimation
            text={element.name}
            isActivate={true}
            key={number}
          />
        ))}
      </div>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="nav-bar-scroll-icons"
        onClick={() => slide("right")}
      />
    </div>
  );
}
