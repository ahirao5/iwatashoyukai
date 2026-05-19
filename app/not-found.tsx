import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="font-serif text-6xl text-navy-100 font-bold mb-4">404</div>
      <h1 className="font-serif text-2xl text-navy-700 font-semibold mb-3">
        ページが見つかりません
      </h1>
      <p className="text-stone-500 text-sm mb-8 max-w-md">
        お探しのページは移動または削除された可能性があります。
        URLをご確認いただくか、トップページからお探しください。
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn-primary">
          トップページへ
        </Link>
        <Link href="/sitemap" className="btn-secondary">
          サイトマップ
        </Link>
        <Link href="/contact" className="btn-secondary">
          お問い合わせ
        </Link>
      </div>
    </div>
  );
}
