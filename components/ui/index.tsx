import Link from "next/link";
import type { NewsCategory } from "@/types";

// ===== パンくず =====
interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくずリスト" className="breadcrumb mb-6">
      <Link href="/" className="hover:text-navy-700">
        ホーム
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span>/</span>
          {item.href && i < items.length - 1 ? (
            <Link href={item.href} className="hover:text-navy-700">
              {item.label}
            </Link>
          ) : (
            <span className="text-stone-600">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

// ===== ページヘッダー =====
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
}

export function PageHeader({ title, subtitle, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        {subtitle && (
          <p className="text-xs tracking-widest text-gold-600 font-medium mb-2 uppercase">
            {subtitle}
          </p>
        )}
        <h1 className="section-heading text-2xl md:text-3xl">{title}</h1>
        <div className="section-divider" />
        {description && (
          <p className="text-stone-500 text-sm leading-relaxed max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}

// ===== ニュースカテゴリバッジ =====
export function NewsBadge({ category }: { category: NewsCategory }) {
  const colorMap: Record<NewsCategory, string> = {
    総会: "bg-navy-700 text-white",
    支部会: "bg-forest-500 text-white",
    同期会: "bg-amber-600 text-white",
    クラブOB会: "bg-purple-700 text-white",
    お知らせ: "bg-stone-500 text-white",
    会報: "bg-amber-800 text-white",
    母校支援: "bg-teal-700 text-white",
    卒業生: "bg-blue-700 text-white",
    慶弔: "bg-stone-400 text-white",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs rounded font-medium ${colorMap[category]}`}
    >
      {category}
    </span>
  );
}

// ===== セクション見出し =====
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <p className="text-xs tracking-widest text-gold-600 font-medium mb-2 uppercase">
          {subtitle}
        </p>
      )}
      <h2 className="section-heading">{title}</h2>
      <div className={`section-divider ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
