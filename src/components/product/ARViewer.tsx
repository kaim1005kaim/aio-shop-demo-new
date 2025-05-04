// src/components/product/ARViewer.tsx

import React, { useState } from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';

interface ARViewerProps {
  product: Product;
}

const ARViewer: React.FC<ARViewerProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // 最適化されていない場合は表示しない
  if (!isOptimized) {
    return null;
  }

  // QRコードの画像URL（実際には適切なQRコードジェネレーターAPIを使用）
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://aioshop.example/ar/${product.id}`;
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-xl">ARで商品を体験</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 text-sm flex items-center"
        >
          {isExpanded ? '閉じる' : '詳細を表示'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        スマートフォンでQRコードをスキャンするか、ボタンをクリックしてAR体験を開始します。
        実際の空間に商品を配置して、あらゆる角度から確認できます。
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center">
          <div className="w-32 h-32 mb-2">
            <img 
              src={qrCodeUrl} 
              alt={`${product.name}のAR体験用QRコード`}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xs text-gray-500">QRコードをスキャン</span>
        </div>
        
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          ARで見る
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-6 pt-4 border-t border-gray-200 animate-fadeIn">
          <h4 className="font-medium mb-3">AR体験の特徴</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>実際のサイズ感を確認できます</li>
            <li>360°回転して全方向から商品を見ることができます</li>
            <li>ズームインして細部まで確認できます</li>
            <li>部屋の中での見え方をシミュレーションできます</li>
            <li>友達や家族と共有して意見を求めることができます</li>
          </ul>
          
          <div className="mt-4 bg-blue-50 p-3 rounded-md text-xs text-blue-800">
            <p>
              <span className="font-bold">注意：</span> AR体験をお楽しみいただくには、ARKit（iOS 12以上）または
              ARCore（Android 8.0以上）対応のデバイスが必要です。
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ARViewer;

// スタイル用のアニメーションをindex.cssに追加
/* 
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}
*/
