import React from "react";
import { screen, render } from "@testing-library/react";
import FormGroup from "./FormGroup";
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
