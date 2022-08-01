import React from "react";

function FormGroup({ ariaLabel, title, children }) {
  return (
    <div role="group" aria-label={ariaLabel}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function withAdding(Component) {
  const buttonAdd = <button type="button">Add</button>;
  const buttonRemove = <button type="button">Remove</button>;
  return function ComponentWithAdding(props) {
    const { children } = props;
    return (
      <Component>
        {children}
        {buttonAdd}
        {buttonRemove}
      </Component>
    );
  };
}

const FormGroupWithAdding = withAdding(FormGroup);

export { FormGroup, FormGroupWithAdding };
