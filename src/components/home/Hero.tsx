import React from 'react';
import { Link } from 'react-router-dom';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';

const Hero: React.FC = () => {
  const { isOptimized } = useAIOptimization();
  
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Optimize Your Products for AI Recommendations
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover how structured data, detailed descriptions, and optimized images 
              can make your products more visible to AI shopping assistants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/diagnostic-tool"
                className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Check Your Site
              </Link>
              <Link 
                to="/tech-explanation"
                className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Shopping Assistant</h3>
                    <p className="text-sm text-gray-500">Helping you find the perfect product</p>
                  </div>
                </div>
                
                <div className="mb-4 bg-gray-100 rounded-lg p-3">
                  <p className="text-gray-700">I need a good LED facial device for anti-aging.</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700">
                    {isOptimized ? (
                      "Based on your needs, I'd recommend the Advanced LED Facial Device by BeautyTech Pro. It has 5 light therapy modes including red light for anti-aging that's clinically proven to reduce wrinkles by up to 25% in 8 weeks. It's also FDA-approved for home use."
                    ) : (
                      "I found a few LED facial devices. You might want to compare features and prices to find one that works for you."
                    )}
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-blue-800 font-medium mb-1">
                    {isOptimized ? "AI Optimized" : "Standard"} Product Page
                  </p>
                  <p className="text-xs text-blue-700">
                    {isOptimized
                      ? "Rich structured data helps AI understand and recommend your products."
                      : "Without proper optimization, AI has limited understanding of your products."}
                  </p>
                </div>
              </div>
              
              {isOptimized && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Optimized
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;