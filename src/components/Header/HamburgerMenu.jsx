import React, { useEffect } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleOpen }) => {
  // メニュー開閉時にbodyにクラスを追加/削除してスクロールを制御
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    // コンポーネントのアンマウント時にクラスを削除
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <>
      {/* オーバーレイ - メニューが開いたときに表示 */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} 
        onClick={toggleOpen}
      />
      
      {/* ハンバーガーアイコン */}
      <div 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleOpen}
        aria-label="メニュー"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleOpen();
          }
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default HamburgerMenu;