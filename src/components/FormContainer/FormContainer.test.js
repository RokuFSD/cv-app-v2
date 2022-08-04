import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormContainer from "./FormContainer";

beforeEach(() => {
  render(<FormContainer />);
});

describe("FormContainer mount", () => {
  it("renders without crashing", () => {
    expect(
      screen.getByRole("form", { name: /add information/i })
    ).toBeInTheDocument();
  });
});

describe("FormContainer mount groups based on initial state", () => {
  it("renders two group with adding", () => {
    expect(screen.getAllByText("Education")).toHaveLength(1);
  });
});

describe("FormContainer change state", () => {
  it("should add a group", async () => {
    const button = screen.getAllByRole("button");
    await userEvent.click(button[0]);
    expect(screen.getAllByText("Education")).toHaveLength(2);
  });

  it("should remove a group", async () => {
    const button = screen.getAllByRole("button");
    await userEvent.click(button[0]);
    await userEvent.click(button[0]);
    await userEvent.click(button[1]);
    expect(screen.getAllByText("Education")).toHaveLength(2);
  });
});
