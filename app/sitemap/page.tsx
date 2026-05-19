import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "サイトマップ",
  description: "樟友会ウェブサイトのサイトマップです。",
};

const sitemapData = [
  {
    category: "ホーム",
    links: [{ label: "トップページ", href: "/" }],
  },
  {
    category: "樟友会について",
    links: [
      { label: "樟友会について（概要）", href: "/about" },
      { label: "目的・設立趣旨", href: "/about/purpose" },
      { label: "会長・学校長挨拶", href: "/about/message" },
      { label: "役員・幹事一覧", href: "/about/officers" },
      { label: "会則・組織体制", href: "/about/rules" },
    ],
  },
  {
    category: "お知らせ",
    links: [
      { label: "お知らせ一覧", href: "/news" },
    ],
  },
  {
    category: "総会・イベント",
    links: [
      { label: "総会・イベント一覧", href: "/events" },
      { label: "総会案内・報告", href: "/events/general-meeting" },
      { label: "支部会・同期会", href: "/events/branches" },
      { label: "クラブOB会", href: "/events/clubs" },
    ],
  },
  {
    category: "会報・アーカイブ",
    links: [
      { label: "会報「樟友」", href: "/reports" },
      { label: "歴史・アーカイブ", href: "/history" },
    ],
  },
  {
    category: "卒業生・支援",
    links: [
      { label: "活躍する卒業生", href: "/alumni" },
      { label: "母校・在校生支援", href: "/support" },
    ],
  },
  {
    category: "手続き・サポート",
    links: [
      { label: "各種手続き", href: "/procedures" },
      { label: "会費・協力金・寄付", href: "/membership-fee" },
      { label: "外部リンク", href: "/links" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "よくある質問", href: "/faq" },
    ],
  },
  {
    category: "その他",
    links: [
      { label: "個人情報保護方針", href: "/privacy" },
      { label: "サイトマップ", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHeader
        title="サイトマップ"
        subtitle="Sitemap"
        breadcrumb={[{ label: "サイトマップ" }]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((section) => (
            <div key={section.category}>
              <h2 className="font-medium text-navy-700 text-sm border-b border-stone-100 pb-2 mb-3">
                {section.category}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-600 hover:text-navy-700 flex items-center gap-2 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold-400 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
