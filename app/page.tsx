import type { Metadata } from "next";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { featuredAlumni } from "@/data/alumni";
import { procedures } from "@/data/support";
import { supportPrograms } from "@/data/support";
import { events } from "@/data/events";
import { NewsBadge } from "@/components/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.org.name,
  description:
    `${siteConfig.org.name}公式ホームページ。卒業生の親睦・母校支援・在校生支援活動を行っています。`,
};

export default function HomePage() {
  const latestNews = newsItems.slice(0, 5);
  const upcomingEvents = events.filter((e) => e.status === "開催予定").slice(0, 3);
  const recentReports = events.filter((e) => e.status === "開催報告").slice(0, 3);

  return (
    <>
      {/* ===== ヒーロー ===== */}
      <section className="hero-pattern text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {/* 背景装飾 */}
          <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M400 0 C300 80, 250 180, 280 300 C310 420, 400 480, 400 480 C400 480, 490 420, 520 300 C550 180, 500 80, 400 0Z"
              fill="white" opacity="0.3"/>
            <circle cx="100" cy="100" r="200" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
            <circle cx="700" cy="500" r="300" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            {/* 上部ラベル */}
            <p className="text-gold-400 text-xs tracking-widest uppercase mb-4 animate-fade-in-up">
              Shoyukai — Alumni Association
            </p>

            {/* メインタイトル */}
            <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6
              animate-fade-in-up animate-delay-100">
              岩田中学校・高等学校
              <span className="block text-gold-300 mt-1">同窓会 樟友会</span>
            </h1>

            {/* サブコピー */}
            <p className="text-navy-100 text-base md:text-lg leading-relaxed mb-8 max-w-xl
              animate-fade-in-up animate-delay-200">
              樟の木のように、深く根を張り、広く枝を伸ばす。
              <br className="hidden md:block" />
              卒業生・在校生・母校を結ぶ、永遠の絆の場です。
            </p>

            {/* CTAボタン */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-300">
              <Link href="/news" className="btn-gold">
                お知らせを見る
              </Link>
              <Link href="/events" className="btn-outline-white">
                総会・イベント
              </Link>
              <Link href="/procedures" className="btn-outline-white">
                会員情報変更
              </Link>
              <Link href="/membership-fee" className="btn-outline-white">
                会費・協力金
              </Link>
            </div>
          </div>
        </div>

        {/* 波形装飾 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full" preserveAspectRatio="none">
            <path d="M0 60 L0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60Z"
              fill="#f9f8f4"/>
          </svg>
        </div>
      </section>

      {/* ===== 樟友会の目的 ===== */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-widest text-gold-600 font-medium mb-3 uppercase">
              About Shoyukai
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-navy-700 font-semibold mb-4">
              樟友会の目的
            </h2>
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <p className="text-stone-600 text-base md:text-lg leading-loose mb-6">
              樟友会は、岩田学園中学・高等学校の卒業生が一堂に集い、
              会員相互の親睦を深め、母校との絆を強め、
              卒業生・在校生・教職員をつなぐ基盤を育てる組織です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: "🌿", label: "つながる", desc: "卒業生・在校生・教職員を結ぶ" },
                { icon: "📖", label: "受け継ぐ", desc: "伝統と精神を次世代へ" },
                { icon: "🤝", label: "支える", desc: "母校と後輩の成長を後押し" },
                { icon: "⭐", label: "誇りを見せる", desc: "活躍する卒業生を讃える" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded border border-stone-100 p-4 text-center shadow-card">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-serif text-navy-700 font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-stone-400">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/about/purpose" className="btn-secondary">
                詳細を見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 新着情報 ===== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-widest text-gold-600 font-medium mb-2 uppercase">
                Latest News
              </p>
              <h2 className="font-serif text-2xl text-navy-700 font-semibold">新着情報</h2>
              <div className="w-10 h-0.5 bg-gold-500 mt-2" />
            </div>
            <Link href="/news" className="text-sm text-navy-600 hover:text-navy-800 transition-colors">
              すべて見る →
            </Link>
          </div>

          <div className="divide-y divide-stone-100">
            {latestNews.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="flex flex-col sm:flex-row sm:items-center gap-3 py-4
                  hover:bg-stone-50 -mx-4 px-4 transition-colors group"
              >
                <time className="text-xs text-stone-400 shrink-0 w-24">
                  {item.date.replace(/-/g, ".")}
                </time>
                <NewsBadge category={item.category} />
                <span className="text-sm text-stone-700 group-hover:text-navy-700 transition-colors flex-1">
                  {item.title}
                  {item.isNew && (
                    <span className="ml-2 inline-block bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold">
                      NEW
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 主要手続きカード ===== */}
      <section className="bg-navy-700 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs tracking-widest text-gold-400 font-medium mb-2 uppercase">
              Member Procedures
            </p>
            <h2 className="font-serif text-2xl text-white font-semibold">各種手続き</h2>
            <div className="w-10 h-0.5 bg-gold-500 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {procedures.map((proc) => (
              <Link
                key={proc.id}
                href={proc.href}
                className="bg-white/10 hover:bg-white/20 border border-white/20
                  rounded p-4 text-center transition-all duration-200 group"
              >
                <div className="text-2xl mb-2">{proc.icon}</div>
                <div className="text-white text-sm font-medium mb-1">{proc.title}</div>
                <div className="text-navy-200 text-xs">{proc.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 総会・支部会・同期会 ===== */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-widest text-gold-600 font-medium mb-2 uppercase">
                Events
              </p>
              <h2 className="font-serif text-2xl text-navy-700 font-semibold">総会・支部会・同期会</h2>
              <div className="w-10 h-0.5 bg-gold-500 mt-2" />
            </div>
            <Link href="/events" className="text-sm text-navy-600 hover:text-navy-800 transition-colors">
              すべて見る →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 開催予定 */}
            <div>
              <h3 className="text-sm font-medium text-navy-700 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500 inline-block"/>
                開催予定
              </h3>
              {upcomingEvents.length > 0 ? (
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="card p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-center shrink-0 bg-navy-700 text-white rounded p-2 min-w-[48px]">
                          <div className="text-xs opacity-70">
                            {event.date.slice(5, 7)}月
                          </div>
                          <div className="text-lg font-bold leading-none">
                            {event.date.slice(8, 10)}
                          </div>
                        </div>
                        <div>
                          <span className="inline-block text-xs bg-navy-100 text-navy-700
                            px-2 py-0.5 rounded mb-1">
                            {event.type}
                          </span>
                          <div className="text-sm font-medium text-stone-800">{event.title}</div>
                          <div className="text-xs text-stone-400 mt-0.5">{event.location}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-stone-400">現在開催予定のイベントはありません。</p>
              )}
            </div>

            {/* 開催報告 */}
            <div>
              <h3 className="text-sm font-medium text-navy-700 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-forest-500 inline-block"/>
                最近の開催報告
              </h3>
              <div className="space-y-3">
                {recentReports.map((event) => (
                  <div key={event.id} className="card p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-center shrink-0 bg-stone-600 text-white rounded p-2 min-w-[48px]">
                        <div className="text-xs opacity-70">
                          {event.date.slice(5, 7)}月
                        </div>
                        <div className="text-lg font-bold leading-none">
                          {event.date.slice(8, 10)}
                        </div>
                      </div>
                      <div>
                        <span className="inline-block text-xs bg-stone-100 text-stone-600
                          px-2 py-0.5 rounded mb-1">
                          {event.type}
                        </span>
                        <div className="text-sm font-medium text-stone-800">{event.title}</div>
                        {event.reportUrl && (
                          <Link
                            href={event.reportUrl}
                            className="text-xs text-navy-600 hover:underline mt-0.5 inline-block"
                          >
                            報告を見る →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 母校・在校生支援 ===== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-widest text-gold-600 font-medium mb-2 uppercase">
                Support
              </p>
              <h2 className="font-serif text-2xl text-navy-700 font-semibold">母校・在校生支援</h2>
              <div className="w-10 h-0.5 bg-gold-500 mt-2" />
              <p className="text-stone-500 text-sm mt-2 max-w-xl">
                樟友会は、卒業生の知識とネットワークを活かし、在校生の成長と母校の発展を支援しています。
              </p>
            </div>
            <Link href="/support" className="text-sm text-navy-600 hover:text-navy-800 transition-colors shrink-0">
              詳細を見る →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {supportPrograms.map((prog) => (
              <div key={prog.id} className="card p-5 group hover:border-gold-200 transition-colors">
                <div className="text-2xl mb-3">{prog.icon}</div>
                <h3 className="font-medium text-navy-700 text-sm mb-1">{prog.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed mb-2">{prog.description}</p>
                <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
                  対象: {prog.target}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 活躍する卒業生 ===== */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-widest text-gold-600 font-medium mb-2 uppercase">
                Alumni
              </p>
              <h2 className="font-serif text-2xl text-navy-700 font-semibold">活躍する卒業生</h2>
              <div className="w-10 h-0.5 bg-gold-500 mt-2" />
            </div>
            <Link href="/alumni" className="text-sm text-navy-600 hover:text-navy-800 transition-colors">
              すべて見る →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredAlumni.map((person) => (
              <div key={person.id} className="card p-5">
                {/* アバター */}
                <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center
                  text-navy-600 text-xl font-serif font-semibold mb-4 border-2 border-navy-50">
                  {person.name.charAt(0)}
                </div>
                <div className="text-sm font-medium text-navy-700 mb-0.5">{person.name}</div>
                <div className="text-xs text-gold-600 mb-1">{person.graduationYear}年卒</div>
                <div className="text-xs text-stone-500 mb-3">
                  {person.occupation}
                  <br />
                  {person.organization}
                </div>
                <p className="text-xs text-stone-500 leading-relaxed line-clamp-3 border-t border-stone-50 pt-3">
                  「{person.message}」
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 歴史・アーカイブ ===== */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest text-gold-400 font-medium mb-2 uppercase">
              Archive
            </p>
            <h2 className="font-serif text-2xl font-semibold mb-1">歴史とアーカイブ</h2>
            <div className="w-10 h-0.5 bg-gold-500 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { href: "/history", icon: "🏛", label: "岩田学園の歴史", desc: "創立から現在まで" },
              { href: "/history#shoyukai", icon: "📜", label: "樟友会の歩み", desc: "設立から40年" },
              { href: "/history#school-song", icon: "🎵", label: "校歌", desc: "歌詞と音源" },
              { href: "/reports", icon: "📰", label: "会報「樟友」", desc: "バックナンバー一覧" },
              { href: "/history#photos", icon: "📷", label: "写真アーカイブ", desc: "懐かしの一枚" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white/10 hover:bg-white/20 border border-white/10
                  rounded p-5 text-center group transition-all duration-200"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-sm font-medium text-white mb-1">{item.label}</div>
                <div className="text-xs text-navy-200">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 外部リンク・SNS ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs tracking-widest text-gold-600 font-medium mb-2 uppercase">
                Links
              </p>
              <h2 className="font-serif text-xl text-navy-700 font-semibold">外部リンク</h2>
              <div className="w-10 h-0.5 bg-gold-500 mt-2" />
            </div>
            <Link href="/links" className="text-sm text-navy-600 hover:text-navy-800 transition-colors">
              すべて見る →
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { href: "https://www.iwata.ac.jp", label: "岩田学園 公式サイト", external: true },
              { href: "/events/branches", label: "福岡支部", external: false },
              { href: "/events/branches", label: "東京支部", external: false },
              { href: "/events/branches", label: "大阪支部", external: false },
              { href: "/events/clubs", label: "クラブOB会", external: false },
              { href: "#", label: "X（旧Twitter）", external: true },
              { href: "#", label: "Facebook", external: true },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-200
                  rounded text-sm text-stone-600 hover:border-navy-300 hover:text-navy-700
                  transition-colors"
              >
                {link.label}
                {link.external && (
                  <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 12 12">
                    <path d="M2 10L10 2M5 2h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 会費・協力金バナー ===== */}
      <section className="bg-forest-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-xl font-semibold mb-2">会費・協力金のご案内</h2>
            <p className="text-green-100 text-sm leading-relaxed max-w-xl">
              皆様からの会費と協力金は、母校支援・在校生支援・同窓会活動の財源として大切に使わせていただいています。
              活動を支えるため、ご協力をお願いいたします。
            </p>
          </div>
          <Link
            href="/membership-fee"
            className="shrink-0 px-8 py-3 bg-white text-forest-700 font-medium text-sm
              rounded hover:bg-stone-50 transition-colors"
          >
            詳細・お手続きはこちら →
          </Link>
        </div>
      </section>
    </>
  );
}
