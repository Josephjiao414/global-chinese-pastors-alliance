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

export const eventStatusLabelsZhHant: Record<EventStatus, string> = {
  upcoming: "即將開始",
  live: "進行中",
  ended: "已經結束",
};

export const eventsZhHant: AllianceEvent[] = [
  {
    slug: "global-chinese-pastors-special-gathering",
    title: "全球華人牧會者特別集會",
    subtitle: "面對時代挑戰，教會如何復興",
    date: "7月15日",
    startTime: "晚8點",
    timezone: "北京／新加坡時間",
    speaker: "",
    introduction:
      "本次聚會聚焦當代教會所面對的真實挑戰，邀請全球華人牧者、傳道人和教會同工一同思想教會如何在真理中站立，在禱告中更新，並在彼此連結中重新得力。",
    poster: "/images/poster.png",
    platform: "",
    meetingNumber: "",
    meetingPassword: "",
    registrationUrl: "",
    status: "upcoming",
  },
];

export function getUpcomingEventZhHant() {
  return eventsZhHant.find((event) => event.status !== "ended") ?? eventsZhHant[0];
}

export function getEventBySlugZhHant(slug: string) {
  return eventsZhHant.find((event) => event.slug === slug);
}

export function displayEventFieldZhHant(value: string) {
  return value.trim() ? value : "確認後公布";
}
