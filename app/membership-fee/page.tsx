import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "会費・協力金・寄付",
  description: "樟友会の会費・協力金・寄付のご案内です。",
};

export default function MembershipFeePage() {
  const { fee } = siteConfig;
  const fmt = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

  return (
    <>
      <PageHeader
        title="会費・協力金・寄付"
        subtitle="Membership Fee & Donation"
        description="皆様のご支援が樟友会活動と母校支援の財源となっています。"
        breadcrumb={[{ label: "会費・協力金・寄付" }]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* 会費案内 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">会費のご案内</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />

          {/* 会則第10条の説明 */}
          <div className="bg-navy-50 border border-navy-100 rounded p-4 mb-6 text-sm text-navy-800">
            <p className="font-medium mb-1">📋 会則第10条より</p>
            <p>入会金・前期会費・後期会費はそれぞれ1万円です。入会金・前期会費は岩田高等学校卒業時に、後期会費は入会30年後にそれぞれ納めるものとします。</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {[
              { label: "入会金", amount: fee.admission, timing: "岩田高等学校 卒業時", note: "前期会費と同時に納付" },
              { label: "前期会費", amount: fee.firstTerm, timing: "岩田高等学校 卒業時", note: "入会金と同時に納付" },
              { label: "後期会費", amount: fee.secondTerm, timing: "入会から30年後", note: "入会30年後に別途ご案内" },
            ].map((item) => (
              <div key={item.label} className="card p-5 border-2 border-navy-100">
                <h3 className="font-medium text-navy-700 text-sm mb-2">{item.label}</h3>
                <div className="text-2xl font-bold text-navy-700 mb-1">
                  {fmt(item.amount)}
                  <span className="text-xs font-normal text-stone-400 ml-1">/ 一回</span>
                </div>
                <p className="text-xs text-gold-600 font-medium">{item.timing}</p>
                <p className="text-xs text-stone-400 mt-1">{item.note}</p>
              </div>
            ))}
          </div>

          {/* 振込先 */}
          <div className="bg-white rounded border border-stone-100 shadow-card p-5">
            <h3 className="font-medium text-navy-700 mb-4">お振込先</h3>
            {fee.bank.number === "XXXXXXX" ? (
              <div className="bg-amber-50 border border-amber-200 rounded p-4 text-sm text-amber-800">
                <p className="font-medium mb-1">⚠️ 振込先情報は設定中です</p>
                <p>振込先口座の詳細は事務局までお問い合わせください。</p>
                <Link href="/contact" className="inline-block mt-2 text-xs text-navy-600 hover:underline">
                  事務局に問い合わせる →
                </Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-stone-700">
                <div className="space-y-2">
                  {[
                    ["金融機関", fee.bank.name],
                    ["支店", fee.bank.branch],
                    ["口座種別", fee.bank.type],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-3">
                      <span className="text-stone-400 w-20 shrink-0 text-xs pt-0.5">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    ["口座番号", fee.bank.number],
                    ["口座名義", fee.bank.holder],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-3">
                      <span className="text-stone-400 w-20 shrink-0 text-xs pt-0.5">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <p className="mt-4 text-xs text-stone-400">
              ※ お振込の際は、お名前・卒業回生・ご連絡先をお知らせください。
            </p>
          </div>
        </section>

        {/* 協力金 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">協力金のご案内</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="card p-6">
            <p className="text-sm text-stone-600 leading-loose mb-4">
              協力金は、通常の会費では賄えない特別事業（母校施設への寄贈・記念行事・
              奨学支援の拡充など）に充てるための任意の寄付です。
              金額に定めはございません。皆様のご支援をお待ちしています。
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
              {["¥3,000", "¥5,000", "¥10,000", "¥30,000", "¥50,000", "任意金額"].map((amount) => (
                <div key={amount}
                  className="border border-stone-200 rounded p-2 text-center text-xs
                    font-medium text-stone-600 hover:border-gold-400 hover:bg-gold-50 transition-colors cursor-pointer">
                  {amount}
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-400">
              ※ 振込先は会費と同じ口座をご利用ください。備考欄に「協力金」とご記入ください。
            </p>
          </div>
        </section>

        {/* 使途 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">会費・協力金の使途</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "📕", label: "会誌・名簿の発行", pct: 30 },
              { icon: "🏛", label: "総会・各種行事の運営", pct: 20 },
              { icon: "📚", label: "在校生支援（奨学・クラブ）", pct: 25 },
              { icon: "🌐", label: "ホームページ・広報", pct: 10 },
              { icon: "🤝", label: "支部会・幹事会活動", pct: 10 },
              { icon: "📦", label: "事務局運営費", pct: 5 },
            ].map((item) => (
              <div key={item.label} className="card p-4 flex items-center gap-4">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-stone-700 mb-1">{item.label}</div>
                  <div className="w-full bg-stone-100 rounded-full h-1.5">
                    <div className="bg-navy-600 h-1.5 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
                <span className="text-xs text-stone-400 shrink-0">{item.pct}%</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-stone-400">
            ※ 上記は概算の配分割合です。詳細は総会での決算報告をご覧ください。
          </p>
        </section>

        <div className="text-center">
          <Link href="/contact" className="btn-secondary">
            会費・協力金についてのお問い合わせ →
          </Link>
        </div>
      </div>
    </>
  );
}
