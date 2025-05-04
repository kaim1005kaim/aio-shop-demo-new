// src/pages/ProductDetailPage.tsx (修正後・全文)

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
import { categories, Category } from '../data/categories'; // ★ カテゴリデータと型(必要なら)をインポート
import { useAIOptimization } from '../contexts/AIOptimizationContext';
import { useLocalization } from '../contexts/LocalizationContext';
import { Product } from '../types/product'; // Product型をインポート

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { isOptimized, toggleOptimization } = useAIOptimization();
  const { t } = useLocalization(); // t関数を取得

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

  // ★ categoryId を使ってカテゴリ情報を検索
  const category = categories.find(c => c.id === product.categoryId);
  // ★ category オブジェクトの nameKey を t 関数に渡して翻訳された名前を取得
  const categoryName = category ? t(category.nameKey) : t('unknown_category', '不明なカテゴリ');

  return (
    <>
      <Helmet>
        <title>
          {isOptimized
            // ★ 修正: categoryName を使用
            ? `${product.name || ''} | ${product.brand || ''} | ${categoryName} | ${t('site_name', 'AIO Shop Demo')}`
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
            {/* ★↓ 要修正: 実際のサイトドメインに置き換えるか、環境変数から取得 */}
            <link rel="canonical" href={`https://your-production-domain.com/product/${product.id}`} />
          </>
        )}
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <Breadcrumbs
            items={[
              { name: t('home', 'ホーム'), path: '/' },
              // ★ 修正: categoryName と product.categoryId を使用
              { name: categoryName, path: `/category/${product.categoryId}` },
              { name: product.name || '', path: `/product/${product.id}` }
            ]}
          />

          {/* AI最適化切り替えボタン */}
          <div className="flex items-center">
             <div className="flex items-center bg-gray-100 p-1 rounded-md">
               <button
                 // isOptimized の値を反転させて toggleOptimization に渡す
                 onClick={() => toggleOptimization(!isOptimized)}
                 className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                   isOptimized
                     ? 'bg-blue-600 text-white'
                     : 'bg-transparent text-gray-700'
                 }`}
               >
                 {/* ボタンのテキストも翻訳対象にするか検討 */}
                 最適化あり
               </button>
               <button
                 // isOptimized の値を反転させて toggleOptimization に渡す
                 onClick={() => toggleOptimization(!isOptimized)}
                 className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                   !isOptimized
                     ? 'bg-blue-600 text-white'
                     : 'bg-transparent text-gray-700'
                 }`}
               >
                 {/* ボタンのテキストも翻訳対象にするか検討 */}
                 最適化なし
               </button>
             </div>
             <span className="ml-3 text-sm text-gray-500">
               {/* このテキストも翻訳対象にするか検討 */}
               {isOptimized ? 'AI推薦に最適化されたコンテンツを表示中' : '基本的なコンテンツを表示中'}
             </span>
           </div>
        </div>

        {/* 商品ギャラリーと情報 */}
        {/* 注意: ProductGallery や ProductInfo 内でカテゴリ名を表示する場合、
            それらのコンポーネントにも categoryName を渡すか、
            あるいは product と categories を渡してコンポーネント内部で名前を検索・翻訳する必要があります */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6 mb-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* その他のコンポーネント */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <AIRecommendationScore product={product} />
           {/* isOptimized が true の場合に ARViewer を表示 */}
           {/* ★ 修正: ARViewer には product オブジェクトを渡す */}
           {isOptimized && product && <ARViewer product={product} />}
         </div>

         <SuggestedPrompts product={product} />
         <ProductFAQ product={product} />
         {/* ProductComparison に product を渡す */}
         <ProductComparison currentProduct={product} />
         <StructuredDataViewer product={product} />
      </div>
    </>
  );
};

export default ProductDetailPage;