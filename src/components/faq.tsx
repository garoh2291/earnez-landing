"use client";
import React, { useState } from "react";

import CountUp from "react-countup";

import { FiChevronUp, FiDownload } from "react-icons/fi";

import { faq } from "../data/data";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface FaqData {
  id: number;
  title: string;
  desc: string;
}

export default function Faq() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const t = useTranslations();

  return (
    <div className="container relative">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
        <div className="relative order-1 md:order-2">
          <div className="relative">
            <Image
              src="/images/2-min.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mx-auto md:max-w-xs lg:max-w-sm"
              alt=""
            />
          </div>
          <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-[#FF97FF]/20 via-[#9761FF]/70 from-[#9761FF] bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-red-500/10 rounded-full"></div>

          <div className="absolute -bottom-20 md:start-0 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-52 m-3">
            <div className="flex items-center">
              <div className="flex items-center justify-center size-[65px] bg-[#9761FF]/5 text-[#9761FF] text-center rounded-full me-3">
                <FiDownload className="size-6" />
              </div>
              <div className="flex-1">
                <h6 className="text-slate-400">{t("total")}</h6>
                <p className="text-xl font-bold">
                  <CountUp className="counter-value" end={45485} />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:me-8 order-2 md:order-1">
          <h6 className="text-[#9761FF] uppercase text-sm font-bold tracking-wider mb-3">
            {t("faqs-title")}
          </h6>
          <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
            {t("faqs-sub")}
          </h4>
          <p className="text-slate-400 max-w-xl mx-auto">{t("faqs-text")}</p>

          <div id="accordion-collapseone" className="mt-8">
            {faq.map((item: FaqData, index: number) => {
              return (
                <div
                  className={`relative shadow dark:shadow-gray-800 rounded-md overflow-hidden ${
                    item.id !== 1 ? "mt-3" : ""
                  }`}
                  key={index}
                >
                  <h2 className="font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveTab(item.id)}
                      className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                        activeTab === item.id
                          ? "bg-slate-50/50 dark:bg-slate-800/20 text-[#9761FF]"
                          : ""
                      }`}
                    >
                      <span>{t(item.title)}</span>
                      <FiChevronUp
                        className={`size-4 shrink-0 ${
                          activeTab === item.id ? "" : "rotate-180"
                        }`}
                      />
                    </button>
                  </h2>
                  <div className={`${activeTab === item.id ? "" : "hidden"}`}>
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        {t(item.desc)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
