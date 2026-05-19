import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "目的・設立趣旨",
  description: "樟友会の設立趣旨と活動目的についてご案内します。",
};

export default function PurposePage() {
  return (
    <>
      <PageHeader
        title="目的・設立趣旨"
        subtitle="Purpose"
        breadcrumb={[
          { label: "樟友会について", href: "/about" },
          { label: "目的・設立趣旨" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* 目的 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">樟友会の目的</h2>
          <div className="w-10 h-0.5 bg-gold-500 mb-6" />
          <div className="bg-navy-50 border-l-4 border-navy-700 p-6 rounded-r">
            <p className="font-serif text-base text-navy-800 leading-loose">
              本会は会員相互の親睦と扶助を図り、あわせて母校の発展に寄与することを目的とする。
            </p>
            <p className="text-xs text-stone-400 mt-3">— 同窓会会則 第2条（目的）より</p>
          </div>
        </section>

        {/* 設立趣旨 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">設立趣旨</h2>
          <div className="w-10 h-0.5 bg-gold-500 mb-6" />
          <div className="prose prose-stone max-w-none text-stone-700 text-sm leading-loose space-y-4">
            <p>
              平成2年（1990年）、安部茂初代会長のもと、岩田中学・高等学校の卒業生たちの「母校との縁をいつまでも大切にしたい」
              「同窓生が世代を超えてつながれる場を作りたい」という思いから、樟友会は設立されました。
            </p>
            <p>
              校名の由来でもある「樟（くす）の木」は、深く根を張り、広く枝を広げ、
              長い年月をかけて大きく育つ木です。この木のように、岩田学園の卒業生たちが
              母校という根を持ちながら、各地に枝を広げ、互いに支え合える組織を目指して活動しています。
            </p>
            <p>
              「樟友会」という名称は、「樟（くすのき）」と「友（ともに）」を組み合わせたものであり、
              樟の木のように永く・強く・広がるネットワークの象徴です。
            </p>
          </div>
        </section>

        {/* 5つの柱 */}
        <section>
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">活動の5つの柱</h2>
          <div className="w-10 h-0.5 bg-gold-500 mb-6" />
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "つながる",
                desc: "卒業生・在校生・教職員・地域を結ぶ生きたネットワークをつくる。",
              },
              {
                num: "02",
                title: "受け継ぐ",
                desc: "伝統・校風・記録・精神を次世代へ継承し、学校の歴史を守る。",
              },
              {
                num: "03",
                title: "支える",
                desc: "母校・在校生・後輩の夢と成長を卒業生の力で後押しする。",
              },
              {
                num: "04",
                title: "誇りを見せる",
                desc: "活躍する卒業生・活動実績・歴史を可視化し、母校への帰属意識を高める。",
              },
              {
                num: "05",
                title: "還元する",
                desc: "学んだ場所に、人・知識・資金で恩返しする文化を卒業生みんなで育てる。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-5 p-5 bg-white rounded border border-stone-100 shadow-card"
              >
                <div className="font-serif text-3xl text-gold-400 font-bold leading-none shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-medium text-navy-700 mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
