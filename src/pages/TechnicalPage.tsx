import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocalization } from '../contexts/LocalizationContext';

const TechnicalPage: React.FC = () => {
  const { t } = useLocalization(); // 翻訳関数を取得
  return (
    <>
      <Helmet>
        <title>{t('technical_page.meta.title', 'Technical Explanation - AI Optimization Techniques')}</title>
        <meta 
          name="description" 
          content={t('technical_page.meta.description', 'Learn about the technical implementation of AI optimization for product pages that improve visibility in AI-powered shopping assistants.')}
        />
      </Helmet>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('technical_page.hero.headline', 'Technical Implementation Guide')}</h1>
            <p className="text-xl text-blue-100">
              {t('technical_page.hero.subheadline', 'How to optimize your product pages for AI recommendations')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{t('technical_page.understanding.headline', 'Understanding AI Perception')}</h2>
            <p className="text-gray-700 mb-4">
              {t('technical_page.understanding.paragraph1', 'AI shopping assistants like ChatGPT, Claude, and Gemini perceive web content differently than humans. While traditional SEO focuses on keyword targeting and link building, AI optimization requires a focus on structured data, comprehensive product information, and clear, semantic content organization.')}
            </p>
            <p className="text-gray-700 mb-4">
              {t('technical_page.understanding.paragraph2', 'When these AI systems analyze product pages to make recommendations, they prioritize pages that:')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>{t('technical_page.understanding.list.item1', 'Have clear, structured information that can be easily parsed')}</li>
              <li>{t('technical_page.understanding.list.item2', 'Provide comprehensive product details rather than marketing fluff')}</li>
              <li>{t('technical_page.understanding.list.item3', 'Include technical specifications in a standardized format')}</li>
              <li>{t('technical_page.understanding.list.item4', 'Answer common questions about the product')}</li>
              <li>{t('technical_page.understanding.list.item5', 'Contain proper metadata and image descriptions')}</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{t('technical_page.key_elements.headline', 'Key Optimization Elements')}</h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{t('technical_page.key_elements.structured_data.title', 'Structured Data (JSON-LD)')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('technical_page.key_elements.structured_data.description', 'Implementing schema.org markup in JSON-LD format helps AI systems understand the product information in a standardized way. This is perhaps the most critical element of AI optimization.')}
                </p>
                <div className="bg-gray-800 text-gray-200 p-4 rounded overflow-x-auto text-sm">
                  <pre>
{`<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Product Name",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
  ],
  "description": "Detailed product description with key features and benefits.",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/product",
    "priceCurrency": "USD",
    "price": 49.99,
    "availability": "https://schema.org/InStock"
  }
}
</script>`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{t('technical_page.key_elements.rich_image.title', 'Rich Image Alt Text')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('technical_page.key_elements.rich_image.description', 'AI systems rely heavily on alt text to understand images. Instead of generic alt text, provide detailed, descriptive text that includes the product name, key features, and context.')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('technical_page.key_elements.rich_image.standard', 'Standard Alt Text:')}</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded text-sm">
                      <code>alt="LED facial device"</code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('technical_page.key_elements.rich_image.optimized', 'AI-Optimized Alt Text:')}</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded text-sm">
                      <code>alt="Advanced LED Facial Device with 5 light therapy modes for anti-aging, acne treatment, and skin rejuvenation"</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{t('technical_page.key_elements.faq_schema.title', 'FAQ Schema Implementation')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('technical_page.key_elements.faq_schema.description', 'FAQs not only help users but also provide AI systems with question-answer pairs that can be directly cited when users ask related questions.')}
                </p>
                <div className="bg-gray-800 text-gray-200 p-4 rounded overflow-x-auto text-sm">
                  <pre>
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How does the LED light therapy work for skin improvement?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "LED light therapy works by emitting specific wavelengths of light that penetrate the skin at varying depths. Each color targets different skin concerns: red light (630nm) stimulates collagen production and reduces wrinkles, blue light (415nm) kills acne-causing bacteria."
    }
  }, {
    "@type": "Question",
    "name": "How often should I use the Advanced LED Facial Device for best results?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For optimal results, we recommend using the device 3-5 times per week for the first 8 weeks, with each session lasting 10-15 minutes."
    }
  }]
}
</script>`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{t('technical_page.key_elements.content_organization.title', 'Structured Content Organization')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('technical_page.key_elements.content_organization.description', 'Using proper semantic HTML elements helps AI understand the hierarchy and relationship of information on your page.')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('technical_page.key_elements.content_organization.standard', 'Standard Approach:')}</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded text-sm overflow-x-auto">
                      <pre>
{`<div>
  <div>Product Name</div>
  <div>$49.99</div>
  <div>Description here...</div>
  <div>Features:</div>
  <div>- Feature 1</div>
  <div>- Feature 2</div>
