import React from 'react';
import { Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden pixel-perfect">
      {/* Blue Background */}
      <div className="absolute inset-0 bg-sky-300" style={{ backgroundColor: '#87CEEB' }} />
      
      {/* Floating Pixelated Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sun"></div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        <div className="cloud cloud-5"></div>
        <div className="cloud cloud-6"></div>
        <div className="cloud cloud-7"></div>
        <div className="cloud cloud-8"></div>
        <div className="cloud cloud-9"></div>
        <div className="cloud cloud-10"></div>
        <div className="cloud cloud-11"></div>
        <div className="cloud cloud-12"></div>
        <div className="cloud cloud-13"></div>
        <div className="cloud cloud-14"></div>
        <div className="cloud cloud-15"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Animated Logo */}
        <div className="text-center mb-12">
          <h1 className="pixel-font text-6xl md:text-8xl font-bold mb-4 animate-float" style={{imageRendering: 'pixelated', imageRendering: '-moz-crisp-edges', imageRendering: 'crisp-edges', fontSmooth: 'never', WebkitFontSmoothing: 'none'}}>
            <span className="inline-block animate-pulse-slow text-yellow-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #FFFF00'}}>H</span>
            <span className="inline-block animate-bounce-slow text-yellow-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #FFFF00'}}>E</span>
            <span className="inline-block animate-pulse-slow text-yellow-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #FFFF00'}}>A</span>
            <span className="inline-block animate-bounce-slow text-yellow-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #FFFF00'}}>V</span>
            <span className="inline-block animate-pulse-slow text-yellow-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #FFFF00'}}>E</span>
            <span className="inline-block animate-bounce-slow text-yellow-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #FFFF00'}}>N</span>
          </h1>
          <h2 className="pixel-font text-4xl md:text-6xl font-bold" style={{imageRendering: 'pixelated', imageRendering: '-moz-crisp-edges', imageRendering: 'crisp-edges', fontSmooth: 'never', WebkitFontSmoothing: 'none'}}>
            <span className="inline-block animate-bounce-slow text-blue-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #00BFFF'}}>P</span>
            <span className="inline-block animate-pulse-slow text-blue-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #00BFFF'}}>E</span>
            <span className="inline-block animate-bounce-slow text-blue-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #00BFFF'}}>T</span>
            <span className="inline-block animate-pulse-slow text-blue-400" style={{textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 5px #00BFFF'}}>S</span>
          </h2>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* X (Twitter) Link */}
          <a
            href="https://x.com/heavenpetsnft"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 border-4 border-white hover:border-yellow-400 transition-all duration-200 transform hover:scale-110 hover:rotate-1 flex items-center gap-3"
          >
            <Twitter size={24} />
            <span className="pixel-font text-lg">FOLLOW US</span>
          </a>

          {/* Buy a Pet Button */}
          <a
            href="https://launchmynft.io/collections/51iifivXKAvdt1TL8zCTxN323cX8jWgbhXvEk8bushDo/m1K8OGENg7RMhYIGxbAa"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 border-4 border-white hover:border-yellow-400 transition-all duration-200 transform hover:scale-110 hover:rotate-1 flex items-center gap-3"
          >
            <span className="pixel-font text-lg">MINT A PET</span>
          </a>

          {/* Buy on Heaven Button */}
          <a
            href="https://heaven.xyz/token/AmP21W46HDRNUyYyiBpipx5yVuGovkytaAVCw4wNT777"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 border-4 border-white hover:border-yellow-400 transition-all duration-200 transform hover:scale-110 hover:rotate-1 flex items-center gap-3"
          >
            <span className="pixel-font text-lg">BUY ON HEAVEN</span>
          </a>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>
      </div>
    </div>
  );
}

export default App;