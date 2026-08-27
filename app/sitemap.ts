import type { MetadataRoute } from "next";

const base = 'https://fantastech.io';
const locales = ['en', 'es', 'de'];
const paths = ['', '/taas'];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}${path}`])),
      },
    }))
  );
}
