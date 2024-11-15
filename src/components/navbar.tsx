"use client";
import React, { useEffect, useState } from "react";
import { Link as Link1 } from "react-scroll";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MdMenu } from "react-icons/md";

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
  const t = useTranslations("HomePage");

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  });

  return (
    <nav
      className={`navbar ${
        bgLight ? "bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" : ""
      } ${scroll ? "is-sticky" : ""}`}
      id="navbar"
    >
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:me-8 flex items-center gap-2" href="/">
          <Image
            src="/images/logo-garnik.png"
            width={40}
            height={40}
            className="inline-block w-[40px] h-auto"
            alt=""
          />
          <p className="text-2xl">
            earn
            <span className="font-bold bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-400 text-transparent bg-clip-text">
              ez
            </span>
          </p>
        </Link>

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
                Features
              </Link1>
            </li>

            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="faqs"
              >
                FAQs
              </Link1>
            </li>
            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="download"
              >
                Download
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
