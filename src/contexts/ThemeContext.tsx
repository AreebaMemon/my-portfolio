import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'black' | 'white';
export type AccentColor = 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'red';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('black');
  const [accentColor, setAccentColor] = useState<AccentColor>('orange');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['black', 'white'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
    
    const savedAccentColor = localStorage.getItem('accentColor') as AccentColor;
    if (savedAccentColor && ['orange', 'blue', 'green', 'purple', 'pink', 'red'].includes(savedAccentColor)) {
      setAccentColor(savedAccentColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-black', 'theme-white');
    
    // Add current theme class
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('accentColor', accentColor);
    const root = document.documentElement;
    
    // Remove all accent color classes
    root.classList.remove('accent-orange', 'accent-blue', 'accent-green', 'accent-purple', 'accent-pink', 'accent-red');
    
    // Add current accent color class
    root.classList.add(`accent-${accentColor}`);
  }, [accentColor]);
  const toggleTheme = () => {
    setTheme(theme === 'white' ? 'black' : 'white');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};