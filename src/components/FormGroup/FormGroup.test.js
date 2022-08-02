import React from "react";
import { screen, render } from "@testing-library/react";
import { FormGroup, FormGroupWithAdding } from "./FormGroup";
import FormInput from "../FormInput/FormInput";
import "@testing-library/jest-dom";

describe("Displays a valid form group", () => {
  it("should display a form group with a label and input", () => {
    render(
      <FormGroup title="Personal Information" ariaLabel="Personal Information">
        <FormInput label="First Name" type="text" id="firstName" />
      </FormGroup>
    );
    expect(screen.getAllByText("Personal Information")[0]).toBeInTheDocument();
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
  });
});

describe("Displays a valid form group with adding", () => {
  it("should display a form group with two buttons", () => {
    render(
      <FormGroupWithAdding
        title="Personal Information"
        ariaLabel="Personal Information"
      >
        <FormInput label="First Name" type="text" id="firstName" />
      </FormGroupWithAdding>
    );
    const button = screen.getAllByRole("button");
    expect(button[0]).toBeInTheDocument();
    expect(button[1]).toBeInTheDocument();
  });
});
