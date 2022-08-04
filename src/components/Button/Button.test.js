import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button mount", () => {
  it("receives valid props", async () => {
    const mockCallback = jest.fn();
    render(<Button label="Submit" onClick={mockCallback} />);
    await userEvent.click(screen.getByRole("button"));
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  it("is disabled when disabled prop is true", async () => {
    const mockCallback = jest.fn();
    render(<Button label="Submit" onClick={mockCallback} disabled />);
    await userEvent.click(screen.getByRole("button"));
    expect(mockCallback.mock.calls.length).toBe(0);
  });
});
