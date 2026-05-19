import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "樟友会について",
  description: "岩田学園樟友会の目的・設立趣旨・会長挨拶・役員一覧・会則などをご案内します。",
};

const sections = [
  {
    href: "/about/purpose",
    title: "目的・設立趣旨",
    description: "樟友会が設立された経緯と、同窓会として大切にしている理念をご紹介します。",
    icon: "📋",
  },
  {
    href: "/about/message",
    title: "会長・学校長挨拶",
    description: "樟友会会長および岩田学園学校長からの挨拶をご覧ください。",
    icon: "💬",
  },
  {
    href: "/about/officers",
    title: "役員・幹事一覧",
    description: "現在の役員・事務局・顧問の一覧です。",
    icon: "👥",
  },
  {
    href: "/about/rules",
    title: "会則・組織体制",
    description: "樟友会の会則および組織体制についてご説明します。",
    icon: "📄",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="樟友会について"
        subtitle="About Shoyukai"
        description="岩田学園中学・高等学校の同窓会「樟友会」の概要をご案内します。"
        breadcrumb={[{ label: "樟友会について" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="card p-6 group hover:border-gold-200 transition-all"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h2 className="font-serif text-lg text-navy-700 font-semibold mb-2 group-hover:text-navy-900">
                {section.title}
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed">{section.description}</p>
              <div className="mt-4 text-sm text-navy-600 group-hover:text-navy-800">
                詳細を見る →
              </div>
            </Link>
          ))}
        </div>

        {/* 概要サマリー */}
        <div className="bg-navy-50 rounded border border-navy-100 p-8">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-4">樟友会 概要</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <table className="w-full">
                <tbody className="divide-y divide-navy-100">
                  {[
                    ["名称", "岩田中学・高等学校同窓会 樟友会"],
                    ["設立", "平成2年（1990年）"],
                    ["初代会長", "安部 茂（18年間在任）"],
                    ["現会長", "山田 信太郎（四回生）"],
                  ].map(([label, value]) => (
                    <tr key={label} className="py-2">
                      <td className="py-2 pr-4 text-stone-500 font-medium w-20 shrink-0">{label}</td>
                      <td className="py-2 text-stone-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <table className="w-full">
                <tbody className="divide-y divide-navy-100">
                  {[
                    ["総会", "年1回（12月頃、大分市内）"],
                    ["会費", "入会金・前期・後期 各10,000円"],
                    ["支部", "東京支部（東京会）・関西支部（関西会）"],
                    ["名簿", "5年に1回発行（希望者有料）"],
                  ].map(([label, value]) => (
                    <tr key={label} className="py-2">
                      <td className="py-2 pr-4 text-stone-500 font-medium w-20 shrink-0">{label}</td>
                      <td className="py-2 text-stone-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
