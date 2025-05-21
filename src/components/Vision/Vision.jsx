import React, { forwardRef } from 'react';
import './Vision.css';

const Vision = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="vision" className="section vision-section">
      <div className="container">
        <h2>Vision</h2>
        <div className="section-content">
          <h3>生成AIを用いた個別最適な学びの実現</h3>
          <p>私たちは、高専在学中に生成AIの革新性に出会い、その未来に強く魅了されました。</p>
          <p>「すべての子どもがAIとともに学ぶ時代」を見据え、</p>
          <p>生成AIを使った学習支援を通して、個々に最適化された"自分だけの学び"を提供します。</p>
          <p>子どもたちがAIを使いこなす力を自然と身につけ、自分らしい未来を切り拓くことができる社会</p>
          <p>それが、私たちが目指すビジョンです。</p>
        </div>
      </div>
    </section>
  );
});

export default Vision;