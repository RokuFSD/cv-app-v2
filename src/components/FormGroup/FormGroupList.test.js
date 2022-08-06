import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormGroupList from "./FormGroupList";
import "@testing-library/jest-dom";
import { FormProvider } from "../../context/FormContext";

function AllProviders({ children }) {
  return <FormProvider>{children}</FormProvider>;
}
const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

beforeEach(() => {
  customRender(<FormGroupList type="experience" inputs={[]} />);
});

describe("FormGroupList mount", () => {
  it("renders without crashing", () => {
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });
});

describe("FormGroupList props", () => {
  it("should add a group", async () => {
    await userEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(screen.getAllByText(/experience/i)).toHaveLength(2);
  });
});
