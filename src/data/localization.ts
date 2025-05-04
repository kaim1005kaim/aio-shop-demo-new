
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
