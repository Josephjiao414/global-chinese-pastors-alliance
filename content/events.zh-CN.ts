export type EventStatus = "upcoming" | "live" | "ended";

export type AllianceEvent = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  startTime: string;
  timezone: string;
  speaker: string;
  introduction: string;
  poster: string;
  platform: string;
  meetingNumber: string;
  meetingPassword: string;
  registrationUrl: string;
  status: EventStatus;
};

export const eventStatusLabels: Record<EventStatus, string> = {
  upcoming: "即将开始",
  live: "进行中",
  ended: "已经结束",
};

export const eventsZhCN: AllianceEvent[] = [
  {
    slug: "global-chinese-pastors-special-gathering",
    title: "全球华人牧会者特别集会",
    subtitle: "面对时代挑战，教会如何复兴",
    date: "7月15日",
    startTime: "晚8点",
    timezone: "北京／新加坡时间",
    speaker: "",
    introduction:
      "本次聚会聚焦当代教会所面对的真实挑战，邀请全球华人牧者、传道人和教会同工一同思想教会如何在真理中站立，在祷告中更新，并在彼此连接中重新得力。",
    poster: "/images/poster.png",
    platform: "",
    meetingNumber: "",
    meetingPassword: "",
    registrationUrl: "",
    status: "upcoming",
  },
];

export function getUpcomingEvent() {
  return eventsZhCN.find((event) => event.status !== "ended") ?? eventsZhCN[0];
}

export function getEventBySlug(slug: string) {
  return eventsZhCN.find((event) => event.slug === slug);
}

export function displayEventField(value: string) {
  return value.trim() ? value : "稍后公布";
}
