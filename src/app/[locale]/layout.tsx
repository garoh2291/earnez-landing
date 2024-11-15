import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Manrope } from "next/font/google";
import { Metadata } from "next";

import "../assets/scss/tailwind.scss";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "EarnEZ - Turn Your Phone Into a Passive Income Generator",
  description:
    "Turn your Android phone into an automatic income stream with EarnEZ. Earn €0.01-0.03 per SMS test message. No effort required, fast payouts, and complete privacy protection.",
  icons: {
    icon: "../favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="dark scroll-smooth"
      dir={locale === "fa" ? "rtl" : "ltr"}
    >
      <body
        className={` ${manrope.variable} font-manrope text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
