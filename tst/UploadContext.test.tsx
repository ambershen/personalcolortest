import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import { UploadProvider, useUpload } from '../src/src/context/UploadContext';
import type { AnalyzeResult } from '../src/src/services/analyzeApi';

// Mock data for testing
const mockAnalyzeResult: AnalyzeResult = {
  skinColor: '#F5DEB3',
  pupilColor: '#8B4513',
  hairColor: '#654321',
  resultText: 'You have a warm undertone',
  season: 'Autumn',
  recommendedColors: ['#FF6B35', '#F7931E', '#FFD23F'],
  avoidColors: ['#0077BE', '#6A0DAD', '#FF1493']
};

const mockFiles = [
  new File(['test1'], 'test1.jpg', { type: 'image/jpeg' }),
  new File(['test2'], 'test2.jpg', { type: 'image/jpeg' })
];

// Test component to access context
const TestComponent: React.FC = () => {
  const {
    uploadedFiles,
    setUploadedFiles,
    analysisResult,
    setAnalysisResult,
    isAnalyzing,
    setIsAnalyzing,
    clearData
  } = useUpload();

  return (
    <div>
      <div data-testid="uploaded-files-count">{uploadedFiles.length}</div>
      <div data-testid="analysis-result">
        {analysisResult ? analysisResult.season : 'null'}
      </div>
      <div data-testid="is-analyzing">{isAnalyzing.toString()}</div>
      <button
        data-testid="set-files"
        onClick={() => setUploadedFiles(mockFiles)}
      >
        Set Files
      </button>
      <button
        data-testid="set-result"
        onClick={() => setAnalysisResult(mockAnalyzeResult)}
      >
        Set Result
      </button>
      <button
        data-testid="set-analyzing"
        onClick={() => setIsAnalyzing(true)}
      >
        Set Analyzing
      </button>
      <button data-testid="clear-data" onClick={clearData}>
        Clear Data
      </button>
    </div>
  );
};

