import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/data/events";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "総会案内・報告",
  description: "樟友会定期総会の開催案内と報告です。",
};

export default function GeneralMeetingPage() {
  const meetings = events.filter((e) => e.type === "総会");

  return (
    <>
      <PageHeader
        title="総会案内・報告"
        subtitle="General Meeting"
        description="樟友会定期総会の開催情報・議事録・報告をご覧いただけます。"
        breadcrumb={[
          { label: "総会・イベント", href: "/events" },
          { label: "総会案内・報告" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* 直近の総会 */}
        {meetings.map((meeting) => (
          <div key={meeting.id} className="card overflow-hidden">
            <div className={`px-6 py-4 ${
              meeting.status === "開催予定" ? "bg-gold-600" : "bg-navy-700"
            } text-white`}>
              <span className="text-xs opacity-80 uppercase tracking-wider">
                {meeting.status}
              </span>
              <h2 className="font-serif text-xl font-semibold mt-1">{meeting.title}</h2>
            </div>
            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <span className="text-stone-400 text-xs block mb-0.5">日時</span>
                  <span className="text-stone-700">{meeting.date.replace(/-/g, "年").replace(/(\d{2})$/, "$1日")}</span>
                </div>
                <div>
                  <span className="text-stone-400 text-xs block mb-0.5">場所</span>
                  <span className="text-stone-700">{meeting.location}</span>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{meeting.description}</p>
              {meeting.status === "開催予定" && (
                <div className="mt-4 p-4 bg-gold-50 rounded border border-gold-100">
                  <p className="text-sm text-gold-800">
                    ご出席いただける方は事前にお知らせください。詳細は案内状をご確認ください。
                  </p>
                  <Link href="/contact" className="btn-gold text-sm mt-3 inline-flex">
                    出席連絡・お問い合わせ
                  </Link>
                </div>
              )}
              {meeting.reportUrl && (
                <Link href={meeting.reportUrl} className="btn-secondary text-sm mt-4 inline-flex">
                  報告を見る →
                </Link>
              )}
            </div>
          </div>
        ))}

        {/* 総会の役割説明 */}
        <div className="bg-stone-50 rounded p-6">
          <h3 className="font-serif text-lg text-navy-700 font-semibold mb-3">定期総会について</h3>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            樟友会定期総会は毎年6月頃に岩田学園内にて開催します。
            前年度の事業報告・決算報告の承認、翌年度の事業計画・予算案の審議、
            役員改選（改選年）などを行います。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            総会後には懇親会を設け、世代を超えた卒業生同士の交流の場としています。
            すべての会員が参加できますので、ぜひご出席ください。
          </p>
        </div>
      </div>
    </>
  );
}
