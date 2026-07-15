import Link from "next/link";

type PosterHeroContent = {
  hero: {
    name: string;
    subtitle: string;
    primaryAction: string;
    secondaryAction: string;
    globalLine: string;
  };
};

type PosterHeroProps = {
  content: PosterHeroContent;
  eventHref: string;
  titleLines: [string, string];
};

const skyline = [
  "h-16 w-12 rounded-t-sm",
  "h-24 w-9",
  "h-20 w-10 rounded-t-[18px]",
  "h-32 w-8",
  "h-28 w-12",
  "h-40 w-10",
  "h-24 w-14 rounded-t-full",
  "h-36 w-9",
  "h-48 w-8",
  "h-28 w-12",
  "h-36 w-10 rounded-t-sm",
  "h-24 w-14",
  "h-32 w-8",
  "h-20 w-12",
];

const lightNodes = [
  "left-[10%] top-[62%]",
  "left-[18%] top-[74%]",
  "left-[30%] top-[58%]",
  "left-[44%] top-[78%]",
  "left-[55%] top-[60%]",
  "left-[68%] top-[73%]",
  "left-[82%] top-[58%]",
  "left-[90%] top-[76%]",
];

export function PosterHero({ content, eventHref, titleLines }: PosterHeroProps) {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#EAF2F8] pt-14 md:min-h-[760px] md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_22%,rgba(255,255,255,0.95),rgba(216,188,130,0.32)_9%,rgba(234,242,248,0.42)_27%,transparent_55%),linear-gradient(180deg,#EEF7FC_0%,#FAFBFC_46%,#DCECF6_100%)]" />
      <div className="absolute inset-0 opacity-70 bg-[linear-gradient(110deg,rgba(255,255,255,0.55),transparent_35%),radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.72),transparent_26%)]" />

      <div className="container relative z-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="relative mx-auto h-72 w-72 md:mx-0 md:h-[360px] md:w-[360px]">
          <div className="poster-rays" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(216,188,130,0.42)_18%,transparent_62%)]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,246,221,0.92),rgba(255,255,255,0.18)_28%,transparent_68%)] blur-sm"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[246px] w-[246px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute left-1/2 top-0 h-full w-[54px] -translate-x-1/2 rounded-sm border-[5px] border-[#6C5A48]/55 bg-[#FAFBFC]/58 shadow-[inset_0_0_22px_rgba(184,138,59,0.34),0_0_44px_rgba(216,188,130,0.62)]" />
            <div className="absolute left-0 top-[76px] h-[54px] w-full rounded-sm border-[5px] border-[#6C5A48]/55 bg-[#FAFBFC]/58 shadow-[inset_0_0_22px_rgba(184,138,59,0.34),0_0_44px_rgba(216,188,130,0.62)]" />
            <div className="absolute left-1/2 top-[103px] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_36px_18px_rgba(255,230,177,0.88)]" />
          </div>
        </div>

        <div className="pt-1 text-center md:pt-6 md:text-left">
          <p className="serif-title text-xl font-semibold tracking-[0.16em] text-[#0B2340] md:text-3xl">
            <span className="text-[#0B2340]/55">—</span>{" "}
            {content.hero.name}
            {" "}<span className="text-[#0B2340]/55">—</span>
          </p>
          <h1 className="serif-title mt-8 text-4xl font-semibold leading-tight text-[#050D18] md:text-[3.45rem]">
            <span className="block">{titleLines[0]}</span>
            <span className="mt-3 block">{titleLines[1]}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#0B2340]/72 md:text-lg">
            {content.hero.subtitle}
          </p>
          <p className="mt-6 text-sm font-semibold tracking-[0.16em] text-[#12345A]/58">
            {content.hero.globalLine}
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Link className="button button-primary" href={content.hero.primaryAction === "了解聯盟" ? "/zh-Hant/about" : "/about"}>
              {content.hero.primaryAction}
            </Link>
            <Link className="button button-secondary" href={eventHref}>
              {content.hero.secondaryAction}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-0 h-[360px] overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-[310px] bg-[linear-gradient(180deg,transparent,rgba(250,251,252,0.72)_64%,#FAFBFC)]" />
        <div className="absolute left-1/2 top-24 h-[420px] w-[1180px] -translate-x-1/2 rounded-t-[100%] border-t border-white/95 bg-[radial-gradient(circle_at_center_top,rgba(255,255,255,0.68),rgba(153,190,216,0.34)_35%,rgba(18,52,90,0.08)_72%,transparent_73%)] shadow-[0_-22px_42px_rgba(255,255,255,0.78)]" />
        <div className="poster-globe-lines absolute left-1/2 top-24 h-[420px] w-[1180px] -translate-x-1/2 rounded-t-[100%] opacity-80" />
        <div className="absolute left-1/2 top-[78px] flex w-[980px] -translate-x-1/2 items-end justify-center gap-2 opacity-80">
          {skyline.map((shape, index) => (
            <div
              className={`${shape} bg-gradient-to-t from-[#12345A]/52 via-[#12345A]/28 to-[#12345A]/8`}
              key={`${shape}-${index}`}
            />
          ))}
        </div>
        {lightNodes.map((position) => (
          <span
            aria-hidden="true"
            className={`absolute ${position} h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_16px_6px_rgba(216,188,130,0.9)]`}
            key={position}
          />
        ))}
      </div>
    </section>
  );
}
