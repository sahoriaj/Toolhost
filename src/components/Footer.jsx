import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--header-bg)', borderTop: '1px solid var(--border-color)', padding: '30px 15px', marginTop: '50px' }}>
      <div style={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>ToolHost</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: '0.7' }}>Free online tools for developers and content creators.</p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>Tools</h4>
            <ul style={{ listStyle: 'none', fontSize: '13px', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><Link to="/dailymotion-embed" style={{ color: 'var(--text-color)', textDecoration: 'none', opacity: '0.7' }}>Dailymotion Embed</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/gdrive-embed" style={{ color: 'var(--text-color)', textDecoration: 'none', opacity: '0.7' }}>Google Drive Embed</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>Links</h4>
            <ul style={{ listStyle: 'none', fontSize: '13px', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-color)', textDecoration: 'none', opacity: '0.7' }}>About</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-color)', textDecoration: 'none', opacity: '0.7' }}>Privacy</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-color)', textDecoration: 'none', opacity: '0.7' }}>Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-color)', fontSize: '12px', opacity: '0.6' }}>
          <p>&copy; {new Date().getFullYear()} ToolHost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
