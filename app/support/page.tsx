import type { Metadata } from "next";
import { supportPrograms } from "@/data/support";
import { PageHeader } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "母校・在校生支援",
  description: "樟友会が取り組む母校支援・在校生支援活動のご紹介です。",
};

export default function SupportPage() {
  return (
    <>
      <PageHeader
        title="母校・在校生支援"
        subtitle="School Support"
        description="樟友会は卒業生の力を活かして、母校と在校生を支えるさまざまな活動を行っています。"
        breadcrumb={[{ label: "母校・在校生支援" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-14">
        {/* リード文 */}
        <section className="max-w-3xl">
          <p className="text-stone-600 text-base leading-loose">
            樟友会は「懐かしさの集まり」にとどまらず、
            <strong className="text-navy-700 font-medium">今も価値を生み出すネットワーク</strong>
            として、在校生・母校のために積極的に活動しています。
            卒業生が持つキャリア・専門知識・人脈を次世代に還元することで、
            母校をともに育てていきます。
          </p>
        </section>

        {/* 支援プログラム一覧 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">支援プログラム</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportPrograms.map((prog) => (
              <div key={prog.id} className="card p-6">
                <div className="text-3xl mb-4">{prog.icon}</div>
                <h3 className="font-serif text-lg text-navy-700 font-semibold mb-2">{prog.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-3">{prog.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-navy-50 text-navy-600 px-2 py-1 rounded">
                    対象: {prog.target}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 活動実績 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">最近の活動実績</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="space-y-4">
            {[
              {
                date: "2024年3月",
                title: "在校生向け卒業生キャリア講話",
                desc: "医療・法律・IT・教育など多分野の卒業生7名が登壇。在校生約100名が参加し、進路への意識が高まる機会となりました。",
                tag: "キャリア支援",
              },
              {
                date: "2023年11月",
                title: "探究学習 卒業生メンター派遣",
                desc: "SSH課題研究の中間発表会にて、卒業生3名が研究メンターとして参加。大学院生・研究者の卒業生が専門的な助言を行いました。",
                tag: "探究支援",
              },
              {
                date: "2023年9月",
                title: "インターンシップ受入（卒業生企業）",
                desc: "卒業生が経営する企業・医療機関・法律事務所など8社・機関にて、在校生・大学生卒業生のインターンシップを受け入れました。",
                tag: "インターン",
              },
              {
                date: "2023年5月",
                title: "クラブ活動支援金贈呈",
                desc: "会費・協力金から運動部・文化部の大会遠征費・用具購入費として総額〇〇万円を贈呈しました。",
                tag: "クラブ支援",
              },
            ].map((item) => (
              <div key={item.title} className="card p-5 flex gap-4">
                <div className="shrink-0 text-center">
                  <time className="text-xs text-stone-400 block">{item.date}</time>
                </div>
                <div className="border-l border-stone-100 pl-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-medium text-navy-700 text-sm">{item.title}</h3>
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 卒業生参加のお誘い */}
        <section className="bg-forest-600 text-white rounded p-8">
          <h2 className="font-serif text-xl font-semibold mb-3">
            卒業生の皆様へ：支援活動に参加しませんか？
          </h2>
          <p className="text-green-100 text-sm leading-relaxed mb-5">
            キャリア講話の講師・インターンシップ受入企業・探究学習のメンターなど、
            皆様のご経験・専門知識を在校生に伝える機会を歓迎しています。
            専門職・会社員・経営者・研究者など、職種・業種を問いません。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="bg-white text-forest-700 px-5 py-2.5 text-sm font-medium rounded hover:bg-stone-50 transition-colors">
              参加を相談する →
            </Link>
            <Link href="/membership-fee" className="border border-white text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-white/10 transition-colors">
              会費・協力金で支援する →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
