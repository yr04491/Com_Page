import React, { forwardRef } from 'react';
import './AboutCompany.css';

const AboutCompany = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about-company" className="section about-company-section">
      <div className="container">
        <h2>会社紹介</h2>
        <div className="section-content">
          <p>株式会社ミナカノは、<b>福井大学</b>の学生によって設立された、次世代の教育を切り拓く<b>スタートアップ企業</b>です。</p>
          <p>私たちは「<b>みんなの可能性を広げる</b>」をミッションに掲げ、不登校や学習困難といった課題に直面する子どもたち一人ひとりに寄り添いながら、自己肯定感と学力の向上を支援する革新的な教育システムを<b>開発・提供</b>しています。</p>
          <p>現代社会において、子どもたちが直面する学びの課題は多様化しています。私たちは、学校という枠組みだけでは十分にカバーできないニーズに応え、「<b>どこにいても、誰でも、自分らしく学べる</b>」環境をつくることを目指しています。</p>
        </div>
      </div>
    </section>
  );
});

export default AboutCompany;