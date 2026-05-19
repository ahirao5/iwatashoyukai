import type { Metadata } from "next";
import { events } from "@/data/events";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "支部会・同期会",
  description: "樟友会の支部会・同期会の案内と報告です。",
};

const branches = [
  {
    id: "tokyo",
    name: "東京支部（東京会）",
    region: "首都圏（東京・神奈川・埼玉・千葉ほか）",
    description:
      "毎年6月頃に東京地区での同窓会を開催しています。首都圏在住・在勤の卒業生が集う場です。支部長：藤沢 尚慶。",
    chief: "藤沢 尚慶",
  },
  {
    id: "kansai",
    name: "関西支部（関西会）",
    region: "近畿圏（大阪・兵庫・京都・奈良ほか）",
    description:
      "2013年より毎年秋頃に懇親会を開催しています。関西在住のOB・OGが学年を超えて集まるアットホームな会です。第9回（2024年11月9日）も盛況でした。支部長：東 義敬（一回生：三穂野弘文氏が創設）。",
    chief: "東 義敬",
  },
];

export default function BranchesPage() {
  const branchEvents = events.filter((e) => e.type === "支部会" || e.type === "同期会");

  return (
    <>
      <PageHeader
        title="支部会・同期会"
        subtitle="Branches & Reunions"
        description="各地の支部会・同期会の案内・報告をお届けします。"
        breadcrumb={[
          { label: "総会・イベント", href: "/events" },
          { label: "支部会・同期会" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-14">
        {/* 支部紹介 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">各地域支部</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="grid md:grid-cols-3 gap-5">
            {branches.map((branch) => (
              <div key={branch.id} className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-navy-700 rounded flex items-center justify-center text-gold-300 font-serif font-bold text-sm">
                    {branch.name.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-700">{branch.name}</h3>
                    <p className="text-xs text-stone-400">{branch.region}</p>
                  </div>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">{branch.description}</p>
                <p className="mt-3 text-xs text-stone-400">
                  ※ 支部会への参加・問い合わせは事務局までご連絡ください。
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-stone-50 rounded p-4 text-xs text-stone-500">
            ※ その他の地域にお住まいの卒業生も歓迎します。新支部の設立についてはお気軽にご相談ください。
          </div>
        </section>

        {/* 支部会・同期会 活動報告 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">開催案内・報告</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="divide-y divide-stone-100">
            {branchEvents.map((event) => (
              <div key={event.id} className="py-5 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="shrink-0 text-center bg-navy-700 text-white rounded p-2 w-14">
                  <div className="text-xs opacity-70">{event.date.slice(5, 7)}月</div>
                  <div className="text-lg font-bold leading-none">{event.date.slice(8, 10)}</div>
                  <div className="text-xs opacity-70">{event.date.slice(0, 4)}</div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                      event.status === "開催予定"
                        ? "bg-gold-100 text-gold-800"
                        : "bg-stone-100 text-stone-500"
                    }`}>
                      {event.status}
                    </span>
                    <span className="text-xs bg-forest-50 text-forest-700 px-2 py-0.5 rounded">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-medium text-navy-700 mb-1">{event.title}</h3>
                  <p className="text-xs text-stone-400 mb-2">📍 {event.location}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 掲載依頼CTA */}
        <section className="bg-navy-50 border border-navy-100 rounded p-6">
          <h3 className="font-serif text-lg text-navy-700 font-semibold mb-2">
            同期会・支部会の情報を掲載しませんか？
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            同期会や支部会の開催案内・開催報告をサイトに掲載することができます。
            多くの卒業生に情報をお届けするため、ぜひご活用ください。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/procedures#reunion" className="btn-primary text-sm">
              同期会掲載依頼
            </a>
            <a href="/procedures#branch" className="btn-secondary text-sm">
              支部会掲載依頼
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
