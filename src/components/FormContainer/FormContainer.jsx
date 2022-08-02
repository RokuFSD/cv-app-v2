import React from "react";
import { FormGroup, FormGroupWithAdding } from "../FormGroup/FormGroup";
import FormInput from "../FormInput/FormInput";

function FormContainer() {
  return (
    <form aria-label="Add information">
      <FormGroup ariaLabel="Personal Information" title="Personal Information">
        <FormInput id="firstName" label="First Name" type="text" />
      </FormGroup>
      {/* Only to see result */}
      <FormGroupWithAdding ariaLabel="School Information" title="Education" />
    </form>
  );
}

export default FormContainer;
