import React, { forwardRef } from 'react';
import './History.css';

const History = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="history" className="section history-section">
      <div className="container">
        <h2>沿革</h2>
        <div className="section-content">
          <ul className="history-list">
            <li>2023年10月　ミナカノプロジェクト始動</li>
            <li>2024年1月　株式会社ミナカノ設立</li>
            <li>2024年4月　新サービス「AI学習支援システム」開発開始</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default History;