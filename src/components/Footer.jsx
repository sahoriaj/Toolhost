import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>ToolHost</h3>
            <p>
              Professional free online tools for developers, webmasters, and content creators. 
              Fast, secure, and easy to use.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Popular Tools</h4>
            <ul>
              <li><Link to="/canonical-tag-checker">Canonical Tag Checker</Link></li>
              <li><Link to="/dailymotion-embed">Dailymotion Embed</Link></li>
              <li><Link to="/gdrive-embed">Google Drive Embed</Link></li>
              <li><Link to="/youtube-embed">YouTube Embed</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ToolHost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
