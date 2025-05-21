import React, { forwardRef } from 'react';
import './Hero.css';

const Hero = forwardRef((props, ref) => {
  return (
    <section className="hero" ref={ref}>
      <div className="hero-content">
        <h1>株式会社Minakano</h1>
        <p>「みんなの可能性を広げる」</p>
      </div>
    </section>
  );
});

export default Hero;