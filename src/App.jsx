import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Helmet>
        <title>ToolHost | Free Online Tools for Web, SEO & Development</title>
        <meta name="description" content="ToolHost offers fast, free online tools for developers, webmasters, and SEO users. Simple, secure, and easy to use tools in one place." />
        <meta name="theme-color" content="#0f172a" />
      </Helmet>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as you build tool pages */}
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
