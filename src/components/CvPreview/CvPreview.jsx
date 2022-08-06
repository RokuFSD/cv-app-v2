import React from "react";
import { useFormContext } from "../../context/FormContext";

function CvPreview() {
  const { personal } = useFormContext();
  return (
    <section>
      <div>
        <h2>{`Name: ${personal.firstName}${personal.lastName}`}</h2>
      </div>
    </section>
  );
}

export default CvPreview;
