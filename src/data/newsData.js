// src/data/newsData.js
// ニュースデータを管理する専用ファイル
// 今後はこのファイルを編集するだけでニュースの追加・変更・削除が可能

// ニュース用画像のインポート（staffData.jsと同じ方式）
import CEO from '../assets/images/CEO.png';
import CMO from '../assets/images/CMO.png';
import COO from '../assets/images/COO.png';
// 実際のニュース画像が用意できたら、以下のように追加
// import CONTEST_AWARD from '../assets/images/news/contest-award.jpg';
// import SABAE_PROJECT from '../assets/images/news/sabae-project.jpg';
// import FUKUI_UNIVERSITY from '../assets/images/news/fukui-university.jpg';

const newsData = [
  {
    id: 1,
    title: "福井大学チームが快挙！「福井発！ビジネスプランコンテスト2024」でグランプリ・会場賞をダブル受賞 ",
    date: "2025-02-08",
    content: `福井発ビジネスプランコンテストにて、弊社のビジネスプランがグランプリを受賞しました！

[IMAGE:CEO:受賞式でトロフィーを受け取る様子:large]

この度は多くの皆様にご支援いただき、誠にありがとうございました。今後もより一層努力してまいります。`,
    images: {
      CEO: CEO  // 画像の参照を定義
    }
  },
  {
    id: 2,
    title: "「SABAE STARTUP PROJECT」に採択",
    date: "2025-04-25",
    content: `NPO法人エル・コミュニティの「SABAE STARTUP PROJECT」に採択されました！
              [IMAGE:CMO:プロジェクト採択通知書:medium]
              このプロジェクトを通じて、地域社会に貢献できるよう取り組んでまいります。`,
    images: {
      CMO: CMO
    }
  },
  {
    id: 3,
    title: "福井大学発ベンチャーに認知",
    date: "2025-07-01",
    content: `国立大学法人福井大学における大学発ベンチャーに認定されました！

[IMAGE:COO:認定証授与式の様子:small]

産学連携の取り組みを通じて、イノベーション創出に貢献してまいります。`,
    images: {
      COO: COO
    }
  },
  {
    id: 4,
    title: "新技術の研究開発開始",
    date: "2025-08-15",
    content: `AIを活用した新技術の研究開発を開始しました。

[IMAGE:CEO:研究開発の様子:full]

この技術により、より効率的なサービス提供が可能になります。

[IMAGE:CMO:チームミーティング:small]

今後も技術革新に取り組んでまいります。`,
    images: {
      CEO: CEO,
      CMO: CMO
    }
  }
];

// ニュースデータを日付でソート（新しい順）
export const getSortedNews = () => {
  return newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export default newsData;

/*
新しいニュースを追加する場合は、以下のテンプレートを使用してください：

{
  id: 5, // IDは必ず一意の番号にしてください
  title: "ニュースのタイトル",
  date: "2024-06-01", // YYYY-MM-DD形式
  content: `ニュースの詳細内容をここに記載します。

[IMAGE:画像キー:画像のキャプション:サイズ]

複数段落に分けて表示されます。テンプレートリテラル（バッククォート）を使用することで、
コード内で改行して見やすくできます。実際の表示では改行は自動的に処理されます。`,
  images: {
    画像キー: インポートした画像変数  // content内で[IMAGE:画像キー:キャプション:サイズ]として使用
  }
}

contentの書き方：
【推奨】テンプレートリテラル（バッククォート）を使用：
content: `長いテキストをここに記載します。
テンプレートリテラルを使用することで、コード内で改行して見やすくできます。

[IMAGE:IMAGE_NAME:画像のキャプション:サイズ]

更に続きのテキストを書けます。`

【従来の方法】通常の文字列（非推奨）：
content: "長いテキストをここに記載します。\\n\\n[IMAGE:IMAGE_NAME:画像のキャプション:サイズ]\\n\\n更に続きのテキストを書けます。"

画像の使用方法：
1. ファイル上部で画像をインポート: import IMAGE_NAME from '../assets/images/news/image.jpg';
2. imagesオブジェクトに追加: images: { IMAGE_NAME: IMAGE_NAME }
3. content内で使用: [IMAGE:IMAGE_NAME:画像のキャプション:サイズ]

画像サイズオプション：
- small: 300px幅（モバイル向け、小さな画像）
- medium: 450px幅（デフォルト、バランスの良いサイズ）
- large: 600px幅（デスクトップ向け、大きな画像）
- full: 100%幅（コンテナいっぱい、全幅表示）

使用例：
[IMAGE:CONTEST_AWARD:受賞式の様子:large]
[IMAGE:PROJECT_PHOTO:プロジェクトの様子:medium]
[IMAGE:TEAM_PHOTO:チーム写真:small]
[IMAGE:BANNER_IMAGE:バナー画像:full]

複数画像の例：
content: `テキスト

[IMAGE:IMAGE1:最初の画像:large]

さらにテキスト

[IMAGE:IMAGE2:2番目の画像:small]

最後のテキスト`,
images: {
  IMAGE1: IMAGE1,
  IMAGE2: IMAGE2
}

実際の使用例（ID4のニュースを参照）：
- full: メインビジュアルとして画面幅いっぱいに表示
- small: 補足的な画像として小さく表示
- medium: 標準的なサイズで表示
- large: 重要な画像として大きく表示

レスポンシブデザイン：
- モバイル（768px以下）: large/mediumは100%幅、smallは250px
- 小さなスマートフォン（480px以下）: smallは200px
- fullは常に100%幅で表示
*/
