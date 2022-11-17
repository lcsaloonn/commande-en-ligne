import { SmoothScroll } from "service/smooth-scroll/smoothScroll.service";
import "./text-underline-animation.scss";
// import { Link as Scroll } from "react-scroll";

export function LinkUnderlineAnimation({
  text,
  isActivate,
}: {
  text: string;
  isActivate: boolean;
}) {
  return (
    // surligné quand hover ou quand is activate is true

    <SmoothScroll
      offset={-100}
      // duration={500}
      href={text}
    >
      <span className="text-underline-a">{text}</span>
    </SmoothScroll>
  );
}
