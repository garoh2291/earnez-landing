"use client";
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Switcher() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <div className="z-50 lg_992:fixed lg_992:top-1/4 lg_992:-right-0">
      <span className="relative inline-block lg_992:rotate-90">
        <input
          type="checkbox"
          className="checkbox opacity-0 absolute"
          id="chk"
          onChange={changeTheme}
          checked={theme === "light"}
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
  );
}
