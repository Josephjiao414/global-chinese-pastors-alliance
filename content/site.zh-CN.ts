export const siteContentZhCN = {
  siteName: "全球华人教牧同工联盟",
  currentTheme: "面对时代挑战，教会如何复兴",
  navigation: [
    { label: "首页", href: "/" },
    { label: "关于联盟", href: "/about" },
    { label: "聚会活动", href: "/events" },
    { label: "联系我们", href: "/contact" },
  ],
  hero: {
    name: "全球华人教牧同工联盟",
    title: "面对时代挑战，教会如何复兴",
    subtitle:
      "在快速变化的时代中，我们渴望与全球华人牧者、传道人和教会同工一同寻求主面，彼此守望，彼此装备，在基督里同行。",
    primaryAction: "了解联盟",
    secondaryAction: "查看近期聚会",
  },
  about: {
    title: "关于联盟",
    body: [
      "全球华人教牧同工联盟是一个面向华人牧者、传道人与教会同工的连接平台，盼望在不同地区、文化与处境中的同工，可以在主里彼此认识、彼此扶持、共同守望。",
      "我们关注教会在当代所面对的真实挑战，也相信复兴不是孤立发生的事。借着祷告、交流、装备与同行，众教会可以在基督里重新得力，更清楚地回应这个时代的需要。",
    ],
  },
  mission: {
    title: "异象与使命",
    vision:
      "看见全球华人教牧同工在基督里同心合一，彼此扶持，在各自所在之地成为复兴与盼望的见证。",
    statement:
      "连接全球华人牧者、传道人和教会同工，建立守望与同行的关系，提供合宜的属灵装备与交流平台，一同回应时代挑战，服事主所托付的教会。",
    directionsTitle: "核心服事方向",
    items: [
      {
        title: "连接同工",
        description:
          "为不同地区的华人牧者、传道人和教会同工建立彼此认识与交流的空间，让服事路上的同行不再孤单。",
      },
      {
        title: "守望祷告",
        description:
          "在共同的负担中彼此记念，为教会、城市、家庭与下一代守望，学习在祷告中重新对齐主的心意。",
      },
      {
        title: "装备成长",
        description:
          "围绕教会牧养、门徒训练、领袖更新与时代议题，整理和分享有益的学习资源，帮助同工持续被建造。",
      },
      {
        title: "同行复兴",
        description:
          "鼓励众教会在各自处境中忠心服事，彼此激励，在基督里重新得力，寻求真实、持久而谦卑的复兴。",
      },
    ],
  },
  events: {
    title: "近期聚会",
    intro:
      "联盟将以线上聚会、专题分享、祷告守望和同工交流等方式，陪伴全球华人教牧同工一同面对当下的牧养挑战。",
    featuredTitle: "面对时代挑战，教会如何复兴",
    description:
      "本次聚会聚焦当代教会处境，邀请同工一同思想教会如何在真理中站立，在祷告中更新，并在彼此连接中重新得力。",
    action: "查看聚会信息",
  },
  afterGathering: {
    title: "会后交流",
    intro:
      "聚会结束后，欢迎留下联系方式与交流需要，方便同工后续联系、守望与同行。",
    qrLabel: "手机扫码填写",
    qrHelp: "也可以直接点击按钮打开登记表。",
    formUrl: "https://qr-contact-form.onrender.com",
    action: "打开登记表",
  },
  contact: {
    title: "联系我们",
    intro:
      "如果你是华人牧者、传道人、教会同工，或希望进一步了解联盟与近期聚会，欢迎与我们联系。愿我们在主里彼此认识，也在这个时代彼此守望。",
    action: "联系联盟",
  },
  footer: {
    tagline: "同心合一 · 寻求主面 · 复兴教会 · 影响世界",
    shortSentence: "愿众教会在基督里重新得力，忠心见证主的荣耀。",
  },
} as const;

export type SiteContentZhCN = typeof siteContentZhCN;
