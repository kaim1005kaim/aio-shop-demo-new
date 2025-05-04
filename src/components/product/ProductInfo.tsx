import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { useLocalization } from '../../contexts/LocalizationContext';
import { Product } from '../../types/product';
import AIHighlight from './AIHighlight';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  const { t, locale } = useLocalization(); // localeも取得
  
  return (
    <div className="lg:col-span-2">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.brand}</p>
      
      <AIHighlight 
        active={isOptimized} 
        tooltip={isOptimized 
          ? t('product.tooltip.optimized_description', '最適化された商品説明') 
          : t('product.tooltip.basic_description', '基本的な商品説明')}
      >
        <p className="mb-6">
          {isOptimized ? product.optimizedDescription : product.description}
        </p>
      </AIHighlight>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-bold">{locale === 'ja' ? `¥${product.price.toLocaleString()}` : `${product.price.toFixed(2)}`}</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{product.rating}/5</span>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mb-8">
        {t('product.addToCart', 'カートに入れる')}
      </button>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('product.features', '機能')}</h2>
        <AIHighlight 
          active={isOptimized} 
          tooltip={isOptimized 
            ? t('product.tooltip.optimized_features', '最適化された機能リスト') 
            : t('product.tooltip.basic_features', '基本的な機能リスト')}
        >
          <ul className="list-disc pl-5 space-y-2">
            {(isOptimized ? product.optimizedFeatures : product.features).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </AIHighlight>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">{t('product.specifications', '仕様')}</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          {Object.entries(product.specs).map(([key, value], index) => (
            <div key={index} className={`py-2 ${index !== 0 ? 'border-t border-gray-200' : ''}`}>
              <span className="font-medium">{key}:</span> {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
