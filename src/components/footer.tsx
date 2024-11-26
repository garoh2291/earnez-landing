"use client";
import Link from "next/link";
import React from "react";
import { HiHeart } from "react-icons/hi";
import { useTranslations } from "next-intl";
import LogoDark from "@/app/icons/LogoDark";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="py-6 md:py-8 bg-slate-800 dark:bg-gray-900">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:col-span-3">
            <Link
              className="navbar-brand md:me-8 flex items-center gap-1 md:gap-2"
              href="/"
            >
              <LogoDark className="h-6 md:h-8" />
            </Link>
          </div>
          <div className="xl:mr-0 lg:mr-6 md:mr-12 md:col-span-9 mt-4 md:mt-0">
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm md:text-base flex items-center w-full gap-1 justify-center md:justify-end">
                {t("copyright", { year: new Date().getFullYear() })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
