import React, { forwardRef } from 'react';
import './History.css';

const History = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="history" className="section history-section">
      <div className="container">
        <h2>沿革</h2>
        <div className="section-content">
          <ul className="history-list">
            <li>2025年5月　株式会社ミナカノ設立</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default History;