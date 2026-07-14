import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  displayEventField,
  eventStatusLabels,
  eventsZhCN,
  getEventBySlug,
} from "@/content/events.zh-CN";

type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return eventsZhCN.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "聚会活动",
    };
  }

  return {
    title: event.title,
    description: event.subtitle,
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const details = [
    ["活动日期", event.date],
    ["开始时间", event.startTime],
    ["时区", event.timezone],
    ["主讲人", displayEventField(event.speaker)],
    ["会议平台", displayEventField(event.platform)],
    ["会议号码", displayEventField(event.meetingNumber)],
    ["会议密码", displayEventField(event.meetingPassword)],
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-[#EAF2F8] py-16 md:py-24">
          <div className="container grid gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-center">
            <div>
              <Link className="text-sm font-semibold text-[#B88A3B]" href="/events">
                返回聚会活动
              </Link>
              <p className="mt-8 text-sm font-semibold text-[#B88A3B]">
                {eventStatusLabels[event.status]}
              </p>
              <h1 className="serif-title mt-4 text-5xl font-semibold leading-tight text-[#0B2340] md:text-6xl">
                {event.title}
              </h1>
              <p className="serif-title mt-5 text-3xl font-semibold text-[#12345A]">
                {event.subtitle}
              </p>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-[#0B2340]/72">
                {event.introduction}
              </p>
            </div>
            <div className="soft-card overflow-hidden p-3">
              <Image
                alt={`${event.title}活动海报`}
                className="h-auto w-full rounded-md"
                height={1536}
                priority
                src={event.poster}
                width={1024}
              />
            </div>
          </div>
        </section>

        <section className="py-18">
          <div className="container grid gap-10 py-16 md:grid-cols-[0.72fr_1.28fr]">
            <div>
              <div className="gold-line mb-5" />
              <h2 className="serif-title text-4xl font-semibold text-[#12345A]">
                活动信息
              </h2>
            </div>
            <div className="soft-card p-6 md:p-8">
              <dl className="grid gap-5 md:grid-cols-2">
                {details.map(([label, value]) => (
                  <div className="border-b border-[#12345A]/10 pb-5" key={label}>
                    <dt className="text-sm text-[#0B2340]/52">{label}</dt>
                    <dd className="mt-2 text-lg font-semibold text-[#0B2340]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              {event.registrationUrl.trim() ? (
                <a
                  className="button button-primary mt-8"
                  href={event.registrationUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  报名参加
                </a>
              ) : (
                <p className="mt-8 text-sm leading-7 text-[#0B2340]/64">
                  报名链接稍后公布。你也可以通过“联系我们”获取后续聚会信息。
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
