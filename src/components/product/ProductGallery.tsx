import React, { useState } from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import AIHighlight from './AIHighlight';

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const { isOptimized } = useAIOptimization();
  
  const { images, name, optimizedImageAlt } = product;
  const imageAlts = product.imageAlts || [];
  const optimizedImageAlts = product.optimizedImageAlts || [];

  const getImageAlt = (index: number) => {
    if (isOptimized && optimizedImageAlts[index]) {
      return optimizedImageAlts[index];
    }
    return imageAlts[index] || name;
  };

  return (
    <div className="lg:col-span-2">
      <div className="mb-4 overflow-hidden rounded-lg">
        <AIHighlight active={isOptimized} tooltip="Optimized image alt text">
          <img 
            src={images[activeImage]} 
            alt={isOptimized ? optimizedImageAlt : name}
            className="w-full h-auto object-cover"
          />
        </AIHighlight>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <AIHighlight 
            key={index} 
            active={isOptimized} 
            tooltip="Optimized thumbnail alt text"
          >
            <button 
              className={`block rounded-md overflow-hidden border-2 transition-all ${
                activeImage === index 
                  ? 'border-blue-500 ring-2 ring-blue-300 ring-opacity-50' 
                  : 'border-transparent hover:border-gray-300'
              }`}
              onClick={() => setActiveImage(index)}
            >
              <img 
                src={image} 
                alt={getImageAlt(index)}
                className="w-full h-auto object-cover"
              />
            </button>
          </AIHighlight>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;