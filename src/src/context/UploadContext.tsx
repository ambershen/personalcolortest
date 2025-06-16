import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { AnalyzeResult } from '../services/analyzeApi';

interface UploadContextType {
  uploadedFiles: File[];
  setUploadedFiles: (files: File[]) => void;
  analysisResult: AnalyzeResult | null;
  setAnalysisResult: (result: AnalyzeResult | null) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (analyzing: boolean) => void;
  clearData: () => void;
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export const useUpload = () => {
  const context = useContext(UploadContext);
  if (context === undefined) {
    throw new Error('useUpload must be used within an UploadProvider');
  }
  return context;
};

interface UploadProviderProps {
  children: ReactNode;
}

export const UploadProvider: React.FC<UploadProviderProps> = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const clearData = () => {
    setUploadedFiles([]);
    setAnalysisResult(null);
    setIsAnalyzing(false);
  };

  const value: UploadContextType = {
    uploadedFiles,
    setUploadedFiles,
    analysisResult,
    setAnalysisResult,
    isAnalyzing,
    setIsAnalyzing,
    clearData,
  };

  return (
    <UploadContext.Provider value={value}>
      {children}
    </UploadContext.Provider>
  );
};