// src/data/staffData.js
// スタッフデータを管理する専用ファイル
// 今後はこのファイルを編集するだけでスタッフの追加・変更・削除が可能
import CEO from '../assets/images/CEO.png';
import CEO2 from '../assets/images/TANO.png';


const staffData = [
  {
    id: 1,
    name: '田濃 一翔',
    romaji: 'TANO Kazuto',
    position: 'しゃちょー',
    description: '起業しました！',
    longDescription: '頑張ってます！',
    image: CEO,
    hoverImage: CEO2
  },
  {
    id: 2,
    name: '⻘⽊ 愛⼀郎',
    romaji: 'AOKI Aiitiro',
    position: 'CMO',
    description: '起業しました！',
    longDescription: '頑張ってます！',
    image: 'https://placehold.jp/9179b0/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/634d8c/ffffff/150x150.png',
  },
  {
    id: 3,
    name: '安倍 誠明',
    romaji: 'ABE Tomoaki',
    position: 'COO',
    description: '起業しました！',
    longDescription: '頑張ってます！',
    image: 'https://placehold.jp/9179b0/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/634d8c/ffffff/150x150.png',
  },


  // 新しいスタッフを追加する場合は、以下のテンプレートを使用してください
  /*
  {
    id: 7, // IDは必ず一意の番号にしてください
    name: '新しいスタッフの名前',
    romaji: 'SHIN Romaji', // ローマ字表記（任意）
    position: '役職',
    description: '説明文をここに記入してください。', // カード表示用の短い説明
    longDescription: '詳細なプロフィールや経歴をここに記入してください。', // モーダル表示用の詳細説明
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