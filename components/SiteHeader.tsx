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
            className="relative inline-block h-6 w-6 rounded-full border border-[#B88A3B]/35"
          >
            <span className="absolute left-1/2 top-[4px] h-[16px] w-px -translate-x-1/2 bg-[#B88A3B]/70" />
            <span className="absolute left-1/2 top-[9px] h-px w-[11px] -translate-x-1/2 bg-[#B88A3B]/70" />
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
