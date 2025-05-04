import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import AIHighlight from './AIHighlight';

interface StructuredDataViewerProps {
  product: Product;
}

const StructuredDataViewer: React.FC<StructuredDataViewerProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  
  if (!isOptimized) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center py-6">
          <p className="text-gray-500 mb-2">
            Structured data is not available when AI Optimization is turned off.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Enable AI Optimization
          </button>
        </div>
      </div>
    );
  }

  // Generate structured data for the product
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images,
    "description": product.optimizedDescription,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "url": `https://aioshop.example/product/${product.id}`,
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "AIO Shop"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": 24
    }
  };

  return (
    <AIHighlight active={isOptimized} tooltip="JSON-LD structured data for search engines and AI">
      <div className="bg-gray-50 border border-gray-200 rounded-lg mb-8">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">Product Structured Data (JSON-LD)</h3>
          <p className="text-sm text-gray-600">This structured data helps AI understand the product details.</p>
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