import React from 'react';

interface UploadPreviewProps {
  files: File[];
  onRemove: (index: number) => void;
}

const UploadPreview: React.FC<UploadPreviewProps> = ({ files, onRemove }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {files.map((file, index) => (
        <div key={index} className="relative group">
          <img
            src={URL.createObjectURL(file)}
            alt={`Preview ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg border-2 border-pastel-pink"
          />
          <button
            onClick={() => onRemove(index)}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ×
          </button>
          <p className="text-xs text-gray-600 mt-1 truncate">{file.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UploadPreview;