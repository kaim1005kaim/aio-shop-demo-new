import React from 'react';
import { Link } from 'react-router-dom';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { useLocalization } from '../../contexts/LocalizationContext';

const Hero: React.FC = () => {
  const { isOptimized } = useAIOptimization();
  const { t } = useLocalization();

  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('hero.main_headline', 'Webの主語が"人"から"AI"へ変わる時代、はじまっています。')}
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            {t('hero.main_subheadline', 'AIが情報を選ぶ今、必要なのはAIO（AI Optimization）。')}
          </p>
          <p className="text-xl text-blue-100 mb-8">
            {t('hero.proposition', 'あなたの商材がAIに「見つけられ」「推薦され」「語られる」ためのページ、設計しませんか？')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-blue-800 bg-opacity-50 px-6 py-4 rounded-lg">
              <p className="text-lg font-medium text-white">
                {t('hero.feature1', '✅ 構造化データ × 意味タグ × 質問設計')}
              </p>
            </div>
            <div className="bg-blue-800 bg-opacity-50 px-6 py-4 rounded-lg">
              <p className="text-lg font-medium text-white">
                {t('hero.feature2', '✅ EC、観光、映画PRなど、様々な分野で生かせます')}
              </p>
            </div>
            <div className="bg-blue-800 bg-opacity-50 px-6 py-4 rounded-lg">
              <p className="text-lg font-medium text-white">
                {t('hero.feature3', '✅ 導入も制作も、個人レベルからOK')}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/products"
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t('hero.cta_button1', '🔹 今すぐデモを見る')}
            </Link>
            <Link
              to="/tech-explanation"
              className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              {t('hero.cta_button2', '🔹 AIOとは？')}
            </Link>
          </div>
        </div>
        
        {/* AIOの簡単定義ボックス */}
        <div className="max-w-3xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            {t('hero.aio_box.title', 'AIO（AI Optimization）とは？')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('hero.aio_box.description', 'AIレコメンド時代に最適化された情報構造・意味設計のこと。単なるSEOではなく、AIが「理解しやすく」「紹介しやすい」状態にWebを整える新しいPRの在り方です。')}
          </p>
        </div>

        {/* AIアシスタントデモ部分 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('hero.headline', 'Optimize Your Products for AI Recommendations')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('hero.subheadline', 'Discover how structured data, detailed descriptions, and optimized images can make your products more visible to AI shopping assistants.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/diagnostic-tool"
                className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                {t('hero.button1', 'Check Your Site')}
              </Link>
              <Link
                to="/tech-explanation"
                className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                {t('hero.button2', 'Learn How It Works')}
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 max-w-md text-gray-900">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('hero.assistant.title', 'AI Shopping Assistant')}</h3>
                    <p className="text-sm text-gray-500">{t('hero.assistant.subtitle', 'Helping you find the perfect product')}</p>
                  </div>
                </div>

                <div className="mb-4 bg-gray-100 rounded-lg p-3">
                  <p className="text-gray-700">{t('hero.assistant.query', 'I need a good LED facial device for anti-aging.')}</p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700">
                    {isOptimized ? (
                      t('hero.assistant.response_optimized', "Based on your needs, I'd recommend the Advanced LED Facial Device...")
                    ) : (
                      t('hero.assistant.response_standard', "I found a few LED facial devices...")
                    )}
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-blue-800 font-medium mb-1">
                    {isOptimized
                      ? t('hero.assistant.panel.title_optimized', "AI Optimized Product Page")
                      : t('hero.assistant.panel.title_standard', "Standard Product Page")
                    }
                  </p>
                  <p className="text-xs text-blue-700">
                    {isOptimized
                      ? t('hero.assistant.panel.text_optimized', "Rich structured data helps AI understand...")
                      : t('hero.assistant.panel.text_standard', "Without proper optimization, AI has limited understanding...")
                    }
                  </p>
                </div>
              </div>

              {isOptimized && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {t('hero.assistant.panel.badge', 'Optimized')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;