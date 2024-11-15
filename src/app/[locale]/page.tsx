import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Feature from "@/components/feature";
import About from "@/components/about";
import Faq from "@/components/faq";
import Download from "@/components/download";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import Switcher from "@/components/switcher";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Navbar
        navLight={false}
        playBtn={false}
        bgLight={false}
        navCenter={false}
      />
      <section
        className="relative overflow-hidden md:py-36 py-24 bg-slate-50/50 dark:bg-slate-800/20 bg-no-repeat bg-center bg-cover"
        id="home"
        style={{ backgroundImage: `url('/images/bg1.png')` }}
      >
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
            <div className="md:me-6">
              <h4 className="font-bold lg:leading-normal leading-normal text-[38px] lg:text-[42px] mb-5">
                Earn Money Passively with Your Phone
              </h4>
              <p className="text-slate-400 text-lg max-w-xl">
                Turn your Android device into a passive income stream by helping
                mobile operators test their SMS services. No effort required -
                earn up to €0.03 per message automatically.
              </p>

              <div className="mt-6">
                <Link href="#">
                  <button className="bg-[#9761FF] text-white py-2 rounded-md  w-[152px] ">
                    Download
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/s24.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="mx-auto w-80 rotate-12 relative z-2"
                alt=""
              />
              <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-[#FF97FF]/20 via-[#9761FF]/70 from-[#9761FF] bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-red-500/10 rounded-full"></div>

              <div className="overflow-hidden after:content-[''] after:absolute after:size-16 after:bg-[#FF97FF]/20 after:top-0 after:end-6 after:z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16" id="features">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-[#9761FF] uppercase text-sm font-bold tracking-wider mb-3">
              Our Features
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Start Earning Effortlessly Today
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Simple, secure, and completely free - discover how EarnEZ turns
              your phone into an automatic income generator.
            </p>
          </div>

          <Feature />
        </div>
      </section>
      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="features"
      >
        <div className="container relative  ">
          <About />
        </div>
      </section>
      <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
        <Faq />
      </section>
      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="download"
      >
        <Download />
      </section>
      <Footer />

      <ScrollToTop />
      <Switcher />
    </>
  );
}
