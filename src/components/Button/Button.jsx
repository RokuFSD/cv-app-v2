import React, { useMemo } from 'react';

const buttonTypes = {
  icon: 'z-10 w-12 absolute right-0 text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center',
  success:
    'border-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center',
  error:
    'border-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center',
};

function Button({ onClick, disabled, type, extraClasses, children }) {
  const memoizedExtraClasses = useMemo(
    () => (extraClasses ? extraClasses.join(' ') : ''),
    [extraClasses]
  );
  return (
    <button
      className={`${
        type ? `${buttonTypes[type]}` : ''
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
