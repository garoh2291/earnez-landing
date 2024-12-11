"use client";

import { useParams } from "next/navigation";
import { Locale, TranslationKey, getTranslation } from "@/locales/locales";

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as Locale) || "en";

  return {
    t: (key: TranslationKey) => getTranslation(locale, key),
    isRTL: locale === "fa",
    locale,
  };
}
