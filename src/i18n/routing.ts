import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "zh", "ru", "fa"] as const;
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
          : process.env.NEXT_PUBLIC_URL!,
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "en.localhost:3000"
          : `en.${process.env.NEXT_PUBLIC_URL!}`,
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "ru.localhost:3000"
          : `ru.${process.env.NEXT_PUBLIC_URL!}`,
      defaultLocale: "ru",
      locales: ["ru"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "fa.localhost:3000"
          : `fa.${process.env.NEXT_PUBLIC_URL!}`,
      defaultLocale: "fa",
      locales: ["fa"],
    },
    {
      domain:
        process.env.NODE_ENV === "development"
          ? "zh.localhost:3000"
          : `zh.${process.env.NEXT_PUBLIC_URL!}`,
      defaultLocale: "zh",
      locales: ["zh"],
    },
  ],
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
