import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "クラブOB会",
  description: "岩田学園の各部活動OB・OG会の紹介と活動情報です。",
};

const clubs = [
  {
    id: "soccer",
    name: "サッカー部OB会（松楠会）",
    founded: "1990年",
    description:
      "岩田学園サッカー部OB・OGの会。現役部員への技術指導・激励、年1回の総会・懇親会を行っています。",
    activity: "年1回総会・現役生指導",
  },
  {
    id: "brass",
    name: "吹奏楽部OB・OG会",
    founded: "1995年",
    description:
      "定期演奏会への参加・現役部員の大会応援などを行う吹奏楽部卒業生の会です。",
    activity: "定演参加・合同演奏",
  },
  {
    id: "baseball",
    name: "野球部OB会",
    founded: "1988年",
    description:
      "甲子園を目指す現役部員の応援・支援を行うOB組織。OB戦を毎年開催しています。",
    activity: "OB戦・応援活動",
  },
  {
    id: "tennis",
    name: "テニス部OB会",
    founded: "2000年",
    description:
      "テニス部のOB・OGが集まる会。テニス大会の開催や現役生との交流を行っています。",
    activity: "OB大会・現役生交流",
  },
  {
    id: "track",
    name: "陸上競技部OB会",
    founded: "2005年",
    description:
      "陸上競技部の卒業生組織。大会応援・合宿支援・OB交流会を実施しています。",
    activity: "大会応援・合宿支援",
  },
  {
    id: "cultural",
    name: "文化部連合OB会",
    founded: "2010年",
    description:
      "美術・写真・演劇・文芸など文化系部活動の卒業生が交流する横断的な会です。",
    activity: "合同展示・交流会",
  },
];

export default function ClubsPage() {
  return (
    <>
      <PageHeader
        title="クラブOB会"
        subtitle="Club Alumni"
        description="各部活動のOB・OG会の活動紹介です。現役生への支援・OB同士の交流を行っています。"
        breadcrumb={[
          { label: "総会・イベント", href: "/events" },
          { label: "クラブOB会" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clubs.map((club) => (
            <div key={club.id} className="card p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-navy-700 text-sm leading-snug flex-1">
                  {club.name}
                </h3>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed mb-3">{club.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-navy-50 text-navy-600 px-2 py-0.5 rounded">
                  設立：{club.founded}
                </span>
                <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
                  {club.activity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-stone-50 rounded p-6">
          <h3 className="font-serif text-lg text-navy-700 font-semibold mb-2">
            クラブOB会の新規設立・情報掲載について
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            まだOB会がない部活動の卒業生も、樟友会を通じて情報発信・交流の場を設けることができます。
            新規OB会の設立支援についてはお気軽にご相談ください。
          </p>
          <a href="/contact" className="btn-secondary text-sm">
            事務局に相談する →
          </a>
        </div>
      </div>
    </>
  );
}
