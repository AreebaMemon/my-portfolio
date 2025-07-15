import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Settings, Menu, X } from 'lucide-react';
import ColorSettings from './ColorSettings';

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showColorSettings, setShowColorSettings] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getThemeIcon = () => {
    return theme === 'black' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />;
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <span className="text-2xl font-bold text-accent">AM</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Theme Controls */}
          <div className="flex items-center gap-3 relative">
            <button
              onClick={() => setShowColorSettings(!showColorSettings)}
              className="theme-toggle"
              aria-label="Color settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden theme-toggle"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {showColorSettings && (
              <ColorSettings onClose={() => setShowColorSettings(false)} />
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-center py-2"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;