import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContentZhHant } from "@/content/site.zh-Hant";
import { displayEventFieldZhHant, eventsZhHant, eventStatusLabelsZhHant } from "@/content/events.zh-Hant";

export const metadata: Metadata = {
  title: "聚會活動",
  description: "查看全球華人教牧同工聯盟近期聚會與活動資訊。",
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader
        content={siteContentZhHant}
        languageLinks={{ simplified: "/events", traditional: "/zh-Hant/events" }}
        locale="zh-Hant"
      />
      <main className="py-18">
        <section className="container py-16">
          <div className="gold-line mb-5" />
          <h1 className="serif-title text-5xl font-semibold text-[#0B2340]">
            聚會活動
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-[#0B2340]/72">
            這裡發布已經確認的線上聚會與同工交流安排。若部分會議資料仍在預備中，我們會在確認後及時更新。
          </p>
          <div className="mt-12 grid gap-6">
            {eventsZhHant.length > 0 ? (
              eventsZhHant.map((event) => (
              <article className="soft-card p-6 md:p-8" key={event.slug}>
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span className="text-sm font-semibold text-[#B88A3B]">
                      {eventStatusLabelsZhHant[event.status]}
                    </span>
                    <h2 className="serif-title mt-3 text-3xl font-semibold text-[#12345A]">
                      {event.title}
                    </h2>
                    <p className="mt-2 text-lg text-[#0B2340]/82">{event.subtitle}</p>
                    <p className="mt-5 max-w-3xl leading-8 text-[#0B2340]/68">
                      {event.introduction}
                    </p>
                  </div>
                  <dl className="min-w-56 space-y-3 text-sm">
                    <div>
                      <dt className="text-[#0B2340]/52">時間</dt>
                      <dd className="font-semibold text-[#0B2340]">
                        {event.date} {event.startTime}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#0B2340]/52">會議號碼</dt>
                      <dd className="font-semibold text-[#0B2340]">
                        {displayEventFieldZhHant(event.meetingNumber)}
                      </dd>
                    </div>
                    <Link className="button button-primary mt-5 w-full" href={`/zh-Hant/events/${event.slug}`}>
                      查看詳情
                    </Link>
                  </dl>
                </div>
              </article>
              ))
            ) : (
              <div className="soft-card p-6 md:p-8">
                <h2 className="serif-title text-2xl font-semibold text-[#0B2340]">
                  暫無公開聚會
                </h2>
                <p className="mt-4 leading-8 text-[#0B2340]/68">
                  新的聚會安排確認後，會在本頁更新。你也可以透過會後交流表留下聯絡方式，方便後續通知。
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter content={siteContentZhHant} />
    </>
  );
}
