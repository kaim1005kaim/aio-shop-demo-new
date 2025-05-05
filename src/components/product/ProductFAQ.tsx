import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
// ★ 削除: import AIHighlight from './AIHighlight'; // 不要になったので削除
// ★ 追加の可能性: もし見出し等を翻訳するなら useLocalization をインポート
// import { useLocalization } from '../../contexts/LocalizationContext';

interface ProductFAQProps {
  product: Product;
}

const ProductFAQ: React.FC<ProductFAQProps> = ({ product }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Initially open the first FAQ
  const { isOptimized } = useAIOptimization();
  // ★ 追加の可能性: もし見出し等を翻訳するなら t 関数を取得
  // const { t } = useLocalization();

  // productデータやfaqs配列が存在しない場合のガードを追加
  if (!product || (!product.faqs && !product.optimizedFaqs)) {
    return null; // 何も表示しないか、"FAQはありません" 等のメッセージを表示
  }

  // isOptimized状態に応じて使用するFAQリストを選択
  // optimizedFaqs が存在しない場合は faqs を、それもなければ空配列を使用
  const faqs = isOptimized ? (product.optimizedFaqs || product.faqs || []) : (product.faqs || []);

  // FAQが空の場合も何も表示しない
  if (faqs.length === 0) {
    return null;
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ★ 修正: AIHighlight ラッパーを削除
  return (
    <div className="mb-10">
      {/* ↓ 見出しも翻訳する場合は t() を使う */}
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {/* <h2 className="text-2xl font-bold mb-6">{t('product.faq.title', 'Frequently Asked Questions')}</h2> */}

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          // faqオブジェクトとquestion/answerが存在するかチェック
          faq && faq.question && faq.answer ? (
             <div
               key={index}
               className="border border-gray-200 rounded-lg overflow-hidden"
             >
               <button
                 className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                 onClick={() => toggleFAQ(index)}
                 aria-expanded={openIndex === index} // アクセシビリティ向上
                 aria-controls={`faq-answer-${index}`} // アクセシビリティ向上
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
                 <div
                   id={`faq-answer-${index}`} // アクセシビリティ向上
                   className="p-4 border-t border-gray-200 bg-gray-50"
                 >
                   {/* 改行を反映させるために工夫が必要な場合がある */}
                   <p className="text-gray-700 whitespace-pre-wrap">{faq.answer}</p>
                 </div>
               )}
             </div>
           ) : null // 不正なFAQデータの場合は何も表示しない
        ))}
      </div>
    </div>
  );
};

export default ProductFAQ;