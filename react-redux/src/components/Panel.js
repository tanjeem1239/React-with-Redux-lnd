import React from 'react';

function Panel({ children, className, ...rest }) {
  const finalClassNames = `border rounded p-3 shadow bg-white w-full ${className || ''}`;
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
