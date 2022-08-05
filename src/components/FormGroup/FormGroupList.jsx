import React from "react";
import Button from "../Button/Button";
import FormGroup from "./FormGroup";
import getInputs from "./helpers";
import { useFormDispatchContext } from "../../context/FormContext";

function FormGroupList({ items }) {
  const dispatch = useFormDispatchContext();
  return items?.map((item, index) => (
    <section key={item.id} className="flex flex-col gap-2">
      <FormGroup ariaLabel={item.type} title={item.type}>
        {getInputs(item.type)}
      </FormGroup>
      <div className="flex w-full justify-center gap-8">
        {index === items.length - 1 && (
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
          disabled={items.length < 2}
        />
      </div>
    </section>
  ));
}

export default FormGroupList;
