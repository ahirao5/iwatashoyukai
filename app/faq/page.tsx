"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import { PageHeader } from "@/components/ui";

export default function FaqPage() {
  const categories = Array.from(new Set(faqItems.map((f) => f.category)));
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("すべて");

  const filtered =
    activeCategory === "すべて"
      ? faqItems
      : faqItems.filter((f) => f.category === activeCategory);

  return (
    <>
      <PageHeader
        title="よくある質問"
        subtitle="FAQ"
        description="樟友会についてよくいただくご質問をまとめています。"
        breadcrumb={[{ label: "よくある質問" }]}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* カテゴリフィルター */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["すべて", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                activeCategory === cat
                  ? "bg-navy-700 text-white border-navy-700"
                  : "border-stone-200 text-stone-600 hover:border-navy-300 hover:text-navy-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* アコーディオン */}
        <div className="space-y-2">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-100 rounded shadow-card overflow-hidden"
            >
              <button
                className="w-full text-left flex items-start gap-4 px-5 py-4 hover:bg-stone-50 transition-colors"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                aria-expanded={openId === item.id}
              >
                <span className="font-serif text-gold-500 font-bold text-lg shrink-0 leading-none mt-0.5">
                  Q
                </span>
                <span className="text-sm font-medium text-stone-800 flex-1 leading-relaxed">
                  {item.question}
                </span>
                <svg
                  className={`w-4 h-4 text-stone-400 shrink-0 mt-0.5 transition-transform duration-200 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {openId === item.id && (
                <div className="border-t border-stone-50 px-5 py-4 flex gap-4">
                  <span className="font-serif text-navy-600 font-bold text-lg shrink-0 leading-none mt-0.5">
                    A
                  </span>
                  <p className="text-sm text-stone-600 leading-loose">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 解決しない場合 */}
        <div className="mt-10 bg-navy-50 border border-navy-100 rounded p-6 text-center">
          <p className="text-sm text-navy-700 mb-3">
            ご質問が解決しない場合は、お気軽にお問い合わせください。
          </p>
          <a href="/contact" className="btn-primary text-sm">
            お問い合わせフォームへ →
          </a>
        </div>
      </div>
    </>
  );
}
