import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInput from "./FormInput";

beforeEach(() => {
  const data = {
    id: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    onChange: jest.fn(),
  };
  render(
    <FormInput
      label={data.label}
      type={data.type}
      id={data.id}
      required
      onChange={data.onChange}
    />
  );
});

describe("FormInput mount", () => {
  it("renders without crashing", () => {
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
  });
});

describe("User enter text", () => {
  it("should display the text entered", async () => {
    const input = screen.getByLabelText("First Name");
    await userEvent.type(input, "John");
    expect(input).toHaveValue("John");
  });
  it("should be required", () => {
    const input = screen.getByLabelText("First Name");
    expect(input).toHaveAttribute("required");
  });
});
