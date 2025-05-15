export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'it' },
    { locale: 'de' },
  ];
}

export default function TaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}