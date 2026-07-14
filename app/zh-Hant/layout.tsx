import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "全球華人教牧同工聯盟",
    template: "%s | 全球華人教牧同工聯盟",
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
  openGraph: {
    locale: "zh_TW",
    title: "全球華人教牧同工聯盟",
    description:
      "面向華人牧者、傳道人與教會同工的聚會資訊、會後交流與資源整理平台。",
  },
  twitter: {
    title: "全球華人教牧同工聯盟",
    description:
      "面向華人牧者、傳道人與教會同工的聚會資訊、會後交流與資源整理平台。",
  },
};

export default function TraditionalChineseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
