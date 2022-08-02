import React from "react";
import { FormGroup, FormGroupWithAdding } from "../FormGroup/FormGroup";
import FormInput from "../FormInput/FormInput";

function FormContainer() {
  return (
    <form aria-label="Add information">
      {/* Only to see result */}
      <FormGroup ariaLabel="Personal Information" title="Personal Information">
        <FormInput id="firstName" label="First Name" type="text" />
      </FormGroup>
      <FormGroupWithAdding ariaLabel="School Information" title="Education" />
    </form>
  );
}

export default FormContainer;
