import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/data/events";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "総会・イベント",
  description: "樟友会の総会・支部会・同期会・クラブOB会などのイベント情報です。",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "開催予定");
  const reports = events.filter((e) => e.status === "開催報告");

  return (
    <>
      <PageHeader
        title="総会・イベント"
        subtitle="Events"
        description="樟友会主催・関連のイベント情報をお届けします。総会・支部会・同期会・クラブOB会など。"
        breadcrumb={[{ label: "総会・イベント" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-14">
        {/* カテゴリリンク */}
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/events/general-meeting", label: "総会案内・報告" },
            { href: "/events/branches", label: "支部会・同期会" },
            { href: "/events/clubs", label: "クラブOB会" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="btn-secondary text-sm">
              {link.label} →
            </Link>
          ))}
        </div>

        {/* 開催予定 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">開催予定</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          {upcoming.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-5">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-stone-400 py-6">現在開催予定のイベントはございません。</p>
          )}
        </section>

        {/* 開催報告 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">開催報告</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="grid md:grid-cols-2 gap-5">
            {reports.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* 年間事業計画 */}
        <section id="plan">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">年間事業計画（令和6年度）</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="bg-white rounded border border-stone-100 shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-100">
                  <th className="px-5 py-3 text-left text-stone-500 font-medium">時期</th>
                  <th className="px-5 py-3 text-left text-stone-500 font-medium">事業・行事</th>
                  <th className="px-5 py-3 text-left text-stone-500 font-medium hidden sm:table-cell">概要</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {[
                  ["3月", "卒業式 代表者祝辞", "同窓会代表者として卒業生へ祝辞"],
                  ["3月", "ゴルフコンペ", "有志によるゴルフコンペ"],
                  ["4月", "入学式 代表者祝辞", "同窓会代表者として新入生へ祝辞"],
                  ["4月", "前期幹事会", "役員・学年幹事が出席し同窓会運営を協議"],
                  ["4月", "清掃活動", "学校内・学校周辺のボランティア清掃"],
                  ["6月", "東京会", "東京地区での同窓会を開催"],
                  ["7月", "ゴルフコンペ", "有志によるゴルフコンペ"],
                  ["9月", "後期幹事会", "役員・学年幹事が出席し同窓会運営を協議"],
                  ["9月", "清掃活動", "学校内・学校周辺のボランティア清掃"],
                  ["10月", "関西会", "関西地区での同窓会を開催（毎年秋頃）"],
                  ["10月", "ゴルフコンペ", "有志によるゴルフコンペ"],
                  ["12月", "樟友会総会・同窓会", "会計報告・活動報告・近況報告・懇親会"],
                ].map(([period, event, summary]) => (
                  <tr key={event} className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-3 text-stone-400">{period}</td>
                    <td className="px-5 py-3 font-medium text-navy-700">{event}</td>
                    <td className="px-5 py-3 text-stone-500 hidden sm:table-cell">{summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

function EventCard({ event }: { event: (typeof events)[0] }) {
  const statusColor =
    event.status === "開催予定"
      ? "bg-gold-100 text-gold-800"
      : "bg-stone-100 text-stone-500";

  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`text-xs px-2 py-0.5 rounded font-medium ${statusColor}`}>
          {event.status}
        </span>
        <span className="text-xs bg-navy-100 text-navy-700 px-2 py-0.5 rounded">
          {event.type}
        </span>
      </div>
      <h3 className="font-medium text-navy-700 mb-2">{event.title}</h3>
      <div className="space-y-1 mb-3 text-xs text-stone-500">
        <p>📅 {event.date.replace(/-/g, ".")}</p>
        <p>📍 {event.location}</p>
      </div>
      <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">{event.description}</p>
      {event.reportUrl && (
        <Link
          href={event.reportUrl}
          className="inline-block mt-3 text-xs text-navy-600 hover:underline"
        >
          報告を見る →
        </Link>
      )}
    </div>
  );
}
