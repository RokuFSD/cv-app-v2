import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Modal from "./Modal"

beforeEach(() => {
  render(<div id="modal" />)
})

describe("Modal rendered correctly", () => {
  it("should render", () => {
    render(<Modal/>)
    expect(screen.getByTestId("close-icon")).toBeInTheDocument()
  })
})

describe("Modal close", () => {
  it("should close on button click", async () => {
    const handleClose = jest.fn()
    render(<Modal onClose={handleClose}/>)
    const button = screen.getByRole("button")
    await userEvent.click(button)
    expect(handleClose).toHaveBeenCalled()
  })
})
