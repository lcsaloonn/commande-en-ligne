export function SmoothScroll({
  children,
  offset,
  href,
}: {
  children: JSX.Element;
  href: string;
  offset: number;
}) {
  function handleClick() {
    const element = document.getElementById(href.toLowerCase());
    if (element != null) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  return (
    <div className="smooth-scroll" onClick={() => handleClick()}>
      {children}
    </div>
  );
}
