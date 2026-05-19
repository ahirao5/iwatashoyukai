import type { SupportProgram, Procedure } from "@/types";

export const supportPrograms: SupportProgram[] = [
  {
    id: "career",
    title: "キャリア講話",
    description:
      "各分野で活躍する卒業生が在校生向けに仕事の魅力・人生の選択を語ります。毎年複数回実施しています。",
    target: "在校生（高校2・3年生）",
    icon: "💼",
  },
  {
    id: "internship",
    title: "インターンシップ受入",
    description:
      "卒業生の経営する企業・団体での就業体験の場を提供します。職業観の育成に役立てています。",
    target: "在校生・大学生卒業生",
    icon: "🏢",
  },
  {
    id: "scholarship",
    title: "奨学支援",
    description:
      "会費・協力金の一部を財源に、経済的支援が必要な在校生への奨学援助を行っています。",
    target: "在校生",
    icon: "📚",
  },
  {
    id: "club",
    title: "クラブ活動支援",
    description:
      "部活動の大会遠征費・用具費の一部を樟友会が補助する制度です。卒業生の寄付が現役生を支えます。",
    target: "在校生（部活動）",
    icon: "⚽",
  },
  {
    id: "lecture",
    title: "卒業生講演会",
    description:
      "各分野の第一線で活躍する卒業生を招き、在校生・保護者・卒業生向けの公開講演会を開催します。",
    target: "在校生・保護者・卒業生",
    icon: "🎤",
  },
  {
    id: "tankyuu",
    title: "探究学習支援",
    description:
      "SSHや総合的な探究の時間において、卒業生が専門家として講師・メンターを務めます。",
    target: "在校生",
    icon: "🔬",
  },
];

export const procedures: Procedure[] = [
  {
    id: "member-info",
    title: "会員情報変更",
    description: "住所・氏名・メール・勤務先の変更",
    href: "/procedures#member-info",
    icon: "✏️",
  },
  {
    id: "address",
    title: "住所変更",
    description: "転居・住所変更の届出",
    href: "/procedures#address",
    icon: "📮",
  },
  {
    id: "email",
    title: "メールアドレス変更",
    description: "連絡先メールの更新",
    href: "/procedures#email",
    icon: "✉️",
  },
  {
    id: "contact",
    title: "お問い合わせ",
    description: "各種ご質問・ご相談",
    href: "/contact",
    icon: "💬",
  },
  {
    id: "membership-fee",
    title: "会費の納入",
    description: "年会費・終身会費の振込案内",
    href: "/membership-fee",
    icon: "💴",
  },
  {
    id: "reunion",
    title: "同期会掲載依頼",
    description: "開催案内・報告の掲載申込",
    href: "/procedures#reunion",
    icon: "🎉",
  },
  {
    id: "branch",
    title: "支部会掲載依頼",
    description: "支部会案内・報告の掲載申込",
    href: "/procedures#branch",
    icon: "📍",
  },
  {
    id: "alumni-recommend",
    title: "卒業生掲載推薦",
    description: "活躍する卒業生の紹介申込",
    href: "/procedures#alumni-recommend",
    icon: "⭐",
  },
];
