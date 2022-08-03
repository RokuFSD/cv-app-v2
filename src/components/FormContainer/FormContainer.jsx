import React, { useMemo, useState } from "react";
import { FormGroup, FormGroupWithAdding } from "../FormGroup/FormGroup";
import FormInput from "../FormInput/FormInput";

function getEducationGroup(educationGroup, callBack) {
  function handleAdd() {
    callBack(educationGroup + 1);
  }
  function handleRemove() {
    callBack(educationGroup - 1);
  }
  let educationContent = [];
  for (let i = 0; i < educationGroup; i += 1) {
    educationContent = [
      ...educationContent,
      <FormGroupWithAdding
        key={i}
        ariaLabel="Education"
        title="Education"
        onClickAdd={() => handleAdd()}
        onClickRemove={() => handleRemove()}
        lastOne={educationGroup === 1}
      />,
    ];
  }
  return educationContent;
}

function FormContainer() {
  const [educationGroup, setEducationGroup] = useState(1);
  const educationContent = useMemo(
    () => getEducationGroup(educationGroup, setEducationGroup),
    [educationGroup]
  );
  return (
    <form aria-label="Add information" className="text-neutral-200">
      <FormGroup ariaLabel="Personal Information" title="Personal Information">
        <FormInput id="firstName" label="First Name" type="text" required />
      </FormGroup>
      {educationContent}
    </form>
  );
}

export default FormContainer;
