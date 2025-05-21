import React, { forwardRef } from 'react';
import './RecruitCharacter.css';

const RecruitCharacter = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="recruit-character" className="section recruit-character-section">
      <div className="container">
        <h2>求める人物像</h2>
        <div className="section-content">
          <div className="character-values">
            <div className="character-value-item">
              <div className="value-icon">❤️</div>
              <h3>子どもへの共感</h3>
              <p>
                一人ひとりの子どもの可能性を信じ、子どもたちの視点で考えられる方。
                多様な学び方や成長のプロセスを尊重し、子どもの「できた！」の瞬間を大切にしたい方を求めています。
              </p>
            </div>
            
            <div className="character-value-item">
              <div className="value-icon">💡</div>
              <h3>革新への情熱</h3>
              <p>
                「これまで」ではなく「これから」の教育を考え、AIと教育の未来を共に創りたい方。
                既存の枠を超えた発想で、子どもたちの学びを変革する情熱を持つ方を歓迎します。
              </p>
            </div>
            
            <div className="character-value-item">
              <div className="value-icon">🤝</div>
              <h3>チームでの共創</h3>
              <p>
                多様なバックグラウンドを持つメンバーと協力し、互いの強みを活かして高め合える方。
                「みんなの可能性を広げる」というミッションに共感し、一緒に挑戦したい方を求めています。
              </p>
            </div>
          </div>
          
          <div className="recruit-message">
            <h3>私たちと一緒に、未来の教育を創りませんか？</h3>
            <p>
              ミナカノでは、教育とテクノロジーの力で全ての子どもたちの可能性を広げることに情熱を注ぐ仲間を募集しています。
              あなたの経験や視点が、子どもたちの未来を切り拓く鍵になるかもしれません。
              私たちのビジョンに共感し、共に歩んでいける方からのご応募をお待ちしています。
            </p>
            <div className="recruit-apply-section">
              <a href="#contact" className="apply-button">応募はこちら</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default RecruitCharacter;