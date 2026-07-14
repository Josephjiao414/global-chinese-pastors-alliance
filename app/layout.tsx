import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://global-chinese-pastors-alliance.onrender.com",
  ),
  title: {
    default: "全球华人教牧同工联盟",
    template: "%s | 全球华人教牧同工联盟",
  },
  description:
    "全球华人教牧同工联盟连接华人牧者、传道人和教会同工，一同守望、装备、同行，回应时代挑战。",
  applicationName: "全球华人教牧同工联盟",
  keywords: [
    "全球华人教牧同工联盟",
    "华人教会",
    "教牧同工",
    "牧者",
    "传道人",
    "教会复兴",
    "聚会活动",
  ],
  authors: [{ name: "全球华人教牧同工联盟" }],
  creator: "全球华人教牧同工联盟",
  publisher: "全球华人教牧同工联盟",
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "全球华人教牧同工联盟",
    title: "全球华人教牧同工联盟",
    description:
      "连接全球华人牧者、传道人和教会同工，一同守望、装备、同行，回应时代挑战。",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "全球华人教牧同工联盟",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "全球华人教牧同工联盟",
    description:
      "连接全球华人牧者、传道人和教会同工，一同守望、装备、同行，回应时代挑战。",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
