import React, { useId } from "react";
import FormInput from "../FormInput/FormInput";
import { useFormDispatchContext } from "../../context/FormContext";

function FormGroup({ ariaLabel, title, inputs, modify, groupId }) {
  const idReact = useId();
  const dispatch = useFormDispatchContext();

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({
      type: `UPDATE_${modify.toUpperCase()}`,
      id,
      value,
      groupId,
    });
  };
  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-col gap-2">
      <h2 className="font-bold text-lg capitalize">{title}</h2>
      {inputs.map((input, index) => (
        <FormInput
          key={`${idReact}-${index}`}
          {...input}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}

export default FormGroup;
