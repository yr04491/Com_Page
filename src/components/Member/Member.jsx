// src/components/Member/Member.jsx
import React, { forwardRef } from 'react';
import './Member.css';
import Staff from './Staff';
import Character from './Character';

const Member = forwardRef((props, ref) => {
  const { activeSubSection, scrollToSubSection } = props;

  return (
    <section ref={ref} id="member" className="section member-section">
      <div className="container">
        <h2>Member</h2>
        <div className="section-content">
          <div className="member-tabs">
            <button
              className={`member-tab ${activeSubSection === 'staff' ? 'active' : ''}`}
              onClick={() => scrollToSubSection('staff')}
            >
              Management
            </button>
            <button
              className={`member-tab ${activeSubSection === 'character' ? 'active' : ''}`}
              onClick={() => scrollToSubSection('character')}
            >
              Professional
            </button>
          </div>

          <div className="member-content">
            <Staff
              ref={props.staffRef}
              isActive={activeSubSection === 'staff'}
            />
            <Character
              ref={props.characterRef}
              isActive={activeSubSection === 'character'}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Member;