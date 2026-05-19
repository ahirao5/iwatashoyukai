"use client";

import Link from "next/link";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "樟友会について",
    href: "/about",
    children: [
      { label: "目的・設立趣旨", href: "/about/purpose" },
      { label: "会長・学校長挨拶", href: "/about/message" },
      { label: "役員・幹事一覧", href: "/about/officers" },
      { label: "会則・組織体制", href: "/about/rules" },
      { label: "よくある質問", href: "/faq" },
    ],
  },
  {
    label: "お知らせ",
    href: "/news",
  },
  {
    label: "総会・イベント",
    href: "/events",
    children: [
      { label: "総会案内・報告", href: "/events/general-meeting" },
      { label: "支部会・同期会", href: "/events/branches" },
      { label: "クラブOB会", href: "/events/clubs" },
      { label: "年間事業計画", href: "/events#plan" },
    ],
  },
  {
    label: "会報・アーカイブ",
    href: "/reports",
    children: [
      { label: "会報「樟友」", href: "/reports" },
      { label: "岩田学園の歴史", href: "/history" },
      { label: "樟友会の歩み", href: "/history#shoyukai" },
      { label: "校歌・写真", href: "/history#school-song" },
    ],
  },
  {
    label: "活躍する卒業生",
    href: "/alumni",
  },
  {
    label: "母校・在校生支援",
    href: "/support",
  },
  {
    label: "各種手続き",
    href: "/procedures",
    children: [
      { label: "会員情報変更", href: "/procedures#member-info" },
      { label: "同期会掲載依頼", href: "/procedures#reunion" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "会費・協力金", href: "/membership-fee" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      {/* トップバー */}
      <div className="bg-navy-700 text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="opacity-80">岩田学園中学・高等学校 同窓会</span>
          <div className="flex gap-4">
            <Link href="/procedures" className="hover:opacity-80 transition-opacity">
              会員情報変更
            </Link>
            <Link href="/membership-fee" className="hover:opacity-80 transition-opacity">
              会費納入
            </Link>
            <Link href="/contact" className="hover:opacity-80 transition-opacity">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* メインヘッダー */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* 樟の葉アイコン（SVG） */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="20" cy="20" r="19" fill="#1a2e52" stroke="#b8960c" strokeWidth="1.5"/>
                <path
                  d="M20 8 C14 12, 10 17, 12 24 C14 30, 20 32, 20 32 C20 32, 26 30, 28 24 C30 17, 26 12, 20 8Z"
                  fill="#b8960c"
                  opacity="0.9"
                />
                <line x1="20" y1="32" x2="20" y2="36" stroke="#b8960c" strokeWidth="1.5"/>
                <line x1="20" y1="18" x2="16" y2="24" stroke="#1a2e52" strokeWidth="1"/>
                <line x1="20" y1="18" x2="24" y2="24" stroke="#1a2e52" strokeWidth="1"/>
              </svg>
            </div>
            <div>
              <div className="font-serif text-navy-700 text-base font-semibold leading-tight">
                樟友会
              </div>
              <div className="text-stone-400 text-xs leading-tight">
                岩田学園中学・高等学校 同窓会
              </div>
            </div>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm text-stone-600 hover:text-navy-700 rounded
                    hover:bg-stone-50 transition-colors duration-150 flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 12 12">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </Link>

                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-stone-100
                    rounded shadow-lg shadow-stone-200/60 py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-stone-600 hover:text-navy-700
                          hover:bg-stone-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ハンバーガー */}
          <button
            className="lg:hidden p-2 text-stone-500 hover:text-navy-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-100 bg-white max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-stone-700 hover:text-navy-700
                  hover:bg-stone-50 border-b border-stone-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="bg-stone-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-8 py-2.5 text-xs text-stone-500 hover:text-navy-700
                        border-b border-stone-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link
              href="/procedures"
              className="btn-primary justify-center text-center"
              onClick={() => setMobileOpen(false)}
            >
              会員情報変更
            </Link>
            <Link
              href="/membership-fee"
              className="btn-secondary justify-center text-center"
              onClick={() => setMobileOpen(false)}
            >
              会費納入
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