</div>`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('technical_page.key_elements.content_organization.optimized', 'AI-Optimized Approach:')}</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded text-sm overflow-x-auto">
                      <pre>
{`<article itemscope itemtype="https://schema.org/Product">
  <h1 itemprop="name">Product Name</h1>
  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <span itemprop="price">$49.99</span>
  </div>
  <p itemprop="description">Description here...</p>
  <section>
    <h2>Features</h2>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
  </section>
</article>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{t('technical_page.checklist.headline', 'Implementation Checklist')}</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-medium text-gray-900">{t('technical_page.checklist.items.title1', 'Implement JSON-LD Structured Data')}</h3>
                  <p className="text-gray-700">{t('technical_page.checklist.items.description1', 'Include complete Product schema with all available fields including offers, brand, and ratings.')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-medium text-gray-900">{t('technical_page.checklist.items.title2', 'Optimize Product Descriptions')}</h3>
                  <p className="text-gray-700">{t('technical_page.checklist.items.description2', 'Include specific details, measurements, materials, and use cases rather than vague marketing language.')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-medium text-gray-900">{t('technical_page.checklist.items.title3', 'Add Detailed Alt Text for All Images')}</h3>
                  <p className="text-gray-700">{t('technical_page.checklist.items.description3', 'Include product name, key features, and relevant context in alt text for all product images.')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-medium text-gray-900">{t('technical_page.checklist.items.title4', 'Implement FAQ Schema')}</h3>
                  <p className="text-gray-700">{t('technical_page.checklist.items.description4', 'Create comprehensive FAQs addressing common questions, with detailed answers.')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-medium text-gray-900">{t('technical_page.checklist.items.title5', 'Organize Content with Semantic HTML')}</h3>
                  <p className="text-gray-700">{t('technical_page.checklist.items.description5', 'Use proper H1-H6 headings, lists, tables, and semantic elements for content organization.')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">6</div>
                <div>
                  <h3 className="font-medium text-gray-900">{t('technical_page.checklist.items.title6', 'Create Specification Tables')}</h3>
                  <p className="text-gray-700">{t('technical_page.checklist.items.description6', 'Present technical specifications in a structured table format with clear labels.')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">7</div>
                <div>
                  <h3 className="font-medium text-gray-900">{t('technical_page.checklist.items.title7', 'Add Comparative Information')}</h3>
                  <p className="text-gray-700">{t('technical_page.checklist.items.description7', 'Provide clear comparisons with similar products or previous versions to help position the product.')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-3">{t('technical_page.testing.headline', 'Testing Your AI Optimization')}</h2>
            <p className="text-gray-700 mb-4">
              {t('technical_page.testing.description', 'After implementing these optimizations, you can test their effectiveness by:')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>{t('technical_page.testing.list.item1', 'Using our AI Optimization Score Tool to evaluate your page\'s readiness')}</li>
              <li>{t('technical_page.testing.list.item2', 'Testing with various AI shopping assistants to see if your product is recommended')}</li>
              <li>{t('technical_page.testing.list.item3', 'Validating your structured data with Google\'s Rich Results Test and Schema.org Validator')}</li>
              <li>{t('technical_page.testing.list.item4', 'Monitoring changes in traffic and conversion rates from AI-powered search tools')}</li>
            </ul>
          </div>
          
          <div className="text-center">
            <a 
              href="/diagnostic-tool" 
              className="inline-flex px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('technical_page.cta', 'Try Our AI Optimization Score Tool')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalPage;