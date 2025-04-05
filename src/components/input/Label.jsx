import React from "react";

const Label = ({ htmlFor, children, ...props }) => {
  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className=" font-semibold text-[20px] mb-3 text-[#292D32] cursor-pointer"
    >
      {children}
    </label>
  );
};

export default Label;
