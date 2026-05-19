// ===== コンテンツ型定義 =====

export type NewsCategory =
  | "総会"
  | "支部会"
  | "同期会"
  | "クラブOB会"
  | "お知らせ"
  | "会報"
  | "母校支援"
  | "卒業生"
  | "慶弔";

export interface NewsItem {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: NewsCategory;
  summary: string;
  content?: string;
  isNew?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "総会" | "支部会" | "同期会" | "クラブOB会" | "講演会" | "その他";
  status: "開催予定" | "開催報告" | "募集中";
  reportUrl?: string;
}

export interface Officer {
  id: string;
  name: string;
  role: string;
  graduationYear?: number;
  note?: string;
}

export interface AlumniProfile {
  id: string;
  name: string;
  graduationYear: number;
  occupation: string;
  organization: string;
  message: string;
  featured?: boolean;
}

export interface MagazineIssue {
  id: string;
  number: number;
  title: string;
  publishedDate: string;
  description: string;
  pdfUrl?: string;
  coverImageUrl?: string;
}

export interface HistoryEntry {
  year: number;
  event: string;
  detail?: string;
}

export interface ExternalLink {
  id: string;
  category: "母校" | "関連団体" | "支部会" | "クラブOB会" | "SNS" | "その他";
  name: string;
  url: string;
  description?: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface SupportProgram {
  id: string;
  title: string;
  description: string;
  target: string;
  icon: string;
}

export interface BranchInfo {
  id: string;
  name: string;
  region: string;
  contactNote?: string;
  nextMeeting?: string;
}

export interface Procedure {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  isExternal?: boolean;
}
