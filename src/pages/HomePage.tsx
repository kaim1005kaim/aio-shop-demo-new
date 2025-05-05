import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
// ★ 削除: import CategoryHighlights from '../components/home/CategoryHighlights';
import { useLocalization } from '../contexts/LocalizationContext';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <>
      <Helmet>
        <title>{t('homepage.meta.title', 'AIO Shop - AI Recommendation Optimized Demo Store')}</title>
        <meta
          name="description"
          content={t('homepage.meta.description', 'Discover how to structure your online store for optimal AI recommendations and visibility with our interactive demo.')}
        />
      </Helmet>

      <Hero />
      <FeaturedProducts />
      {/* ★ 削除: <CategoryHighlights /> */}

      {/* Why AI Optimization Matters セクションは残す */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('homepage.why_optimize.headline', 'Why AI Optimization Matters')}</h2>
            <p className="text-xl text-gray-600">
              {t('homepage.why_optimize.subheadline', 'As AI shopping assistants become mainstream...')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Point 1 */}
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('homepage.why_optimize.point1.title', 'Increased Visibility')}</h3>
              <p className="text-gray-600">
                {t('homepage.why_optimize.point1.text', 'AI-optimized products are more likely...')}
              </p>
            </div>
            {/* Point 2 */}
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('homepage.why_optimize.point2.title', 'Better Conversions')}</h3>
              <p className="text-gray-600">
                {t('homepage.why_optimize.point2.text', 'When AI understands your products...')}
              </p>
            </div>
            {/* Point 3 */}
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('homepage.why_optimize.point3.title', 'Future-Proof Sales')}</h3>
              <p className="text-gray-600">
                {t('homepage.why_optimize.point3.text', 'As voice and AI shopping grows...')}
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/tech-explanation"
              className="inline-flex px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('homepage.why_optimize.button', 'Learn How It Works')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;