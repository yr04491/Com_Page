import React, { forwardRef } from 'react';
import './News.css';

const News = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="news" className="section news-section">
      <div className="container">
        <h2>News</h2>
        <div className="section-content">
          <p>Coming Soon!</p>
        </div>
      </div>
    </section>
  );
});

export default News;