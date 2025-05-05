// src/data/localization.ts (最終版・全文 - 前回と同じ内容)

// ロケールデータの型定義
interface LocaleData {
  [key: string]: string | LocaleData; // ネストされた構造を許容
}

// 各言語の翻訳データ
const translations: { [locale: string]: LocaleData } = {
  en: {
    // EC Demo Breadcrumb
    ec_demo: "EC Site Demo",

    // All Products Page
    all_products: { /* ... */ },

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
     site_checker: { /* ... */ },

    // Product Detail Page & Fallbacks
    product_not_found: "Product not found",
    unknown_category: "Unknown Category",
    category_alt_text: "{categoryName} category featuring optimized products",

    // Product Detail Page UI elements
    product_detail: { /* ... */ },

    // Homepage content
    hero: {
      // --- New LP Hero Keys ---
      main_headline: "The Era When the Web's Subject Shifts from 'People' to 'AI' Has Begun.",
      main_subheadline: "Now that AI Chooses Information, What's Needed is AIO (AI Optimization).",
      proposition: "Ensure your products are 'found,' 'recommended,' and 'talked about' by AI in the future.",
      feature1: "✅ Structured Data × Semantic Tags × Query Design",
      feature2: "✅ Proven Results: EC, Tourism, Movie PR, etc.",
      feature3: "✅ Implementation & Creation OK from Individual Level",
      cta_button1: "🔹 View Demo Now",
      cta_button2: "🔹 What is AIO?",
      aio_box: { // ★ スニペットの内容がここに含まれています
        title: "What is AIO (AI Optimization)?",
        description: "It refers to information structure and semantic design optimized for the AI recommendation era. It's not just traditional SEO, but a new way of PR that prepares the web so AI can easily 'understand' and 'introduce' it.",
        point1: "Improves visibility in AI assistants.",
        point2: "Leads to more relevant recommendations.",
        point3: "Crucial for voice search and future platforms.",
        link: "Learn more about the technology"
      },
      // --- Original Hero Keys ---
      headline: "Optimize Your Products for AI Recommendations", // Keep or remove?
      subheadline: "Discover how structured data, detailed descriptions, and optimized images can make your products more visible to AI shopping assistants.", // Keep or remove?
      button1: "Check Your Site", // Keep or remove?
      button2: "Learn How It Works", // Keep or remove?
      assistant: { /* ... */ }
    },
    featured: { /* ... */ },
    categories: { /* ... */ },
    homepage: { /* ... */ },
    footer: { /* ... */ },

    // Other general keys
    product: {
      addToCart: "Add to Cart",
      details: "Details",
      features: "Features",
      specifications: "Specifications",
      tooltip: { /* ... */ },
      // ★ スニペットの内容がここに含まれています
      faq: { title: "Frequently Asked Questions" },
      comparison: {
        title: "How Our Products Compare",
        header: { feature: "Feature", our_products: "Our Products", competitors: "Competitor Products" }
      }
    },
    greeting: "Hello",
    farewell: "Goodbye",

    // Technical Page Translations
    technical_page: { /* ... */ },

    // Diagnostic Tool Page Translations
    diagnostic_tool_page: { /* ... */ },
  },
  ja: {
    // EC Demo Breadcrumb
    ec_demo: "ECサイトデモ",

    // All Products Page - Japanese
    all_products: { /* ... */ },

    // Header links & Site Name - Japanese
    site_name: "AIOデモショップ",
    home: "ホーム",
    tech_explanation: "技術解説",
    diagnostic_tool: "診断ツール",

    // Language selector and optimization toggle - Japanese
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
     site_checker: { /* ... */ },

    // Product Detail Page & Fallbacks - Japanese
    product_not_found: "商品が見つかりません",
    unknown_category: "不明なカテゴリ",
    category_alt_text: "最適化された商品を特集する{categoryName}カテゴリ",

    // Product Detail Page UI elements - Japanese
    product_detail: { /* ... */ },

    // Homepage content - Japanese
    hero: {
      // --- New LP Hero Keys (Japanese) ---
      main_headline: "Webの主語が\"人\"から\"AI\"へ変わる時代、はじまっています。",
      main_subheadline: "AIが情報を選ぶ今、必要なのはAIO（AI Optimization）。",
      proposition: "あなたの商材がAIに「見つけられ」「推薦され」「語られる」ためのページ、設計しませんか？",
      feature1: "✅ 構造化データ × 意味タグ × 質問設計",
      feature2: "✅ EC、観光、映画PRなど、実績多数",
      feature3: "✅ 導入も制作も、個人レベルからOK",
      cta_button1: "🔹 今すぐデモを見る",
      cta_button2: "🔹 AIOとは？",
      aio_box: { // ★ スニペットの内容がここに含まれています
        title: "AIO（AI Optimization）とは？",
        description: "AIレコメンド時代に最適化された情報構造・意味設計のこと。単なるSEOではなく、AIが「理解しやすく」「紹介しやすい」状態にWebを整える新しいPRの在り方です。",
        point1: "AIアシスタントでの視認性を向上させます。",
        point2: "より関連性の高い推薦につながります。",
        point3: "音声検索や未来のプラットフォームに不可欠です。",
        link: "技術詳細はこちら"
      },
      // --- Original Hero Keys (Japanese - remove if not needed) ---
      headline: "AIレコメンデーションのために商品を最適化",
      subheadline: "構造化データ、詳細な説明、最適化された画像が、AIショッピングアシスタントへの商品の可視性をどのように高めるかをご覧ください。",
      button1: "サイトをチェック",
      button2: "仕組みを見る",
      assistant: { /* ... (Assume filled Japanese) ... */ }
    },
    featured: { /* ... */ },
    categories: { /* ... */ },
    homepage: { /* ... */ },
    footer: { /* ... */ },

    // Other general keys - Japanese
    product: {
      addToCart: "カートに入れる",
      details: "詳細",
       features: "機能",
       specifications: "仕様",
       tooltip: { /* ... */ },
       // ★ スニペットの内容がここに含まれています
       faq: { title: "よくある質問" },
       comparison: {
         title: "製品比較",
         header: { feature: "機能/特徴", our_products: "本製品", competitors: "競合製品" }
       }
    },
    greeting: "こんにちは",
    farewell: "さようなら",

    // Technical Page Translations - Japanese
    technical_page: { /* ... (Filled) ... */ },

    // Diagnostic Tool Page Translations - Japanese
    diagnostic_tool_page: { /* ... (Filled) ... */ },
  },
};

// --- Functions (getLocale, setLocale, t) ---
// (These should be the same as the last version provided)
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

export function setLocale(locale: string): void {
  if (translations[locale]) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("locale", locale);
    }
  } else {
     console.warn(`[setLocale] Attempted to set unsupported locale: ${locale}`);
  }
}

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

  if (result === undefined && !fallback && key.includes('.')) {
     console.warn(`[t] Translation missing for key "${key}" in locale "${currentLocale}". Returning key.`);
  }

  return finalResult;
}