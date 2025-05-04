// src/data/localization.ts (カテゴリキーをネスト構造に変更・全文)

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
    // --- Header category links (can use category keys below) ---
    // beauty: "Beauty", // Removed, use category.beauty.name
    // electronics: "Electronics", // Removed, use category.electronics.name
    // fashion: "Fashion", // Removed, use category.fashion.name
    // health: "Health Foods", // Removed, use category.health.name
    // kitchen: "Kitchen", // Removed, use category.kitchen.name
    // --- Use category keys for consistency ---
    tech_explanation: "Tech Explanation",
    diagnostic_tool: "Diagnostic Tool",

    // Category Data (Name and Description)
    category: {
      beauty: {
        name: "Beauty",
        description: "Skincare, cosmetics, and personal care products for your beauty routine."
      },
      electronics: {
        name: "Electronics",
        description: "Latest gadgets, smart devices, and electronics for modern living."
      },
      fashion: {
        name: "Fashion",
        description: "Sustainable clothing, accessories, and footwear for your conscious wardrobe."
      },
      health: {
        name: "Health Foods",
        description: "Nutritional supplements, organic foods, and wellness products for a healthier you."
      },
      kitchen: {
        name: "Kitchen",
        description: "Innovative cookware, appliances, and kitchen essentials for home chefs."
      }
    },

    // Product Detail Page & Fallbacks
    product_not_found: "Product not found",
    unknown_category: "Unknown Category",
    // CategoryHighlights Alt text
    category_alt_text: "{categoryName} category featuring optimized products", // Interpolation key

    // Homepage content
    hero: {
      headline: "Optimize Your Products for AI Recommendations",
      subheadline: "Discover how structured data, detailed descriptions, and optimized images can make your products more visible to AI shopping assistants.",
      button1: "Check Your Site",
      button2: "Learn How It Works",
      assistant: { // Keys for AI Assistant panel in Hero
        title: "AI Shopping Assistant",
        subtitle: "Helping you find the perfect product",
        query: "I need a good LED facial device for anti-aging.",
        response_optimized: "Based on your needs, I'd recommend the Advanced LED Facial Device by BeautyTech Pro. It has 5 light therapy modes including red light for anti-aging that's clinically proven to reduce wrinkles by up to 25% in 8 weeks. It's also FDA-approved for home use.",
        response_standard: "I found a few LED facial devices. You might want to compare features and prices to find one that works for you.",
        panel: {
          title_optimized: "AI Optimized Product Page",
          title_standard: "Standard Product Page",
          text_optimized: "Rich structured data helps AI understand and recommend your products.",
          text_standard: "Without proper optimization, AI has limited understanding of your products.",
          badge: "Optimized"
        }
      }
    },
    featured: { // Keys for FeaturedProducts component
      headline: "Featured Products",
      subheadline: "Explore our showcase of AI-optimized product pages that demonstrate best practices for product visibility.",
      button_all: "View All Products"
    },
    categories: { // Keys for CategoryHighlights component
       headline: "Browse Categories",
       subheadline: "Explore our product categories, each optimized for AI discoverability and recommendation."
    },
    homepage: { // Keys used in HomePage.tsx component itself
      meta: {
        title: "AIO Shop - AI Recommendation Optimized Demo Store",
        description: "Discover how to structure your online store for optimal AI recommendations and visibility with our interactive demo."
      },
      why_optimize: {
        headline: "Why AI Optimization Matters",
        subheadline: "As AI shopping assistants become mainstream, having AI-optimized product listings will be a key competitive advantage.",
        point1: { title: "Increased Visibility", text: "AI-optimized products are more likely to be recommended by AI shopping assistants." },
        point2: { title: "Better Conversions", text: "When AI understands your products, it can match them to the right customer needs." },
        point3: { title: "Future-Proof Sales", text: "As voice and AI shopping grows, optimized listings will maintain their competitive edge." },
        button: "Learn How It Works" // Reusing hero.button2 might be better if text is identical
      }
    },
    footer: { // Keys for Footer component
      title: "AIO Shop",
      description: "A demonstration website showcasing how to optimize web content for AI recommendations.",
      categories: { title: "Categories" },
      resources: { title: "Resources" },
      copyright: {
        pt1: "© {year} AIO Shop Demo.", // Year interpolation
        pt2: "This is a demonstration site for educational purposes only."
      }
    },

    // Other general keys (add as needed)
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
    // --- Use category keys below for header ---
    tech_explanation: "技術解説",
    diagnostic_tool: "診断ツール",

    // Category Data (Name and Description) - Japanese
    category: {
      beauty: {
        name: "ビューティー",
        description: "美容ルーチンのためのスキンケア、コスメ、パーソナルケア製品。"
      },
      electronics: {
        name: "家電",
        description: "現代生活のための最新ガジェット、スマートデバイス、家電製品。"
      },
      fashion: {
        name: "ファッション",
        description: "意識的なワードローブのためのサステナブルな衣類、アクセサリー、靴。"
      },
      health: {
        name: "健康食品",
        description: "より健康なあなたのための栄養補助食品、オーガニック食品、ウェルネス製品。"
      },
      kitchen: {
        name: "キッチン用品",
        description: "ホームシェフのための革新的な調理器具、家電、キッチン必需品。"
      }
    },

     // Product Detail Page & Fallbacks - Japanese
    product_not_found: "商品が見つかりません",
    unknown_category: "不明なカテゴリ",
    // CategoryHighlights Alt text - Japanese
    category_alt_text: "最適化された商品を特集する{categoryName}カテゴリ", // Interpolation key

    // Homepage content - Japanese
    hero: {
      headline: "AIレコメンデーションのために商品を最適化",
      subheadline: "構造化データ、詳細な説明、最適化された画像が、AIショッピングアシスタントへの商品の可視性をどのように高めるかをご覧ください。",
      button1: "サイトをチェック",
      button2: "仕組みを見る",
      assistant: { // Keys for AI Assistant panel - Japanese
        title: "AIショッピングアシスタント",
        subtitle: "最適な商品を見つけるお手伝い",
        query: "アンチエイジングに良いLED美顔器を探しています。",
        response_optimized: "ご要望に基づき、BeautyTech Pro社のAdvanced LED Facial Deviceをお勧めします。アンチエイジング用の赤色光を含む5つの光線療法モードがあり、8週間で最大25%シワを減少させることが臨床的に証明されています。家庭用としてFDA承認済みです。",
        response_standard: "いくつかLED美顔器が見つかりました。機能や価格を比較して、あなたに合うものを見つけるとよいでしょう。",
        panel: {
          title_optimized: "AI最適化済み商品ページ",
          title_standard: "標準商品ページ",
          text_optimized: "豊富な構造化データは、AIが商品を理解し推薦するのに役立ちます。",
          text_standard: "適切な最適化がない場合、AIの商品理解は限定的です。",
          badge: "最適化済み"
        }
      }
    },
    featured: { // Keys for FeaturedProducts - Japanese
      headline: "注目商品",
      subheadline: "AIに最適化され、商品の可視性に関するベストプラクティスを示す商品ページのショーケースをご覧ください。",
      button_all: "すべての商品を見る"
    },
    categories: { // Keys for CategoryHighlights - Japanese
       headline: "カテゴリ一覧",
       subheadline: "AIによる発見と推薦のために最適化された商品カテゴリをご覧ください。"
    },
    homepage: { // Keys used in HomePage.tsx - Japanese
      meta: {
        title: "AIOデモショップ - AIレコメンデーション最適化デモストア",
        description: "オンラインストアをAIレコメンデーションと可視性のために最適に構成する方法を、インタラクティブなデモでご覧ください。"
      },
      why_optimize: {
        headline: "なぜAI最適化が重要なのか",
        subheadline: "AIショッピングアシスタントが主流になるにつれて、AIに最適化された商品リストを持つことが競争上の重要な利点となります。",
        point1: { title: "視認性の向上", text: "AIに最適化された商品は、AIショッピングアシスタントによって推薦される可能性が高くなります。" },
        point2: { title: "コンバージョン率の向上", text: "AIが商品を理解すると、適切な顧客のニーズに合致させることができます。" },
        point3: { title: "将来性のある販売", text: "音声およびAIショッピングが成長するにつれて、最適化されたリスティングはその競争力を維持します。" },
        button: "仕組みを見る"
      }
    },
     footer: { // Keys for Footer component - Japanese
      title: "AIOデモショップ",
      description: "AIレコメンデーションのためにウェブコンテンツを最適化する方法を示すデモンストレーションサイト。",
      categories: { title: "カテゴリ" },
      resources: { title: "リソース" },
      copyright: {
        pt1: "© {year} AIOデモショップ.", // Year interpolation
        pt2: "これは教育目的のデモンストレーションサイトです。"
      }
    },

    // Other general keys - Japanese
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
export function t(key: string, fallbackOrOptions?: string | object, options?: object): string {
  // Handle cases where options are passed as second argument
  let fallback: string | undefined;
  let interpolationOptions: object | undefined = options;
  if (typeof fallbackOrOptions === 'string') {
    fallback = fallbackOrOptions;
  } else if (typeof fallbackOrOptions === 'object' && fallbackOrOptions !== null) {
    interpolationOptions = fallbackOrOptions;
  }

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

  let finalResult = typeof result === 'string' ? result : fallback ?? key;

  // Basic interpolation (replace {key})
  if (typeof finalResult === 'string' && interpolationOptions) {
    for (const [optionKey, optionValue] of Object.entries(interpolationOptions)) {
      // Ensure optionValue can be converted to string
      const valueString = String(optionValue ?? '');
      finalResult = finalResult.replace(`{${optionKey}}`, valueString);
    }
  }

  // Return key if it looks like a key and no translation/fallback was found
  if (finalResult === key && key.includes('.')) {
     console.warn(`[t] Translation missing for key "${key}" in locale "${currentLocale}". Returning key.`);
  }

  return finalResult;
}