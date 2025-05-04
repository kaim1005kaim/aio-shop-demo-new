import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useAIOptimization } from '../contexts/AIOptimizationContext';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { isOptimized } = useAIOptimization();
  
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    return <div className="container mx-auto px-4 py-16">Category not found</div>;
  }
  
  const categoryProducts = products.filter(product => product.categoryId === categoryId); // ★ .category を削除し、categoryId を直接比較

  return (
    <>
      <Helmet>
        <title>
          {isOptimized 
            ? `${category.name} Products | High-Quality ${category.name} | AIO Shop`
            : `${category.name} - AIO Shop`
          }
        </title>
        <meta 
          name="description" 
          content={isOptimized
            ? `Shop our collection of premium ${category.name.toLowerCase()} products. Find the best ${category.name.toLowerCase()} options with detailed information and AI-optimized product pages.`
            : `${category.name} products available at AIO Shop.`
          }
        />
      </Helmet>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { name: category.name, path: `/category/${category.id}` }
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">{category.name}</h1>
            <p className="text-xl text-blue-100">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map(product => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img 
                    src={product.images[0]} 
                    alt={isOptimized ? product.optimizedImageAlt : product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h2>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    {isOptimized ? product.optimizedShortDescription : product.shortDescription}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
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

export default CategoryPage;