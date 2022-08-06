import React from "react";

function FormInput({ id, label, type, required, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="flex flex-wrap gap-2 items-center">
        {label}
        {type === "textarea" ? (
          <textarea id={id} className="w-full" required={required} />
        ) : (
          <input
            type={type}
            id={id}
            className="bg-transparent rounded basis-full sm:basis-0"
            required={required}
            onChange={(evt) => onChange(evt)}
          />
        )}
      </label>
    </div>
  );
}

export default FormInput;
