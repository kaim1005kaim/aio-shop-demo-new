import React, { useState } from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import { Info } from 'lucide-react';

// 画像のフォールバック機能 (変更なし)
const getImageWithFallback = (url: string, index: number) => {
  const fallbackUrl = `https://source.unsplash.com/random/800x800/?product,${index}`;
  return {
    src: url || fallbackUrl,
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== fallbackUrl) {
        console.warn('画像の読み込みに失敗しました。代替画像を使用します。 URL:', url);
        target.src = fallbackUrl;
      }
    }
  };
};

interface ProductGalleryProps { product: Product; }

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  const [selectedImage, setSelectedImage] = useState(0);

  // ボタンクラス生成関数 (変更なし)
  const getThumbnailButtonClasses = (index: number): string => {
    let baseClasses = "bg-white rounded-lg overflow-hidden border";
    let borderClass = selectedImage === index ? 'border-blue-500' : 'border-gray-200';
    let highlightClasses = "";
    if (isOptimized) {
      highlightClasses = "group relative ai-highlight ai-highlight-active"; // CSSでスタイル定義が必要
    }
    return `${baseClasses} ${borderClass} ${highlightClasses}`;
  };

  // ツールチップテキスト取得関数 (変更なし)
  const getTooltipText = (): string => {
    return isOptimized ? "最適化されたalt属性" : "基本的なalt属性";
  };

  // メイン画像、altテキストの取得 (変更なし)
  const mainImageSrc = product.images?.[selectedImage];
  const mainImageAlt = isOptimized
    ? product.optimizedImageAlts?.[selectedImage] || product.name
    : product.imageAlts?.[selectedImage] || product.name;

  return (
    <div className="lg:col-span-2">
      {/* === メイン画像表示 === */}
      <div className="mb-4 bg-white rounded-lg overflow-hidden border border-gray-200">
        <div className="relative pb-[100%]">
          {mainImageSrc ? (
            <img
              key={selectedImage}
              {...getImageWithFallback(mainImageSrc, selectedImage)}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt={mainImageAlt || 'Product image'}
            />
          ) : (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
          )}
        </div>
      </div>

      {/* === サムネイル表示 === */}
      <div className="grid grid-cols-3 gap-2">
        {product.images && product.images.map((image, index) => {
          // ★ 最適化altテキストを取得（オーバーレイとalt属性で使用）
          const optimizedAltText = product.optimizedImageAlts?.[index] || '';
          const standardAltText = product.imageAlts?.[index] || `View ${index + 1}`;
          const currentAltText = isOptimized ? optimizedAltText : standardAltText;

          return (
            <button
              key={index}
              className={getThumbnailButtonClasses(index)}
              onClick={() => setSelectedImage(index)}
              aria-label={`View image ${index + 1}`} // アクセシビリティ向上
            >
              {/* 最適化ONの時だけアイコンを表示 (位置修正済み) */}
              {isOptimized && (
                <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-0.5 text-white opacity-90 z-10" aria-hidden="true">
                  <Info className="h-3.5 w-3.5" />
                </div>
              )}

              {/* サムネイル画像とオーバーレイのコンテナ */}
              {/* ↓↓↓ divにクラス thumbnail-container を追加 ↓↓↓ */}
              <div className="relative pb-[100%] thumbnail-container">
                {image ? (
                   <img
                     {...getImageWithFallback(image, index)}
                     className="absolute top-0 left-0 w-full h-full object-cover"
                     alt={currentAltText} // isOptimized に応じたaltを設定
                   />
                 ) : (
                   <div className="absolute top-0 left-0 w-full h-full bg-gray-100"></div>
                 )}
                {/* ↓↓↓ 最適化ONの時だけオーバーレイ span を追加 ↓↓↓ */}
                {isOptimized && optimizedAltText && (
                  <span className="thumbnail-overlay">
                    {optimizedAltText} {/* 最適化altテキストを表示 */}
                  </span>
                )}
                {/* ↑↑↑ オーバーレイ span を追加 ↑↑↑ */}
              </div>

              {/* 最適化ONの時だけツールチップ用 span を表示 (変更なし) */}
              {isOptimized && (
                <span className="tooltip top-0 left-1/2 -translate-x-1/2 -translate-y-full">
                  {getTooltipText()}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;