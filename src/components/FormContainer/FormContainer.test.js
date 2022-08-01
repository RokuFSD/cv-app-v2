import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormContainer from "./FormContainer";

describe("FormContainer mount", () => {
  it("renders without crashing", () => {
    render(<FormContainer />);
    expect(
      screen.getByRole("form", { name: /add information/i })
    ).toBeInTheDocument();
  });
});
