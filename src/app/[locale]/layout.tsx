import { Manrope } from "next/font/google";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/locales/locales";
import "../assets/scss/tailwind.scss";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const generateStaticParams = async () => {
  return Object.keys(LOCALES).map((locale) => ({ locale }));
};

// Validate locale
const isValidLocale = (locale: string): locale is Locale => {
  return Object.keys(LOCALES).includes(locale);
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Get translations for the current locale
  const messages = isValidLocale(locale) ? LOCALES[locale] : LOCALES.en;

  return {
    title:
      messages.meta?.title ||
      "EarnEZ - Turn Your Phone Into a Passive Income Generator",
    description:
      messages.meta?.description ||
      "Turn your Android phone into an automatic income stream with EarnEZ. Earn €0.01-0.03 per SMS test message. No effort required, fast payouts, and complete privacy protection.",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.ico", sizes: "16x16" },
        { url: "/favicon.ico", sizes: "32x32" },
      ],
    },
  };
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
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.className = prefersDark ? 'dark' : 'light';
                localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
              }
            } catch (e) {
              console.error('Error accessing localStorage:', e);
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.className = prefersDark ? 'dark' : 'light';
            }
          })();

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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  // if (!isValidLocale(locale)) {
  //   notFound();
  // }

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
        {children}
      </body>
    </html>
  );
}
