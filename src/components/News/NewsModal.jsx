// src/components/News/NewsModal.jsx
import React, { useEffect } from 'react';
import './NewsModal.css';

const NewsModal = ({ news, onClose }) => {
  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!news) return null;

  // 日付をフォーマット
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 改行を処理する関数
  const formatContent = (content) => {
    if (!content) return null;
    
    const lines = content.split('\n');
    const elements = [];

    lines.forEach((line, index) => {
      if (line.trim() === '') {
        elements.push(<br key={`br-${index}`} />);
      } else {
        elements.push(<span key={index}>{line}</span>);
      }

      if (index < lines.length - 1) {
        elements.push(<br key={`br-after-${index}`} />);
      }
    });

    return <div>{elements}</div>;
  };

  return (
    <div className="news-modal-overlay" onClick={onClose}>
      <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="news-modal-close" onClick={onClose}>&times;</button>
        
        <div className="news-modal-header">
          <p className="news-modal-date">{formatDate(news.date)}</p>
          <h2 className="news-modal-title">{news.title}</h2>
        </div>

        <div className="news-modal-body">
          {formatContent(news.content)}
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
