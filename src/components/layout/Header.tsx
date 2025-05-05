import React from 'react';
import { Link } from 'react-router-dom';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { useLocalization } from '../../contexts/LocalizationContext';
import { categories } from '../../data/categories'; // カテゴリデータをインポート

const Header: React.FC = () => {
  const { isOptimized, toggleOptimization } = useAIOptimization();
  const { t, locale, setLocale } = useLocalization();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50"> {/* sticky top-0 z-50 を追加 */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-blue-600 font-bold text-xl">
            {t('site_name', 'AIO Shop Demo')}
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('home', 'ホーム')}
            </Link>
            {/* ★ 修正: ECサイトデモのリンク先 */}
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
               {t('ec_demo', 'ECサイトデモ')}
             </Link>
            <Link to="/tech-explanation" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('tech_explanation', '技術解説')}
            </Link>
            <Link to="/diagnostic-tool" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('diagnostic_tool', '診断ツール')}
            </Link>
            {/* カテゴリリンクが必要な場合はここに追加 */}
            {/* {categories.map(category => (
              <Link key={category.id} to={`/category/${category.id}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                {t(`category.${category.id}.name`)}
              </Link>
            ))} */}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="text-sm flex items-center">
              <span className="mr-2 text-gray-600">{t('language_selector.label', '言語')}:</span>
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm" // text-sm追加
              >
                <option value="ja">日本語</option>
                <option value="en">English</option>
              </select>
            </div>

            <button
              onClick={() => toggleOptimization(!isOptimized)} // ★ クリックで状態反転
              className={`px-3 py-1.5 rounded-md text-sm ${
                isOptimized
                  ? 'bg-blue-600 text-white hover:bg-blue-700' // hover効果追加
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300' // hover効果追加
              }`}
            >
              {isOptimized ? t('optimization.on', 'AI最適化: ON') : t('optimization.off', 'AI最適化: OFF')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;