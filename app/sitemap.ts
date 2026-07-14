import type { MetadataRoute } from "next";
import { eventsZhCN } from "@/content/events.zh-CN";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://global-chinese-pastors-alliance.onrender.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/events", "/contact"].map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
  }));

  const eventRoutes = eventsZhCN.map((event) => ({
    url: new URL(`/events/${event.slug}`, baseUrl).toString(),
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...eventRoutes];
}
