import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "会則・組織体制",
  description: "樟友会の会則および組織体制についてご案内します。",
};

// 会誌2025掲載の会則（令和6年1月1日より適用）
const rules = [
  {
    chapter: "第1条（名称）",
    text: "本会は岩田中学・高等学校同窓会「樟友会」と称し、事務所を岩田学園内に置く。\n本会支部を東京・大阪に置く（東京支部会・関西支部会）。",
  },
  {
    chapter: "第2条（目的）",
    text: "本会は会員相互の親睦と扶助を図り、あわせて母校の発展に寄与することを目的とする。",
  },
  {
    chapter: "第3条（会員）",
    text: "本会は次の会員で組織する。\n1. 正会員：岩田高等学校卒業生及び岩田中学高等学校を中途退学した者で役員会の承認を得た者。\n2. 準会員：岩田中学・高等学校在校生。\n3. 特別会員：岩田学園理事及び現・旧職員。",
  },
  {
    chapter: "第4条（役員）",
    text: "本会に次の役員を置く。役員の任期はすべて1年とする。但し、再任を妨げない。各役員は総会において正会員中より選出する。但し、会計監査のうち1名及び会計副部長は特別会員中より選出する。\n1. 会長〈1名〉本会を代表し、会務を統括する。\n2. 副会長〈5名〉会長を補佐し、会長に事故ある時はその任務を代行する。\n3. 総務部長〈1名〉母校との連絡を密にし、日常の会務を執行する。\n4. 総務副部長〈2名〉総務部長を補佐し母校との連絡・調整に努める。\n5. 会計部長〈1名〉本会の収支管理を行う。\n6. 会計副部長〈1名〉会計部長を補佐する。\n7. 会計監査〈2名〉会計の監査を行う。\n8. 編集部長〈1名〉名簿、会報等の編集部会務を統轄し執行する。\n9. 編集副部長〈1名〉編集部長を補佐する。\n10. 庶務部長〈1名〉幹事会会議の招集、議案書・議事録の作成を行う。\n11. 東京支部会長〈1名〉・関西支部会長〈1名〉支部会の企画・運営を行う。",
  },
  {
    chapter: "第5条（幹事）",
    text: "学年幹事をIWATAコース（1名）およびAPU・立命館コース（1名）任命し、各年次会員間の連絡等を行う。",
  },
  {
    chapter: "第6条（顧問）",
    text: "1. 本会に若干名顧問を置くことができる。\n2. 顧問は、本会のために特に功労のあった者を、総会の議を経て、会長がこれを委嘱する。\n3. 顧問は、本会の重要会務について、会員の諮問に応ずる。",
  },
  {
    chapter: "第7条（会合）",
    text: "1. 総会は毎年一回開催される。\n2. 会長は必要に応じて役員会を招集し、各種問題につき協議する。\n3. 役員3名以上の要請があれば、会長は役員会を開かなければならない。\n4. 各部長は必要に応じて当該部会を招集し、企画・立案及び決定事項を執行にあたる。",
  },
  {
    chapter: "第8条（会合の決議）",
    text: "各会合において議決を行う場合には、出席者の過半数の賛成を必要とする。可否同数の場合には議長の決するところによる。",
  },
  {
    chapter: "第9条（会員の義務）",
    text: "1. 会員は会費負担の義務を有する。\n2. 会員はその住所・氏名・電話番号を変更した場合には、速やかに本会に通知する義務を有する。\n3. 勤務先・進学先の本会への届け先は、会員の任意とする。",
  },
  {
    chapter: "第10条（会計）",
    text: "1. 本会の経費は、入会金・会費・寄付金・その他の収入で賄う。\n2. 入会金・前期会費・後期会費は各1万円とする。入会金・前期会費は岩田高等学校卒業時に、後期会費は入会30年後にそれぞれ納めるものとする。\n3. 会計は、受領・支出した全ての金銭を正確に記帳する。\n4. 本会の会計年度は、毎年1月1日より12月31日までとする。（但し会計報告は同窓会便宜上同窓会総会からとする）",
  },
  {
    chapter: "第11条（会計監査）",
    text: "1. 会計監査は、年度決算報告を監査し、その結果を総会に報告する。\n2. 会計監査は、必要と認められた場合、会計監査を行うことができる。",
  },
  {
    chapter: "第12条（会則改正）",
    text: "本会則改正は、総会において出席会員の3分の2以上の賛成によって改正される。",
  },
  {
    chapter: "第13条（名簿）",
    text: "名簿は5年に1回作成し希望する会員に有料で配布する。",
  },
  {
    chapter: "第14条（慶弔）",
    text: "会員の弔事の際は生花と弔電を送る。慶事については定めない。",
  },
  {
    chapter: "第15条（個人情報）",
    text: "会員は同窓会が保有する個人情報について第三者に提供、開示しないこと。また、適正にその情報を保護すること。",
  },
];

export default function RulesPage() {
  return (
    <>
      <PageHeader
        title="会則・組織体制"
        subtitle="Rules & Organization"
        breadcrumb={[
          { label: "樟友会について", href: "/about" },
          { label: "会則・組織体制" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-serif text-xl text-navy-700 font-semibold">樟友会 会則</h2>
        </div>
        <p className="text-xs text-stone-400 mb-8">
          令和6年1月1日より適用（附則：平成19年1月1日制定、以降数次改正）
        </p>

        <div className="space-y-0 border border-stone-100 rounded overflow-hidden shadow-card">
          {rules.map((item, i) => (
            <div
              key={item.chapter}
              className={`flex gap-0 border-b border-stone-50 last:border-0 ${
                i % 2 === 0 ? "bg-white" : "bg-stone-50/50"
              }`}
            >
              <div className="bg-navy-700 text-white text-xs font-medium px-4 py-4 w-44 shrink-0 leading-snug flex items-start">
                {item.chapter}
              </div>
              <div className="px-5 py-4 flex-1">
                <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 組織体制 */}
        <div className="mt-12">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">組織体制</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="bg-white rounded border border-stone-100 p-6 shadow-card">
            <div className="flex flex-col items-center gap-2 text-sm">
              <div className="bg-navy-700 text-white px-10 py-2 rounded font-medium">総会</div>
              <div className="w-0.5 h-6 bg-stone-200" />
              <div className="bg-navy-600 text-white px-10 py-2 rounded font-medium">役員会（会長・副会長5名）</div>
              <div className="w-0.5 h-6 bg-stone-200" />
              <div className="flex gap-3 flex-wrap justify-center">
                {["総務部", "会計部", "編集部", "庶務"].map((dept) => (
                  <div key={dept} className="bg-stone-100 text-stone-600 px-4 py-1.5 rounded text-xs font-medium">
                    {dept}
                  </div>
                ))}
              </div>
              <div className="w-0.5 h-6 bg-stone-200" />
              <div className="flex gap-3 flex-wrap justify-center">
                {["東京支部", "関西支部", "IWATAコース学年幹事（36期）", "APUコース学年幹事"].map((branch) => (
                  <div key={branch} className="border border-stone-200 text-stone-500 px-3 py-1 rounded text-xs">
                    {branch}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
