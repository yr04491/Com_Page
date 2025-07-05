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

  // タイトルの改行を処理する関数
  const formatTitle = (title) => {
    if (!title) return null;
    
    // 特定のタイトルに改行を追加
    if (title === "福井発！ビジネスプランコンテストグランプリ受賞") {
      return (
        <span>
          福井発！ビジネスプランコンテスト<br />
          グランプリ受賞
        </span>
      );
    }
    
    // その他のタイトルはそのまま表示
    return title;
  };

  // 改行と画像を処理する関数
  const formatContent = (content, images = {}) => {
    if (!content) return null;
    
    const lines = content.split('\n');
    const elements = [];

    lines.forEach((line, index) => {
      if (line.trim() === '') {
        elements.push(<br key={`br-${index}`} />);
      } else if (line.startsWith('[IMAGE:') && line.endsWith(']')) {
        // 画像記法の解析: [IMAGE:imageKey:caption:size] または [IMAGE:imageKey:caption]
        const imageMatch = line.match(/\[IMAGE:([^:]+):([^:\]]+)(?::([^:\]]+))?\]/);
        if (imageMatch && images) {
          const [, imageKey, caption, size = 'medium'] = imageMatch;
          const imageSrc = images[imageKey];
          
          if (imageSrc) {
            elements.push(
              <div key={`image-${index}`} className={`news-image-container ${size}`}>
                <img 
                  src={imageSrc} 
                  alt={caption}
                  className={`news-image news-image-${size}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.jp/600x400.png";
                  }}
                />
                <p className="news-image-caption">{caption}</p>
              </div>
            );
          }
        }
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
          <h2 className="news-modal-title">{formatTitle(news.title)}</h2>
        </div>

        <div className="news-modal-body">
          {formatContent(news.content, news.images)}
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
