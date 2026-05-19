import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { ProcedureForm } from "@/components/ui/ProcedureForm";

export const metadata: Metadata = {
  title: "各種手続き",
  description: "会員情報変更・住所変更・同期会掲載依頼など各種手続きのご案内です。",
};

export default function ProceduresPage() {
  return (
    <>
      <PageHeader
        title="各種手続き"
        subtitle="Procedures"
        description="会員情報の変更・各種依頼フォームをご利用ください。"
        breadcrumb={[{ label: "各種手続き" }]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* 案内 */}
        <div className="bg-navy-50 border border-navy-100 rounded p-5 text-sm text-navy-800 leading-relaxed">
          <p className="font-medium mb-1">📋 手続きのご案内</p>
          <p>
            フォームはすべて仮実装です。送信データは現在保存・送信されません。
            実運用の際は事務局のメールアドレスまたはGoogleフォームへのリンクに差し替えてください。
          </p>
        </div>

        {/* 会員情報変更 */}
        <section id="member-info">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-2">会員情報変更フォーム</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-2" />
          <p className="text-sm text-stone-500 mb-6">
            住所・氏名・メールアドレス・勤務先等の変更はこちらからお手続きください。
          </p>
          <ProcedureForm type="member-info" />
        </section>

        {/* 同期会掲載依頼 */}
        <section id="reunion">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-2">同期会掲載依頼フォーム</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-2" />
          <p className="text-sm text-stone-500 mb-6">
            同期会の開催案内または開催報告をサイトに掲載希望の方はこちらからお申し込みください。
          </p>
          <ProcedureForm type="reunion" />
        </section>

        {/* 支部会掲載依頼 */}
        <section id="branch">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-2">支部会掲載依頼フォーム</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-2" />
          <p className="text-sm text-stone-500 mb-6">
            支部会の案内・報告掲載のご依頼はこちらからお申し込みください。
          </p>
          <ProcedureForm type="branch" />
        </section>

        {/* 卒業生掲載推薦 */}
        <section id="alumni-recommend">
          <h2 className="font-serif text-xl text-navy-700 font-semibold mb-2">卒業生掲載推薦フォーム</h2>
          <div className="w-8 h-0.5 bg-gold-500 mb-2" />
          <p className="text-sm text-stone-500 mb-6">
            「活躍する卒業生」コーナーへの掲載推薦・ご本人からの申込はこちらからお願いします。
          </p>
          <ProcedureForm type="alumni-recommend" />
        </section>
      </div>
    </>
  );
}
