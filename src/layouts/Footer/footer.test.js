import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./index";

beforeEach(() => {
  render(<Footer />);
});

describe("Footer mount", () => {
  it("renders without crashing", () => {
    expect(screen.getByText("RokuFSD")).toBeInTheDocument();
  });
});
