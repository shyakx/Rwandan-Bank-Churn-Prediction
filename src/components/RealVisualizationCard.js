import React from 'react';
import { motion } from 'framer-motion';

const RealVisualizationCard = ({ 
  title, 
  imagePath, 
  description, 
  className = "" 
}) => {
  return (
    <motion.div 
      className={`bg-white border border-blue-200 rounded-xl p-6 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-lg font-semibold text-black mb-4">{title}</h3>
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <img 
          src={imagePath} 
          alt={title}
          className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
          style={{ maxHeight: '300px', objectFit: 'contain' }}
          onError={(e) => {
            console.error('Failed to load image:', imagePath);
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div 
          className="hidden text-center p-4 text-gray-500"
          style={{ display: 'none' }}
        >
          <p>Image not found: {imagePath}</p>
        </div>
      </div>
      {description && (
        <div className="mt-2 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}
    </motion.div>
  );
};

export default RealVisualizationCard;
