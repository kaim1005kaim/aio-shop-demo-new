import React from 'react';
import { Link } from 'react-router-dom';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { products } from '../../data/products';
import { useLocalization } from '../../contexts/LocalizationContext';
import { Product } from '../../types/product'; // Product型をインポート

const FeaturedProducts: React.FC = () => {
  const { isOptimized } = useAIOptimization();
  const { t } = useLocalization();

  // 例として最初の3つを取得
  const featuredProducts: Product[] = products.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('featured.headline', 'Featured Products')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featured.subheadline', 'Explore our showcase of AI-optimized product pages...')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={product.images?.[0] || '/images/placeholder.jpg'}
                  alt={isOptimized ? product.optimizedImageAlt || product.name : product.name || 'Product Image'}
                  className="object-cover w-full h-64"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/placeholder.jpg';
                    console.warn(`Failed to load image: ${product.images?.[0]}`);
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {product.name || ''}
                  </h3>
                  {typeof product.rating === 'number' && (
                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                       {product.rating.toFixed(1)} ★
                     </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4 h-16 overflow-hidden">
                  {isOptimized
                    ? product.optimizedShortDescription || product.shortDescription || ''
                    : product.shortDescription || ''
                  }
                </p>
                <div className="flex justify-between items-center">
                   {typeof product.price === 'number' ? (
                     <span className="text-2xl font-bold text-gray-900">¥{product.price.toLocaleString()}</span>
                   ) : (
                     <span className="text-2xl font-bold text-gray-900">-</span>
                   )}
                  <span className="text-sm text-gray-500">{product.brand || ''}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            // ★ 修正: リンク先を /products へ変更
            to="/products"
            className="inline-flex px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('featured.button_all', 'View All Products')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;