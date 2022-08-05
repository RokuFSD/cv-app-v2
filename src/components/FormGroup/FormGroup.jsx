import React from "react";

function FormGroup({ ariaLabel, title, children }) {
  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-col gap-2">
      <h2 className="font-bold text-lg capitalize">{title}</h2>
      {children}
    </div>
  );
}

export default FormGroup;
