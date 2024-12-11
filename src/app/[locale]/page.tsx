// app/[locale]/page.tsx
import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { LOCALES } from "@/locales/locales";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const messages = LOCALES[locale as keyof typeof LOCALES] || LOCALES.en;

  return {
    title: messages.title,
    description: messages.description,
  };
}

export default function Home() {
  return <HomeClient />;
}
