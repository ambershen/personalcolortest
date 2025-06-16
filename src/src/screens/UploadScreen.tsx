import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import UploadPreview from '../components/UploadPreview';

const UploadScreen: React.FC = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image/'));
    setUploadedFiles(prev => {
      const newFiles = [...prev, ...imageFiles];
      return newFiles.slice(0, 3); // Max 3 images
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 3,
    disabled: uploadedFiles.length >= 3
  });

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleAnalyze = () => {
    if (uploadedFiles.length >= 2) {
      // Pass files to analyze screen via navigation state
      navigate('/analyze', { state: { files: uploadedFiles } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue via-pastel-green to-pastel-yellow p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Upload Your Photos
          </h1>
          <p className="text-gray-600">
            Upload 2-3 clear selfies for the best color analysis
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
              isDragActive
                ? 'border-blue-400 bg-blue-50'
                : uploadedFiles.length >= 3
                ? 'border-gray-300 bg-gray-50 cursor-not-allowed'
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            <input {...getInputProps()} />
            <div className="space-y-4">
              <div className="text-4xl">
                {uploadedFiles.length >= 3 ? '✅' : '📸'}
              </div>
              <div>
                {uploadedFiles.length >= 3 ? (
                  <p className="text-gray-600">Maximum 3 images uploaded</p>
                ) : isDragActive ? (
                  <p className="text-blue-600 font-medium">Drop your photos here...</p>
                ) : (
                  <div>
                    <p className="text-gray-700 font-medium mb-1">
                      Drag & drop your photos here
                    </p>
                    <p className="text-gray-500 text-sm">
                      or click to browse ({uploadedFiles.length}/3)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {uploadedFiles.length > 0 && (
            <UploadPreview files={uploadedFiles} onRemove={removeFile} />
          )}

          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleAnalyze}
              disabled={uploadedFiles.length < 2}
              className={`flex-1 py-3 px-6 rounded-full font-medium transition-all duration-200 ${
                uploadedFiles.length >= 2
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Analyze My Color
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadScreen;