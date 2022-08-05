import React from "react";
import FormInput from "../../FormInput/FormInput";

const getInputs = (type) =>
  type === "experience" ? (
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

export default getInputs;
