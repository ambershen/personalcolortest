import React from 'react';

interface ColorSwatchProps {
  color: string;
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, label, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className={`${sizeClasses[size]} rounded-full border-2 border-gray-200 shadow-sm`}
        style={{ backgroundColor: color }}
      />
      <div className="text-center">
        <p className="text-sm font-medium text-gray-700">{label}</p>
        <p className="text-xs text-gray-500 font-mono">{color}</p>
      </div>
    </div>
  );
};

export default ColorSwatch;