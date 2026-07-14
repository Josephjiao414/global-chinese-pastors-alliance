import Link from "next/link";
import { siteContentZhCN } from "@/content/site.zh-CN";

export function SiteHeader() {
  return (
    <header className="border-b border-[rgba(18,52,90,0.1)] bg-[#FAFBFC]/92 backdrop-blur">
      <div className="container flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3">
        <Link className="serif-title text-lg font-semibold text-[#12345A]" href="/">
          {siteContentZhCN.siteName}
        </Link>
        <nav aria-label="主导航" className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-8">
          {siteContentZhCN.navigation.map((item) => (
            <Link
              className="text-sm font-medium text-[#0B2340]/78 transition-colors hover:text-[#12345A]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
