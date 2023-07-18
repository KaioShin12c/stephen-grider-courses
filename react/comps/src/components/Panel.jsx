import React from "react";
import classNames from "classnames";
const Panel = ({ children, className, ...restProps }) => {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...restProps} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
