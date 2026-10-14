import type { Metadata } from "next";
import { dict, site, type Locale } from "./content";

export function buildMetadata(locale: Locale): Metadata {
  const t = dict[locale].meta;
  return {
    metadataBase: new URL(site.url),
    title: t.title,
    description: t.description,
    alternates: { canonical: locale === "es" ? "/" : "/en/", languages: { es: "/", en: "/en/" } },
    openGraph: {
      title: t.title,
      description: t.description,
      url: locale === "es" ? "/" : "/en/",
      siteName: site.name,
      locale: locale === "es" ? "es_CL" : "en_US",
      type: "website",
    },
  };
}
