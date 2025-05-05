import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import { useAIOptimization } from '../contexts/AIOptimizationContext';
import { useLocalization } from '../contexts/LocalizationContext';

const AllProductsPage: React.FC = () => {
  const { isOptimized } = useAIOptimization();
  const { t } = useLocalization();
  
  return (
    <>
      <Helmet>
        <title>{t('all_products.meta.title', 'All Products - AIO Shop Demo')}</title>
        <meta 
          name="description" 
          content={t('all_products.meta.description', 'Browse all our AI-optimized products showcasing best practices for AI discoverability.')}
        />
      </Helmet>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('all_products.hero.headline', 'EC Site Demo Products')}</h1>
            <p className="text-xl text-blue-100">
              {t('all_products.hero.subheadline', 'Browse our showcase of AI-optimized product pages')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id}
              className="group block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={isOptimized ? product.optimizedImageAlt : product.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-3">
                  <h2 className="text-sm md:text-base font-semibold mb-1 group-hover:text-blue-600 transition-colors line-clamp-2 h-12">
                    {product.name}
                  </h2>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-gray-900">¥{product.price.toLocaleString()}</span>
                    <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {product.rating} ★
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProductsPage;