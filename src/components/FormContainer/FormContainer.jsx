import React from "react";
import FormGroup from "../FormGroup/FormGroup";

function FormContainer() {
  return (
    <form aria-label="Add information">
      <FormGroup
        ariaLabel="Personal Information"
        title="Personal Information"
      />
    </form>
  );
}

export default FormContainer;
