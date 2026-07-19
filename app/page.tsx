import { RedesignedHomePage } from "@/components/RedesignedHomePage";
import { siteContentZhCN } from "@/content/site.zh-CN";
import {
  displayEventField,
  eventStatusLabels,
  getUpcomingEvent,
} from "@/content/events.zh-CN";

export const metadata = {
  title: "全球华人教牧同工联盟",
  description:
    "全球华人教牧同工联盟面向华人牧者、传道人与教会同工，发布聚会信息、会后交流入口与后续资源整理。",
};

export default function HomePage() {
  const event = getUpcomingEvent();

  return (
    <RedesignedHomePage
      aboutHref="/about"
      content={siteContentZhCN}
      displayEventField={displayEventField}
      event={event}
      eventHref={event ? `/events/${event.slug}` : "/events"}
      eventsHref="/events"
      languageLinks={{ simplified: "/", traditional: "/zh-Hant" }}
      statusLabels={eventStatusLabels}
    />
  );
}
