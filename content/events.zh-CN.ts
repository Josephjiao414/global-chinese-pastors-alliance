export type EventStatus = "upcoming" | "live" | "ended";

export type AllianceEvent = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  startTime: string;
  timezone: string;
  host: string;
  speaker: string;
  speakerBio: string;
  guests: string[];
  participantCount: string;
  introduction: string;
  review: string;
  reviewImage: string;
  reviewImageAlt: string;
  nextGathering: string;
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
    host: "路德姊妹",
    speaker: "约拿牧师",
    speakerBio:
      "约拿牧师牧会经验超过15年，曾创办多间国际宣教教会，并在多个国家为主做见证。",
    guests: ["大卫牧师", "多加牧师", "安德烈牧师"],
    participantCount: "39位牧会者及教会同工参与",
    introduction:
      "本次聚会聚焦当代教会所面对的真实挑战，邀请全球华人牧者、传道人和教会同工一同思想教会如何在真理中站立，在祷告中更新，并在彼此连接中重新得力。",
    review:
      "此次集会共有39位牧会者及教会同工参与。聚会盼望帮助兄弟教会经历复兴，协助牧会者装备真理，通过真理养育教会信徒，更好地管理神的教会。会中由路德姊妹主持，约拿牧师主讲，大卫牧师、多加牧师、安德烈牧师参与分享。会后同工们表达了继续聚集、彼此守望与同行的期待。",
    reviewImage: "/images/gathering-2026-07-15.jpg",
    reviewImageAlt: "7月15日牧会者见面会线上聚集画面",
    nextGathering: "待定",
    poster: "/images/poster.png",
    platform: "线上聚会",
    meetingNumber: "",
    meetingPassword: "",
    registrationUrl: "",
    status: "ended",
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
