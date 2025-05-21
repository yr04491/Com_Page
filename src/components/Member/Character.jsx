// src/components/Member/Character.jsx
import React, { forwardRef, useState } from 'react';
import './Character.css';
import StaffModal from './StaffModal';
// プロフェッショナルデータを外部ファイルからインポート
import professionalData from '../../data/professionalData';

const Character = forwardRef((props, ref) => {
  const { isActive } = props;
  
  // 各スタッフ画像のホバー状態を管理
  const [hoveredProfessional, setHoveredProfessional] = useState(null);
  
  // 選択されたスタッフとモーダル表示状態を管理
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  
  // モーダルを閉じる関数
  const closeModal = () => {
    setSelectedProfessional(null);
  };
  
  // スタッフカードがクリックされたときの処理
  const handleProfessionalClick = (professional) => {
    setSelectedProfessional(professional);
  };
  
  return (
    <>
      <div 
        ref={ref} 
        id="character" 
        className={`character-section sub-section ${isActive ? 'active' : ''}`}
      >
        <h3>Our Professional</h3>
        <div className="character-content">
          <p>専門的な知識をもとに頑張ってます！</p>
          
          <div className="staff-grid">
            {professionalData.map(professional => (
              <div 
                className="staff-card" 
                key={professional.id}
                onClick={() => handleProfessionalClick(professional)}
              >
                <div 
                  className="staff-photo"
                  onMouseEnter={() => setHoveredProfessional(professional.id)}
                  onMouseLeave={() => setHoveredProfessional(null)}
                >
                  <img 
                    src={hoveredProfessional === professional.id ? professional.hoverImage : professional.image}
                    alt={professional.name} 
                    className="staff-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.jp/150x150.png";
                    }}
                  />
                </div>
                <div className="staff-info">
                  <h4>{professional.name}</h4>
                  <p className="staff-position">{professional.position}</p>
                  <p className="staff-description">{professional.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* スタッフ詳細モーダル */}
      {selectedProfessional && <StaffModal staff={selectedProfessional} onClose={closeModal} />}
    </>
  );
});

export default Character;