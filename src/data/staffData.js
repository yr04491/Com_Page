// src/data/staffData.js
// スタッフデータを管理する専用ファイル
// 今後はこのファイルを編集するだけでスタッフの追加・変更・削除が可能
import TANO from '../assets/images/TANO.png';
import TANO2 from '../assets/images/TANO_2.png';
import AI from '../assets/images/AI.png';
import AI2 from '../assets/images/AI_2.png';
import ABE from '../assets/images/ABE.png';
import ABE2 from '../assets/images/ABE_2.png';


const staffData = [
  {
    id: 1,
    name: '田濃 一翔',
    romaji: 'Tano Kazuto',
    position: '代表取締役CEO',
    longDescription: [
      '私たちは、すべての⼦どもたちが,b>「⾃分に合った学び」</b>に出会える社会を⽬指しています。\n',
      '⾼専での学びの中で<b>⽣成AI</b>と出会った私たちは、その可能性に⼤きな希望を感じました。\n',
      'これからの時代、⽣成AIを<b>「使いこなす⼒」</b>は読み書きと同じくらい重要なスキルになると確信しています。\n',
      'だからこそ、⼦どもたちが早い段階からAIと⾃然に関わり、',
      '⾃分の学びを<b>⾃分で広げていける環境</b>が必要です。',
      '私たちは、⽣成AIを活⽤した学習⽀援を通じて、誰もが⾃分らしく学び、',
      '可能性を伸ばせる未来への“<b>架け橋</b>”となることを⽬指します。',
    ].join(''),
    image: TANO,
    hoverImage: TANO2
  },
  {
    id: 2,
    name: '⻘⽊ 愛⼀郎',
    romaji: 'Aoki Aiichiro',
    position: '取締役CMO',
    //description: '起業しました！',
    longDescription: [
      '私たちは、教育の現場で⼦どもたち<b>一人ひとり</b>と向き合う中で、',
      '「学びにつまずいた⼦どもが、必要な⽀援を受けられずに取り残されている」という厳しい<b>現実</b>に直⾯しました。',
      '教育現場での経験を通じて、そうした⼦どもたちのまなざしに出会い、私たちは深く⼼を動かされました。',
      'その経験が、私たちの<b>出発点</b>です。\n',
      '誰もが⾃分のペースで、⾃分らしく学べること。\n',
      'そして、困難を抱える⼦どもも、安⼼して学びに向かえること。\n',
      'そんな<b>「誰⼀⼈取り残さない」</b>個別最適な学びの実現と、包摂的な教育環境の構築を⽬指して、',
      '私たちはAIと⼈の⼒を融合させた新しい<b>教育のかたち</b>をつくっています。\n',
      '学ぶことが「できる・できない」ではなく、「楽しい・わかる・つながる」未来へ。\n',
      '私たちは、すべての⼦どもの<b>可能性を広げ</b>、その⼀歩を⽀え続けます。',
    ].join(''),
    image: AI,
    hoverImage: AI2
  },
  {
    id: 3,
    name: '安倍 誠明',
    romaji: 'Abe Tomoaki',
    position: '取締役COO',
    //description: '起業しました！',
    //longDescription: '頑張ります！',
    image: ABE,
    hoverImage: ABE2
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