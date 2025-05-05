import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { useLocalization } from '../../contexts/LocalizationContext';
import { Product } from '../../types/product';
// ★ 削除: import AIHighlight from './AIHighlight'; // 不要になったので削除

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  const { t, locale } = useLocalization(); // locale も取得

  // product が null または undefined の場合のフォールバック（より安全に）
  if (!product) {
    return <div className="lg:col-span-2">{t('product_not_found', '商品情報が見つかりません')}</div>;
  }

  return (
    <div className="lg:col-span-2">
      <h1 className="text-3xl font-bold mb-2">{product.name || ''}</h1>
      <p className="text-gray-600 mb-4">{product.brand || ''}</p>

      {/* ★ 修正: AIHighlight ラッパーを削除 */}
      <p className="mb-6">
        {isOptimized
          ? product.optimizedDescription || product.description || ''
          : product.description || ''
        }
      </p>

      <div className="flex items-center justify-between mb-6">
        <div>
           {typeof product.price === 'number' ? (
             <span className="text-2xl font-bold">
               {/* ロケールに応じた通貨表示 (ここでは単純な例) */}
               {locale === 'ja' ? `¥${product.price.toLocaleString()}` : `$${product.price.toFixed(2)}`}
             </span>
           ) : (
             <span className="text-2xl font-bold">-</span>
           )}
        </div>
        <div className="flex items-center">
          {typeof product.rating === 'number' && ( // rating が数値の場合のみ表示
            <>
              <span className="text-yellow-500 mr-1">★</span>
              <span>{product.rating.toFixed(1)}/5</span>
            </>
          )}
        </div>
      </div>

      {/* カートボタン (機能は未実装と想定) */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mb-8">
        {t('product.addToCart', 'カートに入れる')}
      </button>

      {/* 機能リスト */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('product.features', '機能')}</h2>
        {/* ★ 修正: AIHighlight ラッパーを削除 */}
        <ul className="list-disc pl-5 space-y-2">
          {/* 表示するリストを isOptimized で切り替え */}
          {(isOptimized ? product.optimizedFeatures : product.features)?.map((feature, index) => (
            <li key={index}>{feature}</li>
          )) ?? <li>{/* features がない場合の表示 (オプション) */}</li>}
        </ul>
      </div>

      {/* 仕様 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">{t('product.specifications', '仕様')}</h2>
        {/* product.specs が存在するかチェック */}
        {product.specs ? (
           <div className="bg-gray-50 rounded-lg p-4 border border-gray-200"> {/* ボーダー追加 */}
             {Object.entries(product.specs).map(([key, value], index, arr) => (
               <div key={key} className={`py-2 ${index !== 0 ? 'border-t border-gray-200' : ''}`}>
                 <span className="font-medium">{key}:</span> {String(value)} {/* 値を文字列に変換 */}
               </div>
             ))}
           </div>
         ) : (
           <p className="text-gray-600">{/* specs がない場合の表示 (オプション) */}</p>
         )}
      </div>
    </div>
  );
};

export default ProductInfo;