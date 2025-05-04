import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryHighlights from '../components/home/CategoryHighlights';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AIO Shop - AI Recommendation Optimized Demo Store</title>
        <meta 
          name="description" 
          content="Discover how to structure your online store for optimal AI recommendations and visibility with our interactive demo."
        />
      </Helmet>

      <Hero />
      <FeaturedProducts />
      <CategoryHighlights />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why AI Optimization Matters</h2>
            <p className="text-xl text-gray-600">
              As AI shopping assistants become mainstream, having AI-optimized product listings will be a key competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Increased Visibility</h3>
              <p className="text-gray-600">
                AI-optimized products are more likely to be recommended by AI shopping assistants.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Better Conversions</h3>
              <p className="text-gray-600">
                When AI understands your products, it can match them to the right customer needs.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Future-Proof Sales</h3>
              <p className="text-gray-600">
                As voice and AI shopping grows, optimized listings will maintain their competitive edge.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/tech-explanation" className="inline-flex px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Learn How It Works
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;