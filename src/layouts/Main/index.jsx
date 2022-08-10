import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import FormContainer from '../../components/FormContainer/FormContainer';
import CvPreview from '../../components/CvPreview/CvPreview';
import { FormProvider } from '../../context/FormContext';

function Main() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <main className="flex flex-col justify-around bg-gray-800 pt-24 pb-16 px-4 max-w-7xl mx-auto items-start md:flex-row">
      <FormProvider>
        <FormContainer onPrintClick={handlePrint} />
        <CvPreview ref={componentRef} />
      </FormProvider>
    </main>
  );
}

export default Main;
