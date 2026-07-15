import Link from "next/link";
import { siteContentZhCN } from "@/content/site.zh-CN";

type SiteHeaderProps = {
  content?: {
    siteName: string;
    navigation: readonly { label: string; href: string }[];
  };
  locale?: "zh-CN" | "zh-Hant";
  languageLinks?: {
    simplified: string;
    traditional: string;
  };
};

export function SiteHeader({
  content = siteContentZhCN,
  locale = "zh-CN",
  languageLinks = {
    simplified: "/",
    traditional: "/zh-Hant",
  },
}: SiteHeaderProps) {
  const isTraditional = locale === "zh-Hant";
  const homeHref = isTraditional ? "/zh-Hant" : "/";

  return (
    <header className="border-b border-[rgba(18,52,90,0.1)] bg-[#FAFBFC]/92 backdrop-blur">
      <div className="container flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3">
        <Link
          className="serif-title inline-flex items-center gap-3 text-lg font-semibold text-[#12345A]"
          href={homeHref}
        >
          <span
            aria-hidden="true"
            className="relative inline-block h-8 w-8 rounded-full border border-[#B88A3B]/50 bg-white/55 shadow-[0_0_22px_rgba(184,138,59,0.16)]"
          >
            <span className="absolute left-1/2 top-[5px] h-[21px] w-[2px] -translate-x-1/2 rounded-full bg-[#B88A3B]/80" />
            <span className="absolute left-1/2 top-[12px] h-[2px] w-[16px] -translate-x-1/2 rounded-full bg-[#B88A3B]/80" />
          </span>
          {content.siteName}
        </Link>
        <nav aria-label={isTraditional ? "主導覽" : "主导航"} className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-8">
          {content.navigation.map((item) => (
            <Link
              className="text-sm font-medium text-[#0B2340]/78 transition-colors hover:text-[#12345A]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <span className="hidden h-4 w-px bg-[#12345A]/18 sm:inline-block" aria-hidden="true" />
          <Link
            className={!isTraditional ? "text-sm font-semibold text-[#12345A]" : "text-sm font-medium text-[#0B2340]/58 transition-colors hover:text-[#12345A]"}
            href={languageLinks.simplified}
            hrefLang="zh-CN"
          >
            简体
          </Link>
          <Link
            className={isTraditional ? "text-sm font-semibold text-[#12345A]" : "text-sm font-medium text-[#0B2340]/58 transition-colors hover:text-[#12345A]"}
            href={languageLinks.traditional}
            hrefLang="zh-Hant"
          >
            繁體
          </Link>
        </nav>
      </div>
    </header>
  );
}
