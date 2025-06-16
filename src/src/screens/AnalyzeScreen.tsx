import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface AnalyzeResult {
  skinColor: string;
  pupilColor: string;
  hairColor: string;
  resultText: string;
  season: string;
  recommendedColors: string[];
  avoidColors: string[];
}

const AnalyzeScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('Uploading images...');

  const files = location.state?.files as File[];

  useEffect(() => {
    if (!files || files.length < 2) {
      navigate('/upload');
      return;
    }

    const analyzeImages = async () => {
      const steps = [
        'Uploading images...',
        'Detecting facial features...',
        'Analyzing skin tone...',
        'Identifying hair color...',
        'Determining eye color...',
        'Calculating color harmony...',
        'Generating recommendations...'
      ];

      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(steps[i]);
        setProgress((i + 1) * (100 / steps.length));
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      // Simulate API call
      try {
        // In a real app, you would call your backend API here
        // const formData = new FormData();
        // files.forEach((file, index) => {
        //   formData.append(`image${index}`, file);
        // });
        // const response = await fetch('/api/analyze', {
        //   method: 'POST',
        //   body: formData
        // });
        // const result = await response.json();

        // Mock result for demo
        const mockResult: AnalyzeResult = {
          skinColor: '#F4C2A1',
          pupilColor: '#8B4513',
          hairColor: '#654321',
          season: 'Bright Spring',
          resultText: 'You have a warm and vibrant color palette that suits bright, clear colors.',
          recommendedColors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
          avoidColors: ['#2C3E50', '#8E44AD', '#34495E', '#7F8C8D']
        };

        navigate('/result', { state: { result: mockResult } });
      } catch (error) {
        console.error('Analysis failed:', error);
        // Handle error - could show error screen or retry option
        navigate('/upload');
      }
    };

    analyzeImages();
  }, [files, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-purple via-pastel-pink to-pastel-blue flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
            <div className="absolute inset-2 border-4 border-pink-300 rounded-full animate-spin border-b-transparent animation-delay-150"></div>
            <div className="absolute inset-4 border-4 border-purple-300 rounded-full animate-spin border-l-transparent animation-delay-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">
            Analyzing Your Unique Palette
          </h1>
          
          <p className="text-white/80 text-lg">
            {currentStep}
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-white/60 text-sm">
            {Math.round(progress)}% complete
          </p>
        </div>
        
        <div className="text-white/40 text-xs space-y-1">
          <p>✨ Using advanced AI color analysis</p>
          <p>🔍 Processing facial features</p>
          <p>🎯 Calculating perfect matches</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeScreen;