// src/components/product/SuggestedPrompts.tsx

import React, { useState } from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';

interface SuggestedPromptsProps {
  product: Product;
}

const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // 最適化されていない場合は表示しない
  if (!isOptimized) {
    return null;
  }

  // 商品に基づいた推薦プロンプトを生成
  const generatePrompts = (product: Product): string[] => {
    const firstFeature = product.optimizedFeatures[0].split('、')[0];
    const firstSpec = Object.entries(product.specs)[0];
    
    return [
      `最高の${product.category.name}製品を教えてください`,
      `${firstFeature}の${product.category.name}はありますか？`,
      `${product.category.name}で${firstSpec[0]}が${firstSpec[1]}の商品を探しています`,
      `${product.optimizedFaqs[0].question.replace('？', '')}について教えてください`,
      `${product.brand}の評判が良い${product.category.name}を探しています`,
    ];
  };

  const prompts = generatePrompts(product);

  // クリップボードにコピーする関数
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch(err => {
        console.error('クリップボードへのコピーに失敗しました:', err);
      });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
      <h3 className="font-bold text-xl mb-4">このような質問でAIに聞くと、この商品が推薦されます</h3>
      <p className="text-sm text-gray-600 mb-4">
        以下のプロンプトは、AIアシスタントがこの商品を推薦する可能性の高い質問例です。ボタンをクリックしてコピーし、お好みのAIアシスタントで試してみてください。
      </p>
      
      <div className="space-y-3">
        {prompts.map((prompt, i) => (
          <div key={i} className="bg-white p-4 rounded-md border border-gray-200 flex items-center">
            <span className="text-gray-400 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </span>
            <p className="flex-grow text-gray-700">{prompt}</p>
            <button
              onClick={() => copyToClipboard(prompt, i)}
              className={`ml-auto px-3 py-1 rounded text-sm ${
                copiedIndex === i 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
            >
              {copiedIndex === i ? 'コピーしました' : 'コピー'}
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-medium mb-2">なぜこれらのプロンプトが効果的なのか？</h4>
        <p className="text-sm text-gray-600">
          これらのプロンプトは、商品の主要特徴、カテゴリ、ブランド、具体的な仕様などの重要なキーワードを含んでいます。
          構造化されたデータと詳細な商品情報により、AIアシスタントはこれらの質問に対して正確かつ関連性の高い回答として
          この商品を推薦できます。
        </p>
      </div>
    </div>
  );
};

export default SuggestedPrompts;
