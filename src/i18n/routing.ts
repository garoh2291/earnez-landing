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
          : "example.com",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "en.localhost:3000"
          : "en.example.com",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "es.localhost:3000"
          : "es.example.com",
      defaultLocale: "es",
      locales: ["es"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "germany.localhost:3000"
          : "germany.example.com",
      defaultLocale: "germany",
      locales: ["germany"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "ar.localhost:3000"
          : "ar.example.com",
      defaultLocale: "ar",
      locales: ["ar"],
    },
  ],
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
