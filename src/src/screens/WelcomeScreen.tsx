import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-purple to-pastel-blue flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Your True Colors
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Personal color analysis from your selfies
          </p>
          <p className="text-sm text-gray-500">
            Upload 2-3 photos and discover your perfect color palette
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/upload')}
            className="w-full bg-white text-gray-800 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-gray-200"
          >
            Get Started
          </button>
        </div>
        
        <div className="text-xs text-gray-400 space-y-1">
          <p>✨ AI-powered color analysis</p>
          <p>🎨 Personalized recommendations</p>
          <p>📱 Instant results</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;