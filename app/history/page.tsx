import type { Metadata } from "next";
import { schoolHistory, shoyukaiHistory } from "@/data/history";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "岩田学園の歴史・樟友会の歩み",
  description: "岩田学園中学・高等学校の歴史と、同窓会樟友会の歩みをご覧いただけます。",
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="歴史・アーカイブ"
        subtitle="History & Archive"
        description="岩田学園の歴史、樟友会の歩み、校歌、写真アーカイブをご覧いただけます。"
        breadcrumb={[{ label: "歴史・アーカイブ" }]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* 岩田学園の歴史 */}
        <section id="school">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-2">岩田学園の歴史</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="relative">
            {/* タイムライン線 */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-stone-200 hidden sm:block" />
            <div className="space-y-0">
              {schoolHistory.map((entry, i) => (
                <div key={i} className="flex gap-6 pb-6 relative">
                  {/* 年号 */}
                  <div className="shrink-0 w-14 text-right">
                    <span className="text-sm font-medium text-navy-700">{entry.year}</span>
                  </div>
                  {/* ドット */}
                  <div className="hidden sm:flex shrink-0 w-4 items-start justify-center pt-1.5 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-gold-500 border-2 border-white" />
                  </div>
                  {/* 内容 */}
                  <div className="flex-1 pb-2">
                    <p className="font-medium text-stone-800 text-sm">{entry.event}</p>
                    {entry.detail && (
                      <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{entry.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 樟友会の歩み */}
        <section id="shoyukai">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-2">樟友会の歩み</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-stone-200 hidden sm:block" />
            <div className="space-y-0">
              {shoyukaiHistory.map((entry, i) => (
                <div key={i} className="flex gap-6 pb-6 relative">
                  <div className="shrink-0 w-14 text-right">
                    <span className="text-sm font-medium text-navy-700">{entry.year}</span>
                  </div>
                  <div className="hidden sm:flex shrink-0 w-4 items-start justify-center pt-1.5 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-navy-700 border-2 border-white" />
                  </div>
                  <div className="flex-1 pb-2">
                    <p className="font-medium text-stone-800 text-sm">{entry.event}</p>
                    {entry.detail && (
                      <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{entry.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 校歌 */}
        <section id="school-song">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-2">校歌</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="bg-white rounded border border-stone-100 shadow-card p-8">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl text-navy-700 font-semibold mb-1">岩田中学校・高等学校 校歌</h3>
              <p className="text-xs text-stone-400">作詞：松野 寿生　／　作曲：田村 洋彦</p>
            </div>
            <div className="max-w-sm mx-auto space-y-8 text-center text-stone-700">
              <div className="space-y-2">
                <p className="text-xs text-stone-400 font-medium tracking-widest">一</p>
                <p className="text-sm leading-loose font-serif">
                  歩けば　そこに道がある<br />
                  信ずる者に　ひらく道だから<br />
                  地平に伸びる　空だから<br />
                  ゆるるかに　急ぎたち<br />
                  燃ゆる心　ひとすじを往こう<br />
                  指さして　このひとすじをゆこう
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-stone-400 font-medium tracking-widest">二</p>
                <p className="text-sm leading-loose font-serif">
                  語れば　そこに君がいる<br />
                  みずからの知恵　たのむ君だから<br />
                  想い溢れる　時だから<br />
                  さわやかに　名を挙げて<br />
                  今日のいのち　しんじつを告げよう<br />
                  若い日の　このしんじつをつげよう
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-stone-400 font-medium tracking-widest">三</p>
                <p className="text-sm leading-loose font-serif">
                  歌えば　そこに風が立つ<br />
                  大きな旅へ　誘う風だから<br />
                  明日に走る　声だから<br />
                  はつらつと　陽を浴びて<br />
                  遠い力　あくがれを歌おう<br />
                  肩組んで　このあくがれをうたおう
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 写真アーカイブ（プレースホルダー） */}
        <section id="photos">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-2">写真アーカイブ</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-stone-100 rounded flex items-center justify-center
                  border border-stone-200 text-stone-300 text-xs"
              >
                写真 {i + 1}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-stone-400">
            ※ 写真は順次追加予定です。提供いただける写真がございましたら事務局までお知らせください。
          </p>
        </section>
      </div>
    </>
  );
}
