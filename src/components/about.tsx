import React from "react";
import Link from "next/link";

import { FiAperture, FiShield } from "react-icons/fi";
import { IconType } from "react-icons";
import Image from "next/image";

export default function About() {
  interface Data {
    icon: IconType;
    title: string;
    desc: string;
  }

  let data: Data[] = [
    {
      icon: FiShield,
      title: "Enhance Security",
      desc: "There are many variations of passages of Lorem Ipsum available",
    },
    {
      icon: FiAperture,
      title: "High Performance",
      desc: "There are many variations of passages of Lorem Ipsum available",
    },
  ];
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
      <div className="lg:col-span-5 md:col-span-6">
        <div className="pt-6 px-6 rounded-2xl bg-[#FF97FF]/5 dark:bg-[#FF97FF]/10 shadow shadow-[#FF97FF]/20">
          <Image
            src="/images/1.png"
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
            About EarnEZ
          </h6>
          <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
            How You Earn Money
            <br />
          </h4>
          <p className="text-slate-400 max-w-xl">
            We connect mobile network operators with real users like you,
            helping them test their SMS services while you earn.
          </p>

          <ul className="list-none text-slate-400 mt-6">
            <li className="mb-1 flex">
              <i className="mdi mdi-check text-[#9761FF] text-xl me-2"></i>{" "}
              Enable SMS sending to increase your earnings
            </li>
            <li className="mb-1 flex ms-0">
              <i className="mdi mdi-check text-[#9761FF] text-xl me-2"></i>{" "}
              Participate in call testing for additional income
            </li>
            <li className="mb-1 flex ms-0">
              <i className="mdi mdi-check text-[#9761FF] text-xl me-2"></i>{" "}
              Withdraw earnings starting from just €2
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
