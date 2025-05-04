import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const CategoryHighlights: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our product categories, each optimized for AI discoverability and recommendation.
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
                  alt={`${category.name} category featuring optimized products`}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm line-clamp-2">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;