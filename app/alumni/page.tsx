import type { Metadata } from "next";
import { featuredAlumni } from "@/data/alumni";
import { PageHeader } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "活躍する卒業生",
  description: "岩田学園の卒業生が各界で活躍する様子をご紹介します。",
};

export default function AlumniPage() {
  return (
    <>
      <PageHeader
        title="活躍する卒業生"
        subtitle="Alumni"
        description="岩田学園の卒業生は、医療・法律・ビジネス・文化・スポーツなど各界で活躍しています。"
        breadcrumb={[{ label: "活躍する卒業生" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 年早見表導線 */}
        <div className="bg-stone-50 rounded p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-stone-600">
            卒業年から学年・学年・期を調べる場合は「卒業年早見表」をご利用ください。
          </p>
          <a
            href="#year-index"
            className="shrink-0 text-xs text-navy-600 border border-navy-200 rounded px-3 py-1.5 hover:bg-navy-50 transition-colors"
          >
            卒業年早見表 →
          </a>
        </div>

        {/* 卒業生カード */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {featuredAlumni.map((person) => (
            <div key={person.id} className="card p-6 flex gap-5">
              {/* アバター */}
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-navy-100 border-2 border-navy-50
                  flex items-center justify-center text-navy-600 text-2xl font-serif font-semibold">
                  {person.name.charAt(0)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-serif text-lg text-navy-700 font-semibold">{person.name}</h3>
                  <span className="text-xs bg-gold-100 text-gold-700 px-2 py-0.5 rounded">
                    {person.graduationYear}年卒
                  </span>
                </div>
                <p className="text-sm font-medium text-stone-700 mb-0.5">{person.occupation}</p>
                <p className="text-xs text-stone-400 mb-3">{person.organization}</p>
                <blockquote className="text-sm text-stone-600 leading-loose border-l-2 border-gold-300 pl-3 italic">
                  「{person.message}」
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* 掲載推薦CTA */}
        <div className="bg-navy-50 border border-navy-100 rounded p-6 mb-12">
          <h3 className="font-serif text-lg text-navy-700 font-semibold mb-2">
            活躍する卒業生として掲載しませんか？
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            各界でご活躍の卒業生の皆様に、サイトへのご掲載をお願いしています。
            ご本人からの申込・ご推薦、どちらも歓迎いたします。
          </p>
          <Link href="/procedures#alumni-recommend" className="btn-primary text-sm">
            掲載を申し込む →
          </Link>
        </div>

        {/* 卒業年早見表 */}
        <section id="year-index">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">卒業年早見表</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <p className="text-sm text-stone-500 mb-4">
            西暦卒業年から、入学年度・在籍期間を確認できます。
          </p>
          <div className="bg-white rounded border border-stone-100 shadow-card overflow-x-auto">
            <table className="w-full text-sm text-center">
              <thead>
                <tr className="bg-navy-700 text-white">
                  <th className="px-4 py-2.5 font-medium">卒業年（西暦）</th>
                  <th className="px-4 py-2.5 font-medium">卒業年（和暦）</th>
                  <th className="px-4 py-2.5 font-medium">中学入学年</th>
                  <th className="px-4 py-2.5 font-medium hidden sm:table-cell">高校卒業年</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {Array.from({ length: 15 }, (_, i) => {
                  const year = 2024 - i;
                  const reiwa = year - 2018;
                  const heisei = year - 1988;
                  const eraStr = reiwa > 0 ? `令和${reiwa}年` : `平成${heisei}年`;
                  return (
                    <tr key={year} className="hover:bg-stone-50">
                      <td className="px-4 py-2.5 font-medium text-navy-700">{year}年</td>
                      <td className="px-4 py-2.5 text-stone-500">{eraStr}</td>
                      <td className="px-4 py-2.5 text-stone-500">{year - 6}年</td>
                      <td className="px-4 py-2.5 text-stone-400 hidden sm:table-cell">{year}年3月</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-stone-400">
            ※ 中学から在籍した場合の早見表です。高校から入学された場合は入学年が異なります。
          </p>
        </section>
      </div>
    </>
  );
}
