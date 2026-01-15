import React from 'react';
import { Helmet } from 'react-helmet';
import ToolCard from '../components/ToolCard';

const Home = () => {
  const tools = [
    { 
      name: 'Canonical Tag Checker', 
      image: '/assets/images/canonical-tag-checker.png', 
      url: 'canonical-tag-checker' 
    },
    { 
      name: 'Dailymotion Embed', 
      image: '/assets/images/dailymotion.png', 
      url: 'dailymotion-embed' 
    },
    { 
      name: 'Google Drive Embed', 
      image: '/assets/images/gdrive.png', 
      url: 'gdrive-embed' 
    },
    { 
      name: 'YouTube Embed', 
      image: '/assets/images/youtube.png', 
      url: 'youtube-embed' 
    },
    { 
      name: 'Image Converter', 
      image: '/assets/images/image-converter.png', 
      url: 'image-converter' 
    },
    { 
      name: 'Image Compressor', 
      image: '/assets/images/image-compress.png', 
      url: 'image-compress' 
    },
    { 
      name: 'Canonical Tag Generator', 
      image: '/assets/images/canonical-tag-generator.png', 
      url: 'canonical-tag-generator' 
    },
    { 
      name: 'Base64 Decoder', 
      image: '/assets/images/base64-decoder.png', 
      url: 'base64-decoder' 
    },
    { 
      name: 'Base64 Encoder', 
      image: '/assets/images/base64-encoder.png', 
      url: 'base64-encoder' 
    }
  ];

  return (
    <>
      <Helmet>
        <title>ToolHost | Free Online Tools for Developers & Content Creators</title>
        <meta 
          name="description" 
          content="Discover free online tools for web development, SEO, content creation, and more. Fast, secure, and easy-to-use tools all in one place." 
        />
        <meta 
          name="keywords" 
          content="free online tools, web tools, developer tools, SEO tools, content tools, canonical tag checker, image converter" 
        />
      </Helmet>

      <main>
        <div className="page-header">
          <h1>Free Online Tools</h1>
          <p>
            Simple, fast, and secure tools for developers, webmasters, and content creators
          </p>
        </div>
        
        <div className="tools-grid" id="tools">
          {tools.map((tool, index) => (
            <ToolCard 
              key={index} 
              name={tool.name}
              image={tool.image}
              url={tool.url}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
