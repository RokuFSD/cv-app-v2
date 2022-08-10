import React from "react";

function FormInput({ id, label, type, required, onChange }) {
  function onImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      const image = URL.createObjectURL(e.target.files[0]);
      onChange({ id: e.target.id, value: image });
    }
  }
  function handleChange(e) {
    if (type === "file") {
      onImageChange(e);
    } else {
      onChange({
        id: e.target.id,
        value: e.target.value,
      });
    }
  }
  return (
    <div>
      <label htmlFor={id} className="flex flex-wrap gap-2 items-center">
        <span className="w-52">{label}</span>
        {type === "textarea" ? (
          <textarea
            id={id}
            className="bg-transparent rounded w-full md:w-80"
            required={required}
            onChange={handleChange}
          />
        ) : (
          <input
            type={type}
            id={id}
            className="bg-transparent rounded w-full md:w-80"
            required={required}
            onChange={handleChange}
          />
        )}
      </label>
    </div>
  );
}

export default FormInput;
