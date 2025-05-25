"use client";
import { useState, useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggle();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div
      className={`${styles['dark-mode-toggle']} ${mode === 'light' ? styles.light : styles.dark}`}
      onClick={handleToggle}
      role="button"
      aria-pressed={mode === 'dark'}
      aria-label="تبديل الوضع المظلم"
    >
      <div className={`${styles.icon} ${styles.sun}`} style={{ opacity: mode === 'light' ? 1 : 0.4 }}>
        <Sun size={20} />
      </div>
      <div className={`${styles.icon} ${styles.moon}`} style={{ opacity: mode === 'dark' ? 1 : 0.4 }}>
        <Moon size={20} />
      </div>
      <div
        className={`${styles.switcher} ${mode === 'light' ? styles.light : styles.dark} ${isAnimating ? styles.animating : ''}`}
      />
    </div>
  );
};

export default DarkModeToggle;
