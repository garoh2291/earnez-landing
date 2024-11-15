import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
      <div className="lg:col-span-5 md:col-span-6">
        <div className="pt-6 px-6 rounded-2xl bg-[#FF97FF]/5 dark:bg-[#FF97FF]/10 shadow shadow-[#FF97FF]/20">
          <Image
            src="/images/1-min.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>
      </div>

      <div className="lg:col-span-7 md:col-span-6">
        <div className="lg:ms-10">
          <h6 className="text-[#9761FF] uppercase text-sm font-bold tracking-wider mb-3">
            {t("about-title")}
          </h6>
          <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
            {t("about-sub")}
            <br />
          </h4>
          <p className="text-slate-400 max-w-xl">{t("about-text")}</p>

          <ul className="list-none text-slate-400 mt-6">
            <li className="mb-1 flex">
              <i className="mdi mdi-check text-[#9761FF] text-xl me-2"></i>{" "}
              {t("about-list-1")}
            </li>
            <li className="mb-1 flex ms-0">
              <i className="mdi mdi-check text-[#9761FF] text-xl me-2"></i>{" "}
              {t("about-list-2")}
            </li>
            <li className="mb-1 flex ms-0">
              <i className="mdi mdi-check text-[#9761FF] text-xl me-2"></i>{" "}
              {t("about-list-3")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
