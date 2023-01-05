import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ButtonTesting from "./ButtonTesting";

test("button should be disabled", () => {
    render(<ButtonTesting disabled = {true} />);
    const buttonElem = screen.getByTestId("buttonValue");
    expect(buttonElem).toHaveAttribute('disabled')
    expect(buttonElem).toBeDisabled();
})

test("button should not be disabled", () => {
    render(<ButtonTesting disabled = {false} />);
    const buttonElem = screen.getByTestId("buttonValue");
    expect(buttonElem).not.toHaveAttribute('disabled')
    expect(buttonElem).not.toBeDisabled();
})