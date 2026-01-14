import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './CanonicalTagChecker.css';

const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
  'https://api.codetabs.com/v1/proxy?quest='
];

const CanonicalTagChecker = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  const fetchWithProxy = async (targetUrl) => {
    let lastError = null;

    for (const proxy of CORS_PROXIES) {
      try {
        const proxyUrl = proxy + encodeURIComponent(targetUrl);
        const response = await fetch(proxyUrl, {
          method: 'GET',
          headers: {
            'Accept': 'text/html'
          }
        });

        if (response.ok) {
          return await response.text();
        }
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError || new Error('All proxies failed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let targetUrl = url.trim();

    if (!targetUrl) {
      alert('Please enter a URL');
      return;
    }

    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }

    try {
      new URL(targetUrl);
    } catch (e) {
      alert('Please enter a valid URL');
      return;
    }

    setResult(null);
    setLoading(true);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 2;
      });
    }, 100);

    try {
      const html = await fetchWithProxy(targetUrl);
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const canonicalTag = doc.querySelector('link[rel="canonical"]');

      clearInterval(progressInterval);
      setProgress(100);

      setTimeout(() => {
        const urlObj = new URL(targetUrl);
        const domain = urlObj.hostname.replace('www.', '');

        setResult({
          url: domain,
          found: !!canonicalTag,
          canonicalUrl: canonicalTag ? canonicalTag.getAttribute('href') : null
        });

        setLoading(false);
      }, 500);

    } catch (error) {
      clearInterval(progressInterval);
      setLoading(false);
      alert('Error: Unable to fetch the webpage. The site may block automated access or have CORS restrictions.');
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Canonical Tag Checker - ToolHost</title>
        <meta name="description" content="Check if your website has a canonical tag. Free online canonical tag checker tool." />
      </Helmet>

      <main className="canonical-checker-page">
        <div className="canonical-container">
          <Link to="/" className="back-link">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            Back to Tools
          </Link>

          <div className="canonical-card">
            <h1>Canonical Tag Checker</h1>
            <p className="canonical-description">
              Toolhost's Canonical Checker tool looks for the presence of the Canonical Tag in your site's HTML.
              Google recommends having this tag present on every page.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="canonical-input-group">
                <label>Website URL <span className="canonical-required">*</span></label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setResult(null);
                  }}
                  placeholder="Example.com"
                  required
                />
              </div>

              <button type="submit" className="canonical-check-btn" disabled={loading}>
                Check
              </button>
            </form>

            {loading && (
              <div className="canonical-loading">
                <div className="canonical-progress-wrapper">
                  <div className="canonical-progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="canonical-loading-text">
                  Analyzing Website - {progress}% Complete
                </p>
              </div>
            )}

            {result && (
              <div className="canonical-results">
                <div className="canonical-result-card">
                  <div className="canonical-result-header">
                    <h2 className="canonical-result-title">
                      Result for <span>{result.url}</span>
                    </h2>
                    <div className={`canonical-result-icon ${result.found ? 'success' : 'danger'}`}>
                      <svg viewBox="0 0 24 24">
                        {result.found ? (
                          <path fill="#10b981" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        ) : (
                          <path fill="#ef4444" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        )}
                      </svg>
                    </div>
                  </div>
                  <div className="canonical-result-message">
                    {result.found ? (
                      <>
                        <strong style={{ color: '#10b981' }}>✓ Canonical Tag Found</strong>
                        <br /><br />
                        Your page is using the Canonical Tag.
                        <br /><br />
                        <strong>Canonical URL:</strong>
                        <br />
                        <code>{result.canonicalUrl}</code>
                      </>
                    ) : (
                      <>
                        <strong style={{ color: '#ef4444' }}>✗ Your page is not using the Canonical Tag.</strong>
                        <br /><br />
                        The Canonical Tag tells Search Engines the primary URL of a page. Google recommends all pages specify a Canonical.
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="canonical-card" style={{ marginTop: '20px' }}>
            <div className="canonical-info-section">
              <h2>What it is</h2>
              <p>
                The Canonical Tag is a HTML Tag that tells Search Engines the primary URL of a page.
                URLs can have multiple versions due to things like parameters being passed or www and
                non-www versions, resulting in potential duplicate content. Google recommends all pages
                specify a Canonical for this reason.
              </p>

              <h2>How to fix it</h2>
              <p>
                You may need to determine what the primary preferred version of the page is. Often the
                CMS may manage this, or provide the ability to specify it.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CanonicalTagChecker;
