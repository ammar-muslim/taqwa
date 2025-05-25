"use client";
import { createContext, useState, useEffect } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
    
  const toggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = `theme ${mode}`;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};