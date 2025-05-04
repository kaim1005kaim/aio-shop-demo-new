import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import AIHighlight from './AIHighlight';

const ProductComparison: React.FC = () => {
  const { isOptimized } = useAIOptimization();
  
  // Mock comparison data
  const comparisonData = [
    {
      feature: 'Feature Support',
      current: 'Full coverage of key features',
      competitors: 'Often missing important details'
    },
    {
      feature: 'Detail Level',
      current: 'Comprehensive details with measurements',
      competitors: 'Basic information only'
    },
    {
      feature: 'Image Optimization',
      current: 'Detailed alt text for all images',
      competitors: 'Generic or missing alt text'
    },
    {
      feature: 'FAQ Content',
      current: 'Comprehensive Q&A addressing main concerns',
      competitors: 'Limited or no FAQ section'
    },
    {
      feature: 'Structured Data',
      current: 'Complete JSON-LD implementation',
      competitors: 'Minimal or no structured data'
    }
  ];

  return (
    <AIHighlight active={isOptimized} tooltip="Comparative information that helps AI understand product positioning">
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">How Our Products Compare</h2>
        
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Our Products
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Competitor Products
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.feature}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <span className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      {item.current}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <span className="flex items-center">
                      <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                      {item.competitors}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AIHighlight>
  );
};

export default ProductComparison;