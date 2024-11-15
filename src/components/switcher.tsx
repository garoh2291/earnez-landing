"use client";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Switcher() {
  let htmlTag: {
    className: string;
  };
  if (typeof document !== "undefined") {
    htmlTag = document.getElementsByTagName("html")[0];
  }
  const changeTheme = () => {
    if (htmlTag.className.includes("dark")) {
      htmlTag.className = "light";
    } else {
      htmlTag.className = "dark";
    }
  };

  return (
    <>
      <div className="fixed top-1/4 -right-0 z-50">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
            onChange={changeTheme}
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <FiMoon className="size-4 text-yellow-500" />
            <FiSun className="size-4 text-yellow-500" />
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
          </label>
        </span>
      </div>
    </>
  );
}
