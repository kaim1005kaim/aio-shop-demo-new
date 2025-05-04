import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { useLocalization } from '../../contexts/LocalizationContext'; // ★ インポート

const CategoryHighlights: React.FC = () => {
  const { t } = useLocalization(); // ★ t 関数を取得

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* ★ t 関数を使用 */}
          <h2 className="text-3xl font-bold mb-4">{t('categories.headline', 'Browse Categories')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {/* ★ t 関数を使用 */}
            {t('categories.subheadline', 'Explore our product categories, each optimized for AI discoverability and recommendation.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.imageUrl}
                  // ★ altテキストも翻訳 (カテゴリ名を使用)
                  alt={t('category.alt_text', '{categoryName} category featuring optimized products', { categoryName: t(category.nameKey) })}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { // 画像読み込み失敗時の処理 (オプション)
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/placeholder.jpg'; // 代替画像パス
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                {/* ★ カテゴリ名を翻訳 */}
                <h3 className="text-white text-xl font-bold mb-2">{t(category.nameKey)}</h3>
                {/* ★ カテゴリ説明を翻訳 */}
                <p className="text-white/80 text-sm line-clamp-2">{t(category.descriptionKey)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;