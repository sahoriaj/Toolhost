import React from 'react';
import ToolCard from '../components/ToolCard';

const Home = () => {
  const tools = [
    { name: 'Dailymotion Embed', image: '/assets/images/dailymotion.png', url: 'dailymotion-embed' },
    { name: 'Google Drive Embed', image: '/assets/images/gdrive.png', url: 'gdrive-embed' },
    { name: 'YouTube Embed', image: '/assets/images/youtube.png', url: 'youtube-embed' },
    { name: 'Image Converter', image: '/assets/images/image-converter.png', url: 'image-converter' },
    { name: 'Image Compressor', image: '/assets/images/image-compress.png', url: 'image-compress' },
    { name: 'Canonical Tag Checker', image: '/assets/images/canonical-tag-checker.png', url: 'canonical-tag-checker' },
    { name: 'Canonical Tag Generator', image: '/assets/images/canonical-tag-generator.png', url: 'canonical-tag-generator' },
    { name: 'Base64 Decoder', image: '/assets/images/base64-decoder.png', url: 'base64-decoder' },
    { name: 'Base64 Encoder', image: '/assets/images/base64-encoder.png', url: 'base64-encoder' }
  ];

  return (
    <main>
      <div className="page-header">
        <h1>Free Online Tools</h1>
        <p>Simple, fast, and free tools for everyday tasks</p>
      </div>
      
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </main>
  );
};

export default Home;
