import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { ProcedureForm } from "@/components/ui/ProcedureForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "樟友会事務局へのご質問・ご相談はこちらからどうぞ。",
};

export default function ContactPage() {
  const { contact } = siteConfig;
  const postalFormatted = contact.postalCode
    ? `〒${contact.postalCode.slice(0, 3)}-${contact.postalCode.slice(3)}`
    : "";

  return (
    <>
      <PageHeader
        title="お問い合わせ"
        subtitle="Contact"
        description="樟友会事務局へのご質問・ご相談はこちらからお寄せください。"
        breadcrumb={[{ label: "お問い合わせ" }]}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* よくある質問への誘導 */}
        <div className="bg-stone-50 rounded p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-stone-600">
            よくあるご質問は「FAQ」にまとめています。まずこちらをご確認ください。
          </p>
          <a href="/faq"
            className="shrink-0 text-xs text-navy-600 border border-navy-200 rounded px-3 py-1.5 hover:bg-navy-50 transition-colors">
            FAQを見る →
          </a>
        </div>

        {/* 連絡先 */}
        <div className="card p-6 mb-8">
          <h2 className="font-serif text-lg text-navy-700 font-semibold mb-4">事務局へのご連絡</h2>
          <div className="grid sm:grid-cols-2 gap-5 text-sm">
            <div>
              <p className="text-stone-400 text-xs mb-1">郵便・所在地</p>
              {postalFormatted && <p className="text-stone-700">{postalFormatted}</p>}
              <p className="text-stone-700">{contact.address}</p>
            </div>
            <div>
              <p className="text-stone-400 text-xs mb-1">メール</p>
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="text-navy-700 hover:underline">
                  {contact.email}
                </a>
              ) : (
                <p className="text-stone-400">（準備中）</p>
              )}
              {contact.tel && (
                <>
                  <p className="text-stone-400 text-xs mt-3 mb-1">電話</p>
                  <p className="text-stone-700">{contact.tel}</p>
                </>
              )}
              <p className="text-stone-400 text-xs mt-3">{contact.officeHours}</p>
            </div>
          </div>
        </div>

        {/* フォーム */}
        <h2 className="font-serif text-xl text-navy-700 font-semibold mb-2">お問い合わせフォーム</h2>
        <div className="w-8 h-0.5 bg-gold-500 mb-6" />
        <ProcedureForm type="contact" />
      </div>
    </>
  );
}
