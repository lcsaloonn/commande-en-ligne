import { SmoothScroll } from "service/smooth-scroll/smoothScroll.service";
import "./text-underline-animation.scss";

export function LinkUnderlineAnimation({ text }: { text: string }) {
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
