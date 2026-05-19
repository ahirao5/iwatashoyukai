import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerLinks = {
  about: {
    title: "樟友会について",
    links: [
      { label: "目的・設立趣旨", href: "/about/purpose" },
      { label: "会長・校長挨拶", href: "/about/message" },
      { label: "役員・幹事一覧", href: "/about/officers" },
      { label: "会則・組織体制", href: "/about/rules" },
    ],
  },
  activities: {
    title: "活動・イベント",
    links: [
      { label: "お知らせ", href: "/news" },
      { label: "総会・イベント", href: "/events" },
      { label: "支部会・同期会", href: "/events/branches" },
      { label: "母校・在校生支援", href: "/support" },
    ],
  },
  archive: {
    title: "会誌・アーカイブ",
    links: [
      { label: "会誌・名簿", href: "/reports" },
      { label: "活躍する卒業生", href: "/alumni" },
      { label: "岩田学園の歴史", href: "/history" },
      { label: "外部リンク", href: "/links" },
    ],
  },
  procedures: {
    title: "手続き・サポート",
    links: [
      { label: "各種手続き", href: "/procedures" },
      { label: "会費・協力金", href: "/membership-fee" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "よくある質問", href: "/faq" },
    ],
  },
};

export function Footer() {
  const { contact, org, social, schoolUrl } = siteConfig;
  const postalFormatted = contact.postalCode
    ? `〒${contact.postalCode.slice(0, 3)}-${contact.postalCode.slice(3)}`
    : "";

  return (
    <footer className="bg-navy-800 text-white mt-20">
      {/* CTA帯 */}
      <div className="bg-navy-700 border-b border-navy-600">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-lg font-semibold">住所・メール変更はお早めに</p>
            <p className="text-navy-100 text-sm mt-1">
              会誌や各種案内を確実にお届けするため、最新の情報をご登録ください。
            </p>
          </div>
          <Link
            href="/procedures"
            className="shrink-0 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-white text-sm
              font-medium rounded transition-colors"
          >
            会員情報を変更する →
          </Link>
        </div>
      </div>

      {/* メインフッター */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* ブランドカラム */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="19" fill="#1a2e52" stroke="#b8960c" strokeWidth="1.5"/>
                  <path d="M20 8 C14 12, 10 17, 12 24 C14 30, 20 32, 20 32 C20 32, 26 30, 28 24 C30 17, 26 12, 20 8Z"
                    fill="#b8960c" opacity="0.9"/>
                  <line x1="20" y1="32" x2="20" y2="36" stroke="#b8960c" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <div className="font-serif font-semibold text-white">{org.nameShort}</div>
                <div className="text-navy-200 text-xs">岩田中学校・高等学校 同窓会</div>
              </div>
            </div>
            <p className="text-navy-200 text-xs leading-relaxed">
              岩田中学校・高等学校の卒業生が一堂に集い、
              互いの親睦を深め、母校と卒業生を結ぶ架け橋となる組織です。
            </p>
            <div className="mt-4 space-y-1 text-xs text-navy-300">
              {postalFormatted && <p>{postalFormatted}</p>}
              <p>{contact.address}</p>
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors block">
                  {contact.email}
                </a>
              )}
              {contact.tel && <p>Tel: {contact.tel}</p>}
            </div>
            {/* 学校公式サイトリンク */}
            <a
              href={schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-xs text-gold-400 hover:text-gold-300 transition-colors"
            >
              母校公式サイト
              <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                <path d="M2 10L10 2M6 2h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>

          {/* リンクカラム */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium text-gold-400 mb-3 pb-2 border-b border-navy-600">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-navy-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SNSリンク */}
        {(social.x || social.facebook || social.instagram) && (
          <div className="mt-8 pt-6 border-t border-navy-600 flex items-center gap-4">
            <span className="text-xs text-navy-400">SNS</span>
            {social.x && (
              <a href={social.x} target="_blank" rel="noopener noreferrer"
                className="text-xs text-navy-200 hover:text-white transition-colors">X（旧Twitter）</a>
            )}
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                className="text-xs text-navy-200 hover:text-white transition-colors">Facebook</a>
            )}
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noopener noreferrer"
                className="text-xs text-navy-200 hover:text-white transition-colors">Instagram</a>
            )}
          </div>
        )}
      </div>

      {/* ボトムバー */}
      <div className="border-t border-navy-600">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-navy-300 text-xs">
            &copy; {new Date().getFullYear()} {org.name}. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-navy-300">
            <Link href="/privacy" className="hover:text-white transition-colors">個人情報保護方針</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">サイトマップ</Link>
            <Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
