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
      className="scroll-smooth"
      dir={locale === "fa" ? "rtl" : "ltr"}
    >
      <body
        className={`${manrope.variable} font-manrope text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
        <ThemeScript />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme) {
                document.documentElement.className = savedTheme;
              } else {
                // Check system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.className = prefersDark ? 'dark' : 'light';
                // Optionally save the system preference to localStorage
                localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
              }
            } catch (e) {
              console.error('Error accessing localStorage:', e);
              // Fallback to system preference if localStorage fails
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.className = prefersDark ? 'dark' : 'light';
            }
          })();

          // Listen for system theme changes when no manual preference is set
          try {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', function(e) {
              const savedTheme = localStorage.getItem('theme');
              if (!savedTheme) {
                document.documentElement.className = e.matches ? 'dark' : 'light';
                localStorage.setItem('theme', e.matches ? 'dark' : 'light');
              }
            });
          } catch (e) {
            console.error('Error setting up theme listener:', e);
          }
        `,
      }}
    />
  );
}
