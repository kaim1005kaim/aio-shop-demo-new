import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { useLocalization } from '../../contexts/LocalizationContext';
import { Product } from '../../types/product';
import AIHighlight from './AIHighlight';
import { categories } from '../../data/categories';

interface StructuredDataViewerProps {
  product: Product;
}

const StructuredDataViewer: React.FC<StructuredDataViewerProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  const { t, locale } = useLocalization(); // 翻訳関数とロケールを取得
  
  // ボタンクリック時の処理 - AI最適化を有効にする
  const handleEnableOptimization = () => {
    // AIOptimizationContextのtoggleOptimization関数を呼び出す
    const { toggleOptimization } = useAIOptimization();
    toggleOptimization(true);
  };
  
  if (!isOptimized) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center py-6">
          <p className="text-gray-500 mb-2">
            {t('product_detail.structured_data.unavailable', 'Structured data is not available when AI Optimization is turned off.')}
          </p>
          <button 
            onClick={handleEnableOptimization}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('product_detail.structured_data.enable_button', 'Enable AI Optimization')}
          </button>
        </div>
      </div>
    );
  }

  // カテゴリ情報を取得
  const category = categories.find(c => c.id === product.categoryId);
  const categoryName = category ? t(`category.${category.id}.name`) : t('unknown_category');

  // Generate structured data for the product with improved fields
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images,
    "description": product.optimizedDescription || product.description,
    "sku": product.sku || `AIO-${product.id}`,
    "mpn": product.mpn || `AIOMPN-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "category": categoryName,
    "offers": {
      "@type": "Offer",
      "url": `https://aio-shop-demo.netlify.app/product/${product.id}`,
      "priceCurrency": "JPY",
      "price": product.price,
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "availability": product.stock && product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": t('site_name', 'AIO Shop Demo')
      },
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating || 4.5,
      "reviewCount": product.reviewCount || 24
    },
    "review": product.reviews?.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.text
    })) || [{
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "AIショップユーザー"
      },
      "reviewBody": "品質が良く、期待以上の商品でした。"
    }]
  };

  return (
    <AIHighlight active={isOptimized} tooltip={t('product_detail.structured_data.tooltip', 'JSON-LD structured data for search engines and AI')}>
      <div className="bg-gray-50 border border-gray-200 rounded-lg mb-8">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">{t('product_detail.structured_data.title', 'Product Structured Data (JSON-LD)')}</h3>
          <p className="text-sm text-gray-600">{t('product_detail.structured_data.description', 'This structured data helps AI understand the product details.')}</p>
        </div>
        <div className="p-4 overflow-auto max-h-60">
          <pre className="text-xs text-gray-800 whitespace-pre-wrap">
            {JSON.stringify(structuredData, null, 2)}
          </pre>
        </div>
      </div>
    </AIHighlight>
  );
};

export default StructuredDataViewer;