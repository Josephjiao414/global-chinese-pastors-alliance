import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContentZhCN } from "@/content/site.zh-CN";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系全球华人教牧同工联盟，了解聚会与同工连接信息。",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-16 md:py-24">
        <div className="gold-line mb-5" />
        <h1 className="serif-title text-5xl font-semibold text-[#0B2340]">
          {siteContentZhCN.contact.title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-9 text-[#0B2340]/72">
          {siteContentZhCN.contact.intro}
        </p>
        <div className="soft-card mt-10 max-w-2xl p-6 md:p-8">
          <p className="text-sm text-[#0B2340]/58">联系方式</p>
          <p className="mt-3 text-lg font-semibold text-[#0B2340]">稍后公布</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
