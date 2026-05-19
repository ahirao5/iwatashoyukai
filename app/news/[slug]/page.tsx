import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsItems } from "@/data/news";
import { NewsBadge, Breadcrumb } from "@/components/ui";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = newsItems.find((n) => n.slug === params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
  };
}

export default function NewsDetailPage({ params }: Props) {
  const item = newsItems.find((n) => n.slug === params.slug);
  if (!item) notFound();

  const currentIndex = newsItems.findIndex((n) => n.slug === params.slug);
  const prevItem = newsItems[currentIndex + 1];
  const nextItem = newsItems[currentIndex - 1];

  return (
    <div className="bg-white min-h-screen">
      {/* ヘッダー部 */}
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumb
            items={[{ label: "お知らせ", href: "/news" }, { label: item.title }]}
          />
          <div className="flex items-center gap-3 mb-3">
            <time className="text-xs text-stone-400">{item.date.replace(/-/g, ".")}</time>
            <NewsBadge category={item.category} />
          </div>
          <h1 className="font-serif text-2xl md:text-3xl text-navy-800 font-semibold leading-snug">
            {item.title}
          </h1>
        </div>
      </div>

      {/* 本文 */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="prose prose-stone max-w-none">
          {item.content ? (
            <div className="text-stone-700 text-sm leading-loose whitespace-pre-line">
              {item.content}
            </div>
          ) : (
            <div className="text-stone-700 text-sm leading-loose">{item.summary}</div>
          )}
        </div>

        {/* 前後ナビ */}
        <div className="mt-12 pt-8 border-t border-stone-100 flex justify-between gap-4">
          {prevItem ? (
            <Link
              href={`/news/${prevItem.slug}`}
              className="flex-1 text-left group"
            >
              <span className="text-xs text-stone-400">← 前のお知らせ</span>
              <p className="text-sm text-stone-700 group-hover:text-navy-700 mt-1 line-clamp-2">
                {prevItem.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextItem ? (
            <Link
              href={`/news/${nextItem.slug}`}
              className="flex-1 text-right group"
            >
              <span className="text-xs text-stone-400">次のお知らせ →</span>
              <p className="text-sm text-stone-700 group-hover:text-navy-700 mt-1 line-clamp-2">
                {nextItem.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-8 text-center">
          <Link href="/news" className="btn-secondary">
            ← お知らせ一覧へ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
