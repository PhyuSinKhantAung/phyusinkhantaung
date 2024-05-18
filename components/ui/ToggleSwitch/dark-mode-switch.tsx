"use client";
import { useTheme } from "next-themes";
import React from "react";

function DarkModeSwitch() {
  const { setTheme, theme } = useTheme();

  return (
    <label className="switch">
      <input
        onClick={() => {
          if (theme === "light") {
            return setTheme("dark");
          } else return setTheme("light");
        }}
        type="checkbox"
        className="toggle hidden"
      />
      <span
        className='
          slider 
          main-shadow
           before:main-shadow           
            absolute
             inset-0 box-border
               cursor-pointer
               rounded-[5px] border-2 border-solid
               border-ring bg-background transition-[0.3s]
               before:absolute before:-left-0.5 before:bottom-[1px]
                before:box-border 
                before:h-4
                before:w-4
                before:rounded-[5px]
                 before:border-2
                  before:border-solid before:border-ring
                  before:bg-background  
                  before:transition-[0.3s] before:content-[""]
                '
      ></span>
    </label>
  );
}

export default DarkModeSwitch;
