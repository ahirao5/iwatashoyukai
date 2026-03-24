# 岩田学園中学・高等学校 同窓会 樟友会 公式ホームページ

## 概要

岩田学園中学・高等学校の同窓会「樟友会」の公式ホームページ試作版です。

### サイトコンセプト

> **「樟の木のように、深く根を張り、広く枝を伸ばす」**

| 柱 | 意味 |
|---|---|
| つながる | 卒業生・在校生・教職員・地域をつなぐ生きたネットワーク |
| 受け継ぐ | 伝統・校風・記録・精神を次世代へ継承する |
| 支える | 母校・在校生・後輩の夢と成長を卒業生の力で後押しする |
| 誇りを見せる | 活躍する卒業生・活動実績・歴史を可視化し、帰属意識を高める |
| 還元する | 学んだ場所に、人・知識・資金で恩返しする文化を育てる |

---

## 技術スタック

| 項目 | 内容 |
|---|---|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| フォント | Noto Serif JP / Noto Sans JP（Google Fonts） |
| デプロイ想定 | Vercel / Netlify / 静的エクスポート |

---

## セットアップ

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番起動
npm start
```

開発サーバーは http://localhost:3000 で起動します。

---

## ディレクトリ構成

```
shoyukai/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # ルートレイアウト（SEO・OGP）
│   ├── page.tsx                # トップページ
│   ├── not-found.tsx           # 404ページ
│   ├── globals.css             # グローバルスタイル
│   ├── about/                  # 樟友会について
│   │   ├── page.tsx            # 概要
│   │   ├── purpose/page.tsx    # 目的・設立趣旨
│   │   ├── message/page.tsx    # 会長・学校長挨拶
│   │   ├── officers/page.tsx   # 役員一覧
│   │   └── rules/page.tsx      # 会則・組織体制
│   ├── news/
│   │   ├── page.tsx            # お知らせ一覧
│   │   └── [slug]/page.tsx     # お知らせ詳細
│   ├── events/
│   │   ├── page.tsx            # イベント一覧
│   │   ├── general-meeting/    # 総会
│   │   ├── branches/           # 支部会・同期会
│   │   └── clubs/              # クラブOB会
│   ├── reports/page.tsx        # 会報
│   ├── history/page.tsx        # 歴史・アーカイブ
│   ├── alumni/page.tsx         # 活躍する卒業生
│   ├── support/page.tsx        # 母校・在校生支援
│   ├── procedures/page.tsx     # 各種手続き
│   ├── membership-fee/page.tsx # 会費・協力金
│   ├── links/page.tsx          # 外部リンク
│   ├── contact/page.tsx        # お問い合わせ
│   ├── faq/page.tsx            # よくある質問
│   ├── privacy/page.tsx        # 個人情報保護方針
│   └── sitemap/page.tsx        # サイトマップ
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # ヘッダー（ドロップダウン・モバイル対応）
│   │   └── Footer.tsx          # フッター
│   └── ui/
│       ├── index.tsx           # 共通UIコンポーネント
│       └── ProcedureForm.tsx   # 手続きフォーム（バリデーション付き）
│
├── data/                       # ★ここを編集してコンテンツを更新
│   ├── news.ts                 # お知らせ
│   ├── events.ts               # イベント
│   ├── officers.ts             # 役員
│   ├── alumni.ts               # 活躍する卒業生
│   ├── externalLinks.ts        # 外部リンク
│   ├── faq.ts                  # FAQ
│   ├── history.ts              # 年表データ
│   ├── magazine.ts             # 会報データ
│   └── support.ts              # 支援プログラム・手続きカード
│
└── types/
    └── index.ts                # TypeScript型定義
