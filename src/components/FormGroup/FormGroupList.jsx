import React from "react";
import Button from "../Button/Button";
import FormGroup from "./FormGroup";
import {
  useFormContext,
  useFormDispatchContext,
} from "../../context/FormContext";

function FormGroupList({ inputs, type }) {
  const formGroupsData = useFormContext();
  const dispatch = useFormDispatchContext();
  const sectionQuantity = formGroupsData[type];
  return sectionQuantity?.map((item, index) => (
    <section key={item.id} className="flex flex-col gap-2">
      <FormGroup
        ariaLabel={item.type}
        title={item.type}
        inputs={inputs}
        modify={type}
        groupId={item.id}
      />
      <div className="flex w-full justify-center gap-8">
        {index === sectionQuantity.length - 1 && (
          <Button
            label="Add"
            onClick={() => dispatch({ type: `ADD_${item.type.toUpperCase()}` })}
          />
        )}
        <Button
          label="Remove"
          onClick={() =>
            dispatch({ type: `DELETE_${item.type.toUpperCase()}`, id: item.id })
          }
          disabled={sectionQuantity.length < 2}
        />
      </div>
    </section>
  ));
}

export default FormGroupList;
