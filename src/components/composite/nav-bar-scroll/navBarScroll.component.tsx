import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./navBarScroll.scss";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
      <div
        ref={slider}
        className="h-full w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
      >
        {category.map((element, number) => (
          <Link
            className="nav-bar-scroll-item items-center"
            key={number}
            to={"#"}
          >
            {element.name}
          </Link>
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
