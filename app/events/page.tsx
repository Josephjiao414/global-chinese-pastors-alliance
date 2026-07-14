import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { displayEventField, eventsZhCN, eventStatusLabels } from "@/content/events.zh-CN";

export const metadata: Metadata = {
  title: "聚会活动",
  description: "查看全球华人教牧同工联盟近期聚会与活动信息。",
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-18">
        <section className="container py-16">
          <div className="gold-line mb-5" />
          <h1 className="serif-title text-5xl font-semibold text-[#0B2340]">
            聚会活动
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-[#0B2340]/72">
            这里整理联盟近期聚会与活动信息。后续新增活动时，只需更新活动数据文件，页面会自动读取并展示。
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
                  </div>
                  <dl className="min-w-56 space-y-3 text-sm">
                    <div>
                      <dt className="text-[#0B2340]/52">时间</dt>
                      <dd className="font-semibold text-[#0B2340]">
                        {event.date} {event.startTime}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#0B2340]/52">会议号码</dt>
                      <dd className="font-semibold text-[#0B2340]">
                        {displayEventField(event.meetingNumber)}
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
                  新的聚会安排确认后，会在本页更新。
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
