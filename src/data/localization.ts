// 1. まず、src/data/localization.ts ファイルを作成

// src/data/localization.ts
interface LocalizationStrings {
  [key: string]: {
    [key: string]: string;
  };
}

export const localization: LocalizationStrings = {
  en: {
    // ヘッダー
    "site_name": "AI Recommendation Optimized Demo Shop",
    "home": "Home",
    "beauty": "Beauty",
    "electronics": "Electronics",
    "fashion": "Fashion",
    "tech_explanation": "Technical Explanation",
    "diagnostic_tool": "Diagnostic Tool",
    "toggle_optimization": "Toggle AI Optimization",
    
    // 商品詳細
    "product_details": "Product Details",
    "price": "Price",
    "rating": "Rating",
    "add_to_cart": "Add to Cart",
    "features": "Features",
    "specifications": "Specifications",
    "frequently_asked_questions": "Frequently Asked Questions",
    "similar_products": "Similar Products",
    "product_structured_data": "Product Structured Data (JSON-LD)",
    "structured_data_explanation": "This structured data helps AI understand the product details.",
  },
  ja: {
    // ヘッダー
    "site_name": "AI推薦最適化デモショップ",
    "home": "ホーム",
    "beauty": "ビューティー",
    "electronics": "家電",
    "fashion": "ファッション",
    "tech_explanation": "技術解説",
    "diagnostic_tool": "診断ツール",
    "toggle_optimization": "AI最適化の切替",
    
    // 商品詳細
    "product_details": "商品詳細",
    "price": "価格",
    "rating": "評価",
    "add_to_cart": "カートに追加",
    "features": "特徴",
    "specifications": "仕様",
    "frequently_asked_questions": "よくある質問",
    "similar_products": "類似商品",
    "product_structured_data": "商品構造化データ (JSON-LD)",
    "structured_data_explanation": "この構造化データはAIが商品詳細を理解するのに役立ちます。",
  }
};

// デフォルト言語を設定
export const defaultLocale = 'ja';

// 言語取得関数
export function getLocale(): string {
  return localStorage.getItem('locale') || defaultLocale;
}

// テキスト取得関数
export function t(key: string): string {
  const locale = getLocale();
  return localization[locale]?.[key] || localization[defaultLocale][key] || key;
}

// 言語切り替え関数
export function setLocale(locale: string): void {
  if (localization[locale]) {
    localStorage.setItem('locale', locale);
    window.location.reload();
  }
}

// 2. 次に、言語コンテキストを作成

// src/contexts/LocalizationContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getLocale, setLocale, t as translate } from '../data/localization';

interface LocalizationContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState(getLocale());

  useEffect(() => {
    // HTMLのlang属性を更新
    document.documentElement.lang = locale;
  }, [locale]);

  const handleSetLocale = (newLocale: string) => {
    setLocale(newLocale);
    setLocaleState(newLocale);
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale: handleSetLocale, t: translate }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// 3. App.tsxに組み込む

// src/App.tsx (修正版)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import TechnicalPage from './pages/TechnicalPage';
import DiagnosticTool from './pages/DiagnosticTool';
import { AIOptimizationProvider } from './contexts/AIOptimizationContext';
import { LocalizationProvider } from './contexts/LocalizationContext';

function App() {
  return (
    <HelmetProvider>
      <LocalizationProvider>
        <AIOptimizationProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
                <Route path="/product/:productId" element={<ProductDetailPage />} />
                <Route path="/tech-explanation" element={<TechnicalPage />} />
                <Route path="/diagnostic-tool" element={<DiagnosticTool />} />
              </Routes>
            </Layout>
          </Router>
        </AIOptimizationProvider>
      </LocalizationProvider>
    </HelmetProvider>
  );
}

export default App;

// 4. 使用例：コンポーネントでの利用方法

// src/components/product/ProductInfo.tsx (修正例)
import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { useLocalization } from '../../contexts/LocalizationContext';
import { Product } from '../../types/product';
import AIHighlight from './AIHighlight';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();
  const { t } = useLocalization();
  
  return (
    <div className="lg:col-span-2">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.brand}</p>
      
      <AIHighlight 
        active={isOptimized} 
        tooltip={isOptimized ? "最適化された商品説明" : "基本的な商品説明"}
      >
        <p className="mb-6">
          {isOptimized ? product.optimizedDescription : product.description}
        </p>
      </AIHighlight>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{product.rating}/5</span>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mb-8">
        {t('add_to_cart')}
      </button>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('features')}</h2>
        <AIHighlight 
          active={isOptimized} 
          tooltip={isOptimized ? "最適化された機能リスト" : "基本的な機能リスト"}
        >
          <ul className="list-disc pl-5 space-y-2">
            {(isOptimized ? product.optimizedFeatures : product.features).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </AIHighlight>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">{t('specifications')}</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          {Object.entries(product.specs).map(([key, value], index) => (
            <div key={index} className={`py-2 ${index !== 0 ? 'border-t border-gray-200' : ''}`}>
              <span className="font-medium">{key}:</span> {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
