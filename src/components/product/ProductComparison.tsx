import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
// ★ 削除: import AIHighlight from './AIHighlight'; // 不要になったので削除
import { Product } from '../../types/product'; // Product 型をインポート (HomePageからの呼び出し方に合わせる)

// ★ 追加: useLocalization をインポート (翻訳時に必要)
import { useLocalization } from '../../contexts/LocalizationContext';

// ★ 修正: HomePage から渡される props を受け取る (オプションにする)
interface ProductComparisonProps {
  currentProduct?: Product; // 必須ではないかもしれないので optional '?'
}

// ★ 修正: props を受け取るように変更
const ProductComparison: React.FC<ProductComparisonProps> = ({ currentProduct }) => {
  const { isOptimized } = useAIOptimization();
  // ★ 追加: t 関数を取得 (翻訳時に必要)
  const { t } = useLocalization();

  // Mock comparison data - ★ TODO: このデータも翻訳キーを使うように変更が必要
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
    // Add more comparison points if needed
  ];

  // ★ 修正: AIHighlight ラッパーを削除
  return (
    <div className="mb-10">
       {/* ★ TODO: 見出しを t() で翻訳 */}
      <h2 className="text-2xl font-bold mb-6">How Our Products Compare</h2>

      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md"> {/* スタイル調整 */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 {/* ★ TODO: t() で翻訳 */}
                Feature
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 {/* ★ TODO: t() で翻訳 (例: t('product.comparison.our_products')) */}
                Our Products {/* (Or specific product name if currentProduct is used) */}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 {/* ★ TODO: t() で翻訳 */}
                Competitor Products
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {comparisonData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}> {/* 行ごとに背景色変更 */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                   {/* ★ TODO: t() で翻訳 */}
                  {item.feature}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span className="flex items-center">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span> {/* アイコンが縮まないように */}
                    {/* ★ TODO: t() で翻訳 */}
                    {item.current}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span className="flex items-center">
                    <span className="h-2 w-2 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                    {/* ★ TODO: t() で翻訳 */}
                    {item.competitors}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductComparison;