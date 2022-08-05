import React, { useMemo } from "react";
import Button from "../Button/Button";
import FormGroup from "./FormGroup";
import getInputs from "./helpers";
import {
  useFormContext,
  useFormDispatchContext,
} from "../../context/FormContext";

function FormGroupList({ type }) {
  const dispatch = useFormDispatchContext();
  const formGroupsData = useFormContext();
  const inputs = useMemo(() => getInputs(type), [type]);
  const items = formGroupsData[type];
  return items?.map((item, index) => (
    <section key={item.id} className="flex flex-col gap-2">
      <FormGroup ariaLabel={item.type} title={item.type}>
        {inputs}
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
