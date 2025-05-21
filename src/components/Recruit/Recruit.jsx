import React, { forwardRef } from 'react';
import './Recruit.css';

const Recruit = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="recruit" className="section recruit-section">
      <div className="container">
        <h2>Recruit</h2>
        <div className="section-content">
          <p>採用情報に関するコンテンツがここに入ります。</p>
        </div>
      </div>
    </section>
  );
});

export default Recruit;