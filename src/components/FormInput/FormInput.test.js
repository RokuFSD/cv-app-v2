import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInput from "./FormInput";

beforeEach(() => {
  window.URL.createObjectURL = jest.fn(); // mock the function
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
  it("should be required", () => {
    const input = screen.getByLabelText("First Name");
    expect(input).toHaveAttribute("required");
  });
});

describe("Triggers onChange", () => {
  it("Should call onChange", async () => {
    const mockFn = jest.fn();
    render(<FormInput type="text" label="Address" onChange={mockFn} />);
    await userEvent.type(screen.getByLabelText("Address"), "Test");
    expect(screen.getByLabelText("Address").value).toBe("Test");
  });
});

describe("Input file", () => {
  it("Should set file on change", async () => {
    const fakeFile = new File([""], "test.png", { type: "image/png" });
    render(<FormInput id="photo" type="file" label="photo" onChange={() => {}} />);
    const { getByLabelText } = screen;
    await userEvent.upload(getByLabelText("photo"), fakeFile)
    expect(getByLabelText("photo").files[0]).toBe(fakeFile);
  })
})
