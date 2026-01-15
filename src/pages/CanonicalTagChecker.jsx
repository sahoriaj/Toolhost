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
        <title>Canonical Tag Checker - Verify Your SEO Tags | ToolHost</title>
        <meta 
          name="description" 
          content="Free canonical tag checker tool. Verify if your website has proper canonical tags for SEO. Instant results and detailed analysis." 
        />
        <meta 
          name="keywords" 
          content="canonical tag checker, SEO tool, canonical URL, duplicate content, SEO analysis" 
        />
      </Helmet>

      <main className="canonical-checker-page">
        <div className="canonical-container">
          <Link to="/" className="back-link">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M19 12H5M12 19l-7-7 7-7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="none"
              />
            </svg>
            Back to Tools
          </Link>

          <div className="canonical-card">
            <h1>Canonical Tag Checker</h1>
            <p className="canonical-description">
              ToolHost's Canonical Checker tool analyzes your website's HTML to verify the presence 
              of canonical tags. Google recommends having this tag on every page to avoid duplicate 
              content issues and improve your SEO ranking.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="canonical-input-group">
                <label>
                  Website URL <span className="canonical-required">*</span>
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setResult(null);
                  }}
                  placeholder="example.com or https://example.com"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="canonical-check-btn" 
                disabled={loading}
              >
                {loading ? 'Analyzing...' : 'Check Canonical Tag'}
              </button>
            </form>

            {loading && (
              <div className="canonical-loading">
                <div className="canonical-progress-wrapper">
                  <div 
                    className="canonical-progress-bar" 
                    style={{ width: `${progress}%` }}
                  ></div>
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
                          <path 
                            fill="#10b981" 
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                          />
                        ) : (
                          <path 
                            fill="#ef4444" 
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          />
                        )}
                      </svg>
                    </div>
                  </div>
                  <div className="canonical-result-message">
                    {result.found ? (
                      <>
                        <strong style={{ color: '#10b981' }}>
                          ✓ Canonical Tag Found
                        </strong>
                        Your page is using the Canonical Tag correctly. This helps search engines 
                        understand the primary version of your content and prevents duplicate content issues.
                        <br /><br />
                        <strong>Canonical URL:</strong>
                        <code>{result.canonicalUrl}</code>
                      </>
                    ) : (
                      <>
                        <strong style={{ color: '#ef4444' }}>
                          ✗ Canonical Tag Not Found
                        </strong>
                        Your page is not using the Canonical Tag. The Canonical Tag tells search engines 
                        the primary URL of a page. Google recommends all pages specify a canonical URL to 
                        avoid duplicate content penalties and improve SEO performance.
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="canonical-card" style={{ marginTop: '24px' }}>
            <div className="canonical-info-section">
              <h2>What is a Canonical Tag?</h2>
              <p>
                The Canonical Tag is an HTML element that tells search engines which version of a URL 
                is the primary or "canonical" version when multiple URLs have similar or duplicate content. 
                This is crucial for SEO because URLs can have multiple versions due to parameters, 
                www/non-www variations, or tracking codes, which can create duplicate content issues.
              </p>

              <h2>Why is it Important?</h2>
              <p>
                Google and other search engines may penalize sites with duplicate content. By specifying 
                a canonical URL, you consolidate ranking signals and ensure search engines index your 
                preferred version. This improves your SEO performance and prevents your site from competing 
                against itself in search results.
              </p>

              <h2>How to Fix Missing Canonical Tags</h2>
              <p>
                First, determine the preferred version of each page URL. Most modern CMS platforms 
                (WordPress, Shopify, etc.) automatically manage canonical tags. If you're working with 
                custom code, add the following tag to your HTML head section:
              </p>
              <p>
                <code style={{ display: 'block', margin: '10px 0', padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  &lt;link rel="canonical" href="https://example.com/your-page/" /&gt;
                </code>
              </p>
              <p>
                Replace the href value with your preferred URL. Make sure to use absolute URLs 
                (including https://) rather than relative paths.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CanonicalTagChecker;
