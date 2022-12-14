import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./index";
import "@testing-library/jest-dom";
import { FormProvider } from "../../context/FormContext";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

function AllProviders({ children }) {
  return (
    <FormProvider
      value={{
        personal: {
          firstName: "John",
        },
      }}
    >
      {children}
    </FormProvider>
  );
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

beforeEach(() => {
  customRender(<Main />);
});

describe("FormContainer update context", () => {
  it("should add a group", async () => {
    const button = screen.getAllByRole("button");
    await userEvent.click(button[0]);
    expect(screen.getAllByText(/education/i)).toHaveLength(3);
  });
  it("should change lastname", async () => {
    const input = screen.getByLabelText("Last Name");
    await userEvent.type(input, "Doe");
    expect(input).toHaveValue("Doe");
  });
});

describe("CvPreview use context", () => {
  it("display form data", async () => {
    const input = screen.getByLabelText("Last Name");
    await userEvent.type(input, "Dou");
    const preview = screen.getByText(/Dou/i);
    expect(preview).toBeInTheDocument();
  });
});
