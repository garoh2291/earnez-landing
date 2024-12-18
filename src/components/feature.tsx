import React from "react";
import Link from "next/link";

import { feature } from "@/data/data";
import { IconType } from "react-icons";
import { useTranslations } from "next-intl";

export default function Feature() {
  const t = useTranslations("feature-cards");

  interface Feature {
    icon: IconType;
    title: string;
    desc: string;
  }
  return (
    <div className="grid  grid-cols-1 mt-6 gap-1 lg:grid-cols-4 md:grid-cols-2 md:gap-6">
      {feature.map((item: Feature, index: number) => {
        const Icon = item.icon;
        return (
          <div
            className="flex flex-row gap-3 p-2 transition duration-500 rounded-3xl hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 md:flex-col md:p-6"
            key={index}
          >
            <div className="size-16 mt-[10px] text-[#9761FF] rounded-2xl flex align-middle justify-center items-center md:shadow-sm md:bg-red-500/5">
              <Icon className="size-5" />
            </div>
            <div className="content mt-7">
              <Link
                href="#"
                className="text-lg hover:text-[#9761FF] dark:text-white dark:hover:text-[#9761FF] transition-all duration-500 ease-in-out font-semibold"
              >
                {t(item.title)}
              </Link>
              <p className="text-slate-400 mt-3">{t(item.desc)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
