import React from "react";
import { render } from "@testing-library/react";
import Main from "./index";
import "@testing-library/jest-dom";

describe("Main mount", () => {
  it("renders without crashing", () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
