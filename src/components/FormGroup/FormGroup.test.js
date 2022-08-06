import React from "react";
import { screen, render } from "@testing-library/react";
import FormGroup from "./FormGroup";
import "@testing-library/jest-dom";

const inputs = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
  },
];

describe("Displays a valid form group", () => {
  it("should display a form group with a label and input", () => {
    render(
      <FormGroup
        title="Personal Information"
        ariaLabel="Personal Information"
        inputs={inputs}
      />
    );
    expect(screen.getAllByText("Personal Information")[0]).toBeInTheDocument();
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
  });
});
