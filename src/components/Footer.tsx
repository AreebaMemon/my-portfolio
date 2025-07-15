import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="footer-text">
            Made with <Heart className="inline w-4 h-4 text-accent mx-1" /> by Areeba Memon © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;