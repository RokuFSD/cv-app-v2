import React from "react";
import Button from "../Button/Button";

function withAdding(Component) {
  return function ComponentWithAdding(props) {
    const { children, onClickAdd, onClickRemove, lastOne } = props;
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...props}>
        {children}
        <div className="flex w-full justify-center gap-8">
          <Button label="Add" onClick={onClickAdd} />
          <Button label="Remove" onClick={onClickRemove} disabled={lastOne} />
        </div>
      </Component>
    );
  };
}

function FormGroup({ ariaLabel, title, children }) {
  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-col gap-2">
      <h2 className="font-bold text-lg">{title}</h2>
      {children}
    </div>
  );
}

const FormGroupWithAdding = withAdding(FormGroup);

export { FormGroup, FormGroupWithAdding };
