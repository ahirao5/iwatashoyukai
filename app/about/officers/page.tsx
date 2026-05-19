import type { Metadata } from "next";
import { officers, boardAdvisors, classRepresentativesIwata, classRepresentativesApu } from "@/data/officers";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "役員・幹事一覧",
  description: "樟友会2025年度の役員・学年幹事・顧問の一覧です。",
};

export default function OfficersPage() {
  return (
    <>
      <PageHeader
        title="役員・幹事一覧"
        subtitle="Officers"
        description="2025年度の役員・学年幹事・顧問の一覧です。"
        breadcrumb={[
          { label: "樟友会について", href: "/about" },
          { label: "役員・幹事一覧" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* 顧問 */}
        <section>
          <h2 className="font-serif text-lg text-navy-700 font-semibold mb-4">顧問</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-5" />
          <div className="grid sm:grid-cols-2 gap-4">
            {boardAdvisors.map((a) => (
              <div key={a.id} className="card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center
                  font-serif text-gold-700 text-lg font-semibold shrink-0">
                  {a.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-navy-700">{a.name}</div>
                  <div className="text-xs text-gold-600">{a.role}</div>
                  {a.note && <div className="text-xs text-stone-400 mt-0.5">{a.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 役員 */}
        <section>
          <h2 className="font-serif text-lg text-navy-700 font-semibold mb-4">2025年度 役員</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-5" />
          <div className="bg-white rounded border border-stone-100 shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-700 text-white">
                  <th className="px-5 py-3 text-left font-medium">役職</th>
                  <th className="px-5 py-3 text-left font-medium">氏名</th>
                  <th className="px-5 py-3 text-left font-medium hidden sm:table-cell">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {officers.map((officer) => (
                  <tr key={officer.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-3 text-stone-500">{officer.role}</td>
                    <td className="px-5 py-3 font-medium text-navy-700">{officer.name}</td>
                    <td className="px-5 py-3 text-stone-400 text-xs hidden sm:table-cell">
                      {officer.note ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* IWATAコース学年幹事 */}
        <section>
          <h2 className="font-serif text-lg text-navy-700 font-semibold mb-4">
            2025年度 学年幹事（IWATAコース）
          </h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-5" />
          <div className="bg-white rounded border border-stone-100 shadow-card overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 divide-x divide-y divide-stone-50">
              {classRepresentativesIwata.map((rep) => (
                <div key={rep.id} className="px-4 py-3 hover:bg-stone-50 transition-colors">
                  <div className="text-xs text-stone-400 mb-0.5">{rep.role}</div>
                  <div className="text-sm font-medium text-navy-700">{rep.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APUコース学年幹事 */}
        <section>
          <h2 className="font-serif text-lg text-navy-700 font-semibold mb-4">
            2025年度 学年幹事（APU・立命館コース）
          </h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-5" />
          <div className="bg-white rounded border border-stone-100 shadow-card overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 divide-x divide-y divide-stone-50">
              {classRepresentativesApu.map((rep) => (
                <div key={rep.id} className="px-4 py-3 hover:bg-stone-50 transition-colors">
                  <div className="text-xs text-stone-400 mb-0.5">{rep.role}</div>
                  <div className="text-sm font-medium text-navy-700">{rep.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 注記 */}
        <div className="bg-stone-50 rounded p-5 text-xs text-stone-500 leading-relaxed">
          <p>※ 役員・幹事一覧は2025年度（案）です。総会での承認をもって正式に就任します。</p>
          <p className="mt-1">※ 30回生・36回生（APU）の幹事は現在選任中です。決まり次第掲載します。</p>
        </div>
      </div>
    </>
  );
}
