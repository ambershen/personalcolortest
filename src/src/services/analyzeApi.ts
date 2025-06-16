export interface AnalyzeResult {
  skinColor: string;
  pupilColor: string;
  hairColor: string;
  resultText: string;
  season: string;
  recommendedColors: string[];
  avoidColors: string[];
}

export const analyzeImages = async (files: File[]): Promise<AnalyzeResult> => {
  const formData = new FormData();
  
  files.forEach((file, index) => {
    formData.append(`image${index}`, file);
  });

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: AnalyzeResult = await response.json();
    return result;
  } catch (error) {
    console.error('Error analyzing images:', error);
    throw new Error('Failed to analyze images. Please try again.');
  }
};

// Mock function for development/demo purposes
export const mockAnalyzeImages = async (files: File[]): Promise<AnalyzeResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Return mock data
  return {
    skinColor: '#F4C2A1',
    pupilColor: '#8B4513',
    hairColor: '#654321',
    season: 'Bright Spring',
    resultText: 'You have a warm and vibrant color palette that suits bright, clear colors. Your natural coloring has high contrast and warm undertones, making you perfect for bold, saturated hues.',
    recommendedColors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
    avoidColors: ['#2C3E50', '#8E44AD', '#34495E', '#7F8C8D']
  };
};