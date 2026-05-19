import type { Metadata } from "next";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { NewsBadge, PageHeader } from "@/components/ui";
import type { NewsCategory } from "@/types";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "樟友会からのお知らせ・活動報告の一覧です。",
};

const categories: (NewsCategory | "すべて")[] = [
  "すべて", "総会", "支部会", "同期会", "クラブOB会", "お知らせ", "会報", "母校支援", "卒業生",
];

export default function NewsPage({
  searchParams,
}: {
  searchParams: { cat?: string };
}) {
  const selectedCat = searchParams.cat as NewsCategory | "すべて" | undefined;
  const filtered =
    !selectedCat || selectedCat === "すべて"
      ? newsItems
      : newsItems.filter((n) => n.category === selectedCat);

  return (
    <>
      <PageHeader
        title="お知らせ"
        subtitle="Latest News"
        description="樟友会からの最新情報・活動報告をお届けします。"
        breadcrumb={[{ label: "お知らせ" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* カテゴリフィルター */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={cat === "すべて" ? "/news" : `/news?cat=${cat}`}
              className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                (!selectedCat && cat === "すべて") || selectedCat === cat
                  ? "bg-navy-700 text-white border-navy-700"
                  : "border-stone-200 text-stone-600 hover:border-navy-300 hover:text-navy-700"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* ニュースリスト */}
        <div className="divide-y divide-stone-100">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="flex flex-col sm:flex-row sm:items-start gap-3 py-5
                hover:bg-stone-50 -mx-4 px-4 transition-colors group"
            >
              <time className="text-xs text-stone-400 shrink-0 w-24 pt-0.5">
                {item.date.replace(/-/g, ".")}
              </time>
              <div className="shrink-0">
                <NewsBadge category={item.category} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-stone-800 group-hover:text-navy-700 mb-1 flex items-center gap-2">
                  {item.title}
                  {item.isNew && (
                    <span className="inline-block bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-400 line-clamp-2">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-stone-400 text-sm py-12 text-center">
            該当するお知らせはありません。
          </p>
        )}
      </div>
    </>
  );
}
