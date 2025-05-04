
// src/pages/ProductDetailPage.tsx
// src/pages/ProductDetailPage.tsx の更新版


import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductFAQ from '../components/product/ProductFAQ';
import ProductComparison from '../components/product/ProductComparison';
import StructuredDataViewer from '../components/product/StructuredDataViewer';
import AIRecommendationScore from '../components/product/AIRecommendationScore';
import SuggestedPrompts from '../components/product/SuggestedPrompts';
import ARViewer from '../components/product/ARViewer';



import { products } from '../data/products';
import { useAIOptimization } from '../contexts/AIOptimizationContext';
import { useLocalization } from '../contexts/LocalizationContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { isOptimized, toggleOptimization } = useAIOptimization();
  const { t } = useLocalization();
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {

    return <div className="container mx-auto px-4 py-16">{t('product_not_found')}</div>;

    return <div className="container mx-auto px-4 py-16">{t('product_not_found')}          </div>
    </>
  );
};

export default ProductDetailPage;
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6 mb-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AIRecommendationScore product={product} />
          {isOptimized && <ARViewer product={product} />}
        </div>
        
        <SuggestedPrompts product={product} />
        <ProductFAQ product={product} />
        <ProductComparison />
        <StructuredDataViewer product={product} />
      </div>;

  }

  return (
    <>
      <Helmet>
        <title>
          {isOptimized 
            ? `${product.name} | ${product.brand} | ${product.category.name} | AIO Shop`
            : `${product.name} - AIO Shop`
          }
        </title>
        <meta 
          name="description" 
          content={isOptimized ? product.optimizedMetaDescription : product.metaDescription}
        />
        {isOptimized && (
          <>
            <meta property="og:title" content={`${product.name} | ${product.brand}`} />
            <meta property="og:description" content={product.optimizedMetaDescription} />
            <meta property="og:image" content={product.images[0]} />
            <meta property="og:type" content="product" />
            <meta property="og:price:amount" content={product.price.toString()} />
            <meta property="og:price:currency" content="JPY" />
            <meta property="og:availability" content="in stock" />
            <link rel="canonical" href={`https://aioshop.example/product/${product.id}`} />
          </>
        )}
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <Breadcrumbs
            items={[
              { name: t('home'), path: '/' },
              { name: product.category.name, path: `/category/${product.category.id}` },
              { name: product.name, path: `/product/${product.id}` }
            ]}
          />

          
          <div className="flex items-center">
            <div className="flex items-center bg-gray-100 p-1 rounded-md">
              <button
                onClick={toggleOptimization}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isOptimized 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-transparent text-gray-700'
                }`}
              >
                最適化あり
              </button>
              <button
                onClick={toggleOptimization}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  !isOptimized 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-transparent text-gray-700'
                }`}
              >
                最適化なし
              </button>
            </div>
            <span className="ml-3 text-sm text-gray-500">
              {isOptimized ? 'AI推薦に最適化されたコンテンツを表示中' : '基本的なコンテンツを表示中'}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6 mb-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AIRecommendationScore product={product} />
          {isOptimized && <ARViewer product={product} />}
        </div>
        
        <SuggestedPrompts product={product} />
        <ProductFAQ product={product} />
        <ProductComparison />
        <StructuredDataViewer product={product} />
      </div>
    </>
  );
};

export default ProductDetailPage;

