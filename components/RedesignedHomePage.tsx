import Image from "next/image";
import Link from "next/link";
import { GlobeMotion } from "@/components/GlobeMotion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { AllianceEvent, EventStatus } from "@/content/events.zh-CN";

type HomeContent = {
  siteName: string;
  navigation: readonly { label: string; href: string }[];
  hero: {
    name: string;
    title: string;
    subtitle: string;
    primaryAction: string;
    secondaryAction: string;
    globalLine: string;
  };
  about: {
    title: string;
    body: readonly string[];
    coreValueTitle: string;
    coreValue: string;
    buildingTitle: string;
    buildingItems: readonly { title: string; description: string }[];
  };
  mission: {
    title: string;
    directionsTitle: string;
    prayerTitle: string;
    prayerIntro: string;
    prayerItems: readonly string[];
  };
  events: {
    title: string;
    intro: string;
    featuredTitle: string;
    action: string;
  };
  afterGathering: {
    title: string;
    intro: string;
    qrLabel: string;
    formUrl: string;
    action: string;
  };
  contact: {
    title: string;
  };
  footer: {
    tagline: string;
    shortSentence: string;
  };
};

type Props = {
  content: HomeContent;
  event?: AllianceEvent;
  eventHref: string;
  eventsHref: string;
  aboutHref: string;
  languageLinks: {
    simplified: string;
    traditional: string;
  };
  locale?: "zh-CN" | "zh-Hant";
  statusLabels: Record<EventStatus, string>;
  displayEventField: (value: string) => string;
};

export function RedesignedHomePage({
  content,
  event,
  eventHref,
  eventsHref,
  aboutHref,
  languageLinks,
  locale = "zh-CN",
  statusLabels,
  displayEventField,
}: Props) {
  const isTraditional = locale === "zh-Hant";
  const scanText = isTraditional ? "看完影片，掃碼交流" : "看完视频，扫码交流";
  const formHelp = isTraditional
    ? "可留下聯絡方式、交流回應或後續聚會意向。"
    : "可留下联系方式、交流回应或后续聚会意向。";
  const timeLabel = isTraditional ? "時間" : "时间";
  const timezoneLabel = isTraditional ? "時區" : "时区";
  const participantLabel = isTraditional ? "參與情況" : "参与情况";
  const nextLabel = isTraditional ? "下次聚會" : "下次聚会";
  const emptyTitle = isTraditional ? "近期聚會稍後公布" : "近期聚会稍后公布";
  const emptyBody = isTraditional
    ? "聯盟正在預備後續聚會資訊，確認後會在這裡更新。"
    : "联盟正在预备后续聚会信息，确认后会在这里更新。";

  return (
    <>
      <SiteHeader content={content} languageLinks={languageLinks} locale={locale} />
      <main>
        <section className="redesign-hero">
          <div className="redesign-container hero-grid">
            <div className="hero-content">
              <p className="hero-kicker">{content.hero.name}</p>
              <h1 className="hero-title">
                <span className="hero-title-line">{content.hero.title}</span>
              </h1>
              <p className="hero-copy">{content.hero.subtitle}</p>
              <p className="hero-global">{content.hero.globalLine}</p>
              <div className="hero-actions">
                <Link className="button button-primary" href={aboutHref}>
                  {content.hero.primaryAction}
                </Link>
                <Link className="button button-secondary" href={event ? eventHref : eventsHref}>
                  {content.hero.secondaryAction}
                </Link>
              </div>
            </div>
            <GlobeMotion locale={locale} />
          </div>
        </section>

        <section className="section-band">
          <div className="redesign-container split-section">
            <div data-animate>
              <p className="section-kicker">{content.about.coreValueTitle}</p>
              <h2 className="section-title">{content.about.title}</h2>
            </div>
            <div className="body-stack" data-animate>
              {content.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote>{content.about.coreValue}</blockquote>
            </div>
          </div>
        </section>

        <section className="section-band section-alt">
          <div className="redesign-container">
            <div className="section-heading" data-animate>
              <p className="section-kicker">{content.mission.title}</p>
              <h2 className="section-title">{content.about.buildingTitle}</h2>
            </div>
            <div className="building-grid">
              {content.about.buildingItems.map((item) => (
                <article className="building-card" data-animate key={item.title}>
                  <span aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band prayer-section">
          <div className="redesign-container split-section">
            <div data-animate>
              <p className="section-kicker">{content.mission.directionsTitle}</p>
              <h2 className="section-title">{content.mission.prayerTitle}</h2>
              <p className="section-intro">{content.mission.prayerIntro}</p>
            </div>
            <div className="prayer-list" data-animate>
              {content.mission.prayerItems.map((item, index) => (
                <p key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band event-section">
          <div className="redesign-container">
            <div className="section-heading event-heading" data-animate>
              <p className="section-kicker">{content.events.featuredTitle}</p>
              <h2 className="section-title">{content.events.title}</h2>
              <p className="section-intro">{content.events.intro}</p>
            </div>
            {event ? (
              <article className="event-feature" data-animate>
                <div className="video-panel">
                  <div className="video-header">
                    <span>{statusLabels[event.status]}</span>
                    <strong>{event.videoTitle}</strong>
                  </div>
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={event.videoEmbedUrl}
                    title={event.videoTitle}
                  />
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p className="event-subtitle">{event.subtitle}</p>
                  <p>{event.introduction}</p>
                  <dl>
                    <div>
                      <dt>{timeLabel}</dt>
                      <dd>
                        {event.date} {event.startTime}
                      </dd>
                    </div>
                    <div>
                      <dt>{timezoneLabel}</dt>
                      <dd>{event.timezone}</dd>
                    </div>
                    <div>
                      <dt>{participantLabel}</dt>
                      <dd>{displayEventField(event.participantCount)}</dd>
                    </div>
                    <div>
                      <dt>{nextLabel}</dt>
                      <dd>{displayEventField(event.nextGathering)}</dd>
                    </div>
                  </dl>
                  <Link className="button button-primary" href={eventHref}>
                    {content.events.action}
                  </Link>
                </div>
                <aside className="qr-panel">
                  <div className="qr-frame">
                    <Image
                      alt={content.afterGathering.qrLabel}
                      height={320}
                      src="/qr-contact.svg"
                      width={320}
                    />
                  </div>
                  <h3>{scanText}</h3>
                  <p>{formHelp}</p>
                  <a href={content.afterGathering.formUrl} rel="noreferrer" target="_blank">
                    {content.afterGathering.action}
                  </a>
                </aside>
              </article>
            ) : (
              <div className="empty-event" data-animate>
                <h3>{emptyTitle}</h3>
                <p>{emptyBody}</p>
              </div>
            )}
          </div>
        </section>

        <section className="section-band final-section">
          <div className="redesign-container final-grid">
            <div data-animate>
              <p className="section-kicker">{content.contact.title}</p>
              <h2 className="section-title">{content.afterGathering.title}</h2>
              <p className="section-intro">{content.afterGathering.intro}</p>
              <a className="button button-primary" href={content.afterGathering.formUrl} rel="noreferrer" target="_blank">
                {content.afterGathering.action}
              </a>
            </div>
            <div className="quote-panel" data-animate>
              <p>{content.footer.shortSentence}</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter content={content} />
    </>
  );
}
