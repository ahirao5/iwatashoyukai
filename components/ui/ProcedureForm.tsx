"use client";

import { useState } from "react";

type FormType = "member-info" | "reunion" | "branch" | "alumni-recommend" | "contact";

interface Field {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required: boolean;
  placeholder?: string;
  options?: string[];
}

const fieldsByType: Record<FormType, Field[]> = {
  "member-info": [
    { id: "name", label: "氏名（フルネーム）", type: "text", required: true, placeholder: "岩田 太郎" },
    { id: "name_kana", label: "氏名（フリガナ）", type: "text", required: true, placeholder: "イワタ タロウ" },
    { id: "grad_year", label: "卒業年（西暦）", type: "text", required: true, placeholder: "例：1998" },
    { id: "email", label: "メールアドレス", type: "email", required: true, placeholder: "example@email.com" },
    { id: "address", label: "現住所（郵便番号から）", type: "textarea", required: false, placeholder: "〒XXX-XXXX\n都道府県市区町村..." },
    { id: "employer", label: "勤務先・所属", type: "text", required: false, placeholder: "〇〇株式会社" },
    { id: "note", label: "その他変更事項・備考", type: "textarea", required: false },
  ],
  "reunion": [
    { id: "name", label: "申込者氏名", type: "text", required: true },
    { id: "grad_year", label: "卒業年（西暦）", type: "text", required: true, placeholder: "例：1998" },
    { id: "email", label: "連絡先メールアドレス", type: "email", required: true },
    { id: "event_name", label: "同期会・イベント名称", type: "text", required: true, placeholder: "例：〇〇期同期会" },
    { id: "event_type", label: "掲載種別", type: "select", required: true, options: ["開催案内", "開催報告"] },
    { id: "event_date", label: "開催日", type: "text", required: true, placeholder: "例：2024年10月19日（土）" },
    { id: "event_place", label: "開催場所", type: "text", required: false },
    { id: "description", label: "内容・お知らせ文", type: "textarea", required: true },
  ],
  "branch": [
    { id: "name", label: "申込者氏名", type: "text", required: true },
    { id: "branch_name", label: "支部名称", type: "text", required: true, placeholder: "例：東京支部" },
    { id: "email", label: "連絡先メールアドレス", type: "email", required: true },
    { id: "event_type", label: "掲載種別", type: "select", required: true, options: ["開催案内", "開催報告"] },
    { id: "event_date", label: "開催日", type: "text", required: true },
    { id: "event_place", label: "開催場所", type: "text", required: false },
    { id: "description", label: "内容・お知らせ文", type: "textarea", required: true },
  ],
  "alumni-recommend": [
    { id: "recommender", label: "推薦者（ご本人もしくは推薦者）氏名", type: "text", required: true },
    { id: "email", label: "連絡先メールアドレス", type: "email", required: true },
    { id: "subject_name", label: "掲載対象者氏名", type: "text", required: true },
    { id: "subject_year", label: "卒業年（西暦）", type: "text", required: true },
    { id: "subject_job", label: "現在の職業・所属・肩書き", type: "text", required: true },
    { id: "subject_message", label: "メッセージ・紹介文", type: "textarea", required: true, placeholder: "母校への思いや現在の活動など、200〜400文字程度でお書きください。" },
    { id: "consent", label: "本人の掲載同意", type: "select", required: true, options: ["本人から同意を得ています", "本人への確認をお願いしたい"] },
  ],
  "contact": [
    { id: "name", label: "氏名", type: "text", required: true },
    { id: "email", label: "メールアドレス", type: "email", required: true },
    { id: "grad_year", label: "卒業年（西暦）", type: "text", required: false, placeholder: "例：1998（任意）" },
    { id: "category", label: "お問い合わせ種別", type: "select", required: true,
      options: ["会員情報について", "総会・イベントについて", "会費・協力金について", "会報について", "支部会・同期会について", "掲載依頼について", "その他"] },
    { id: "message", label: "お問い合わせ内容", type: "textarea", required: true },
  ],
};

interface ProcedureFormProps {
  type: FormType;
}

export function ProcedureForm({ type }: ProcedureFormProps) {
  const fields = fieldsByType[type];
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (field.required && !values[field.id]) {
        newErrors[field.id] = "必須項目です";
      }
      if (field.type === "email" && values[field.id] && !values[field.id].includes("@")) {
        newErrors[field.id] = "メールアドレスの形式が正しくありません";
      }
    });
    if (!agreed) newErrors["agree"] = "個人情報の取り扱いに同意してください";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded p-8 text-center">
        <div className="text-3xl mb-3">✅</div>
        <p className="font-medium text-green-800 mb-1">送信が完了しました</p>
        <p className="text-sm text-green-700">
          内容を確認の上、事務局よりご連絡いたします。しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded border border-stone-100 shadow-card p-6 space-y-5">
      {fields.map((field) => (
        <div key={field.id}>
          <label className="form-label" htmlFor={field.id}>
            {field.label}
            {field.required && <span className="required-mark">*</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              className="form-textarea"
              placeholder={field.placeholder}
              value={values[field.id] || ""}
              onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
            />
          ) : field.type === "select" ? (
            <select
              id={field.id}
              className="form-select"
              value={values[field.id] || ""}
              onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
            >
              <option value="">選択してください</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              id={field.id}
              type={field.type}
              className="form-input"
              placeholder={field.placeholder}
              value={values[field.id] || ""}
              onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
            />
          )}

          {errors[field.id] && (
            <p className="text-xs text-red-600 mt-1">{errors[field.id]}</p>
          )}
        </div>
      ))}

      {/* 個人情報同意 */}
      <div className="border-t border-stone-100 pt-5">
        <div className="bg-stone-50 rounded p-4 text-xs text-stone-600 leading-relaxed mb-3">
          <p className="font-medium mb-1">個人情報の取り扱いについて</p>
          <p>
            ご提供いただいた個人情報は、樟友会の運営・活動に関するご連絡および会員管理の目的にのみ使用します。
            第三者への提供は行いません。詳細は
            <a href="/privacy" className="text-navy-600 hover:underline mx-1">個人情報保護方針</a>
            をご確認ください。
          </p>
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-navy-700"
          />
          <span className="text-sm text-stone-700">
            個人情報の取り扱いに同意します <span className="required-mark">*</span>
          </span>
        </label>
        {errors["agree"] && (
          <p className="text-xs text-red-600 mt-1">{errors["agree"]}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full btn-primary justify-center py-3"
      >
        送信する
      </button>
    </form>
  );
}
