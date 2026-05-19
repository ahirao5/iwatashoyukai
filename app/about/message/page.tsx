import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "会長・学校長挨拶",
  description: "樟友会会長および岩田学園学校長からのご挨拶です。",
};

export default function MessagePage() {
  return (
    <>
      <PageHeader
        title="会長・学校長挨拶"
        subtitle="Greetings"
        breadcrumb={[
          { label: "樟友会について", href: "/about" },
          { label: "会長・学校長挨拶" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">
        {/* 会長挨拶 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-navy-700 rounded-full" />
            <h2 className="font-serif text-xl text-navy-700 font-semibold">樟友会長 挨拶</h2>
          </div>

          <div className="bg-white rounded border border-stone-100 shadow-card overflow-hidden">
            <div className="bg-navy-700 px-8 py-5">
              <p className="text-gold-300 text-xs tracking-widest uppercase mb-1">President's Message</p>
              <p className="text-white font-serif text-lg font-semibold">
                「卒業年次にかかわらず、自由闊達に、何事にもアグレッシブに」
              </p>
            </div>
            <div className="px-8 py-8 space-y-5 text-stone-700 text-sm leading-loose">
              <p>
                樟友会会員の皆様におかれましては、ますますご健勝のこととお喜び申し上げます。
                さてこの度、野村威雄さんよりご指名をいただき、樟友会会長を拝命いたしました
                山田信太郎（四回生）でございます。
              </p>
              <p>
                在学時は学業より、部活動に注力し優等生ではありませんでしたが、
                岩田学園の学校生活・寮生活で多くの事を学びました。
                岩田で学んだ多くの事が私の人生の礎となっております。
              </p>
              <p>
                私には三人の娘がおりますが、三人とも母校にお世話になり、
                先生方のお力添えのおかげで、楽しく充実した学園生活を送っております。
                久しぶりに家族で集まると、いつも岩田学園の話題になります。
                そして、「孫が生まれたらまた岩田学園に入学させよう」と話しているくらいの
                『岩田愛』を持っております。
              </p>
              <p>
                私はかねてより、卒業生の世間での活躍こそが母校への何よりの貢献となると考え、
                日々仕事に取り組んでまいりました。
              </p>
              <p>
                私が会長として考える同窓会のあり方は、卒業年次にかかわらず、
                自由闊達な意見を交わし、何事にもアグレッシブに取り組んでいける組織であると考えております。
                同窓会・在学生・先生方・事務局そして保護者会、これらがブレることなく
                "ONE TEAM"としてベクトルを合わせて進んでいきたいと思います。
              </p>
              <p>
                微力ではございますが、責任を持ってこの職に取り組んでまいりますので、
                今後とも樟友会へのご支援・ご協力を賜りますようお願い申し上げます。
              </p>
              <div className="pt-4 text-right">
                <p className="text-stone-500 text-xs">岩田学園中学・高等学校 同窓会 樟友会</p>
                <p className="font-serif text-navy-700 font-semibold mt-1">会長　山田 信太郎</p>
                <p className="text-stone-400 text-xs">（四回生）</p>
              </div>
            </div>
          </div>
        </section>

        {/* 学校長挨拶 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gold-500 rounded-full" />
            <h2 className="font-serif text-xl text-navy-700 font-semibold">岩田中学校・高等学校 校長 挨拶</h2>
          </div>

          <div className="bg-white rounded border border-stone-100 shadow-card overflow-hidden">
            <div className="bg-gold-600 px-8 py-5">
              <p className="text-yellow-100 text-xs tracking-widest uppercase mb-1">Principal's Message</p>
              <p className="text-white font-serif text-lg font-semibold">
                「岩田先生の志を胸に、輝ける未来」
              </p>
            </div>
            <div className="px-8 py-8 space-y-5 text-stone-700 text-sm leading-loose">
              <p>
                私たち教職員は、日頃より樟友会の皆様の温かいご支援に心より感謝しております。
              </p>
              <p>
                卒業生が築き上げた伝統と実績は在校生の目標となり、
                その伝統を受け継ぎ、新たな歴史を築こうとする姿に、大きな希望を感じています。
                また、卒業生のご活躍は、私たち教職員にさらなる教育への情熱を燃やさせてくれます。
              </p>
              <p>
                岩田英二先生の創立精神は、今も本校の教育活動の根底に深く根付いています。
              </p>
              <p>
                私は、1回生が高校3年、6回生が入学の年に新卒で赴任し、
                数年間樟英寮で生活しました。そのすべての経験が私の人生の糧となり、
                岩田学園との運命的な出会いに感謝しております。
                卒業生や教職員のご子息・ご息女が本校で学ばれていることも
                大変嬉しく心強く思います。
              </p>
              <p>
                今後も、生徒、保護者、教職員、そして樟友会がワンチームとなり、
                学園を盛り上げていけるよう尽力いたします。
                どうぞ母校岩田学園を温かく応援してください。
                皆様との再会を心よりお待ちしております。
              </p>
              <div className="pt-4 text-right">
                <p className="text-stone-500 text-xs">岩田中学校・高等学校</p>
                <p className="font-serif text-navy-700 font-semibold mt-1">校長　児玉 洋司</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
