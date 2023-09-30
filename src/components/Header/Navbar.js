import React from "react";
import { Logo } from "./Logo";
import { LeftSection } from "./LeftSection";

export const Navbar = () => {
  return (
    <div className=" bg-blue-700 sticky top-0 z-10 w-full">
      <div className="flex justify-between h-100 text-left bg-blue-700 sticky top-0 z-10 mx-auto w-11/12 items-center">
        <Logo />
        <LeftSection />
      </div>
    </div>
  );
};
