import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContentZhHant } from "@/content/site.zh-Hant";
import {
  displayEventFieldZhHant,
  eventStatusLabelsZhHant,
  getUpcomingEventZhHant,
} from "@/content/events.zh-Hant";

export const metadata: Metadata = {
  title: {
    absolute: "全球華人教牧同工聯盟",
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
};

export default function HomePage() {
  const event = getUpcomingEventZhHant();

  return (
    <>
      <SiteHeader
        content={siteContentZhHant}
        languageLinks={{ simplified: "/", traditional: "/zh-Hant" }}
        locale="zh-Hant"
      />
      <main>
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-x-0 bottom-0 h-[380px] bg-[radial-gradient(circle_at_center,rgba(216,188,130,0.22),transparent_24%),linear-gradient(to_top,rgba(234,242,248,0.96),rgba(234,242,248,0.34)_58%,transparent)]" />
          <div className="absolute bottom-0 left-1/2 h-72 w-[980px] -translate-x-1/2 rounded-t-[100%] border border-[#12345A]/14" />
          <div className="absolute bottom-8 left-1/2 h-48 w-[840px] -translate-x-1/2 rounded-t-[100%] border-t border-[#12345A]/10" />
          <div className="absolute bottom-16 left-1/2 h-40 w-[7px] -translate-x-1/2 rounded-full bg-white/90 shadow-[0_0_70px_rgba(216,188,130,0.72),0_0_140px_rgba(255,255,255,0.88)]" />
          <div className="absolute bottom-[8.75rem] left-1/2 h-[7px] w-28 -translate-x-1/2 rounded-full bg-white/90 shadow-[0_0_70px_rgba(216,188,130,0.68),0_0_130px_rgba(255,255,255,0.82)]" />
          <div className="absolute bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,188,130,0.24),rgba(255,255,255,0.2)_34%,transparent_68%)]" />
          <div
            aria-hidden="true"
            className="absolute left-[8%] top-16 hidden h-32 w-24 opacity-28 md:block"
          >
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-[#B88A3B]" />
            <div className="absolute left-1/2 top-10 h-[2px] w-full -translate-x-1/2 rounded-full bg-[#B88A3B]" />
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-24 left-1/2 h-20 w-[760px] -translate-x-1/2 opacity-35"
          >
            <div className="absolute bottom-0 left-0 h-8 w-10 bg-[#12345A]/25" />
            <div className="absolute bottom-0 left-16 h-14 w-8 bg-[#12345A]/20" />
            <div className="absolute bottom-0 left-28 h-11 w-12 bg-[#12345A]/20" />
            <div className="absolute bottom-0 left-48 h-16 w-9 bg-[#12345A]/22" />
            <div className="absolute bottom-0 right-48 h-12 w-10 bg-[#12345A]/20" />
            <div className="absolute bottom-0 right-32 h-16 w-8 bg-[#12345A]/22" />
            <div className="absolute bottom-0 right-16 h-10 w-12 bg-[#12345A]/20" />
            <div className="absolute bottom-0 right-0 h-14 w-9 bg-[#12345A]/24" />
          </div>
          <div className="container relative text-center">
            <p className="mb-6 text-sm font-semibold tracking-[0.18em] text-[#B88A3B]">
              {siteContentZhHant.hero.name}
            </p>
            <h1 className="serif-title mx-auto max-w-5xl text-5xl font-semibold leading-tight text-[#0B2340] md:text-6xl">
              <span className="block">面對時代挑戰，</span>
              <span className="mt-2 block">教會如何復興</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-[#0B2340]/72">
              {siteContentZhHant.hero.subtitle}
            </p>
            <p className="mt-6 text-sm font-semibold tracking-[0.16em] text-[#12345A]/55">
              {siteContentZhHant.hero.globalLine}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link className="button button-primary" href="/zh-Hant/about">
                {siteContentZhHant.hero.primaryAction}
              </Link>
              <Link
                className="button button-secondary"
                href={event ? `/zh-Hant/events/${event.slug}` : "/zh-Hant/events"}
              >
                {siteContentZhHant.hero.secondaryAction}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
                {siteContentZhHant.about.title}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#0B2340]/72">
              {siteContentZhHant.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="rounded-md border-l-2 border-[#B88A3B] bg-[#EAF2F8]/55 px-5 py-4">
                <p className="text-sm font-semibold tracking-[0.14em] text-[#B88A3B]">
                  {siteContentZhHant.about.coreValueTitle}
                </p>
                <p className="mt-2 leading-8 text-[#0B2340]/76">
                  {siteContentZhHant.about.coreValue}
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["聚會資訊", "會後交流", "資源整理"].map((item) => (
                  <div
                    className="border-l border-[#B88A3B]/40 pl-4 text-sm font-semibold text-[#0B2340]"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container">
            <div className="soft-card relative overflow-hidden p-6 md:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-10 h-44 w-32 opacity-14"
              >
                <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-[#12345A]" />
                <div className="absolute left-1/2 top-14 h-[3px] w-full -translate-x-1/2 rounded-full bg-[#12345A]" />
              </div>
              <h2 className="serif-title text-3xl font-semibold text-[#0B2340]">
                {siteContentZhHant.about.buildingTitle}
              </h2>
              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {siteContentZhHant.about.buildingItems.map((item) => (
                  <article className="border-l border-[#B88A3B]/35 pl-5" key={item.title}>
                    <h3 className="serif-title text-xl font-semibold text-[#12345A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#0B2340]/66">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <div className="gold-line mb-5" />
                <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
                  {siteContentZhHant.mission.prayerTitle}
                </h2>
                <p className="mt-5 leading-8 text-[#0B2340]/68">
                  {siteContentZhHant.mission.prayerIntro}
                </p>
              </div>
              <div className="soft-card p-6 md:p-8">
                <ul className="space-y-4">
                  {siteContentZhHant.mission.prayerItems.map((item) => (
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
          </div>
        </section>

        <section className="bg-[#EAF2F8] py-20">
          <div className="container">
            <div className="max-w-3xl">
              <div className="gold-line mb-5" />
              <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
                {siteContentZhHant.events.title}
              </h2>
              <p className="mt-5 leading-8 text-[#0B2340]/72">
                {siteContentZhHant.events.intro}
              </p>
            </div>
            {event ? (
              <article className="soft-card mt-10 grid gap-8 p-6 md:grid-cols-[1fr_auto] md:p-8">
                <div>
                  <span className="text-sm font-semibold text-[#B88A3B]">
                    {eventStatusLabelsZhHant[event.status]}
                  </span>
                  <h3 className="serif-title mt-3 text-3xl font-semibold text-[#0B2340]">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-lg text-[#12345A]">{event.subtitle}</p>
                  <p className="mt-5 max-w-2xl leading-8 text-[#0B2340]/68">
                    {event.introduction}
                  </p>
                  {event.videoEmbedUrl.trim() ? (
                    <div className="mt-7">
                      <h4 className="serif-title text-2xl font-semibold text-[#0B2340]">
                        {event.videoTitle}
                      </h4>
                      <div className="mt-4 overflow-hidden rounded-md border border-[#12345A]/10 bg-[#0B2340]">
                        <iframe
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="aspect-video w-full"
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                          src={event.videoEmbedUrl}
                          title={event.videoTitle}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="min-w-64 border-t border-[#12345A]/12 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-[#0B2340]/52">時間</dt>
                      <dd className="mt-1 font-semibold text-[#0B2340]">
                        {event.date} {event.startTime}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#0B2340]/52">時區</dt>
                      <dd className="mt-1 font-semibold text-[#0B2340]">
                        {event.timezone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#0B2340]/52">參與情況</dt>
                      <dd className="mt-1 font-semibold text-[#0B2340]">
                        {displayEventFieldZhHant(event.participantCount)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#0B2340]/52">下次聚會</dt>
                      <dd className="mt-1 font-semibold text-[#0B2340]">
                        {displayEventFieldZhHant(event.nextGathering)}
                      </dd>
                    </div>
                  </dl>
                  <Link
                    className="button button-primary mt-7 w-full"
                    href={`/zh-Hant/events/${event.slug}`}
                  >
                    {siteContentZhHant.events.action}
                  </Link>
                </div>
              </article>
            ) : (
              <div className="soft-card mt-10 p-6 md:p-8">
                <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                  近期聚會確認後公布
                </h3>
                <p className="mt-4 leading-8 text-[#0B2340]/68">
                  聯盟正在預備後續聚會資訊，確認後會在這裡更新。
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20">
          <div className="container grid gap-10 md:grid-cols-[1fr_360px] md:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="gold-line" />
                <span aria-hidden="true" className="text-lg text-[#B88A3B]/70">✝</span>
              </div>
              <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
                {siteContentZhHant.afterGathering.title}
              </h2>
              <p className="mt-5 text-lg leading-9 text-[#0B2340]/72">
                {siteContentZhHant.afterGathering.intro}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#0B2340]/58">
                我們會謹慎使用所提交的資訊，僅用於聚會後的聯絡、交流與後續通知。
              </p>
              <a
                className="button button-primary mt-8"
                href={siteContentZhHant.afterGathering.formUrl}
                rel="noreferrer"
                target="_blank"
              >
                {siteContentZhHant.afterGathering.action}
              </a>
            </div>
            <div className="soft-card mx-auto w-full max-w-[360px] p-6 text-center">
              <div className="mx-auto w-full max-w-[240px] rounded-md border border-[#12345A]/10 bg-[#FAFBFC] p-3">
                <Image
                  alt="會後交流登記表二維碼"
                  className="h-auto w-full"
                  height={320}
                  src="/qr-contact.svg"
                  width={320}
                />
              </div>
              <p className="mt-5 text-base font-semibold text-[#0B2340]">
                {siteContentZhHant.afterGathering.qrLabel}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#0B2340]/58">
                {siteContentZhHant.afterGathering.qrHelp}
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter content={siteContentZhHant} />
    </>
  );
}
