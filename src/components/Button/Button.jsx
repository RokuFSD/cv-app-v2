import React from "react";

function Button({ label, onClick, disabled }) {
  return (
    <button
      className="btn"
      type="button"
      onClick={onClick}
      disabled={disabled || null}
    >
      {label}
    </button>
  );
}

export default Button;
