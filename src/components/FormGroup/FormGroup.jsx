import React from "react";

function FormGroup({ ariaLabel, title, children }) {
  return (
    <div role="group" aria-label={ariaLabel}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default FormGroup;
