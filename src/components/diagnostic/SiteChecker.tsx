import React, { useState } from 'react';
import { Search, CheckCircle, X, AlertTriangle } from 'lucide-react';

const SiteChecker: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    score: number;
    details: Array<{
      category: string;
      score: number;
      checks: Array<{
        name: string;
        passed: boolean;
        description: string;
      }>;
    }>;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis with timeout
    setTimeout(() => {
      const mockResults = generateMockResults(url);
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  // Generate mock analysis results for demo purposes
  const generateMockResults = (url: string) => {
    // Extract domain to create some variability in scores
    const domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
    const hash = domain.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 100;
    
    const structureScore = 30 + (hash % 50);
    const metadataScore = 40 + (hash % 30);
    const imageScore = 20 + (hash % 60);
    const contentScore = 35 + (hash % 40);
    
    const totalScore = Math.floor((structureScore + metadataScore + imageScore + contentScore) / 4);
    
    return {
      score: totalScore,
      details: [
        {
          category: 'Structure',
          score: structureScore,
          checks: [
            {
              name: 'Product Schema',
              passed: hash % 2 === 0,
              description: 'Product structured data helps AI understand product details.'
            },
            {
              name: 'FAQ Schema',
              passed: hash % 3 === 0,
              description: 'FAQ schema makes Q&A content more accessible to AI.'
            },
            {
              name: 'Breadcrumb Navigation',
              passed: hash % 4 === 0,
              description: 'Breadcrumbs help AI understand site hierarchy.'
            }
          ]
        },
        {
          category: 'Metadata',
          score: metadataScore,
          checks: [
            {
              name: 'Title Tags',
              passed: hash % 2 === 1,
              description: 'Descriptive titles help AI understand page content.'
            },
            {
              name: 'Meta Descriptions',
              passed: hash % 3 === 1,
              description: 'Meta descriptions provide context for AI.'
            },
            {
              name: 'Canonical URLs',
              passed: hash % 5 === 0,
              description: 'Canonical URLs prevent confusion from duplicate content.'
            }
          ]
        },
        {
          category: 'Images',
          score: imageScore,
          checks: [
            {
              name: 'Alt Text Quality',
              passed: hash % 4 === 1,
              description: 'Descriptive alt text helps AI understand images.'
            },
            {
              name: 'Image Naming',
              passed: hash % 3 === 2,
              description: 'SEO-friendly image names provide additional context.'
            },
            {
              name: 'Multiple Product Views',
              passed: hash % 2 === 0,
              description: 'Multiple product images provide complete visual context.'
            }
          ]
        },
        {
          category: 'Content',
          score: contentScore,
          checks: [
            {
              name: 'Heading Structure',
              passed: hash % 3 === 0,
              description: 'Proper heading hierarchy helps AI understand content organization.'
            },
            {
              name: 'Feature Lists',
              passed: hash % 2 === 1,
              description: 'Structured feature lists help AI identify product benefits.'
            },
            {
              name: 'Specification Tables',
              passed: hash % 3 === 1,
              description: 'Specification tables provide structured technical details.'
            }
          ]
        }
      ]
    };
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">AI Optimization Score Checker</h2>
        <p className="text-gray-600">
          Enter a product URL to check how well it's optimized for AI recommendations.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter a product URL (e.g., https://example.com/product)"
              className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isAnalyzing}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:bg-blue-400"
          >
            {isAnalyzing ? 'Analyzing...' : 'Check Score'}
          </button>
        </div>
      </form>
      
      {isAnalyzing && (
        <div className="text-center py-12">
          <div className="inline-block w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Analyzing website for AI optimization...</p>
        </div>
      )}
      
      {results && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">AI Optimization Score</h3>
                <p className="text-gray-600 text-sm">
                  URL: {url.startsWith('http') ? url : `https://${url}`}
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-blue-500 text-blue-600 font-bold text-xl">
                  {results.score}
                </div>
                <span className="ml-2 text-sm text-gray-500">/100</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h4 className="font-semibold mb-4">Category Scores</h4>
            
            <div className="space-y-6">
              {results.details.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{category.category}</span>
                    <span className="text-sm">{category.score}/100</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${category.score}%` }}
                    ></div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="text-sm font-medium mb-3">Key Checks</h5>
                    <ul className="space-y-2">
                      {category.checks.map((check, checkIndex) => (
                        <li key={checkIndex} className="flex items-start">
                          {check.passed ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                          )}
                          <div>
                            <div className="font-medium text-sm">
                              {check.name}
                            </div>
                            <div className="text-xs text-gray-600">
                              {check.description}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-blue-50 border-t border-blue-100">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800 mb-1">Improvement Recommendations</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  {results.details
                    .flatMap(category => 
                      category.checks
                        .filter(check => !check.passed)
                        .map(check => ({ category: category.category, check }))
                    )
                    .slice(0, 3)
                    .map((item, index) => (
                      <li key={index}>
                        • Add {item.check.name} to improve {item.category.toLowerCase()} score
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteChecker;