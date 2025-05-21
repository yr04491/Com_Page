import React, { forwardRef } from 'react';
import './Mission.css';

const Mission = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="mission" className="section mission-section">
      <div className="container">
        <h2>Mission</h2>
        <div className="section-content">
          <h3>みんなの可能性を広げる</h3>
          <p>私たちは、「誰⼀⼈取り残さない学び」を実現するために、</p>
          <p>すべての⼦どもたちが⾃分らしい成⻑を遂げられる環境づくりに取り組んでいます。</p>
          <p>学びに困難を感じている⼦ども、教室に居場所を⾒つけられない⼦どもにも、可能性は等しくあります。</p>
          <p>その可能性に気づき、伸ばすための"きっかけ"を届けることが、私たちの使命です。</p>
        </div>
      </div>
    </section>
  );
});

export default Mission;