import React from "react";

function FormInput({ id, label, type, required }) {
  return (
    <div>
      <label htmlFor={id} className="flex flex-wrap gap-2 items-center">
        {label}
        <input
          type={type}
          id={id}
          className="bg-transparent rounded basis-full sm:basis-0"
          required={required ? "required" : null}
        />
      </label>
    </div>
  );
}

export default FormInput;
