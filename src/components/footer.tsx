"use client";
import Link from "next/link";
import React from "react";
import { HiHeart } from "react-icons/hi";
import { useTranslations } from "next-intl";
import LogoDark from "@/app/icons/LogoDark";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="py-8 bg-slate-800 dark:bg-gray-900">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="md:col-span-3">
            <Link
              className="navbar-brand md:me-8 flex items-center gap-2"
              href="/"
            >
              <LogoDark className="h-8" />
            </Link>
          </div>
          <div className="xl:mr-0 lg:mr-6 md:mr-12 md:col-span-9 sm:mt-0 mt-8">
            <div className="md:text-right text-center ">
              <p className="text-gray-400 flex items-center w-full gap-1 justify-end">
                © {new Date().getFullYear()} {t("footer-1")}
                <HiHeart className="text-[#9761FF]" />
                {t("footer-2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
