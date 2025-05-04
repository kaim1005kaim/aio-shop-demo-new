// src/components/layout/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { useLocalization } from '../../contexts/LocalizationContext';

const Header: React.FC = () => {
  const { isOptimized, toggleOptimization } = useAIOptimization();
  const { t, locale, setLocale } = useLocalization();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-blue-600 font-bold text-xl">
            {t('site_name')}
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              {t('home')}
            </Link>
            <Link to="/category/beauty" className="text-gray-700 hover:text-blue-600">
              {t('beauty')}
            </Link>
            <Link to="/category/electronics" className="text-gray-700 hover:text-blue-600">
              {t('electronics')}
            </Link>
            <Link to="/category/fashion" className="text-gray-700 hover:text-blue-600">
              {t('fashion')}
            </Link>
            <Link to="/tech-explanation" className="text-gray-700 hover:text-blue-600">
              {t('tech_explanation')}
            </Link>
            <Link to="/diagnostic-tool" className="text-gray-700 hover:text-blue-600">
              {t('diagnostic_tool')}
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm flex items-center">
              <span className="mr-2 text-gray-600">言語:</span>
              <select 
                value={locale}
                onChange={(e) => setLocale(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1"
              >
                <option value="ja">日本語</option>
                <option value="en">English</option>
              </select>
            </div>
            
            <button
              onClick={toggleOptimization}
              className={`px-3 py-1.5 rounded-md text-sm ${
                isOptimized 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {isOptimized ? 'AI最適化: ON' : 'AI最適化: OFF'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
