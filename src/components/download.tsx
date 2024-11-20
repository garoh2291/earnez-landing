import React from "react";
import Link from "next/link";

import { FiSmartphone } from "react-icons/fi";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Download() {
  const t = useTranslations();
  return (
    <div className="container relative py-[70px]">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
        <div className="lg:col-span-5 md:col-span-6">
          <div className="pt-6 px-6 rounded-2xl bg-[#FF97FF]/5 dark:bg-[#FF97FF]/10 shadow shadow-[#FF97FF]/20">
            <Image
              src="/images/3-min.png"
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
              {t("download-title")}
            </h6>
            <h4
              className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold"
              dangerouslySetInnerHTML={{ __html: t("download-sub") }}
            ></h4>
            <p className="text-slate-400 max-w-xl mb-4">{t("download-text")}</p>
            <div className="inline-block">
              <div className="pt-4 flex items-center border-t border-gray-100 dark:border-gray-800">
                <FiSmartphone className="me-2 text-[#9761FF] size-10" />
                <div className="content">
                  <h6 className="text-base font-medium">
                    {t("download-sub2")}
                  </h6>
                  <Link
                    href="#"
                    className="hover:text-[#9761FF] dark:hover:text-[#9761FF] after:bg-[#9761FF] dark:text-white transition duration-500 font-medium flex items-center gap-1"
                  >
                    {t("download-apk")} <HiArrowNarrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
