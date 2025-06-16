import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ColorSwatch from '../components/ColorSwatch';

interface AnalyzeResult {
  skinColor: string;
  pupilColor: string;
  hairColor: string;
  resultText: string;
  season: string;
  recommendedColors: string[];
  avoidColors: string[];
}

const ResultScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result as AnalyzeResult;

  if (!result) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-yellow via-pastel-green to-pastel-blue p-4">
      <div className="max-w-4xl mx-auto pt-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Your Color Analysis Results
          </h1>
          <p className="text-xl text-gray-600">
            You're a <span className="font-bold text-purple-600">{result.season}</span>!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Colors */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Your Natural Colors
            </h2>
            <div className="flex justify-around items-center">
              <ColorSwatch color={result.skinColor} label="Skin Tone" size="lg" />
              <ColorSwatch color={result.hairColor} label="Hair Color" size="lg" />
              <ColorSwatch color={result.pupilColor} label="Eye Color" size="lg" />
            </div>
          </div>

          {/* Season Description */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About Your Season
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {result.resultText}
            </p>
          </div>
        </div>

        {/* Recommended Colors */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Perfect Colors for You
          </h2>
          <div className="grid grid-cols-5 gap-4 justify-items-center">
            {result.recommendedColors.map((color, index) => (
              <ColorSwatch
                key={index}
                color={color}
                label={`Color ${index + 1}`}
                size="md"
              />
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4">
            These colors will enhance your natural beauty and make you glow!
          </p>
        </div>

        {/* Colors to Avoid */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Colors to Avoid
          </h2>
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            {result.avoidColors.map((color, index) => (
              <div key={index} className="relative">
                <ColorSwatch
                  color={color}
                  label={`Avoid ${index + 1}`}
                  size="md"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-red-500 rotate-45 absolute"></div>
                  <div className="w-8 h-0.5 bg-red-500 -rotate-45 absolute"></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4">
            These colors might wash you out or clash with your natural tones.
          </p>
        </div>

        {/* Style Recommendations */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Style Recommendations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">✨ Best Accessories</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Gold jewelry and warm metals</li>
                <li>• Bright, clear gemstones</li>
                <li>• Colorful scarves and bags</li>
                <li>• Bold statement pieces</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">👗 Clothing Styles</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Clean, crisp lines</li>
                <li>• Bright, saturated colors</li>
                <li>• High contrast combinations</li>
                <li>• Modern, structured pieces</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Try Again
          </button>
          <button
            onClick={() => {
              // In a real app, this could save results or share them
              alert('Results saved! (This is a demo)');
            }}
            className="px-8 py-3 border-2 border-purple-500 text-purple-500 font-semibold rounded-full hover:bg-purple-50 transition-colors"
          >
            Save Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;