import React from "react";
import FormContainer from "../../components/FormContainer/FormContainer";
import CvPreview from "../../components/CvPreview/CvPreview";
import { FormProvider } from "../../context/FormContext";

function Main() {
  return (
    <main className="flex bg-gray-800 pt-24 pb-16 px-4 h-full flex-col  gap-6 sm:px-6 md:flex-row lg:justify-around">
      <FormProvider>
        <FormContainer />
        <CvPreview />
      </FormProvider>
    </main>
  );
}

export default Main;
