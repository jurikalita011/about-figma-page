import React from "react";

export const LeftSection = () => {
  return (
    <div className="flex justify-evenly w-2/6">
      <div className="flex justify-evenly align-middle w-[324px] h-[24px] pt-[15px] left-[771px]">
        <p className="text-white font-['DM_Sans'] font-bold text-xs leading-6 text-right">
          About
        </p>
        <p className="text-white font-['DM_Sans'] font-bold text-xs leading-6 text-right">
          Portfolio
        </p>
        <p className="text-white font-['DM_Sans'] font-bold text-xs leading-6 text-right">
          Blog
        </p>
        <p className="text-white font-['DM_Sans'] font-bold text-xs leading-6 text-right">
          Contact
        </p>
      </div>
      <button className=" inline-block w-[170px] h-[48px] top-[16px] left-[1135px] text-white">
        Sign up
      </button>
    </div>
  );
};
