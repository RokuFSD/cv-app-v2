import React from "react";
import FormGroup from "../FormGroup/FormGroup";
import FormInput from "../FormInput/FormInput";
import FormGroupList from "../FormGroup/FormGroupList";
import { useFormContext } from "../../context/FormContext";

function FormContainer() {
  const data = useFormContext();
  return (
    <form
      aria-label="Add information"
      className="text-neutral-200 flex flex-col gap-10"
    >
      <FormGroup ariaLabel="Personal Information" title="Personal Information">
        <FormInput id="firstName" label="First Name" type="text" required />
        <FormInput id="lastname" label="Last Name" type="text" required />
        <FormInput id="title" label="Title" type="text" required />
        <FormInput id="address" label="Address" type="text" required />
        <FormInput id="phoneNumber" label="Phone Number" type="text" required />
        <FormInput id="email" label="Email" type="email" required />
        <FormInput id="description" label="Description" type="textarea" />
        <FormInput id="photo" label="Photo" type="file" required />
      </FormGroup>
      <FormGroupList items={data?.education} />
      <FormGroupList items={data?.experience} />
    </form>
  );
}

export default FormContainer;
