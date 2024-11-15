import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800 dark:bg-gray-900">
      <div className="container">
        <div className="grid md:grid-cols-12 items-center">
          <div className="md:col-span-3">
            <Link
              className="navbar-brand md:me-8 flex items-center gap-2"
              href="/"
            >
              <Image
                src="/images/logo-garnik.png"
                width={40}
                height={40}
                className="inline-block w-[40px] h-auto"
                alt=""
              />
              <p className=" text-2xl text-white">
                earn
                <span className="font-bold bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-400 text-transparent bg-clip-text">
                  ez
                </span>
              </p>
            </Link>
          </div>

          <div className="md:col-span-9 md:mt-0 mt-8">
            <div className="md:text-right text-center ">
              <p className="text-gray-400">
                © {new Date().getFullYear()} EarnEz. Design & Develop with{" "}
                <i className="mdi mdi-heart text-[#9761FF]"></i> by{" "}
                <span className="text-reset">Hook</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
