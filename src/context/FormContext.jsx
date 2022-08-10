import React, { createContext, useReducer } from 'react';
import { formReducer, initialForm } from '../reducers/FormReducer';

const FormContext = createContext(null);
const FormDispatchContext = createContext(null);

export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialForm);

  return (
    <FormContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return React.useContext(FormContext);
}

export function useFormDispatchContext() {
  return React.useContext(FormDispatchContext);
}
