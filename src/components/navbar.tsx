"use client";
import React, { useEffect, useState } from "react";
import { Link as Link1 } from "react-scroll";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { MdMenu } from "react-icons/md";
import LogoDark from "@/app/icons/LogoDark";
import LogoLight from "@/app/icons/LogoLight";

export default function Navbar({
  navLight,
  bgLight,
  navCenter,
}: {
  navLight: boolean;
  playBtn: boolean;
  bgLight: boolean;
  navCenter: boolean;
}) {
  const [menu, setMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("dark");
  const t = useTranslations();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem("theme") || "dark";
      setTheme(currentTheme);
    };

    window.addEventListener("storage", handleThemeChange);

    const handlerScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handlerScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handlerScroll);
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  // Create a MutationObserver to watch for theme changes via class changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === "class" &&
          mutation.target instanceof HTMLElement
        ) {
          const htmlElement = mutation.target;
          const currentTheme = htmlElement.classList.contains("dark")
            ? "dark"
            : "light";
          setTheme(currentTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`navbar ${
        bgLight ? "bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" : ""
      } ${scroll ? "is-sticky" : ""}`}
      id="navbar"
    >
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:me-8 flex items-center" href="/">
          {theme === "dark" ? (
            <LogoDark className="h-8" />
          ) : (
            <LogoLight className="h-8" />
          )}
        </Link>

        {/* Rest of your navbar code remains the same */}
        <div className="nav-icons flex items-center lg_992:order-2 md:ms-6">
          <button
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-slate-900 dark:text-white lg_992:hidden"
            onClick={() => setMenu(!menu)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
            <MdMenu className="text-[24px]" />
          </button>
        </div>

        <div
          className={`navigation lg_992:order-1 lg_992:flex  ${
            navCenter ? "" : "ms-auto"
          } ${menu ? "" : "hidden"}`}
          id="menu-collapse"
        >
          <ul
            className={`navbar-nav ${navLight ? "nav-light" : ""}`}
            id="navbar-navlist"
          >
            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="home"
              >
                {t("home")}
              </Link1>
            </li>
            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="features"
              >
                {t("features")}
              </Link1>
            </li>
            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="about"
              >
                {t("about")}
              </Link1>
            </li>
            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                to="faqs"
              >
                {t("faqs")}
              </Link1>
            </li>
            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                to="download"
              >
                {t("download")}
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
