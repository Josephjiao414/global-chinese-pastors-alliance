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
      "一个面向全球华人牧者、传道人与教会同工的同行平台。我们盼望在真实的牧养处境中，一同祷告、交流、学习，也彼此扶持。",
    primaryAction: "了解联盟",
    secondaryAction: "查看近期聚会",
  },
  about: {
    title: "关于联盟",
    body: [
      "全球华人教牧同工联盟正在建立一个简单、可信、长期可持续的交流空间，服事对象包括华人牧者、传道人、宣教同工与教会核心服事者。",
      "我们不急于用规模或数字定义自己，更看重真实的关系、安静的守望和合宜的装备。网站目前以聚会信息、会后交流和后续资源整理为主，相关内容会随着事工推进逐步更新。",
    ],
  },
  mission: {
    title: "异象与使命",
    vision:
      "看见不同城市与处境中的华人教牧同工，在基督里彼此认识、彼此坚固，在各自被托付的地方忠心服事。",
    statement:
      "通过线上聚会、专题交流、祷告守望与资源整理，陪伴同工面对牧养中的真实问题，在真理、爱心与盼望中同行。",
    directionsTitle: "核心服事方向",
    items: [
      {
        title: "连接同工",
        description:
          "为不同地区的华人牧者、传道人和教会同工预备彼此认识与交流的入口，让服事路上的同行不再孤单。",
      },
      {
        title: "守望祷告",
        description:
          "在共同的负担中彼此记念，为教会、家庭、城市与下一代守望，学习在祷告中重新对齐主的心意。",
      },
      {
        title: "装备成长",
        description:
          "围绕牧养、门徒训练、领袖更新与时代议题，逐步整理有益资源，帮助同工持续被建造。",
      },
      {
        title: "彼此同行",
        description:
          "鼓励众教会在各自处境中忠心服事，彼此激励，在基督里重新得力，寻求真实、谦卑而持久的更新。",
      },
    ],
  },
  events: {
    title: "近期聚会",
    intro:
      "这里发布已经确认的线上聚会与同工交流安排。若会议号码、密码或报名方式尚未开放，页面会及时更新，不会以未经确认的信息代替。",
    featuredTitle: "面对时代挑战，教会如何复兴",
    description:
      "本次聚会聚焦当代教会处境，邀请同工一同思想教会如何在真理中站立，在祷告中更新，并在彼此连接中重新得力。",
    action: "查看聚会信息",
  },
  afterGathering: {
    title: "会后交流",
    intro:
      "如果你愿意继续交流，或希望收到后续聚会与资源信息，可以在这里留下联系方式与简短需要。信息仅用于本次聚会后的同工联系与后续沟通。",
    qrLabel: "手机扫码填写",
    qrHelp: "表单用于会后联系，不作公开展示。",
    formUrl: "https://qr-contact-form.onrender.com",
    action: "填写会后交流表",
  },
  contact: {
    title: "联系我们",
    intro:
      "如果你是华人牧者、传道人、教会同工，或希望进一步了解联盟与近期聚会，欢迎先通过会后交流表留下信息。我们会按实际需要逐步整理正式联系方式。",
    action: "填写会后交流表",
  },
  footer: {
    tagline: "为全球华人教牧同工预备一个安静、真实、彼此守望的连接空间。",
    shortSentence: "愿我们在基督里彼此扶持，忠心走好被托付的路。",
  },
} as const;

export type SiteContentZhCN = typeof siteContentZhCN;
