import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";

function Modal({ children, onClose }) {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.className =
      "flex items-center fixed z-10 h-screen w-screen bg-opacity-80 bg-black";
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(
    <>
      <Button onClick={onClose} type="icon" extraClasses={["absolute top-2"]}>
        <svg
          data-testid="close-icon"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
      {children}
    </>,
    elRef.current
  );
}

export default Modal;
