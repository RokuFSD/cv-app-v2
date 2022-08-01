import React from "react";
import { screen, render } from "@testing-library/react";
import { FormGroup, FormGroupWithAdding } from "./FormGroup";
import "@testing-library/jest-dom";

describe("Displays a valid form group=", () => {
  it("should display a form group with a title", () => {
    render(
      <FormGroup
        title="Personal Information"
        ariaLabel="Personal Information"
      />
    );
    expect(screen.getAllByText("Personal Information")[0]).toBeInTheDocument();
  });
  it("should display a form group with a label and input", async () => {
    render(
      <FormGroup title="Personal Information" ariaLabel="Personal Information">
        <label htmlFor="firstName">
          First Name
          <input type="text" id="firstName" />
        </label>
      </FormGroup>
    );
    expect(await screen.getByLabelText("First Name")).toBeInTheDocument();
  });
});

describe("Displays a valid form group with adding", () => {
  it("should display a form group with two buttons", () => {
    render(
      <FormGroupWithAdding title="Educative Info" ariaLabel="Education info">
        <label htmlFor="school">
          School Name
          <input type="text" id="school" />
        </label>
      </FormGroupWithAdding>
    );
    const button = screen.getAllByRole("button");
    expect(screen.getByLabelText("School Name")).toBeInTheDocument();
    expect(button[0]).toBeInTheDocument();
    expect(button[1]).toBeInTheDocument();
  });
});
