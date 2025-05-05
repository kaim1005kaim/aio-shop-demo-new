// src/components/product/StructuredDataViewer.tsx (修正後・全文)

import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { useLocalization } from '../../contexts/LocalizationContext';
import { Product } from '../../types/product';
import { categories } from '../../data/categories';
import { Info } from 'lucide-react'; // Info アイコンをインポート

interface StructuredDataViewerProps {
  product: Product;
}

const StructuredDataViewer: React.FC<StructuredDataViewerProps> = ({ product }) => {
  const { isOptimized, toggleOptimization } = useAIOptimization();
  const { t } = useLocalization();

  if (!product) return null;

  const handleEnableOptimization = () => {
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

  // 構造化データ生成
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name || '',
    image: product.images || [],
    description: product.optimizedDescription || product.description || '',
    sku: product.sku || `AIO-${product.id}`,
    mpn: product.mpn || `AIOMPN-${product.id}`,
    brand: {
      "@type": "Brand",
      name: product.brand || ''
    },
    category: categoryName,
    offers: {
      "@type": "Offer",
      url: typeof window !== 'undefined' ? `${window.location.origin}/product/${product.id}` : `/product/${product.id}`,
      priceCurrency: "JPY",
      price: product.price, // Assuming price is number
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      availability: product.stock && product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: t('site_name', 'AIO Shop Demo')
      },
      itemCondition: "https://schema.org/NewCondition"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating || 4.5,
      reviewCount: product.reviewCount || Math.floor(Math.random() * 50) + 5
    },
    // ↓↓↓ レビュー部分の修正 ↓↓↓
    "review": product.reviews?.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5" // ★ 引用符修正
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.text // ★ 引用符修正
    })) || [ // レビューがない場合のダミーデータ
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5" // ★ 引用符修正
        },
        "author": {
          "@type": "Person",
          "name": t('product.dummy_reviewer', 'AIショップユーザー') // 翻訳キー追加要
        },
        "reviewBody": t('product.dummy_review', '品質が良く、期待以上の商品でした。') // 翻訳キー追加要
      }
    ]
    // ↑↑↑ レビュー部分の修正 ↑↑↑
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg mb-8 shadow-sm">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div>
           <h3 className="font-semibold text-lg">{t('product_detail.structured_data.title', 'Product Structured Data (JSON-LD)')}</h3>
           <p className="text-sm text-gray-600">{t('product_detail.structured_data.description', 'This structured data helps AI understand the product details.')}</p>
        </div>
         <div className="relative group ml-2">
           <Info className="h-4 w-4 text-gray-400 cursor-help" />
           <span className="tooltip bottom-full left-1/2 -translate-x-1/2 mb-1 w-max max-w-xs">
             {t('product_detail.structured_data.tooltip', 'JSON-LD structured data for search engines and AI')}
           </span>
         </div>
      </div>
      <div className="p-4 overflow-auto max-h-60 bg-white rounded-b-lg">
        <pre className="text-xs text-gray-800 whitespace-pre-wrap">
          {JSON.stringify(structuredData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default StructuredDataViewer;