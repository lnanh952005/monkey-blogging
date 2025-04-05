import React from "react";
import Loading from "../loading/Loading";

const Button = ({ children, loading, ...props }) => {
  return (
    <button
      className={`block mx-auto w-[300px] min-h-[60px] rounded-lg transition-all cursor-pointer font-semibold text-[18px] text-white bg-gradient-to-r from-[#00A7B4] via-[#A4D96C] to-[#A4D96C]`}
    >
      {loading ? <Loading color={"#00A7B4"} /> : children}
    </button>
  );
};

export default Button;
