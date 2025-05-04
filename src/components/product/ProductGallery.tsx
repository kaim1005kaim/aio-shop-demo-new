import React, { useState } from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import AIHighlight from './AIHighlight';

// 画像のフォールバック機能
const getImageWithFallback = (url: string, index: number) => {
  // 無料の画像サービスから代替画像のURLを生成
  const fallbackUrl = `https://source.unsplash.com/random/800x600/?product,${index}`;
  
  return {
    src: url,
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== fallbackUrl) {
        console.log('画像の読み込みに失敗しました。代替画像を使用します。');
        target.src = fallbackUrl;
      }
    }
  };
};

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  const [selectedImage, setSelectedImage] = useState(0);
  
  return (
    <div className="lg:col-span-2">
      <div className="mb-4 bg-white rounded-lg overflow-hidden border border-gray-200">
        <img
          {...getImageWithFallback(product.images[selectedImage], selectedImage)}
          className="w-full h-96 object-cover"
          alt={isOptimized ? product.optimizedImageAlts[selectedImage] : product.imageAlts[selectedImage]}
        />
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {product.images.map((image, index) => (
          <AIHighlight 
            key={index}
            active={isOptimized} 
            tooltip={isOptimized ? "最適化されたalt属性" : "基本的なalt属性"}
          >
            <button
              className={`bg-white rounded-lg overflow-hidden border ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                {...getImageWithFallback(image, index)}
                className="w-full h-24 object-cover"
                alt={isOptimized ? product.optimizedImageAlts[index] : product.imageAlts[index]}
              />
            </button>
          </AIHighlight>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;