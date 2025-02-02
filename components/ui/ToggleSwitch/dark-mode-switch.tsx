"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Switch } from "../switch";

function DarkModeSwitch() {
  const { setTheme, theme } = useTheme();

  return (
    <label className="switch">
      <Switch
        id="theme-switch"
        onClick={() => {
          if (theme === "light") {
            return setTheme("dark");
          } else return setTheme("light");
        }}
        className="toggle"
      />
    </label>
  );
}

export default DarkModeSwitch;
