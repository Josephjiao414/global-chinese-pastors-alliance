import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContentZhHant } from "@/content/site.zh-Hant";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "聯絡全球華人教牧同工聯盟，了解聚會與同工連結資訊。",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader
        content={siteContentZhHant}
        languageLinks={{ simplified: "/contact", traditional: "/zh-Hant/contact" }}
        locale="zh-Hant"
      />
      <main className="container py-16 md:py-24">
        <div className="gold-line mb-5" />
        <h1 className="serif-title text-5xl font-semibold text-[#0B2340]">
          {siteContentZhHant.contact.title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-9 text-[#0B2340]/72">
          {siteContentZhHant.contact.intro}
        </p>
        <div className="soft-card mt-10 max-w-2xl p-6 md:p-8">
          <p className="text-sm text-[#0B2340]/58">目前聯絡入口</p>
          <h2 className="serif-title mt-3 text-2xl font-semibold text-[#0B2340]">
            會後交流表
          </h2>
          <p className="mt-4 leading-8 text-[#0B2340]/68">
            請留下姓名、聯絡方式與簡短說明，方便同工在聚會後按實際需要聯絡。正式信箱或其他公開聯絡方式確認後，會在本頁補充。
          </p>
          <a
            className="button button-primary mt-6"
            href={siteContentZhHant.afterGathering.formUrl}
            rel="noreferrer"
            target="_blank"
          >
            {siteContentZhHant.contact.action}
          </a>
        </div>
      </main>
      <SiteFooter content={siteContentZhHant} />
    </>
  );
}
