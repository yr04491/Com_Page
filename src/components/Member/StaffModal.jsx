// src/components/Member/StaffModal.jsx
import React from 'react';
import './StaffModal.css';

const StaffModal = ({ staff, onClose }) => {
  if (!staff) return null;

  return (
    <div className="staff-modal-overlay" onClick={onClose}>
      <div className="staff-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="staff-modal-close" onClick={onClose}>&times;</button>
        
        <div className="staff-modal-inner">
          <div className="staff-modal-image">
            <img src={staff.hoverImage} alt={staff.name} onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.jp/300x300.png";
            }} />
          </div>
          
          <div className="staff-modal-info">
            <h2 className="staff-modal-name">{staff.name}</h2>
            <p className="staff-modal-romaji">{staff.romaji || ''}</p>
            <p className="staff-modal-position">{staff.position}</p>
            
            {staff.socialLinks && (
              <div className="staff-modal-social">
                {staff.socialLinks.twitter && (
                  <a href={staff.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                    <span>X</span>
                  </a>
                )}
                {staff.socialLinks.linkedin && (
                  <a href={staff.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <span>in</span>
                  </a>
                )}
                {staff.socialLinks.facebook && (
                  <a href={staff.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                    <span>f</span>
                  </a>
                )}
              </div>
            )}
            
            <div className="staff-modal-description">
              <p>{staff.longDescription || staff.description}</p>
            </div>
          </div>
        </div>
        
        {staff.relatedArticles && staff.relatedArticles.length > 0 && (
          <div className="staff-modal-articles">
            <h3>関連記事 Related articles</h3>
            <ul>
              {staff.relatedArticles.map((article, index) => (
                <li key={index}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffModal;