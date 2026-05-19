import type { Metadata } from "next";
import { externalLinks } from "@/data/externalLinks";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "外部リンク",
  description: "岩田学園・関連団体・各支部・クラブOB会・SNSへのリンク集です。",
};

export default function LinksPage() {
  const categories = ["母校", "関連団体", "支部会", "クラブOB会", "SNS", "その他"] as const;

  return (
    <>
      <PageHeader
        title="外部リンク"
        subtitle="External Links"
        description="母校・関連団体・各支部・クラブOB会・SNSへのリンク集です。"
        breadcrumb={[{ label: "外部リンク" }]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {categories.map((cat) => {
          const links = externalLinks.filter((l) => l.category === cat);
          if (links.length === 0) return null;
          return (
            <section key={cat}>
              <h2 className="font-serif text-lg text-navy-700 font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-5 bg-gold-500 rounded-full inline-block" />
                {cat}
              </h2>
              <div className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white border border-stone-100 rounded
                      shadow-card hover:shadow-card-hover hover:border-navy-100 transition-all group"
                  >
                    <div className="w-8 h-8 bg-navy-50 rounded flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-navy-400" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-navy-700 group-hover:text-navy-900 flex items-center gap-2">
                        {link.name}
                        <svg className="w-3 h-3 text-stone-300 shrink-0" fill="none" viewBox="0 0 12 12">
                          <path d="M2 10L10 2M6 2h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      {link.description && (
                        <p className="text-xs text-stone-400 mt-0.5">{link.description}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}

        <div className="bg-stone-50 rounded p-4 text-xs text-stone-500 leading-relaxed">
          <p>
            ※ リンク先は外部サイトです。各サイトのコンテンツについては各運営者にお問い合わせください。
          </p>
          <p className="mt-1">
            ※ リンクの追加・変更をご希望の場合は事務局までご連絡ください。
          </p>
        </div>
      </div>
    </>
  );
}
