import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "個人情報保護方針",
  description: "樟友会の個人情報保護方針です。",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="個人情報保護方針"
        subtitle="Privacy Policy"
        breadcrumb={[{ label: "個人情報保護方針" }]}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-xs text-stone-400 mb-8">最終更新日：2024年6月1日</p>

        <div className="prose prose-stone max-w-none text-sm leading-loose space-y-8">
          {[
            {
              title: "1. 基本方針",
              content:
                "岩田学園中学・高等学校同窓会樟友会（以下「当会」）は、会員の個人情報を適切に取り扱うことが重要な責務であると認識し、個人情報保護に関する法令を遵守し、本方針に基づき個人情報の保護に努めます。",
            },
            {
              title: "2. 個人情報の収集について",
              content:
                "当会は、会員管理・会費納入・各種案内の送付・その他樟友会の活動運営のために必要な範囲で、氏名・住所・電話番号・メールアドレス・卒業年等の個人情報を収集します。個人情報の収集は、適法かつ公正な手段によって行います。",
            },
            {
              title: "3. 個人情報の利用目的",
              content:
                "収集した個人情報は以下の目的に使用します。\n・会員名簿の管理\n・会報・総会案内・その他会員向け文書の送付\n・総会・各種行事への参加案内\n・会費等の請求・管理\n・支部会・同期会等の活動支援\n・その他樟友会活動に関連する連絡",
            },
            {
              title: "4. 個人情報の第三者提供について",
              content:
                "当会は、法令に基づく場合を除き、ご本人の同意なしに個人情報を第三者に提供することはありません。ただし、樟友会と連携する岩田学園（学校法人）への情報共有は、ご本人の同意を得た上で行う場合があります。",
            },
            {
              title: "5. 個人情報の管理・安全対策",
              content:
                "当会は収集した個人情報について、紛失・破壊・改竄・漏洩等を防止するための適切な安全管理措置を講じます。個人情報を取り扱う役員・事務局スタッフには、個人情報の適正な取り扱いについて周知・教育を行います。",
            },
            {
              title: "6. 個人情報の開示・訂正・削除",
              content:
                "会員本人から個人情報の開示・訂正・追加・削除・利用停止をご希望の場合は、事務局までご連絡ください。本人確認の上、合理的な範囲で対応いたします。",
            },
            {
              title: "7. Cookie・アクセス解析について",
              content:
                "当会のウェブサイトでは、利用状況の把握のためアクセス解析ツールを使用する場合があります。これにより個人を特定する情報を取得することはありません。",
            },
            {
              title: "8. 本方針の変更",
              content:
                "本方針は、必要に応じて見直し・改定することがあります。改定の際はウェブサイトにてお知らせします。",
            },
            {
              title: "9. お問い合わせ",
              content:
                "個人情報の取り扱いに関するお問い合わせは、樟友会事務局（樟友会事務局メールアドレス（事務局にお問い合わせください））までご連絡ください。",
            },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-base text-navy-700 font-semibold mb-3">
                {section.title}
              </h2>
              <p className="text-stone-600 whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-stone-500 mb-3">
            岩田学園中学・高等学校 同窓会 樟友会
          </p>
          <p className="text-xs text-stone-400">
            （住所は事務局にお問い合わせください）
          </p>
        </div>
      </div>
    </>
  );
}
