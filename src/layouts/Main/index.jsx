import React from 'react';
import FormContainer from '../../components/FormContainer/FormContainer';
import CvPreview from '../../components/CvPreview/CvPreview';
import { FormProvider } from '../../context/FormContext';

function Main() {
  return (
    <main className="flex flex-col justify-around bg-gray-800 pt-24 pb-16 px-4 max-w-7xl mx-auto items-start md:flex-row">
      <FormProvider>
        <FormContainer />
        <CvPreview />
      </FormProvider>
    </main>
  );
}

export default Main;
