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
    const { children, onClickAdd, onClickRemove, lastOne } = props;
    const buttonAdd = (
      <button className="btn" type="button" onClick={onClickAdd}>
        Add
      </button>
    );
    const buttonRemove = (
      <button
        className="btn"
        type="button"
        onClick={onClickRemove}
        disabled={lastOne}
      >
        Remove
      </button>
    );
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...props}>
        {children}
        <div className="flex w-full justify-center gap-8">
          {buttonAdd}
          {buttonRemove}
        </div>
      </Component>
    );
  };
}

const FormGroupWithAdding = withAdding(FormGroup);

export { FormGroup, FormGroupWithAdding };
