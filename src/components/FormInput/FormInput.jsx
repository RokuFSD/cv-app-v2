import React from "react";

function FormInput({ id, label, type }) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input type={type} id={id} />
      </label>
    </div>
  );
}

export default FormInput;
