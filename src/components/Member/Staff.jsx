// src/components/Member/Staff.jsx
import React, { forwardRef, useState } from 'react';
import './Staff.css';
import StaffModal from './StaffModal';
// スタッフデータを外部ファイルからインポート
import staffData from '../../data/staffData';

const Staff = forwardRef((props, ref) => {
  const { isActive } = props;
  
  // 各スタッフ画像のホバー状態を管理
  const [hoveredStaff, setHoveredStaff] = useState(null);
  
  // 選択されたスタッフとモーダル表示状態を管理
  const [selectedStaff, setSelectedStaff] = useState(null);
  
  // モーダルを閉じる関数
  const closeModal = () => {
    setSelectedStaff(null);
  };
  
  // スタッフカードがクリックされたときの処理
  const handleStaffClick = (staff) => {
    setSelectedStaff(staff);
  };
  
  return (
    <>
      <div 
        ref={ref} 
        id="staff" 
        className={`staff-section sub-section ${isActive ? 'active' : ''}`}
      >
        <h3>Our Management</h3>
        <div className="staff-content">
          <p>当社のスタッフは努力しています。</p>
          
          <div className="staff-grid">
            {staffData.map(staff => (
              <div 
                className="staff-card" 
                key={staff.id}
                onClick={() => handleStaffClick(staff)}
              >
                <div 
                  className="staff-photo"
                  onMouseEnter={() => setHoveredStaff(staff.id)}
                  onMouseLeave={() => setHoveredStaff(null)}
                >
                  <img 
                    src={hoveredStaff === staff.id ? staff.hoverImage : staff.image}
                    alt={staff.name} 
                    className="staff-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.jp/150x150.png";
                    }}
                  />
                </div>
                <div className="staff-info">
                  <h4>{staff.name}</h4>
                  <p className="staff-position">{staff.position}</p>
                  <p className="staff-description">{staff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* スタッフ詳細モーダル */}
      {selectedStaff && <StaffModal staff={selectedStaff} onClose={closeModal} />}
    </>
  );
});

export default Staff;