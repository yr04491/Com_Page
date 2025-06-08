// src/data/professionalData.js
// プロフェッショナルメンバーデータを管理する専用ファイル
import RYO from '../assets/images/RYO.png';
import RYO2 from '../assets/images/RYO_2.png';
import RIN from '../assets/images/RIN.png';
import RIN2 from '../assets/images/RIN_2.png';
import KAME from '../assets/images/KAME.png';
import KAME2 from '../assets/images/KAME_2.png';


const professionalData = [
  {
    id: 1,
    name: '中楯 崚之助',
    romaji: 'Nakadate Ryonosuke',
    position: '技術開発',
    //description: 'AIと教育の融合を目指すテクノロジスト',
    //longDescription: 'http://ginyu.fuis.u-fukui.ac.jp/members/2024/nakadate/',
    image: RYO,
    hoverImage: RYO2,
  },
  {
    id: 2,
    name: '吉田 琳汰朗',
    romaji: 'Yoshida Rintaro',
    position: '技術開発',
    //description: '子どもの学びに寄り添うスペシャリスト',
    //longDescription: '教育現場での10年以上の経験を活かし、一人ひとりの子どもに合った学習方法を提案しています。\n学習困難を抱える子どもたちへの指導に強みを持ち、個別支援の専門家として活動。\n\n子どもたちが自信を持って学習に取り組める環境づくりを大切にしています。',
    image: RIN,
    hoverImage: RIN2
  },
  {
    id: 3,
    name: '亀岡 侑世',
    romaji: 'Kameoka Yusei',
    position: '企画',
    //description: '魅力的な教育コンテンツを創造',
    //longDescription: 'エンターテイメント業界での経験を活かし、子どもたちが楽しみながら学べるコンテンツの企画・制作を担当。\nゲーミフィケーションを取り入れた学習体験の設計を得意としています。\n\n「学ぶことは楽しいこと」を実感できるコンテンツづくりに取り組んでいます。',
    image: KAME,
    hoverImage: KAME2
  }
];

export default professionalData;