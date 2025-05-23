// src/pages/ProductDetailPage.tsx

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

// データとContextをインポート
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useAIOptimization } from '../contexts/AIOptimizationContext';
import { useLocalization } from '../contexts/LocalizationContext';
import { Product } from '../types/product';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { isOptimized, toggleOptimization } = useAIOptimization();
  const { t } = useLocalization();

  // 商品データを検索
  const product: Product | undefined = products.find(p => p.id === productId);

  // 商品が見つからない場合の処理
  if (!product || !productId) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        {t('product_not_found', '商品が見つかりません')}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {isOptimized
            ? `${product.name || ''} | ${product.brand || ''} | ${t('ec_demo', 'ECサイトデモ')} | ${t('site_name', 'AIO Shop Demo')}`
            : `${product.name || ''} - ${t('site_name', 'AIO Shop Demo')}`
          }
        </title>
        <meta
          name="description"
          content={isOptimized
            ? product.optimizedMetaDescription || product.description || ''
            : product.metaDescription || product.description || ''
          }
        />
        {/* 最適化されたメタタグ */}
        {isOptimized && product.images && product.images.length > 0 && (
          <>
            <meta property="og:title" content={`${product.name || ''} | ${product.brand || ''}`} />
            <meta property="og:description" content={product.optimizedMetaDescription || product.description || ''} />
            <meta property="og:image" content={product.images[0]} />
            <meta property="og:type" content="product" />
            {typeof product.price === 'number' && (
              <>
                 <meta property="og:price:amount" content={product.price.toString()} />
                 <meta property="og:price:currency" content="JPY" />
              </>
            )}
            <meta property="og:availability" content={product.stock && product.stock > 0 ? "in stock" : "out of stock"} />
            {/* 実際のサイトドメインを使用 */}
            <link rel="canonical" href={`https://aio-shop-demo.netlify.app/product/${product.id}`} />
          </>
        )}
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <Breadcrumbs
            items={[
              { name: t('home', 'ホーム'), path: '/' },
              // カテゴリを「ECサイトデモ」に変更
              { name: t('ec_demo', 'ECサイトデモ'), path: '/products' },
              { name: product.name || '', path: `/product/${product.id}` }
            ]}
          />

          {/* AI最適化切り替えボタン */}
          <div className="flex items-center">
             <div className="flex items-center bg-gray-100 p-1 rounded-md">
               <button
                 onClick={() => toggleOptimization(!isOptimized)}
                 className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                   isOptimized
                     ? 'bg-blue-600 text-white'
                     : 'bg-transparent text-gray-700'
                 }`}
               >
                 {t('product_detail.optimization.optimized', '最適化あり')}
               </button>
               <button
                 onClick={() => toggleOptimization(!isOptimized)}
                 className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                   !isOptimized
                     ? 'bg-blue-600 text-white'
                     : 'bg-transparent text-gray-700'
                 }`}
               >
                 {t('product_detail.optimization.standard', '最適化なし')}
               </button>
             </div>
             <span className="ml-3 text-sm text-gray-500">
               {isOptimized 
                 ? t('product_detail.optimization.status_optimized', 'AI推薦に最適化されたコンテンツを表示中')
                 : t('product_detail.optimization.status_standard', '基本的なコンテンツを表示中')
               }
             </span>
           </div>
        </div>

        {/* 商品ギャラリーと情報 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6 mb-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* その他のコンポーネント */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <AIRecommendationScore product={product} />
           {isOptimized && product && <ARViewer product={product} />}
         </div>

         <SuggestedPrompts product={product} />
         <ProductFAQ product={product} />
         <ProductComparison currentProduct={product} />
         <StructuredDataViewer product={product} />
      </div>
    </>
  );
};

export default ProductDetailPage;