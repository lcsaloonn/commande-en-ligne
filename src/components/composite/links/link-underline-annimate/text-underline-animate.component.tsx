import "./text-underline-animation.scss";
import { Link as Scroll } from "react-scroll";

export function LinkUnderlineAnimation({
  text,
  isActivate,
}: {
  text: string;
  isActivate: boolean;
}) {
  return (
    // surligné quand hover ou quand is activate is true
    <Scroll
      className="text-underline-a"
      to={text}
      spy={true}
      offset={50}
      smooth={true}
      duration={500}
    >
      {text}
    </Scroll>
  );
}
