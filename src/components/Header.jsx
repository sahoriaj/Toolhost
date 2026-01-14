import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <Link to="/" className="logo">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4285f4"/>
              <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#34a853"/>
            </svg>
            <span>ToolHost</span>
          </Link>
          
          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <svg className={`theme-icon ${theme === 'light' ? 'sun-icon' : 'moon-icon'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {theme === 'light' ? (
                  <>
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v3m0 14v3m10-10h-3M5 12H2m17.07-7.07l-2.12 2.12M9.05 14.95l-2.12 2.12m12.14 0l-2.12-2.12M9.05 9.05L6.93 6.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </>
                ) : (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
                )}
              </svg>
            </button>
            
            <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link to="/dailymotion-embed" onClick={toggleMenu}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Dailymotion Embed
              </Link>
            </li>
            <li>
              <Link to="/gdrive-embed" onClick={toggleMenu}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
                Google Drive Embed
              </Link>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                More Tools
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
