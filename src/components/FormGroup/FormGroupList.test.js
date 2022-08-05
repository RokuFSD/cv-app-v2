import React from "react";
import { screen, render } from "@testing-library/react";
import FormGroupList from "./FormGroupList";
import "@testing-library/jest-dom";
import { FormProvider } from "../../context/FormContext";

const data = [{ type: "experience" }];

function AllProviders({ children }) {
  return <FormProvider>{children}</FormProvider>;
}
const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

describe("FormGroupList mount", () => {
  it("renders without crashing", () => {
    customRender(<FormGroupList items={data} />);
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });
});

describe("FormGroupList props", () => {
  it("should add a group", async () => {
    const { rerender } = customRender(<FormGroupList items={data} />);
    data.push({ type: "experience" });
    rerender(<FormGroupList items={data} />);
    expect(screen.getAllByText(/experience/i)).toHaveLength(2);
  });
});
