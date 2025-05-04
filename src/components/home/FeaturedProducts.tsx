import React from 'react';
import { Link } from 'react-router-dom';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { products } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const { isOptimized } = useAIOptimization();
  
  // Get featured products (one from each category)
  const featuredProducts = products.filter((product, index) => index % 2 === 0).slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our showcase of AI-optimized product pages that demonstrate best practices for product visibility.
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
                  src={product.images[0]} 
                  alt={isOptimized ? product.optimizedImageAlt : product.name}
                  className="object-cover w-full h-64"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {product.rating} ★
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {isOptimized ? product.optimizedShortDescription : product.shortDescription}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">{product.brand}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/category/beauty"
            className="inline-flex px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;