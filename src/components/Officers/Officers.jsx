import React, { forwardRef } from 'react';
import './Officers.css';
import ceoImage from '../../assets/images/CEO.png';  // パスは相対的に調整
import cmoImage from '../../assets/images/CMO.png';  // ファイル名が変わっている可能性があります
import cooImage from '../../assets/images/COO.png';  // ファイル名が変わっている可能性があります

// GitHub Pages 用ベースパス設定
const getBasePath = () => {
  return process.env.NODE_ENV === 'production'
    ? '/Page_Mina2'
    : '';
};

const Officers = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="officers" className="section officers-section">
      <div className="container">
        <h2>会社役員</h2>
        <div className="officers-list">
          {/* CEO */}
          <div className="officer-item">
            <div className="officer-photo-container">
              <img
                className="officer-photo"
                src={ceoImage}
                alt="田濃 一翔"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.jp/150x150.png";
                }}
              />
              <div className="officer-info">
                <div className="officer-name">田濃 一翔</div>
                <div className="officer-role">代表取締役CEO</div>
                <div className="officer-title">福井大学大学院</div>
                <div className="officer-title">工学研究科 在学</div>
              </div>
            </div>
            <div className="officer-message">
              私たちは、すべての⼦どもたちが「<b>⾃分に合った学び</b>」に出会える社会を⽬指しています。
              ⾼専での学びの中で<b>⽣成AI</b>と出会った私たちは、その可能性に⼤きな希望を感じました。
              これからの時代、⽣成AIを「<b>使いこなす⼒</b>」は読み書きと同じくらい重要なスキルになると確信しています。
              だからこそ、⼦どもたちが早い段階からAIと⾃然に関わり、
              ⾃分の学びを<b>⾃分で広げていける</b>環境が必要です。
            </div>
          </div>

          {/* CMO */}
          <div className="officer-item">
            <div className="officer-photo-container">
              <img
                className="officer-photo"
                src={cmoImage} alt="青木 愛一郎"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.jp/150x150.png";
                }}
              />
              <div className="officer-info">
                <div className="officer-name">青木 愛一郎</div>
                <div className="officer-role">取締役CMO</div>
                <div className="officer-title">福井大学</div>
                <div className="officer-title">教育学部 在学</div>
              </div>
            </div>
            <div className="officer-message">
              私たちは、教育の現場で⼦どもたち<b>⼀⼈ひとり</b>と向き合う中で、
              「学びにつまずいた⼦どもが、必要な⽀援を受けられずに取り残されている」という厳しい<b>現実</b>に直⾯しました。
              教育現場での経験を通じて、そうした⼦どもたちのまなざしに出会い、私たちは深く⼼を動かされました。
              その経験が、私たちの<b>出発点</b>です。
              誰もが⾃分のペースで、⾃分らしく学べること。
            </div>
          </div>

          {/* COO */}
          <div className="officer-item">
            <div className="officer-photo-container">
              <img
                className="officer-photo"
                src={cooImage}
                alt="安倍 誠明"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.jp/150x150.png";
                }}
              />
              <div className="officer-info">
                <div className="officer-name">安倍 誠明</div>
                <div className="officer-role">取締役COO</div>
                <div className="officer-title">福井大学大学院</div>
                <div className="officer-title">工学研究科博士前期課程</div>
                <div className="officer-title">産業創成工学専攻 在学</div>
              </div>
            </div>
            <div className="officer-message">
              やるぞー!！！
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Officers;
