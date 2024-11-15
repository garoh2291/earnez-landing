import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "es", "germany", "ar"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "never",
  domains: [
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "localhost:3000"
          : "earnez-landing.vercel.app",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "en.localhost:3000"
          : "en.earnez-landing.vercel.app",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "es.localhost:3000"
          : "es.earnez-landing.vercel.app",
      defaultLocale: "es",
      locales: ["es"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "germany.localhost:3000"
          : "germany.earnez-landing.vercel.app",
      defaultLocale: "germany",
      locales: ["germany"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "ar.localhost:3000"
          : "ar.earnez-landing.vercel.app",
      defaultLocale: "ar",
      locales: ["ar"],
    },
  ],
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
