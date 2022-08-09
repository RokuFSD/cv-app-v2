import React, { useMemo } from "react";

const buttonTypes = {
  icon: "z-10 w-12 absolute right-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

function Button({ onClick, disabled, type, extraClasses, children }) {
  const memoizedExtraClasses = useMemo(
    () => (extraClasses ? extraClasses.join(" ") : ""),
    [extraClasses]
  );
  return (
    <button
      className={`${
        type ? `${buttonTypes[type]}` : ""
      } btn ${memoizedExtraClasses}`}
      type="button"
      onClick={onClick}
      disabled={disabled || null}
    >
      {children}
    </button>
  );
}

export default Button;
