import React, { useMemo } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import FormGroup from "../FormGroup/FormGroup";
import FormGroupList from "../FormGroup/FormGroupList";
import getInputs from "../FormGroup/helpers";
import Button from "../Button/Button";

function FormContainer() {
  const personalInputs = useMemo(() => getInputs("personal"), []);
  const educationInputs = useMemo(() => getInputs("education"), []);
  const experienceInputs = useMemo(() => getInputs("experience"), []);
  const matchMediaQuery = useMediaQuery("(max-width: 720px)");
  return (
    <form
      aria-label="Add information"
      className="text-neutral-200 flex flex-col gap-10 w-full align-center md:w-64 lg:w-80"
    >
      <FormGroup
        ariaLabel="Personal Information"
        title="Personal Information"
        inputs={personalInputs}
        modify="personal"
      />
      <FormGroupList inputs={educationInputs} type="education" />
      <FormGroupList inputs={experienceInputs} type="experience" />
      {matchMediaQuery && (
        <Button label="Show Preview" onClick={() => console.log("nada")} />
      )}
    </form>
  );
}

export default FormContainer;
