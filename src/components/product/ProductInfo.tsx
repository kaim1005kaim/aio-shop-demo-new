import React from 'react';
import { Star, Truck, CheckCircle, HelpCircle } from 'lucide-react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import AIHighlight from './AIHighlight';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  
  const {
    name,
    price,
    rating,
    description,
    optimizedDescription,
    features,
    optimizedFeatures,
    specs,
  } = product;

  const displayDescription = isOptimized ? optimizedDescription : description;
  const displayFeatures = isOptimized ? optimizedFeatures : features;

  return (
    <div className="lg:col-span-2 p-1">
      <AIHighlight active={isOptimized} tooltip="Optimized H1 title tag">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          {name}
        </h1>
      </AIHighlight>

      <div className="flex items-center mb-4">
        <div className="flex items-center mr-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600 mr-4">({rating})</span>
        <span className="text-sm text-blue-600">24 reviews</span>
      </div>

      <AIHighlight active={isOptimized} tooltip="Optimized product description with key benefits">
        <div className="mb-6">
          <p className="text-gray-700 mb-4">{displayDescription}</p>
        </div>
      </AIHighlight>

      <div className="mb-6">
        <div className="flex items-baseline mb-2">
          <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">${(price * 1.2).toFixed(2)}</span>
          <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
            20% OFF
          </span>
        </div>
        <p className="text-sm text-gray-500">Free shipping on orders over $50</p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center text-green-600">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>In stock and ready to ship</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Truck className="h-5 w-5 mr-2" />
          <span>Free delivery arrives by Friday</span>
        </div>
      </div>

      <AIHighlight active={isOptimized} tooltip="Structured key features list">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2">
            {displayFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </AIHighlight>

      <AIHighlight active={isOptimized} tooltip="Structured specifications table">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Specifications</h3>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                {Object.entries(specs).map(([key, value]) => (
                  <tr key={key}>
                    <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-600 w-1/3">{key}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AIHighlight>

      <div className="mb-4">
        <button className="w-full sm:w-auto mb-3 sm:mb-0 sm:mr-3 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors">
          Add to Cart
        </button>
        <button className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-colors">
          Save for Later
        </button>
      </div>

      <div className="flex items-center text-sm text-gray-600 mt-6">
        <HelpCircle className="h-4 w-4 mr-1" />
        <span>Have a question about this product? <a href="#" className="text-blue-600 hover:underline">Contact us</a></span>
      </div>
    </div>
  );
};

export default ProductInfo;