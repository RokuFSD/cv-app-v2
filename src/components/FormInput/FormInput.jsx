import React from "react";

function FormInput({ id, label, type, required, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="flex flex-wrap gap-2 items-center">
        <span className="w-52">{label}</span>
        {type === "textarea" ? (
          <textarea
            id={id}
            className="bg-transparent rounded w-80"
            required={required}
            onChange={(evt) => onChange(evt)}
          />
        ) : (
          <input
            type={type}
            id={id}
            className="bg-transparent rounded w-80"
            required={required}
            onChange={(evt) => onChange(evt)}
          />
        )}
      </label>
    </div>
  );
}

export default FormInput;
