import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormContainer from "./FormContainer";

describe("FormContainer mount", () => {
  it("renders without crashing", () => {
    render(<FormContainer />);
    expect(
      screen.getByRole("form", { name: /add information/i })
    ).toBeInTheDocument();
  });
});

describe("FormContainer mount groups based on initial state", () => {
  it("renders two group with adding", () => {
    render(<FormContainer />);
    expect(screen.getAllByText("Education")).toHaveLength(1);
  });
});

describe("FormContainer change state", () => {
  beforeEach(() => {
    render(<FormContainer />);
  });
  it("should add a group", async () => {
    const button = screen.getAllByRole("button");
    await userEvent.click(button[0]);
    expect(screen.getAllByText("Education")).toHaveLength(2);
  });

  it("should remove a group", async () => {
    const button = screen.getAllByRole("button");
    await userEvent.click(button[1]);
    const group = screen.queryAllByText("Education");
    expect(group).toHaveLength(0);
  });
});
