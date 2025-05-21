// src/components/Header/Header.jsx
import React, { forwardRef, useState, useEffect } from 'react';
import './Header.css';
import Navigation from './Navigation';
import HamburgerMenu from './HamburgerMenu';

const Header = forwardRef(({ scrollToSection }, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeNav, setActiveNav] = useState(null);
  const [expandedMenus, setExpandedMenus] = useState({
    about: false,
    services: false,
    news: false,
    recruit: false,
    contact: false,
    member: false
  });

  // ウィンドウサイズの変更を監視
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && navOpen) setNavOpen(false);
      // デスクトップサイズになったらドロップダウンをリセット
      if (!mobile) {
        setExpandedMenus({
          about: false,
          services: false,
          news: false,
          recruit: false,
          contact: false,
          member: false
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navOpen]);

  // スクロールの監視
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // ナビゲーションの状態を管理する関数
  const toggleNavOpen = () => {
    setNavOpen(!navOpen);
    // ナビゲーションを閉じるときにドロップダウンもすべて閉じる
    if (navOpen) {
      resetExpandedMenus();
    }
  };

  // すべてのドロップダウンをリセットする関数
  const resetExpandedMenus = () => {
    setExpandedMenus({
      about: false,
      services: false,
      news: false,
      recruit: false,
      contact: false,
      member: false
    });
    setActiveNav(null);
  };

  const closeNav = () => {
    setNavOpen(false);
    resetExpandedMenus();
  };

  // メニュー項目の展開/収納を切り替える
  const toggleMenu = (menu) => {
    // モバイル表示時は、一つのメニューを開くときに他のメニューを閉じる
    if (isMobile) {
      const updatedMenus = {
        about: false,
        services: false,
        news: false,
        recruit: false,
        contact: false,
        member: false
      };
      updatedMenus[menu] = !expandedMenus[menu];
      setExpandedMenus(updatedMenus);
    } else {
      // デスクトップ表示時は従来通りの動作
      setExpandedMenus(prev => ({
        ...prev,
        [menu]: !prev[menu]
      }));
    }
    setActiveNav(expandedMenus[menu] ? null : menu);
  };

  const handleNavClick = (section) => {
    setActiveNav(section);
    closeNav();
    scrollToSection(section);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={ref}>
      <div className="navbar-container">
        {/* ロゴ */}
        <div className="logo" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          closeNav(); // ロゴクリック時もナビゲーションを閉じる
        }}>
          Minakano
        </div>
        
        {/* モバイル用ハンバーガーアイコン */}
        <HamburgerMenu isOpen={navOpen} toggleOpen={toggleNavOpen} />
        
        {/* ナビゲーションメニュー */}
        <Navigation 
          isOpen={navOpen}
          isMobile={isMobile}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          handleNavClick={handleNavClick}
          expandedMenus={expandedMenus}
          toggleMenu={toggleMenu}
        />
      </div>
    </header>
  );
});

export default Header;