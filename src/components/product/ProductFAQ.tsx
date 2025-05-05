import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import { useLocalization } from '../../contexts/LocalizationContext'; // ★ インポート

const ProductFAQ: React.FC<ProductFAQProps> = ({ product }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { isOptimized } = useAIOptimization();
  const { t } = useLocalization(); // ★ t 関数を取得

  if (!product || (!product.faqs && !product.optimizedFaqs)) {
    return null;
  }
  const faqs = isOptimized ? (product.optimizedFaqs || product.faqs || []) : (product.faqs || []);
  if (faqs.length === 0) {
    return null;
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-10">
      {/* ↓↓↓ h2 タグを t() で修正 ↓↓↓ */}
      <h2 className="text-2xl font-bold mb-6">{t('product.faq.title', 'Frequently Asked Questions')}</h2>
      {/* ↑↑↑ h2 タグを t() で修正 ↑↑↑ */}

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          faq && faq.question && faq.answer ? (
             <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
               <button
                 className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                 onClick={() => toggleFAQ(index)}
                 aria-expanded={openIndex === index}
                 aria-controls={`faq-answer-${index}`}
               >
                 <span className="font-medium">{faq.question}</span>
                 <span>
                   {openIndex === index ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                 </span>
               </button>
               {openIndex === index && (
                 <div id={`faq-answer-${index}`} className="p-4 border-t border-gray-200 bg-gray-50">
                   <p className="text-gray-700 whitespace-pre-wrap">{faq.answer}</p>
                 </div>
               )}
             </div>
           ) : null
        ))}
      </div>
    </div>
  );
};

export default ProductFAQ;