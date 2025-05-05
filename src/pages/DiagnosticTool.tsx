import React from 'react';
import { Helmet } from 'react-helmet-async';
import SiteChecker from '../components/diagnostic/SiteChecker';
import { useLocalization } from '../contexts/LocalizationContext';

const DiagnosticTool: React.FC = () => {
  const { t } = useLocalization(); // 翻訳関数を取得
  return (
    <>
      <Helmet>
        <title>{t('diagnostic_tool_page.meta.title', 'AI Optimization Score Tool - AIO Shop')}</title>
        <meta 
          name="description" 
          content={t('diagnostic_tool_page.meta.description', 'Check how well your product pages are optimized for AI recommendations with our diagnostic tool.')}
        />
      </Helmet>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('diagnostic_tool_page.hero.headline', 'AI Optimization Score Tool')}</h1>
            <p className="text-xl text-blue-100">
              {t('diagnostic_tool_page.hero.subheadline', 'Analyze your product pages to see how well they\'re optimized for AI recommendations')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-12">
          <SiteChecker />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">{t('diagnostic_tool_page.about.headline', 'About the AI Optimization Score')}</h2>
          
          <p className="text-gray-700 mb-6">
            {t('diagnostic_tool_page.about.description', 'Our AI Optimization Score analyzes various elements of your product pages to determine how well they\'re structured for AI understanding and recommendations. The tool checks for the presence and quality of structured data, metadata, image optimization, and content structure.')}
          </p>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-3">{t('diagnostic_tool_page.checks.headline', 'What We Check')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">{t('diagnostic_tool_page.checks.structure.title', 'Structure Checks')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('diagnostic_tool_page.checks.structure.items.item1', 'Product structured data')}</li>
                  <li>• {t('diagnostic_tool_page.checks.structure.items.item2', 'FAQ schema implementation')}</li>
                  <li>• {t('diagnostic_tool_page.checks.structure.items.item3', 'Breadcrumb navigation')}</li>
                  <li>• {t('diagnostic_tool_page.checks.structure.items.item4', 'HowTo schema (when applicable)')}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">{t('diagnostic_tool_page.checks.metadata.title', 'Metadata Checks')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('diagnostic_tool_page.checks.metadata.items.item1', 'Title tag optimization')}</li>
                  <li>• {t('diagnostic_tool_page.checks.metadata.items.item2', 'Meta description quality')}</li>
                  <li>• {t('diagnostic_tool_page.checks.metadata.items.item3', 'Open Graph tags')}</li>
                  <li>• {t('diagnostic_tool_page.checks.metadata.items.item4', 'Canonical URL implementation')}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">{t('diagnostic_tool_page.checks.images.title', 'Image Checks')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('diagnostic_tool_page.checks.images.items.item1', 'Alt text quality and length')}</li>
                  <li>• {t('diagnostic_tool_page.checks.images.items.item2', 'Image naming conventions')}</li>
                  <li>• {t('diagnostic_tool_page.checks.images.items.item3', 'Multiple product views')}</li>
                  <li>• {t('diagnostic_tool_page.checks.images.items.item4', 'Image captions')}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">{t('diagnostic_tool_page.checks.content.title', 'Content Checks')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('diagnostic_tool_page.checks.content.items.item1', 'Heading structure')}</li>
                  <li>• {t('diagnostic_tool_page.checks.content.items.item2', 'Feature lists formatting')}</li>
                  <li>• {t('diagnostic_tool_page.checks.content.items.item3', 'Specification tables')}</li>
                  <li>• {t('diagnostic_tool_page.checks.content.items.item4', 'Q&A content organization')}</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold mb-3">{t('diagnostic_tool_page.score.headline', 'Interpreting Your Score')}</h3>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 px-2 py-1 rounded bg-red-100 text-red-800 font-medium mr-3">{t('diagnostic_tool_page.score.ranges.range1', '0-40')}</span>
                <div>
                  <strong>{t('diagnostic_tool_page.score.ranges.title1', 'Needs Improvement')}</strong>
                  <p className="mt-1">
                    {t('diagnostic_tool_page.score.ranges.description1', 'Your product pages are missing many essential elements for AI optimization. AI assistants will struggle to recommend your products accurately.')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 px-2 py-1 rounded bg-yellow-100 text-yellow-800 font-medium mr-3">{t('diagnostic_tool_page.score.ranges.range2', '41-70')}</span>
                <div>
                  <strong>{t('diagnostic_tool_page.score.ranges.title2', 'Average')}</strong>
                  <p className="mt-1">
                    {t('diagnostic_tool_page.score.ranges.description2', 'Your product pages have some optimization but are missing key elements. AI assistants may recommend your products but with limited details.')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 px-2 py-1 rounded bg-green-100 text-green-800 font-medium mr-3">{t('diagnostic_tool_page.score.ranges.range3', '71-100')}</span>
                <div>
                  <strong>{t('diagnostic_tool_page.score.ranges.title3', 'Well Optimized')}</strong>
                  <p className="mt-1">
                    {t('diagnostic_tool_page.score.ranges.description3', 'Your product pages are well structured for AI understanding. AI assistants can accurately recommend and describe your products.')}
                  </p>
                </div>
              </li>
            </ul>
            
            <p>
              {t('diagnostic_tool_page.score.note', 'Remember that AI optimization is an ongoing process. As AI technology evolves, the standards for optimization will continue to develop. Regularly testing your product pages and implementing improvements will help ensure your products remain visible in the AI-driven commerce landscape.')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosticTool;