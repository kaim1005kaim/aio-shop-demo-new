// src/data/localization.ts (Homepage keys added - Full Code)

// ロケールデータの型定義
interface LocaleData {
  [key: string]: string | LocaleData; // ネストされた構造を許容
}

// 各言語の翻訳データ
const translations: { [locale: string]: LocaleData } = {
  en: {
    // Header links & Site Name
    site_name: "AIO Shop Demo",
    home: "Home",
    beauty: "Beauty",
    electronics: "Electronics",
    fashion: "Fashion",
    health: "Health Foods",
    kitchen: "Kitchen",
    tech_explanation: "Tech Explanation",
    diagnostic_tool: "Diagnostic Tool",

    // Category Names (used via t(category.nameKey))
    category: {
      beauty: "Beauty",
      electronics: "Electronics",
      fashion: "Fashion",
      health: "Health Foods",
      kitchen: "Kitchen"
    },

    // Product Detail Page & Fallbacks
    product_not_found: "Product not found",
    unknown_category: "Unknown Category",

    // Homepage content
    hero: {
      headline: "Optimize Your Products for AI Recommendations",
      subheadline: "Discover how structured data, detailed descriptions, and optimized images can make your products more visible to AI shopping assistants.",
      button1: "Check Your Site",
      button2: "Learn How It Works"
    },
    featured: {
      headline: "Featured Products",
      subheadline: "Explore our showcase of AI-optimized product pages that demonstrate best practices for product visibility."
    },
    homepage: { // Keys used in HomePage.tsx component itself
      meta: {
        title: "AIO Shop - AI Recommendation Optimized Demo Store",
        description: "Discover how to structure your online store for optimal AI recommendations and visibility with our interactive demo."
      },
      why_optimize: {
        headline: "Why AI Optimization Matters",
        subheadline: "As AI shopping assistants become mainstream, having AI-optimized product listings will be a key competitive advantage.",
        point1: {
          title: "Increased Visibility",
          text: "AI-optimized products are more likely to be recommended by AI shopping assistants."
        },
        point2: {
          title: "Better Conversions",
          text: "When AI understands your products, it can match them to the right customer needs."
        },
        point3: {
          title: "Future-Proof Sales",
          text: "As voice and AI shopping grows, optimized listings will maintain their competitive edge."
        },
        button: "Learn How It Works"
      }
    },

    // Other existing keys (add more as needed)
    product: {
      addToCart: "Add to Cart",
      details: "Details",
    },
    greeting: "Hello",
    farewell: "Goodbye",
  },
  ja: {
    // Header links & Site Name
    site_name: "AIOデモショップ",
    home: "ホーム",
    beauty: "ビューティー",
    electronics: "家電",
    fashion: "ファッション",
    health: "健康食品",
    kitchen: "キッチン用品",
    tech_explanation: "技術解説",
    diagnostic_tool: "診断ツール",

    // Category Names (used via t(category.nameKey))
    category: {
      beauty: "ビューティー",
      electronics: "家電",
      fashion: "ファッション",
      health: "健康食品",
      kitchen: "キッチン用品"
    },

    // Product Detail Page & Fallbacks
    product_not_found: "商品が見つかりません",
    unknown_category: "不明なカテゴリ",

    // Homepage content (日本語)
    hero: {
      headline: "AIレコメンデーションのために商品を最適化", // 例
      subheadline: "構造化データ、詳細な説明、最適化された画像が、AIショッピングアシスタントへの商品の可視性をどのように高めるかをご覧ください。", // 例
      button1: "サイトをチェック", // 例
      button2: "仕組みを見る"    // 例
    },
    featured: {
      headline: "注目商品", // 例
      subheadline: "AIに最適化され、商品の可視性に関するベストプラクティスを示す商品ページのショーケースをご覧ください。" // 例
    },
     homepage: { // Keys used in HomePage.tsx component itself (Japanese)
      meta: {
        title: "AIOデモショップ - AIレコメンデーション最適化デモストア", // 例
        description: "オンラインストアをAIレコメンデーションと可視性のために最適に構成する方法を、インタラクティブなデモでご覧ください。" // 例
      },
      why_optimize: {
        headline: "なぜAI最適化が重要なのか", // 例
        subheadline: "AIショッピングアシスタントが主流になるにつれて、AIに最適化された商品リストを持つことが競争上の重要な利点となります。", // 例
        point1: {
          title: "視認性の向上", // 例
          text: "AIに最適化された商品は、AIショッピングアシスタントによって推薦される可能性が高くなります。" // 例
        },
        point2: {
          title: "コンバージョン率の向上", // 例
          text: "AIが商品を理解すると、適切な顧客のニーズに合致させることができます。" // 例
        },
        point3: {
          title: "将来性のある販売", // 例
          text: "音声およびAIショッピングが成長するにつれて、最適化されたリスティングはその競争力を維持します。" // 例
        },
        button: "仕組みを見る" // 例
      }
    },

    // Other existing keys (add more as needed)
    product: {
      addToCart: "カートに入れる",
      details: "詳細",
    },
    greeting: "こんにちは",
    farewell: "さようなら",
  },
};

// ローカルストレージからロケールを取得する関数
export function getLocale(): string {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale && translations[storedLocale]) {
      return storedLocale;
    }
  }
  const defaultLocale = "ja";
  return defaultLocale;
}

// ロケールを設定し、ローカルストレージに保存する関数
export function setLocale(locale: string): void {
  if (translations[locale]) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("locale", locale);
    }
  } else {
     console.warn(`[setLocale] Attempted to set unsupported locale: ${locale}`);
  }
}

// キーに基づいて翻訳テキストを取得する関数 (ネスト対応、フォールバック付き)
export function t(key: string, fallback?: string): string {
  const currentLocale = getLocale();
  const keys = key.split('.');
  let result: string | LocaleData | undefined = translations[currentLocale];

  try {
      for (const k of keys) {
        if (typeof result === 'object' && result !== null && Object.prototype.hasOwnProperty.call(result, k)) {
          result = (result as LocaleData)[k];
        } else {
          result = undefined;
          break;
        }
      }
  } catch (error) {
      console.error(`[t] Error accessing key "${key}" for locale "${currentLocale}":`, error);
      result = undefined;
  }

  const finalResult = typeof result === 'string' ? result : fallback ?? key;
  // if (finalResult === key && !fallback) {
  //   console.warn(`[t] Translation missing for key "${key}" in locale "${currentLocale}". Returning key.`);
  // }
  return finalResult;
}