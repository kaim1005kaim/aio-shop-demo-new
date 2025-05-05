import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../../contexts/LocalizationContext';

const Hero: React.FC = () => {
  const { t } = useLocalization();

  return (
    <>
      {/* New LP Style Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {t('hero.main_headline', 'Webの主語が"人"から"AI"へ変わる時代、はじまっています。')}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-100 mb-6">
            {t('hero.main_subheadline', 'AIが情報を選ぶ今、必要なのはAIO（AI Optimization）。')}
          </h2>
          <p className="text-lg md:text-xl text-blue-50 mb-8">
            {t('hero.proposition', 'あなたの商材がAIに「見つけられ」「推薦され」「語られる」ためのページ、設計しませんか？')}
          </p>

          {/* Feature List */}
          <ul className="space-y-2 text-lg mb-10 inline-block text-left">
            <li>{t('hero.feature1', '✅ 構造化データ × 意味タグ × 質問設計')}</li>
            <li>{t('hero.feature2', '✅ EC、観光、映画PRなど、実績多数')}</li>
            <li>{t('hero.feature3', '✅ 導入も制作も、個人レベルからOK')}</li>
          </ul>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              // ★ 修正: 「今すぐデモを見る」ボタンのリンク先
              to="/products"
              className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg shadow-md"
            >
              {t('hero.cta_button1', '🔹 今すぐデモを見る')}
            </Link>
            {/* ★ 削除: 「AIOとは？」ボタンを削除 */}
            {/*
            <Link
              to="/tech-explanation" // AIOとは？のリンク先
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-lg"
            >
              {t('hero.cta_button2', '🔹 AIOとは？')}
            </Link>
            */}
          </div>
        </div>
      </div>

      {/* AIO Explanation Box */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow">
             <h3 className="text-xl font-semibold text-blue-800 mb-3">
               {t('hero.aio_box.title', 'AIO（AI Optimization）とは？')}
             </h3>
             <p className="text-gray-700">
               {t('hero.aio_box.description', 'AIレコメンド時代に最適化された情報構造・意味設計のこと。単なるSEOではなく、AIが「理解しやすく」「紹介しやすい」状態にWebを整える新しいPRの在り方です。')}
             </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;