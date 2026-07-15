import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PosterHero } from "@/components/PosterHero";
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
        <PosterHero
          content={siteContentZhHant}
          eventHref={event ? `/zh-Hant/events/${event.slug}` : "/zh-Hant/events"}
          titleLines={["面對時代挑戰", "教會如何復興"]}
        />

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
                      <dt className="text-[#0B2340]/52">會議號碼</dt>
                      <dd className="mt-1 font-semibold text-[#0B2340]">
                        {displayEventFieldZhHant(event.meetingNumber)}
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
