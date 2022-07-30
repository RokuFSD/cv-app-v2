import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./index";

describe("Header mount", () => {
  it("renders without crashing", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  it("renders the correct text", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toHaveTextContent("CV-App");
  });
});
