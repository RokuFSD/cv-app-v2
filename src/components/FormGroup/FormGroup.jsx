import React from "react";

function FormGroup({ ariaLabel, title, children }) {
  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-col gap-2">
      <h2 className="font-bold text-lg">{title}</h2>
      {children}
    </div>
  );
}

function withAdding(Component) {
  return function ComponentWithAdding(props) {
    const { children, onClickAdd, onClickRemove } = props;
    const buttonAdd = (
      <button type="button" onClick={onClickAdd}>
        Add
      </button>
    );
    const buttonRemove = (
      <button type="button" onClick={onClickRemove}>
        Remove
      </button>
    );
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...props}>
        {children}
        {buttonAdd}
        {buttonRemove}
      </Component>
    );
  };
}

const FormGroupWithAdding = withAdding(FormGroup);

export { FormGroup, FormGroupWithAdding };
