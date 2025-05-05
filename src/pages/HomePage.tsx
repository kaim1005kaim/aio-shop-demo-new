// src/pages/HomePage.tsx (修正後・全文)

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryHighlights from '../components/home/CategoryHighlights';
import { useLocalization } from '../contexts/LocalizationContext'; // ★ useLocalization をインポート

const HomePage: React.FC = () => {
  const { t } = useLocalization(); // ★ t 関数を取得

  return (
    <>
      <Helmet>
        {/* ★ t 関数を使用 */}
        <title>{t('homepage.meta.title', 'AIO Shop - AI Recommendation Optimized Demo Store')}</title>
        <meta
          name="description"
          // ★ t 関数を使用
          content={t('homepage.meta.description', 'Discover how to structure your online store...')}
        />
      </Helmet>

      {/* ↓これらのコンポーネント内部でも同様に t() を使う修正が必要です↓ */}
      <Hero />
      <FeaturedProducts />
      {/* ↑これらのコンポーネント内部でも同様に t() を使う修正が必要です↑ */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            {/* ★ t 関数を使用 */}
            <h2 className="text-3xl font-bold mb-4">{t('homepage.why_optimize.headline', 'Why AI Optimization Matters')}</h2>
            <p className="text-xl text-gray-600">
              {/* ★ t 関数を使用 */}
              {t('homepage.why_optimize.subheadline', 'As AI shopping assistants become mainstream...')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              {/* ★ t 関数を使用 */}
              <h3 className="text-xl font-semibold mb-2">{t('homepage.why_optimize.point1.title', 'Increased Visibility')}</h3>
              <p className="text-gray-600">
                {/* ★ t 関数を使用 */}
                {t('homepage.why_optimize.point1.text', 'AI-optimized products are more likely...')}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              {/* ★ t 関数を使用 */}
              <h3 className="text-xl font-semibold mb-2">{t('homepage.why_optimize.point2.title', 'Better Conversions')}</h3>
              <p className="text-gray-600">
                {/* ★ t 関数を使用 */}
                {t('homepage.why_optimize.point2.text', 'When AI understands your products...')}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              {/* ★ t 関数を使用 */}
              <h3 className="text-xl font-semibold mb-2">{t('homepage.why_optimize.point3.title', 'Future-Proof Sales')}</h3>
              <p className="text-gray-600">
                {/* ★ t 関数を使用 */}
                {t('homepage.why_optimize.point3.text', 'As voice and AI shopping grows...')}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            {/* 技術解説ページへのリンクなので、テキストは Header のキーを流用しても良いかも */}
            {/* もしくは、localization.ts の hero.button2 を使う */}
            <a href="/tech-explanation" className="inline-flex px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              {/* ★ t 関数を使用 */}
              {t('homepage.why_optimize.button', 'Learn How It Works')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;