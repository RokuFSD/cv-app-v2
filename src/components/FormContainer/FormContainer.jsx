import React from "react";
import { FormGroup, FormGroupWithAdding } from "../FormGroup/FormGroup";

function FormContainer() {
  return (
    <form aria-label="Add information">
      {/* Only to see result */}
      <FormGroup
        ariaLabel="Personal Information"
        title="Personal Information"
      />
      <FormGroupWithAdding ariaLabel="School Information" title="Education" />
    </form>
  );
}

export default FormContainer;
