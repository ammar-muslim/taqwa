"use client"
import { useState, useEffect } from 'react';

// General icons
import { FiBookOpen, FiMosque, FiSunrise, FiMoon, FiCalendar } from 'react-icons/fi';

// Islamic icons
import { FaMosque, FaQuran, FaKaaba } from 'react-icons/fa';
import { MdOutlineSelfImprovement } from 'react-icons/md';

function BackgroundIcons({ children }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const renderIcon = (type, key, style) => {
    const icon = (() => {
      switch(type) {
        case 'book': return <FiBookOpen key={key} style={style} />;
        case 'mosque': return <FaMosque key={key} style={style} />;
        case 'prayer': return <FiPray key={key} style={style} />;
        case 'quran': return <FaQuran key={key} style={style} />;
        case 'kaaba': return <FaKaaba key={key} style={style} />;
        case 'self-improvement': return <MdOutlineSelfImprovement key={key} style={style} />;
        default: return null;
      }
    })();

    return icon;
  };

  const generateIcons = (count) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      const randomType = Math.random() < 0.5 ? 'book' : 'mosque';
      const randomSize = Math.random() * 20 + 10;
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomOpacity = Math.random() * 0.5 + 0.3;
      
      const style = {
        position: 'absolute',
        fontSize: `${randomSize}px`,
        left: `${randomX}%`,
        top: `${randomY}%`,
        opacity: randomOpacity,
        animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`
      };

      icons.push(renderIcon(randomType, `icon-${i}`, style));
    }
    return icons;
  };

  const generateShapes = (count) => {
    const shapes = [];
    const shapeTypes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < count; i++) {
      const type = shapeTypes[i % shapeTypes.length];
      const size = Math.floor(Math.random() * 60) + 20;
      const top = Math.floor(Math.random() * 80) + 10;
      const left = Math.floor(Math.random() * 80) + 10;
      const delay = Math.floor(Math.random() * 20);
      const duration = Math.floor(Math.random() * 20) + 20;
      const opacity = (Math.random() * 0.06) + 0.02;
      const rotation = Math.floor(Math.random() * 360);

      const baseStyle = {
        position: 'absolute',
        top: top + '%',
        left: left + '%',
        width: size + 'px',
        height: size + 'px',
        animation: `floatShape ${duration}s infinite ease-in-out`,
        animationDelay: delay + 's',
        transform: `rotate(${rotation}deg)`,
        opacity: opacity,
      };

      if (type === 'circle') {
        shapes.push(
          <div 
            key={`shape-${i}`}
            style={{
              ...baseStyle,
              borderRadius: '50%',
              border: '1px solid var(--foreground)',
            }}
          />
        );
      } else if (type === 'square') {
        shapes.push(
          <div 
            key={`shape-${i}`}
            style={{
              ...baseStyle,
              border: '1px solid var(--foreground)',
            }}
          />
        );

      }
      else if (type === 'triangle') {
        shapes.push(
          <div 
            key={`shape-${i}`}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid var(--foreground)`,
              opacity: opacity,
              background: 'transparent'
            }}
          />
        );
      }
    }
    return shapes;
  };

  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    background: 'var(--background)',
    zIndex: -1,
  };

  const glowStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'var(--foreground)',
    opacity: 0.12,
    animation: 'pulse 10s infinite ease-in-out',
  };

  const keyframes = `
    @keyframes float {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      25% {
        transform: translateY(-15px) rotate(5deg);
      }
      50% {
        transform: translateY(0px) rotate(10deg);
      }
      75% {
        transform: translateY(15px) rotate(5deg);
      }
      100% {
        transform: translateY(0px) rotate(0deg);
      }
    }

    @keyframes floatShape {
      0% {
        transform: translateY(0px) rotate(0deg) scale(1);
      }
      33% {
        transform: translateY(-20px) rotate(120deg) scale(1.1);
      }
      66% {
        transform: translateY(10px) rotate(240deg) scale(0.9);
      }
      100% {
        transform: translateY(0px) rotate(360deg) scale(1);
      }
    }

    @keyframes pulse {
      0% {
        opacity: 0.01;
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        opacity: 0.05;
        transform: translate(-50%, -50%) scale(1.2);
      }
      100% {
        opacity: 0.01;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  `;

  return (
    <>
      <div style={backgroundStyle}>
        <style>{keyframes}</style>
        <div style={glowStyle}></div>
        {mounted && generateIcons(12)} 
        {mounted && generateShapes(15)}
      </div>
      {children}
    </>
  );
}

export default BackgroundIcons;
