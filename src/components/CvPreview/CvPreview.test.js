import React from "react";
import { render, screen } from "@testing-library/react";
import CvPreview from "./CvPreview";
import "@testing-library/jest-dom";

describe("CvPreview mount", () => {
  it("renders without crashing", () => {
    render(<CvPreview />);
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });
});
