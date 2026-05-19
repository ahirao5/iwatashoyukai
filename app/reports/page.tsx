import type { Metadata } from "next";
import { magazineIssues } from "@/data/magazine";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "会報「樟友」",
  description: "樟友会の会報「樟友」のバックナンバー一覧です。",
};

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        title="会報「樟友」"
        subtitle="Magazine"
        description="年1回発行の会報「樟友」のバックナンバー一覧です。"
        breadcrumb={[{ label: "会報・広報誌" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 最新号ピックアップ */}
        <div className="mb-10">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">最新号</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="card overflow-hidden md:flex">
            {/* 表紙イメージ */}
            <div className="md:w-48 bg-navy-700 flex items-center justify-center p-8 shrink-0">
              <div className="text-center text-white">
                <div className="font-serif text-4xl font-bold text-gold-300 mb-1">樟友会</div>
                <div className="text-sm opacity-80 mt-1">会誌 2025</div>
                <div className="text-xs opacity-60 mt-1">IWATA Alumni Association</div>
              </div>
            </div>
            <div className="p-6 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-gold-500 text-white text-xs px-2 py-0.5 rounded font-medium">最新号</span>
                <time className="text-xs text-stone-400">2024年12月 発行</time>
              </div>
              <h3 className="font-serif text-lg text-navy-700 font-semibold mb-3">
                樟友会会誌 2025 / 名簿第7版
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                野村前会長・山田新会長・成瀬理事長・児玉校長の挨拶、年間行事一覧、校歌、
                2025年度役員（案）・学年幹事（案）一覧、卒業生近況報告、関西会紹介、同窓会会則を掲載。
                名簿第7版と同時発行（名簿は希望者への有料頒布）。
              </p>
              <div className="bg-stone-50 rounded p-3 text-xs text-stone-600 mb-4">
                <p className="font-medium mb-1">📋 名簿のご購入について</p>
                <p>名簿第7版は希望される会員の方に有料でご購入いただけます。購入をご希望の方は事務局までお問い合わせください。</p>
              </div>
              <a href="/contact" className="btn-primary text-sm inline-flex">
                名簿購入・お問い合わせ →
              </a>
            </div>
          </div>
        </div>

        {/* バックナンバー */}
        <div>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">過去の会誌・名簿</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-2" />
          <p className="text-xs text-stone-400 mb-6">会誌・名簿は5年に1回（名簿改定のタイミング）で発行しています。</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {magazineIssues.slice(1).map((issue) => (
              <div key={issue.id} className="card p-5 flex gap-4">
                {/* ミニ表紙 */}
                <div className="w-12 bg-navy-800 rounded flex items-center justify-center shrink-0 py-3">
                  <div className="text-center text-white">
                    <div className="font-serif text-xs text-gold-300">樟友</div>
                    <div className="text-white text-xs font-bold mt-1">#{issue.number}</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <time className="text-xs text-stone-400 block mb-1">
                    {issue.publishedDate.replace(/-/g, ".")}
                  </time>
                  <h3 className="font-medium text-navy-700 text-sm mb-1 truncate">
                    {issue.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
                    {issue.description}
                  </p>
                  {issue.pdfUrl ? (
                    <a href={issue.pdfUrl} className="text-xs text-navy-600 hover:underline mt-2 inline-block">
                      PDF →
                    </a>
                  ) : (
                    <span className="text-xs text-stone-300 mt-2 inline-block">PDF準備中</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 案内 */}
        <div className="mt-10 bg-stone-50 rounded p-5 text-sm text-stone-600 leading-relaxed">
          <p className="font-medium text-stone-700 mb-1">📮 会報の送付について</p>
          <p>
            会報「樟友」は、登録いただいている住所に毎年3月頃に郵送いたします。
            転居された方は、お早めに住所変更のお手続きをお願いいたします。
          </p>
          <a href="/procedures" className="btn-secondary text-sm mt-3 inline-flex">
            住所変更はこちら →
          </a>
        </div>
      </div>
    </>
  );
}
