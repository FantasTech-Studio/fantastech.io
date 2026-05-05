import type { Metadata } from "next";
import { TaasPageContent } from "@/components/ui/taas/TaasPageContent";

const locales = ['en', 'es', 'it', 'de'] as const;
const base = 'https://fantastech.io';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    metadataBase: new URL(base),
    title: messages.taas.hero.title_p1 + ' ' + messages.taas.hero.title_highlight,
    description: messages.taas.contact.description,
    alternates: {
      canonical: `/${locale}/taas`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `/${l}/taas`]),
        ['x-default', '/en/taas'],
      ]),
    },
  };
}

export default function TaasPage() {
  return <TaasPageContent />;
}
