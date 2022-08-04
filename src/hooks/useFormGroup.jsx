import React, { useMemo, useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import { FormGroupWithAdding } from "../components/FormGroup/FormGroup";

function getInputs(type) {
  return type === "experience" ? (
    <>
      <FormInput type="text" id="position" label="Position" required />
      <FormInput type="text" id="company" label="Company" required />
      <FormInput type="text" id="jobCity" label="City" required />
      <FormInput type="text" id="jobFrom" label="From" required />
      <FormInput type="text" id="jobTo" label="To" required />
    </>
  ) : (
    <>
      <FormInput
        type="text"
        id="universityName"
        label="University Name"
        required
      />
      <FormInput type="text" id="schoolCity" label="City" required />
      <FormInput type="text" id="degree" label="Degree" required />
      <FormInput type="text" id="schoolFrom" label="From" required />
      <FormInput type="text" id="schoolTo" label="To" required />
    </>
  );
}

export default function useFormGroup(label) {
  const [formGroup, setFormGroup] = useState(1);
  const formContent = useMemo(() => {
    let content = [];
    for (let i = 0; i < formGroup; i += 1) {
      content = [
        ...content,
        <FormGroupWithAdding
          key={i}
          ariaLabel={`${label}`}
          title={`${label}`}
          onClickAdd={() => setFormGroup(formGroup + 1)}
          onClickRemove={() => setFormGroup(formGroup - 1)}
          lastOne={formGroup === 1}
        >
          {getInputs(label)}
        </FormGroupWithAdding>,
      ];
    }
    return content;
  }, [formGroup]);
  return { formContent };
}
