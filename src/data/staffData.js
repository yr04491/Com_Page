// src/data/staffData.js
// スタッフデータを管理する専用ファイル
// 今後はこのファイルを編集するだけでスタッフの追加・変更・削除が可能
import CEO from '../assets/images/TANO.png';
import CEO2 from '../assets/images/TANO_2.png';
import CMO from '../assets/images/AI.png';
import CMO2 from '../assets/images/AI_2.png';
import COO from '../assets/images/ABE.png';
import COO2 from '../assets/images/ABE_2.png';


const staffData = [
  {
    id: 1,
    name: '田濃 一翔',
    romaji: 'Tano Kazuto',
    position: '代表取締役CEO',
    //description: '起業しました！',
    longDescription: '福井高専 電子情報工学科 卒業\n福井高専 工学部 電気電子情報工学科 編入学\n福井大学大学院 工学研究科 知識社会基礎工学専攻 在学',
    image: CEO,
    hoverImage: CEO2
  },
  {
    id: 2,
    name: '⻘⽊ 愛⼀郎',
    romaji: 'Aoki Aiichiro',
    position: '取締役CMO',
    //description: '起業しました！',
    longDescription: '福井大学教育学部に在学中。\n\n教育実習を通じて学習困難を抱える子どもたちの支援に関心を持ち、テクノロジーを活用した新しい教育のあり方を探求。\n\n株式会社ミナカノでは、子どもたち一人ひとりに寄り添った教育コンテンツの企画・開発を担当している。',
    image: CMO,
    hoverImage: CMO2
  },
  {
    id: 3,
    name: '安倍 誠明',
    romaji: 'Abe Tomoaki',
    position: '取締役COO',
    //description: '起業しました！',
    longDescription: '福井大学大学院工学研究科博士前期課程産業創成工学専攻に在学中。\n\nプログラミングやシステム開発に精通し、効率的な事業運営の仕組み構築を得意とする。\n\n株式会社ミナカノでは、最新テクノロジーを活用したサービス開発と事業戦略の実行を担当。',
    image: COO,
    hoverImage: COO2
  },


  // 新しいスタッフを追加する場合は、以下のテンプレートを使用してください
  /*
  {
    id: 7, // IDは必ず一意の番号にしてください
    name: '新しいスタッフの名前',
    romaji: 'SHIN Romaji', // ローマ字表記（任意）
    position: '役職',
    description: '説明文をここに記入してください。', // カード表示用の短い説明
    longDescription: '詳細なプロフィールや経歴をここに記入してください。\n\n改行を入れる場合は\\nを使用します。\n\n複数行に分けて表示されます。', // モーダル表示用の詳細説明
    image: '通常時の画像パス', // 例: '/assets/images/staff7.png' または URL
    hoverImage: 'ホバー時の画像パス', // 例: '/assets/images/staff7_hover.png' または URL
    socialLinks: { // ソーシャルメディアリンク（任意）
      twitter: 'https://twitter.com/username',
      linkedin: 'https://linkedin.com/in/username',
      facebook: 'https://facebook.com/username'
    },
    relatedArticles: [ // 関連記事（任意）
      {
        title: '記事タイトル',
        url: '記事URL'
      }
    ]
  }
  */
];

export default staffData;