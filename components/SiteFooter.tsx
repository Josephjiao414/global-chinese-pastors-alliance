import { siteContentZhCN } from "@/content/site.zh-CN";

type SiteFooterProps = {
  content?: {
    siteName: string;
    footer: {
      tagline: string;
    };
  };
};

export function SiteFooter({ content = siteContentZhCN }: SiteFooterProps) {
  return (
    <footer className="bg-[#0B2340] py-10 text-white">
      <div className="container">
        <p className="serif-title text-xl">{content.siteName}</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
          {content.footer.tagline}
        </p>
        <p className="mt-8 text-xs text-white/48">
          © {new Date().getFullYear()} {content.siteName}
        </p>
      </div>
    </footer>
  );
}
