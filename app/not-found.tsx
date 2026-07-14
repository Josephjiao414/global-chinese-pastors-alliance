import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container py-20 md:py-28">
        <div className="gold-line mb-5" />
        <h1 className="serif-title text-5xl font-semibold text-[#0B2340]">
          页面未找到
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-[#0B2340]/72">
          你访问的页面可能已经移动，或链接地址有误。请返回首页，或查看近期聚会信息。
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link className="button button-primary" href="/">
            返回首页
          </Link>
          <Link className="button button-secondary" href="/events">
            查看聚会活动
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
