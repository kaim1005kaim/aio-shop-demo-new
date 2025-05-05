// src/pages/HomePage.tsx (修正後・全文)

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryHighlights from '../components/home/CategoryHighlights';
import { useLocalization } from '../contexts/LocalizationContext';

const HomePage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <>
      <Helmet>
        <title>{t('homepage.meta.title', 'AIO Shop - AI Recommendation Optimized Demo Store')}</title>
        <meta
          name="description"
          content={t('homepage.meta.description', 'Discover how to structure your online store for AI recommendations with AIO Shop, a demo site showcasing AI Optimization techniques.')}
        />
      </Helmet>

      <Hero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('homepage.why_optimize.headline', 'Why AI Optimization Matters')}</h2>
            <p className="text-xl text-gray-600">
              {t('homepage.why_optimize.subheadline', 'As AI shopping assistants become mainstream, optimizing your content for AI understanding is crucial for business success.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('homepage.why_optimize.point1.title', 'Increased Visibility')}</h3>
              <p className="text-gray-600">
                {t('homepage.why_optimize.point1.text', 'AI-optimized products are more likely to be recommended by AI shopping assistants when users search for related items.')}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('homepage.why_optimize.point2.title', 'Better Conversions')}</h3>
              <p className="text-gray-600">
                {t('homepage.why_optimize.point2.text', 'When AI understands your products better, it can explain features and benefits more accurately to potential customers.')}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('homepage.why_optimize.point3.title', 'Future-Proof Sales')}</h3>
              <p className="text-gray-600">
                {t('homepage.why_optimize.point3.text', 'As voice and AI shopping grows, businesses that optimize for AI will gain a significant competitive advantage.')}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              {t('homepage.why_optimize.button', 'View Demo Store')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;