describe('UploadContext', () => {
  describe('UploadProvider', () => {
    it('should provide initial state values', () => {
      render(
        <UploadProvider>
          <TestComponent />
        </UploadProvider>
      );

      expect(screen.getByTestId('uploaded-files-count')).toHaveTextContent('0');
      expect(screen.getByTestId('analysis-result')).toHaveTextContent('null');
      expect(screen.getByTestId('is-analyzing')).toHaveTextContent('false');
    });

    it('should update uploadedFiles state', () => {
      render(
        <UploadProvider>
          <TestComponent />
        </UploadProvider>
      );

      act(() => {
        screen.getByTestId('set-files').click();
      });

      expect(screen.getByTestId('uploaded-files-count')).toHaveTextContent('2');
    });

    it('should update analysisResult state', () => {
      render(
        <UploadProvider>
          <TestComponent />
        </UploadProvider>
      );

      act(() => {
        screen.getByTestId('set-result').click();
      });

      expect(screen.getByTestId('analysis-result')).toHaveTextContent('Autumn');
    });

    it('should update isAnalyzing state', () => {
      render(
        <UploadProvider>
          <TestComponent />
        </UploadProvider>
      );

      act(() => {
        screen.getByTestId('set-analyzing').click();
      });

      expect(screen.getByTestId('is-analyzing')).toHaveTextContent('true');
    });

    it('should clear all data when clearData is called', () => {
      render(
        <UploadProvider>
          <TestComponent />
        </UploadProvider>
      );

      // Set some data first
      act(() => {
        screen.getByTestId('set-files').click();
        screen.getByTestId('set-result').click();
        screen.getByTestId('set-analyzing').click();
      });

      // Verify data is set
      expect(screen.getByTestId('uploaded-files-count')).toHaveTextContent('2');
      expect(screen.getByTestId('analysis-result')).toHaveTextContent('Autumn');
      expect(screen.getByTestId('is-analyzing')).toHaveTextContent('true');

      // Clear data
      act(() => {
        screen.getByTestId('clear-data').click();
      });

      // Verify data is cleared
      expect(screen.getByTestId('uploaded-files-count')).toHaveTextContent('0');
      expect(screen.getByTestId('analysis-result')).toHaveTextContent('null');
      expect(screen.getByTestId('is-analyzing')).toHaveTextContent('false');
    });
  });

  describe('useUpload hook', () => {
    it('should throw error when used outside UploadProvider', () => {
      // Suppress console.error for this test
      const originalError = console.error;
      console.error = jest.fn();

      const { result } = renderHook(() => useUpload());

      expect(result.error).toEqual(
        Error('useUpload must be used within an UploadProvider')
      );

      // Restore console.error
      console.error = originalError;
    });

    it('should return context value when used within UploadProvider', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <UploadProvider>{children}</UploadProvider>
      );

      const { result } = renderHook(() => useUpload(), { wrapper });

      expect(result.current).toEqual({
        uploadedFiles: [],
        setUploadedFiles: expect.any(Function),
        analysisResult: null,
        setAnalysisResult: expect.any(Function),
        isAnalyzing: false,
        setIsAnalyzing: expect.any(Function),
        clearData: expect.any(Function)
      });
    });

    it('should update state through hook functions', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <UploadProvider>{children}</UploadProvider>
      );

      const { result } = renderHook(() => useUpload(), { wrapper });

      // Test setUploadedFiles
      act(() => {
        result.current.setUploadedFiles(mockFiles);
      });
      expect(result.current.uploadedFiles).toHaveLength(2);
      expect(result.current.uploadedFiles[0].name).toBe('test1.jpg');

      // Test setAnalysisResult
      act(() => {
        result.current.setAnalysisResult(mockAnalyzeResult);
      });
      expect(result.current.analysisResult).toEqual(mockAnalyzeResult);

      // Test setIsAnalyzing
      act(() => {
        result.current.setIsAnalyzing(true);
      });
      expect(result.current.isAnalyzing).toBe(true);

      // Test clearData
      act(() => {
        result.current.clearData();
      });
      expect(result.current.uploadedFiles).toHaveLength(0);
      expect(result.current.analysisResult).toBeNull();
      expect(result.current.isAnalyzing).toBe(false);
    });
  });

  describe('State management edge cases', () => {
    it('should handle setting analysisResult to null', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <UploadProvider>{children}</UploadProvider>
      );

      const { result } = renderHook(() => useUpload(), { wrapper });

      // Set a result first
      act(() => {
        result.current.setAnalysisResult(mockAnalyzeResult);
      });
      expect(result.current.analysisResult).toEqual(mockAnalyzeResult);

      // Set to null
      act(() => {
        result.current.setAnalysisResult(null);
      });
      expect(result.current.analysisResult).toBeNull();
    });

    it('should handle empty files array', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <UploadProvider>{children}</UploadProvider>
      );

      const { result } = renderHook(() => useUpload(), { wrapper });

      // Set files first
      act(() => {
        result.current.setUploadedFiles(mockFiles);
      });
      expect(result.current.uploadedFiles).toHaveLength(2);

      // Set empty array
      act(() => {
        result.current.setUploadedFiles([]);
      });
      expect(result.current.uploadedFiles).toHaveLength(0);
    });

    it('should handle multiple state updates', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <UploadProvider>{children}</UploadProvider>
      );

      const { result } = renderHook(() => useUpload(), { wrapper });

      // Multiple rapid updates
      act(() => {
        result.current.setIsAnalyzing(true);
        result.current.setUploadedFiles(mockFiles);
        result.current.setAnalysisResult(mockAnalyzeResult);
        result.current.setIsAnalyzing(false);
      });

      expect(result.current.isAnalyzing).toBe(false);
      expect(result.current.uploadedFiles).toHaveLength(2);
      expect(result.current.analysisResult).toEqual(mockAnalyzeResult);
    });
  });
});