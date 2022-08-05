import React from "react";
import FormContainer from "../../components/FormContainer/FormContainer";
import { FormProvider } from "../../context/FormContext";

function Main() {
  return (
    <main className="bg-gray-800 pt-24 pb-16 px-4 h-full sm:px-6">
      <FormProvider>
        <FormContainer />
      </FormProvider>
    </main>
  );
}

export default Main;
