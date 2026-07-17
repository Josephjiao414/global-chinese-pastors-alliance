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
  videoTitle: string;
  videoUrl: string;
  videoEmbedUrl: string;
  nextGathering: string;
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
    host: "路德姊妹",
    speaker: "約拿牧師",
    speakerBio:
      "約拿牧師牧會經驗超過15年，曾創辦多間國際宣教教會，並在多個國家為主作見證。",
    guests: ["大衛牧師", "多加牧師", "安德烈牧師"],
    participantCount: "39位牧會者及教會同工參與",
    introduction:
      "本次聚會聚焦當代教會所面對的真實挑戰，邀請全球華人牧者、傳道人和教會同工一同思想教會如何在真理中站立，在禱告中更新，並在彼此連結中重新得力。",
    review:
      "此次集會共有39位牧會者及教會同工參與。聚會盼望幫助兄弟教會經歷復興，協助牧會者裝備真理，透過真理養育教會信徒，更好地管理神的教會。會中由路德姊妹主持，約拿牧師主講，大衛牧師、多加牧師、安德烈牧師參與分享。會後同工們表達了繼續聚集、彼此守望與同行的期待。",
    reviewImage: "/images/gathering-2026-07-15.jpg",
    reviewImageAlt: "7月15日牧會者見面會線上聚集畫面",
    videoTitle: "《如何復興教會》活動錄製",
    videoUrl: "https://www.youtube.com/watch?v=cQEE8ysg2l0",
    videoEmbedUrl: "https://www.youtube.com/embed/cQEE8ysg2l0",
    nextGathering: "待定",
    poster: "/images/poster.png",
    platform: "線上聚會",
    meetingNumber: "",
    meetingPassword: "",
    registrationUrl: "",
    status: "ended",
  },
];

export function getUpcomingEventZhHant() {
  return eventsZhHant.find((event) => event.status !== "ended") ?? eventsZhHant[0];
}

export function getEventBySlugZhHant(slug: string) {
  return eventsZhHant.find((event) => event.slug === slug);
}

export function displayEventFieldZhHant(value: string) {
  return value.trim() ? value : "稍後公布";
}
