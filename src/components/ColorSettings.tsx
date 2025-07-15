import React from 'react';
import { useTheme, AccentColor } from '../contexts/ThemeContext';
import { X } from 'lucide-react';

interface ColorSettingsProps {
  onClose: () => void;
}

const ColorSettings: React.FC<ColorSettingsProps> = ({ onClose }) => {
  const { accentColor, setAccentColor } = useTheme();

  const colors: { name: AccentColor; value: string; label: string }[] = [
    { name: 'orange', value: '#ff6b35', label: 'Orange' },
    { name: 'blue', value: '#3b82f6', label: 'Blue' },
    { name: 'green', value: '#10b981', label: 'Green' },
    { name: 'purple', value: '#8b5cf6', label: 'Purple' },
    { name: 'pink', value: '#ec4899', label: 'Pink' },
    { name: 'red', value: '#ef4444', label: 'Red' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Color Settings Panel */}
      <div className="absolute top-full right-0 mt-2 bg-card-bg border border-border rounded-lg shadow-lg p-4 z-50 min-w-[200px]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-text-primary">Accent Colors</h3>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close color settings"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => {
                setAccentColor(color.name);
                onClose();
              }}
              className={`
                w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110
                ${accentColor === color.name 
                  ? 'border-white shadow-lg scale-110' 
                  : 'border-transparent hover:border-white/50'
                }
              `}
              style={{ backgroundColor: color.value }}
              aria-label={`Set accent color to ${color.label}`}
              title={color.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorSettings;