import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { displayEventField, eventsZhCN, eventStatusLabels } from "@/content/events.zh-CN";

export const metadata: Metadata = {
  title: "聚会活动",
  description: "查看全球华人教牧同工联盟近期聚会与活动信息。",
  alternates: {
    canonical: "/events",
    languages: {
      "zh-CN": "/events",
      "zh-Hant": "/zh-Hant/events",
    },
  },
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader
        languageLinks={{ simplified: "/events", traditional: "/zh-Hant/events" }}
      />
      <main className="py-18">
        <section className="container py-16">
          <div className="gold-line mb-5" />
          <h1 className="serif-title text-5xl font-semibold text-[#0B2340]">
            聚会活动
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-[#0B2340]/72">
            这里发布已经确认的线上聚会与同工交流安排。若部分会议资料仍在预备中，我们会在确认后及时更新。
          </p>
          <div className="mt-12 grid gap-6">
            {eventsZhCN.length > 0 ? (
              eventsZhCN.map((event) => (
              <article className="soft-card p-6 md:p-8" key={event.slug}>
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span className="text-sm font-semibold text-[#B88A3B]">
                      {eventStatusLabels[event.status]}
                    </span>
                    <h2 className="serif-title mt-3 text-3xl font-semibold text-[#12345A]">
                      {event.title}
                    </h2>
                    <p className="mt-2 text-lg text-[#0B2340]/82">{event.subtitle}</p>
                    <p className="mt-5 max-w-3xl leading-8 text-[#0B2340]/68">
                      {event.introduction}
                    </p>
                    {event.review.trim() ? (
                      <p className="mt-4 max-w-3xl leading-8 text-[#0B2340]/68">
                        {event.participantCount}。会后同工们期待继续聚集、彼此守望与同行。
                      </p>
                    ) : null}
                  </div>
                  <dl className="min-w-56 space-y-3 text-sm">
                    <div>
                      <dt className="text-[#0B2340]/52">时间</dt>
                      <dd className="font-semibold text-[#0B2340]">
                        {event.date} {event.startTime}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#0B2340]/52">主讲人</dt>
                      <dd className="font-semibold text-[#0B2340]">
                        {displayEventField(event.speaker)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#0B2340]/52">下次聚会</dt>
                      <dd className="font-semibold text-[#0B2340]">
                        {displayEventField(event.nextGathering)}
                      </dd>
                    </div>
                    <Link className="button button-primary mt-5 w-full" href={`/events/${event.slug}`}>
                      查看详情
                    </Link>
                  </dl>
                </div>
              </article>
              ))
            ) : (
              <div className="soft-card p-6 md:p-8">
                <h2 className="serif-title text-2xl font-semibold text-[#0B2340]">
                  暂无公开聚会
                </h2>
                <p className="mt-4 leading-8 text-[#0B2340]/68">
                  新的聚会安排确认后，会在本页更新。你也可以通过会后交流表留下联系方式，方便后续通知。
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
