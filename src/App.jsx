import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CanonicalTagChecker from './pages/CanonicalTagChecker';
import './App.css';

function App() {
  return (
    <Router>
      <Helmet>
        <title>ToolHost | Free Online Tools for Web, SEO & Development</title>
        <meta name="description" content="ToolHost offers fast, free online tools for developers, webmasters, and SEO professionals. Simple, secure, and easy to use tools in one place." />
        <meta name="keywords" content="online tools, free tools, web tools, SEO tools, developer tools, canonical tag checker" />
        <meta name="theme-color" content="#6366f1" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ToolHost | Free Online Tools" />
        <meta property="og:description" content="Professional free online tools for developers, webmasters, and content creators." />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToolHost | Free Online Tools" />
        <meta name="twitter:description" content="Professional free online tools for developers and content creators." />
      </Helmet>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canonical-tag-checker" element={<CanonicalTagChecker />} />
        {/* Add more routes as needed */}
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
