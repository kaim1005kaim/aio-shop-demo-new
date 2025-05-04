import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import AIHighlight from './AIHighlight';

interface ProductFAQProps {
  product: Product;
}

const ProductFAQ: React.FC<ProductFAQProps> = ({ product }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { isOptimized } = useAIOptimization();
  
  const faqs = isOptimized ? product.optimizedFaqs : product.faqs;
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <AIHighlight active={isOptimized} tooltip="Structured FAQ content with schema markup">
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AIHighlight>
  );
};

export default ProductFAQ;