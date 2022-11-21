import { render } from "@testing-library/react";
import CartButtonComponent from "./cart-btn.component";
import { screen } from "@testing-library/react";

describe(CartButtonComponent, () => {
  const title = "Antipasti";
  const setup = () =>
    render(<CartButtonComponent text={title} isValide={false} />);

  it("should display correct props", () => {
    setup();
    const btnText = screen.getByTestId("btn");
    expect(btnText.textContent).toContain(title);
    expect(btnText.className).toBe("invalid");
  });
});
