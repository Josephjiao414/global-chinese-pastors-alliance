export const siteContentZhHant = {
  siteName: "全球華人教牧同工聯盟",
  currentTheme: "面對時代挑戰，教會如何復興",
  navigation: [
    { label: "首頁", href: "/zh-Hant" },
    { label: "關於聯盟", href: "/zh-Hant/about" },
    { label: "聚會活動", href: "/zh-Hant/events" },
    { label: "聯絡我們", href: "/zh-Hant/contact" },
  ],
  hero: {
    name: "全球華人教牧同工聯盟",
    title: "面對時代挑戰，教會如何復興",
    subtitle:
      "為全球華人牧者、傳道人與教會同工預備一個彼此守望、交流與裝備的同行平台。我們盼望在真實的牧養處境中，一同禱告、學習，也彼此扶持。",
    primaryAction: "了解聯盟",
    secondaryAction: "查看近期聚會",
    globalLine: "北美｜亞洲｜歐洲｜大洋洲｜線上同行",
  },
  about: {
    title: "關於聯盟",
    body: [
      "全球華人教牧同工聯盟正在建立一個簡單、可信、長期可持續的交流空間，服事對象包括華人牧者、傳道人、宣教同工與教會核心服事者。",
      "我們不急於用規模或數字定義自己，更看重真實的關係、安靜的守望和合宜的裝備。網站目前以聚會資訊、會後交流和後續資源整理為主，相關內容會隨著事工推進逐步更新。",
    ],
    buildingTitle: "我們正在建立什麼",
    buildingItems: [
      {
        title: "真實連結",
        description:
          "讓不同地區的同工先彼此認識，聽見彼此的處境與負擔。",
      },
      {
        title: "共同守望",
        description:
          "在禱告與交流中彼此記念，不讓牧養路上的重擔只由一個人承擔。",
      },
      {
        title: "合宜裝備",
        description:
          "按實際需要逐步整理聚會、專題與資源，幫助同工在服事中繼續被建造。",
      },
    ],
  },
  mission: {
    title: "異象與使命",
    vision:
      "看見不同城市與處境中的華人教牧同工，在基督裡彼此認識、彼此堅固，在各自被託付的地方忠心服事。",
    statement:
      "透過線上聚會、專題交流、禱告守望與資源整理，陪伴同工面對牧養中的真實問題，在真理、愛心與盼望中同行。",
    directionsTitle: "核心服事方向",
    items: [
      {
        title: "連結同工",
        description:
          "為不同地區的華人牧者、傳道人和教會同工預備彼此認識與交流的入口，讓服事路上的同行不再孤單。",
      },
      {
        title: "守望禱告",
        description:
          "在共同的負擔中彼此記念，為教會、家庭、城市與下一代守望，學習在禱告中重新對齊主的心意。",
      },
      {
        title: "裝備成長",
        description:
          "圍繞牧養、門徒訓練、領袖更新與時代議題，逐步整理有益資源，幫助同工持續被建造。",
      },
      {
        title: "彼此同行",
        description:
          "鼓勵眾教會在各自處境中忠心服事，彼此激勵，在基督裡重新得力，尋求真實、謙卑而持久的更新。",
      },
    ],
  },
  events: {
    title: "近期聚會",
    intro:
      "這裡發布已經確認的線上聚會與同工交流安排。若會議號碼、密碼或報名方式尚未開放，頁面會及時更新，不會以未經確認的資訊代替。",
    featuredTitle: "面對時代挑戰，教會如何復興",
    description:
      "本次聚會聚焦當代教會處境，邀請同工一同思想教會如何在真理中站立，在禱告中更新，並在彼此連結中重新得力。",
    action: "查看聚會資訊",
  },
  afterGathering: {
    title: "會後交流",
    intro:
      "如果你願意繼續交流，或希望收到後續聚會與資源資訊，可以在這裡留下聯絡方式與簡短需要。資訊僅用於本次聚會後的同工聯絡與後續溝通。",
    qrLabel: "手機掃碼填寫",
    qrHelp: "表單用於會後聯絡，不作公開展示。",
    formUrl: "https://qr-contact-form.onrender.com",
    action: "填寫會後交流表",
  },
  contact: {
    title: "聯絡我們",
    intro:
      "如果你是華人牧者、傳道人、教會同工，或希望進一步了解聯盟與近期聚會，歡迎先透過會後交流表留下資訊。我們會按實際需要逐步整理正式聯絡方式。",
    action: "填寫會後交流表",
  },
  footer: {
    tagline: "為全球華人教牧同工預備一個安靜、真實、彼此守望的連結空間。",
    shortSentence: "願我們在基督裡彼此扶持，忠心走好被託付的路。",
  },
} as const;

export type SiteContentZhHant = typeof siteContentZhHant;
