// src/components/Header/Navigation.jsx
import React from 'react';
import './Navigation.css';

const Navigation = ({ isOpen, isMobile, activeNav, setActiveNav, handleNavClick, expandedMenus, toggleMenu }) => {
  // マウスオーバー時の処理（デスクトップ用）
  const handleMouseEnter = (navItem) => {
    if (!isMobile) {
      if (navItem === 'about' || navItem === 'member') {
        toggleMenu(navItem);
      }
      setActiveNav(navItem);
    }
  };

  // マウスアウト時の処理（デスクトップ用）
  const handleMouseLeave = (navItem) => {
    if (!isMobile) {
      if (navItem === 'about' || navItem === 'member') {
        toggleMenu(navItem);
      }
      setActiveNav(null);
    }
  };

  // ドロップダウンの切り替え
  const toggleDropdown = (e, menu) => {
    e.preventDefault();
    e.stopPropagation(); // イベント伝播を停止
    toggleMenu(menu);
  };

  return (
    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        {/* About Menu */}
        <li
          className={`nav-item nav-about ${expandedMenus.about ? 'has-dropdown-open' : ''}`}
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={() => handleMouseLeave('about')}
        >
          <div className="nav-link-with-dropdown">
            <a
              href="#"
              className={expandedMenus.about || activeNav === 'about' ? 'active' : ''}
              onClick={(e) => toggleDropdown(e, 'about')}
            >
              About <span className="dropdown-arrow">▼</span>
            </a>
            {expandedMenus.about && (
              <div className="dropdown-menu">
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('company-info'); }}>会社概要</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('mission'); }}>Mission</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('vision'); }}>Vision</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about-company'); }}>会社紹介</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('history'); }}>沿革</a>
              </div>
            )}
          </div>
        </li>

        {/* Services Menu */}
        <li
          className="nav-item nav-services"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={() => handleMouseLeave('services')}
        >
          <a
            href="#services"
            className={activeNav === 'services' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
          >
            Services
          </a>
        </li>

        {/* Member Menu - New dropdown menu */}
        <li
          className={`nav-item nav-member ${expandedMenus.member ? 'has-dropdown-open' : ''}`}
          onMouseEnter={() => handleMouseEnter('member')}
          onMouseLeave={() => handleMouseLeave('member')}
        >
          <div className="nav-link-with-dropdown">
            <a
              href="#"
              className={expandedMenus.member || activeNav === 'member' ? 'active' : ''}
              onClick={(e) => toggleDropdown(e, 'member')}
            >
              Member <span className="dropdown-arrow">▼</span>
            </a>
            {expandedMenus.member && (
              <div className="dropdown-menu">
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('member-staff'); }}>Management</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('member-character'); }}>Professional</a>
              </div>
            )}
          </div>
        </li>

        {/* News Menu */}
        <li
          className="nav-item nav-news"
          onMouseEnter={() => handleMouseEnter('news')}
          onMouseLeave={() => handleMouseLeave('news')}
        >
          <a
            href="#news"
            className={activeNav === 'news' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('news');
            }}
          >
            News
          </a>
        </li>

        {/* Contactメニュー */}
        <li
          className="nav-item nav-contact"
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={() => handleMouseLeave('contact')}
        >
          <a
            href="#contact"
            className={activeNav === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;