import "./text-underline-animation.scss";

export function TextUnderlineAnimation({
  text,
  isActivate,
}: {
  text: string;
  isActivate: boolean;
}) {
  return (
    // surligné quand hover ou quand is activate is true
    <a className="text-underline-a" href={`#${text}`}>
      {text}
    </a>
  );
}
