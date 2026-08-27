export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
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