```

---

## コンテンツの更新方法

### お知らせを追加する

`data/news.ts` に追記します：

```typescript
{
  slug: "unique-slug",       // URLになるID（英数字・ハイフン）
  title: "タイトル",
  date: "2024-09-01",        // YYYY-MM-DD形式
  category: "お知らせ",      // NewsCategory型から選択
  summary: "概要文",
  content: "本文（省略可、省略するとsummaryを表示）",
  isNew: true,               // NEWバッジ表示
}
```

**カテゴリ一覧：** `総会` / `支部会` / `同期会` / `クラブOB会` / `お知らせ` / `会報` / `母校支援` / `卒業生` / `慶弔`

### イベントを追加する

`data/events.ts` に追記します：

```typescript
{
  id: "unique-id",
  title: "イベント名",
  date: "2024-10-12",
  location: "開催場所",
  description: "説明文",
  type: "支部会",            // 総会/支部会/同期会/クラブOB会/講演会/その他
  status: "開催予定",        // 開催予定/開催報告/募集中
}
```

### 活躍する卒業生を追加する

`data/alumni.ts` の `featuredAlumni` 配列に追記します。

### 会報を追加する

`data/magazine.ts` の `magazineIssues` 配列の先頭に追記します（新しい号が先頭）。

---

## フォームの実運用について

現在のフォームは仮実装です。実際の運用では以下のいずれかに差し替えてください：

### Google Forms連携（推奨・無料）

```tsx
// ProcedureForm.tsx の handleSubmit を以下に変更
const handleSubmit = () => {
  window.open("https://forms.gle/あなたのフォームURL", "_blank");
};
```

### Formspree（無料プランあり）

```tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(values),
});
```

### メール直送（mailto）

```tsx
window.location.href = `mailto:info@shoyukai.iwata.ac.jp?subject=お問い合わせ&body=${encodeURIComponent(JSON.stringify(values))}`;
```

---

## デプロイ方法

### Vercel（最も簡単）

```bash
npm install -g vercel
vercel
```

### 静的エクスポート

`next.config.js` を変更：

```js
const nextConfig = {
  output: "export",
};
```

```bash
npm run build
# out/ フォルダを任意のウェブサーバーにアップロード
```

---

## 将来のCMS化について

現在はデータが `data/` フォルダの TypeScript ファイルで管理されています。
将来的に以下のCMSと連携できる構造になっています：

| CMS | 移行の容易さ | 費用 |
|---|---|---|
| microCMS | ★★★ 簡単 | 無料プランあり |
| Contentful | ★★☆ 普通 | 無料プランあり |
| Notion API | ★★☆ 普通 | 無料 |
| WordPress（REST API） | ★☆☆ 要工数 | サーバー費用 |

移行時は `data/*.ts` ファイルをAPIフェッチに置き換えるだけです。

---

## デザインガイド

| 要素 | 値 |
|---|---|
| メインカラー | 深紺 `#1a2e52` |
| アクセント | ゴールド `#b8960c` |
| サブカラー | 深緑 `#2d5a3d` |
| 背景 | 白 `#ffffff` / 淡灰 `#f7f6f2` |
| 見出し | Noto Serif JP |
| 本文 | Noto Sans JP |
| 最小文字サイズ | 12px（モバイル） |

---

## 非エンジニア役員向け：更新作業の要点

### 「お知らせ」を追加する
→ `data/news.ts` を開き、配列の先頭に1件コピペして内容を書き換える

### 「総会の日程」を更新する
→ `data/events.ts` の `status: "開催予定"` の項目の日付・場所を書き換える

### 「役員一覧」を更新する
→ `data/officers.ts` を書き換える

### 「会報」を追加する
→ `data/magazine.ts` の先頭に新しい号を追記する

### ホームページを確認する
```bash
npm run dev
# http://localhost:3000 をブラウザで開く
```

### 本番反映する
```bash
npm run build  # ビルド確認
# Vercelの場合は git push するだけで自動デプロイ
```

---

## お問い合わせ（開発者向け）

本サイトに関するシステムの問い合わせは樟友会事務局IT担当まで。
