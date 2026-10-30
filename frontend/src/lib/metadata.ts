import type { Metadata } from "next";
import { site } from "@/data/site";
import { absoluteUrl } from "./utils";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${site.name}`,
      description,
      siteName: site.name,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
    },
  };
}
