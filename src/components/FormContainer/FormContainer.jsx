import React from "react";
import { FormGroup } from "../FormGroup/FormGroup";
import FormInput from "../FormInput/FormInput";
import useFormGroup from "../../hooks/useFormGroup";

function FormContainer() {
  /* TODO make the hook return the component to use children prop */
  const { formContent: educationContent } = useFormGroup("Education");
  const { formContent: jobContent } = useFormGroup("Job");
  return (
    <form aria-label="Add information" className="text-neutral-200">
      <FormGroup ariaLabel="Personal Information" title="Personal Information">
        <FormInput id="firstName" label="First Name" type="text" required />
      </FormGroup>
      {educationContent}
      {jobContent}
    </form>
  );
}

export default FormContainer;
