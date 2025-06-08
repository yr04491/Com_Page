// src/components/Member/StaffModal.jsx
import React, { useEffect, useState } from 'react';
import './StaffModal.css';

const StaffModal = ({ staff, onClose }) => {
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [keySequence, setKeySequence] = useState([]);
  
  // 隠しコマンド: ↑↑↓↓←→←→NR
  const secretCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyN', 'KeyR'
  ];

  useEffect(() => {
    // 中楯さん（id: 1）のモーダルの時のみキーボードイベントリスナーを追加
    if (staff && staff.id === 1) {
      const handleKeyDown = (event) => {
        const newSequence = [...keySequence, event.code];
        
        // シーケンスが長すぎる場合は先頭を削除
        if (newSequence.length > secretCode.length) {
          newSequence.shift();
        }
        
        setKeySequence(newSequence);
        
        // 隠しコマンドと一致するかチェック
        if (newSequence.length === secretCode.length) {
          const isMatch = newSequence.every((key, index) => key === secretCode[index]);
          if (isMatch) {
            setSecretUnlocked(true);
            // 成功時の効果音やアニメーションをここに追加可能
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      // クリーンアップ関数
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [staff, keySequence]);

  // モーダルが閉じられる時やスタッフが変更される時にリセット
  useEffect(() => {
    return () => {
      setSecretUnlocked(false);
      setKeySequence([]);
    };
  }, [staff]);

  if (!staff) return null;

  const formatDescription = (desc) => {
    if (!desc) return null;

    // 改行文字で分割し、各行をspanタグで囲み、<br>で改行
    const lines = desc.split('\n');
    const elements = [];

    lines.forEach((line, index) => {
      if (line.trim() === '') {
        // 空行の場合は<br>タグを追加
        elements.push(<br key={`br-${index}`} />);
      } else {
        // HTMLタグを含む場合はdangerouslySetInnerHTMLを使用
        if (line.includes('<b>') || line.includes('</b>') || line.includes('<u>') || line.includes('<span')) {
          elements.push(
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          );
        } else {
          elements.push(<span key={index}>{line}</span>);
        }
      }

      // 最後の行以外は改行を追加
      if (index < lines.length - 1) {
        elements.push(<br key={`br-after-${index}`} />);
      }
    });

    return <div>{elements}</div>;
  };

  // 表示する説明文を決定
  const getDisplayDescription = () => {
    // 中楯さん（id: 1）で隠しコマンドが有効な場合のみ longDescription を表示
    if (staff.id === 1 && secretUnlocked && staff.longDescription) {
      return staff.longDescription;
    }
    // それ以外は通常の description を表示
    return staff.description;
  };

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
            <p className="staff-modal-position">{staff.position}</p>
            <h2 className="staff-modal-name">{staff.name}</h2>
            <p className="staff-modal-romaji">{staff.romaji || ''}</p>

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
              {formatDescription(getDisplayDescription())}
            </div>

            {/* 隠しコマンド成功時のGO!ボタン表示 */}
            {staff.id === 1 && secretUnlocked && (
              <div style={{ 
                marginTop: '20px', 
                textAlign: 'center'
              }}>
                <style>
                  {`
                    @keyframes flashingButton {
                      0% { opacity: 1; }
                      50% { opacity: 0.3; }
                      100% { opacity: 1; }
                    }
                  `}
                </style>
                <button 
                  onClick={() => window.open('http://ginyu.fuis.u-fukui.ac.jp/members/2024/nakadate/', '_blank')}
                  style={{
                    backgroundColor: 'black',
                    color: '#4caf50',
                    border: 'none',
                    padding: '20px 50px',
                    borderRadius: '25px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
                    animation: 'flashingButton 1s infinite'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#333333';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.animation = 'none';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'black';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.animation = 'flashingButton 1s infinite';
                  }}
                >
                  GO!
                </button>
              </div>
            )}
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