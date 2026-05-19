import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.org.name,
    template: `%s | ${siteConfig.org.nameShort}`,
  },
  description:
    `${siteConfig.org.name}公式ホームページ。卒業生の親睦・母校支援・在校生支援活動を行っています。総会・支部会・同期会・会誌などの情報を発信しています。`,
  keywords: ["岩田学園", "岩田中学校", "岩田高等学校", "樟友会", "同窓会", "卒業生"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.org.name,
    title: siteConfig.org.name,
    description: `${siteConfig.org.name}公式ホームページ。卒業生の親睦・母校支援・在校生支援活動を行っています。`,
  },
  twitter: {
    card: "summary",
    title: siteConfig.org.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-stone-50 text-stone-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
