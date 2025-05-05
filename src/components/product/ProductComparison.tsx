import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import { useLocalization } from '../../contexts/LocalizationContext'; // ★ インポート

interface ProductComparisonProps {
  currentProduct?: Product;
}

const ProductComparison: React.FC<ProductComparisonProps> = ({ currentProduct }) => {
  const { isOptimized } = useAIOptimization();
  const { t } = useLocalization(); // ★ t 関数を取得

  // Mock comparison data (内容はまだハードコード)
  // TODO: データ自体も翻訳キー化する場合は localization.ts に追加し、ここで t() を使う
  const comparisonData = [
    { feature: 'Feature Support', current: 'Full coverage of key features', competitors: 'Often missing important details' },
    { feature: 'Detail Level', current: 'Comprehensive details with measurements', competitors: 'Basic information only' },
    { feature: 'Image Optimization', current: 'Detailed alt text for all images', competitors: 'Generic or missing alt text' },
    { feature: 'FAQ Content', current: 'Comprehensive Q&A addressing main concerns', competitors: 'Limited or no FAQ section' },
    { feature: 'Structured Data', current: 'Complete JSON-LD implementation', competitors: 'Minimal or no structured data' }
  ];

  return (
    <div className="mb-10">
      {/* ↓↓↓ h2 タグを t() で修正 ↓↓↓ */}
      <h2 className="text-2xl font-bold mb-6">{t('product.comparison.title', 'How Our Products Compare')}</h2>
      {/* ↑↑↑ h2 タグを t() で修正 ↑↑↑ */}

      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {/* ↓↓↓ th タグを t() で修正 ↓↓↓ */}
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('product.comparison.header.feature', 'Feature')}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('product.comparison.header.our_products', 'Our Products')}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('product.comparison.header.competitors', 'Competitor Products')}
              </th>
              {/* ↑↑↑ th タグを t() で修正 ↑↑↑ */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {comparisonData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                   {/* TODO: データ自体も翻訳キー化する場合 */}
                  {item.feature}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span className="flex items-center">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                     {/* TODO: データ自体も翻訳キー化する場合 */}
                    {item.current}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span className="flex items-center">
                    <span className="h-2 w-2 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                     {/* TODO: データ自体も翻訳キー化する場合 */}
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