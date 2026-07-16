import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://global-chinese-pastors-alliance.onrender.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/images/"],
    },
    sitemap: new URL("/sitemap.xml", baseUrl).toString(),
  };
}
