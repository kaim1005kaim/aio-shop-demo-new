// src/data/localization.ts (LP Hero & Breadcrumb keys added - Full Code)

// ロケールデータの型定義
interface LocaleData {
  [key: string]: string | LocaleData; // ネストされた構造を許容
}

// 各言語の翻訳データ
const translations: { [locale: string]: LocaleData } = {
  en: {
    // EC Demo Breadcrumb
    ec_demo: "EC Site Demo", // ★ 追加: パンくず用

    // All Products Page
    all_products: { /* ... (as before) ... */ },

    // Header links & Site Name
    site_name: "AIO Shop Demo",
    home: "Home",
    tech_explanation: "Tech Explanation",
    diagnostic_tool: "Diagnostic Tool",

    // Language selector and optimization toggle
    language_selector: { label: "Language" },
    optimization: { on: "AI Optimization: ON", off: "AI Optimization: OFF" },

    // Category Data (Name and Description)
    category: {
      beauty: { name: "Beauty", description: "Skincare, cosmetics, and personal care products for your beauty routine." },
      electronics: { name: "Electronics", description: "Latest gadgets, smart devices, and electronics for modern living." },
      fashion: { name: "Fashion", description: "Sustainable clothing, accessories, and footwear for your conscious wardrobe." },
      health: { name: "Health Foods", description: "Nutritional supplements, organic foods, and wellness products for a healthier you." },
      kitchen: { name: "Kitchen", description: "Innovative cookware, appliances, and kitchen essentials for home chefs." }
    },

    // SiteChecker Component Translations
    site_checker: { /* ... (as before) ... */ },

    // Product Detail Page & Fallbacks
    product_not_found: "Product not found",
    unknown_category: "Unknown Category",
    category_alt_text: "{categoryName} category featuring optimized products", // Interpolation key

    // Product Detail Page UI elements
    product_detail: { /* ... (as before) ... */ },

    // Homepage content
    hero: { // Existing hero + New LP Hero keys merged here
      // --- New LP Hero Keys ---
      main_headline: "The Era When the Web's Subject Shifts from 'People' to 'AI'",
      main_subheadline: "Now that AI Chooses Information, What's Needed is AIO (AI Optimization)",
      proposition: "Ensure your products are 'found,' 'recommended,' and 'talked about' by AI in the future.",
      feature1: "Feature 1: AI Visibility Check (EN)", // Placeholder
      feature2: "Feature 2: Optimized Content Generation (EN)", // Placeholder
      feature3: "Feature 3: Structured Data Implementation (EN)", // Placeholder
      cta_button1: "Check Optimization Score (EN)", // Placeholder
      cta_button2: "Learn More About AIO (EN)", // Placeholder
      aio_box: "AIO (AI Optimization) enhances product appeal to AI, boosting visibility and recommendations. (EN)", // Placeholder
      // --- End New LP Hero Keys ---

      // --- Original Hero Keys (keep if still used elsewhere, or remove) ---
      headline: "Optimize Your Products for AI Recommendations", // Keep or remove?
      subheadline: "Discover how structured data, detailed descriptions, and optimized images can make your products more visible to AI shopping assistants.", // Keep or remove?
      button1: "Check Your Site", // Keep or remove?
      button2: "Learn How It Works", // Keep or remove?
      assistant: { /* ... (as before) ... */ }
      // --- End Original Hero Keys ---
    },
    featured: { /* ... (as before) ... */ },
    categories: { /* ... (as before) ... */ }, // For CategoryHighlights component
    homepage: { /* ... (as before) ... */ }, // For HomePage component itself
    footer: { /* ... (as before) ... */ },

    // Other general keys
    product: { /* ... (as before) ... */ },
    greeting: "Hello",
    farewell: "Goodbye",

    // Technical Page Translations
    technical_page: { /* ... (as before) ... */ },

    // Diagnostic Tool Page Translations
    diagnostic_tool_page: { /* ... (as before) ... */ },
  },
  ja: {
    // EC Demo Breadcrumb
    ec_demo: "ECサイトデモ", // ★ 追加: パンくず用

    // All Products Page
    all_products: { /* ... (as before) ... */ },

    // Header links & Site Name
    site_name: "AIOデモショップ",
    home: "ホーム",
    tech_explanation: "技術解説",
    diagnostic_tool: "診断ツール",

     // Language selector and optimization toggle
    language_selector: { label: "言語" },
    optimization: { on: "AI最適化: ON", off: "AI最適化: OFF" },

    // Category Data (Name and Description) - Japanese
    category: {
      beauty: { name: "ビューティー", description: "美容ルーチンのためのスキンケア、コスメ、パーソナルケア製品。" },
      electronics: { name: "家電", description: "現代生活のための最新ガジェット、スマートデバイス、家電製品。" },
      fashion: { name: "ファッション", description: "意識的なワードローブのためのサステナブルな衣類、アクセサリー、靴。" },
      health: { name: "健康食品", description: "より健康なあなたのための栄養補助食品、オーガニック食品、ウェルネス製品。" },
      kitchen: { name: "キッチン用品", description: "ホームシェフのための革新的な調理器具、家電、キッチン必需品。" }
    },

     // SiteChecker Component Translations - Japanese
    site_checker: { /* ... (as before) ... */ },

    // Product Detail Page & Fallbacks - Japanese
    product_not_found: "商品が見つかりません",
    unknown_category: "不明なカテゴリ",
    category_alt_text: "最適化された商品を特集する{categoryName}カテゴリ", // Interpolation key

    // Product Detail Page UI elements - Japanese
    product_detail: { /* ... (as before) ... */ },

    // Homepage content - Japanese
    hero: { // Existing hero + New LP Hero keys merged here
      // --- New LP Hero Keys (Japanese) ---
      main_headline: "Webの主語が\"人\"から\"AI\"へ変わる時代",
      main_subheadline: "AIが情報を選ぶ今、必要なのはAIO（AI最適化 = AI Optimization）",
      proposition: "あなたの商材がAIに「見つけられ」「推薦され」「語られる」未来へ",
      feature1: "機能1: AI視認性チェック", // Placeholder
      feature2: "機能2: 最適化コンテンツ生成", // Placeholder
      feature3: "機能3: 構造化データ実装", // Placeholder
      cta_button1: "最適化スコアをチェック", // Placeholder
      cta_button2: "AIOについてもっと知る", // Placeholder
      aio_box: "AIO（AI最適化）は、AIに対する商品の魅力を高め、視認性と推薦を向上させます。", // Placeholder
      // --- End New LP Hero Keys ---

       // --- Original Hero Keys (Japanese - keep if used) ---
      headline: "AIレコメンデーションのために商品を最適化", // Keep or remove?
      subheadline: "構造化データ、詳細な説明、最適化された画像が、AIショッピングアシスタントへの商品の可視性をどのように高めるかをご覧ください。", // Keep or remove?
      button1: "サイトをチェック", // Keep or remove?
      button2: "仕組みを見る", // Keep or remove?
      assistant: { /* ... (as before) ... */ }
      // --- End Original Hero Keys ---
    },
    featured: { /* ... (as before) ... */ },
    categories: { /* ... (as before) ... */ }, // For CategoryHighlights component
    homepage: { /* ... (as before) ... */ }, // For HomePage component itself
    footer: { /* ... (as before) ... */ },

    // Other general keys - Japanese
    product: { /* ... (as before) ... */ },
    greeting: "こんにちは",
    farewell: "さようなら",

    // Technical Page Translations - Japanese
    technical_page: { /* ... (as before) ... */ },

    // Diagnostic Tool Page Translations - Japanese
    diagnostic_tool_page: { /* ... (as before) ... */ },
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

// キーに基づいて翻訳テキストを取得する関数 (ネスト対応、フォールバック付き、補間対応)
export function t(key: string, fallbackOrOptions?: string | object, options?: object): string {
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

  if (typeof finalResult === 'string' && interpolationOptions) {
    for (const [optionKey, optionValue] of Object.entries(interpolationOptions)) {
      const valueString = String(optionValue ?? '');
      finalResult = finalResult.replace(`{${optionKey}}`, valueString);
    }
  }

  if (finalResult === key && key.includes('.')) {
     console.warn(`[t] Translation missing for key "${key}" in locale "${currentLocale}". Returning key.`);
  }

  return finalResult;
}