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
    alternates: {
      canonical: `/events/${event.slug}`,
      languages: {
        "zh-CN": `/events/${event.slug}`,
        "zh-Hant": `/zh-Hant/events/${event.slug}`,
      },
    },
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
    ["主持人", displayEventField(event.host)],
    ["主讲人", displayEventField(event.speaker)],
    ["参与情况", displayEventField(event.participantCount)],
    ["会议平台", displayEventField(event.platform)],
    ["会议号码", displayEventField(event.meetingNumber)],
    ["会议密码", displayEventField(event.meetingPassword)],
    ["下次聚会", displayEventField(event.nextGathering)],
  ];

  return (
    <>
      <SiteHeader
        languageLinks={{
          simplified: `/events/${event.slug}`,
          traditional: `/zh-Hant/events/${event.slug}`,
        }}
      />
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
              {event.guests.length > 0 ? (
                <div className="mt-8 border-t border-[#12345A]/10 pt-6">
                  <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                    分享嘉宾
                  </h3>
                  <p className="mt-3 leading-8 text-[#0B2340]/70">
                    {event.guests.join("、")}
                  </p>
                </div>
              ) : null}
              {event.speakerBio.trim() ? (
                <div className="mt-8 border-t border-[#12345A]/10 pt-6">
                  <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                    主讲人简介
                  </h3>
                  <p className="mt-3 leading-8 text-[#0B2340]/70">
                    {event.speakerBio}
                  </p>
                </div>
              ) : null}
              {event.review.trim() ? (
                <div className="mt-8 border-t border-[#12345A]/10 pt-6">
                  <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                    本次集会回顾
                  </h3>
                  <p className="mt-3 leading-8 text-[#0B2340]/70">
                    {event.review}
                  </p>
                  {event.reviewImage.trim() ? (
                    <figure
                      className="mt-6 overflow-hidden rounded-md border border-[#12345A]/10 bg-[#FAFBFC]"
                      data-protected-media
                    >
                      <Image
                        alt={event.reviewImageAlt}
                        className="h-auto w-full select-none"
                        draggable={false}
                        height={720}
                        src={event.reviewImage}
                        width={1280}
                      />
                      <figcaption className="px-4 py-3 text-sm text-[#0B2340]/58">
                        {event.reviewImageAlt}
                      </figcaption>
                    </figure>
                  ) : null}
                </div>
              ) : null}
              {event.videoEmbedUrl.trim() ? (
                <div className="mt-8 border-t border-[#12345A]/10 pt-6">
                  <h3 className="serif-title text-2xl font-semibold text-[#0B2340]">
                    活动录制视频
                  </h3>
                  <p className="mt-3 leading-8 text-[#0B2340]/70">
                    {event.videoTitle}
                  </p>
                  <div className="mt-5 overflow-hidden rounded-md border border-[#12345A]/10 bg-[#0B2340]">
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
                  <a
                    className="mt-4 inline-flex text-sm font-semibold text-[#B88A3B]"
                    href={event.videoUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    在 YouTube 打开
                  </a>
                </div>
              ) : null}
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
                  下次聚会时间与报名方式确认后会在本页更新。你也可以通过“联系我们”留下信息，方便后续通知。
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
