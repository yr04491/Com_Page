import React, { forwardRef } from 'react';
import './RecruitMember.css';

const RecruitMember = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="recruit-member" className="section recruit-member-section">
      <div className="container">
        <h2>メンバー募集</h2>
        <div className="section-content">
          <div className="recruit-member-list">
            <div className="recruit-member-item">
              <h3>エンジニア</h3>
              <div className="recruit-position-details">
                <p className="recruit-description">
                  子どもたちの学びを支える革新的なAIシステムを一緒に開発しませんか？
                  私たちは「みんなの可能性を広げる」というミッションの下、
                  子どもたち一人ひとりに最適化された学習体験を提供するための技術を日々追求しています。
                </p>
                <h4>求めるスキル・経験</h4>
                <ul className="skill-list">
                  <li>フロントエンド開発経験（React, Vue.js等）</li>
                  <li>バックエンド開発経験（Node.js, Python等）</li>
                  <li>AIやML技術への関心・経験</li>
                  <li>教育への情熱</li>
                </ul>
              </div>
            </div>
            <div className="recruit-member-item">
              <h3>教育コンテンツ開発者</h3>
              <div className="recruit-position-details">
                <p className="recruit-description">
                  あなたの教育知識と創造力で、子どもたちの学習体験をより豊かに。
                  ミナカノでは、AIと教育の専門知識を融合させ、未来の学びのあり方を共に創造していきます。
                </p>
                <h4>求めるスキル・経験</h4>
                <ul className="skill-list">
                  <li>教育関連の経験・知識</li>
                  <li>コンテンツ制作経験</li>
                  <li>子どもの学びに対する深い理解と共感</li>
                  <li>チームでの協働力</li>
                </ul>
              </div>
            </div>
            <div className="recruit-apply-section">
              <a href="#contact" className="apply-button">応募はこちら</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default RecruitMember;