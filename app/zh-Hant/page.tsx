import type { Metadata } from "next";
import { RedesignedHomePage } from "@/components/RedesignedHomePage";
import { siteContentZhHant } from "@/content/site.zh-Hant";
import {
  displayEventFieldZhHant,
  eventStatusLabelsZhHant,
  getUpcomingEventZhHant,
} from "@/content/events.zh-Hant";

export const metadata: Metadata = {
  title: {
    absolute: "全球華人教牧同工聯盟",
  },
  description:
    "全球華人教牧同工聯盟面向華人牧者、傳道人與教會同工，發布聚會資訊、會後交流入口與後續資源整理。",
  alternates: {
    canonical: "/zh-Hant",
    languages: {
      "zh-CN": "/",
      "zh-Hant": "/zh-Hant",
    },
  },
};

export default function HomePage() {
  const event = getUpcomingEventZhHant();

  return (
    <RedesignedHomePage
      aboutHref="/zh-Hant/about"
      content={siteContentZhHant}
      displayEventField={displayEventFieldZhHant}
      event={event}
      eventHref={event ? `/zh-Hant/events/${event.slug}` : "/zh-Hant/events"}
      eventsHref="/zh-Hant/events"
      languageLinks={{ simplified: "/", traditional: "/zh-Hant" }}
      locale="zh-Hant"
      statusLabels={eventStatusLabelsZhHant}
    />
  );
}
