import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormContainer from "./FormContainer";
import { FormProvider } from "../../context/FormContext";
import idDate from "../../helpers";

const stateReducer = {
  education: [
    {
      id: idDate(),
      universityName: "",
      schoolCity: "",
      degree: "",
      schoolFrom: "",
      schoolTo: "",
      type: "education",
    },
  ],
};

function AllProviders({ children }) {
  return <FormProvider value={stateReducer}>{children}</FormProvider>;
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

beforeEach(() => {
  customRender(<FormContainer />);
});

describe("FormContainer mount", () => {
  it("renders without crashing", () => {
    expect(
      screen.getByRole("form", { name: /add information/i })
    ).toBeInTheDocument();
  });
});

describe("FormGroupWithAdding mount groups based on initial state", () => {
  it("renders two group with adding", () => {
    expect(screen.getAllByText(/education/i)).toHaveLength(1);
  });
});

describe("FormContainer use context", () => {
  it("should add a group", async () => {
    const button = screen.getAllByRole("button");
    await userEvent.click(button[0]);
    expect(screen.getAllByText(/education/i)).toHaveLength(2);
  });

  it("should remove a group", async () => {
    let buttons = screen.getAllByRole("button");
    await userEvent.click(buttons[0]);
    buttons = screen.getAllByRole("button");
    await userEvent.click(buttons[1]);
    await userEvent.click(buttons[0]);
    expect(screen.getAllByText(/education/i)).toHaveLength(2);
  });
});
