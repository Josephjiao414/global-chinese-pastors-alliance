import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContentZhHant } from "@/content/site.zh-Hant";

export const metadata: Metadata = {
  title: "關於聯盟",
  description: "了解全球華人教牧同工聯盟的異象、使命與核心服事方向。",
  alternates: {
    canonical: "/zh-Hant/about",
    languages: {
      "zh-CN": "/about",
      "zh-Hant": "/zh-Hant/about",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader
        content={siteContentZhHant}
        languageLinks={{ simplified: "/about", traditional: "/zh-Hant/about" }}
        locale="zh-Hant"
      />
      <main>
        <section className="container py-16 md:py-24">
          <div className="gold-line mb-5" />
          <h1 className="serif-title text-5xl font-semibold text-[#0B2340]">
            {siteContentZhHant.about.title}
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-9 text-[#0B2340]/72">
            {siteContentZhHant.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="bg-[#EAF2F8] py-16 md:py-20">
          <div className="container">
            <div className="gold-line mb-5" />
            <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
              {siteContentZhHant.mission.title}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="soft-card p-6">
                <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                  異象
                </h3>
                <p className="mt-4 leading-8 text-[#0B2340]/70">
                  {siteContentZhHant.mission.vision}
                </p>
              </div>
              <div className="soft-card p-6">
                <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                  使命
                </h3>
                <p className="mt-4 leading-8 text-[#0B2340]/70">
                  {siteContentZhHant.mission.statement}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <div className="gold-line mb-5" />
            <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
              {siteContentZhHant.mission.directionsTitle}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {siteContentZhHant.mission.items.map((item) => (
                <article className="soft-card p-6" key={item.title}>
                  <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[#0B2340]/68">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter content={siteContentZhHant} />
    </>
  );
}
