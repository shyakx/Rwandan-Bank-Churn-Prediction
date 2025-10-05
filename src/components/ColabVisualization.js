import React from 'react';

const ColabVisualization = ({ 
  title, 
  imagePath, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-black mb-4">{title}</h3>
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <img 
          src={imagePath} 
          alt={title}
          className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
          style={{ maxHeight: '500px', objectFit: 'contain' }}
          onError={(e) => {
            console.error('Failed to load image:', imagePath);
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div 
          className="hidden text-center p-8 text-gray-500"
          style={{ display: 'none' }}
        >
          <p>Image not found: {imagePath}</p>
          <p className="text-sm">Please check if the image file exists in the public folder.</p>
        </div>
      </div>
      {description && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ColabVisualization;
