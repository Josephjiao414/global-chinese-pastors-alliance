import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContentZhCN } from "@/content/site.zh-CN";

export const metadata: Metadata = {
  title: "关于联盟",
  description: "了解全球华人教牧同工联盟的异象、使命与核心服事方向。",
  alternates: {
    canonical: "/about",
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
        languageLinks={{ simplified: "/about", traditional: "/zh-Hant/about" }}
      />
      <main>
        <section className="container py-16 md:py-24">
          <div className="gold-line mb-5" />
          <h1 className="serif-title text-5xl font-semibold text-[#0B2340]">
            {siteContentZhCN.about.title}
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-9 text-[#0B2340]/72">
            {siteContentZhCN.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="soft-card mt-10 max-w-4xl p-6 md:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#B88A3B]">
              {siteContentZhCN.about.coreValueTitle}
            </p>
            <p className="serif-title mt-4 text-2xl leading-10 text-[#0B2340]">
              {siteContentZhCN.about.coreValue}
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container">
            <div className="gold-line mb-5" />
            <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
              {siteContentZhCN.about.questionsTitle}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {siteContentZhCN.about.questions.map((item) => (
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

        <section className="bg-[#EAF2F8] py-16 md:py-20">
          <div className="container">
            <div className="gold-line mb-5" />
            <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
              {siteContentZhCN.mission.title}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="soft-card p-6">
                <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                  异象
                </h3>
                <p className="mt-4 leading-8 text-[#0B2340]/70">
                  {siteContentZhCN.mission.vision}
                </p>
              </div>
              <div className="soft-card p-6">
                <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                  使命
                </h3>
                <p className="mt-4 leading-8 text-[#0B2340]/70">
                  {siteContentZhCN.mission.statement}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <div className="gold-line mb-5" />
            <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
              {siteContentZhCN.mission.directionsTitle}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {siteContentZhCN.mission.items.map((item) => (
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

        <section className="bg-[#EAF2F8] py-16 md:py-20">
          <div className="container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
                {siteContentZhCN.mission.prayerTitle}
              </h2>
              <p className="mt-5 leading-8 text-[#0B2340]/68">
                {siteContentZhCN.mission.prayerIntro}
              </p>
            </div>
            <div className="soft-card p-6 md:p-8">
              <ul className="space-y-4">
                {siteContentZhCN.mission.prayerItems.map((item) => (
                  <li className="flex gap-4 text-[#0B2340]/72" key={item}>
                    <span className="mt-1 text-[#B88A3B]" aria-hidden="true">
                      ✦
                    </span>
                    <span className="leading-8">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
