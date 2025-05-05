import React, { useState } from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import { Info } from 'lucide-react'; // Info アイコンは引き続き使用

// 画像のフォールバック機能 (変更なし)
const getImageWithFallback = (url: string, index: number) => {
  const fallbackUrl = `https://source.unsplash.com/random/800x800/?product,${index}`;
  return {
    src: url || fallbackUrl, // urlが空の場合も考慮
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== fallbackUrl) {
        console.warn('画像の読み込みに失敗しました。代替画像を使用します。 URL:', url);
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

  // サムネイルボタンに適用するクラスを動的に生成する関数
  const getThumbnailButtonClasses = (index: number): string => {
    let baseClasses = "bg-white rounded-lg overflow-hidden border";
    let borderClass = selectedImage === index ? 'border-blue-500' : 'border-gray-200';
    let highlightClasses = "";

    // ★ isOptimized が true の場合にハイライト用のクラスを追加
    if (isOptimized) {
      // group: ツールチップ表示用, relative: アイコン/ツールチップ配置用
      // ai-highlight-active: 青い枠線用 (CSSで定義されている想定)
      highlightClasses = "group relative ai-highlight ai-highlight-active";
    }

    return `${baseClasses} ${borderClass} ${highlightClasses}`;
  };

  // ツールチップのテキストを取得する関数
  const getTooltipText = (): string => {
    // ★ 翻訳キーを使う場合は t() 関数をここで使う
    // const { t } = useLocalization(); // 必要ならインポート
    // return isOptimized ? t('tooltip.optimized_alt', "最適化されたalt属性") : t('tooltip.basic_alt', "基本的なalt属性");
    return isOptimized ? "最適化されたalt属性" : "基本的なalt属性"; // とりあえずハードコード
  };

  // メイン画像、altテキストの取得 (存在しない場合を考慮)
  const mainImageSrc = product.images?.[selectedImage];
  const mainImageAlt = isOptimized
    ? product.optimizedImageAlts?.[selectedImage] || product.name
    : product.imageAlts?.[selectedImage] || product.name;

  return (
    <div className="lg:col-span-2">
      {/* === メイン画像表示 === */}
      <div className="mb-4 bg-white rounded-lg overflow-hidden border border-gray-200">
        <div className="relative pb-[100%]"> {/* 1:1 アスペクト比 */}
          {mainImageSrc ? (
            <img
              key={selectedImage} // selectedImage が変わったら img を強制再描画
              {...getImageWithFallback(mainImageSrc, selectedImage)}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt={mainImageAlt || 'Product image'}
            />
          ) : (
            // 画像がない場合のプレースホルダー
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
          )}
        </div>
      </div>

      {/* === サムネイル表示 === */}
      <div className="grid grid-cols-3 gap-2">
        {product.images && product.images.map((image, index) => {
          // サムネイル用 alt テキスト
          const thumbAlt = isOptimized
            ? product.optimizedImageAlts?.[index] || `Optimized View ${index + 1}`
            : product.imageAlts?.[index] || `View ${index + 1}`;

          return (
            // ★ ラップせず、button に直接クラスと要素を追加
            <button
              key={index}
              className={getThumbnailButtonClasses(index)} // 動的にクラスを設定
              onClick={() => setSelectedImage(index)}
            >
              {/* ★ 最適化ONの時だけアイコンを表示 */}
              {isOptimized && (
                <div className="absolute -top-1.5 -right-1.5 bg-blue-500 rounded-full p-0.5 text-white opacity-90 z-10" aria-hidden="true">
                  <Info className="h-3.5 w-3.5" />
                </div>
              )}

              {/* サムネイル画像 (アスペクト比維持) */}
              <div className="relative pb-[100%]">
                {image ? (
                   <img
                     {...getImageWithFallback(image, index)}
                     className="absolute top-0 left-0 w-full h-full object-cover"
                     alt={thumbAlt}
                   />
                 ) : (
                   <div className="absolute top-0 left-0 w-full h-full bg-gray-100"></div> // 画像URLがない場合のプレースホルダー
                 )}
              </div>

              {/* ★ 最適化ONの時だけツールチップ用 span を表示 */}
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