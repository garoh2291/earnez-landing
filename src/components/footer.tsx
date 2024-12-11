"use client";
import Link from "next/link";
import React from "react";
import { useTranslations } from "@/app/hooks/useTranslations";
import LogoDark from "@/app/icons/LogoDark";

export default function Footer() {
  const { t } = useTranslations();

  // Format the translation with the year
  const copyright = t("copyright").replace(
    "{year}",
    new Date().getFullYear().toString()
  );

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
                {copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
