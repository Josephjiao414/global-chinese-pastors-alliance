import { siteContentZhCN } from "@/content/site.zh-CN";

export function SiteFooter() {
  return (
    <footer className="bg-[#0B2340] py-10 text-white">
      <div className="container">
        <p className="serif-title text-xl">{siteContentZhCN.siteName}</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
          {siteContentZhCN.footer.tagline}
        </p>
        <p className="mt-8 text-xs text-white/48">
          © {new Date().getFullYear()} 全球华人教牧同工联盟
        </p>
      </div>
    </footer>
  );
}
