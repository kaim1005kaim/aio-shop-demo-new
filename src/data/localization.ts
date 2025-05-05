// src/data/localization.ts (Final Version with LP Hero & other keys - Full Code)

// ロケールデータの型定義
interface LocaleData {
  [key: string]: string | LocaleData; // ネストされた構造を許容
}

// 各言語の翻訳データ
const translations: { [locale: string]: LocaleData } = {
  en: {
    // EC Demo Breadcrumb
    ec_demo: "EC Site Demo", // ★ パンくず用

    // All Products Page
    all_products: {
      meta: {
        title: "EC Site Demo - All Products",
        description: "Browse all products demonstrating AI optimization."
      },
      hero: {
        headline: "EC Demo Products",
        subheadline: "Explore our showcase of AI-optimized product pages"
      }
    },

    // Header links & Site Name
    site_name: "AIO Shop Demo",
    home: "Home",
    tech_explanation: "Tech Explanation",
    diagnostic_tool: "Diagnostic Tool",

    // Language selector and optimization toggle
    language_selector: { label: "Language" },
    optimization: { on: "AI Optimization: ON", off: "AI Optimization: OFF" },

    // Category Data (Name and Description) - Accessed via keys like 'category.beauty.name'
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

    // SiteChecker Component Translations
     site_checker: {
       title: "AI Optimization Score Checker",
       description: "Enter a product URL to check how well it's optimized for AI recommendations.",
       input_placeholder: "Enter product URL (e.g., https://example.com/product)",
       check_button: "Check Score",
       analyzing: "Analyzing...",
       analyzing_message: "Analyzing website for AI optimization...",
       score_title: "AI Optimization Score",
       url_prefix: "URL: ",
       category_scores: "Category Scores",
       key_checks: "Key Checks",
       improvement_recommendations: "Improvement Recommendations",
       category: { // Score categories
         structure: "Structure",
         metadata: "Metadata",
         images: "Images",
         content: "Content"
       },
       checks: { // Specific checks
         product_schema: "Product Schema",
         faq_schema: "FAQ Schema",
         breadcrumb: "Breadcrumb Nav",
         title_tags: "Title Tags",
         meta_descriptions: "Meta Descriptions",
         canonical_urls: "Canonical URLs",
         alt_text: "Alt Text Quality",
         image_naming: "Image Naming",
         multiple_views: "Multiple Product Views",
         heading_structure: "Heading Structure",
         feature_lists: "Feature Lists",
         specification_tables: "Specification Tables"
       },
       // Interpolation: {name} = check name, {category} = score category name
       add_to_improve: "Add {name} to improve {category} score"
     },

    // Product Detail Page & Fallbacks
    product_not_found: "Product not found",
    unknown_category: "Unknown Category",
    category_alt_text: "{categoryName} category featuring optimized products", // Interpolation key

    // Product Detail Page UI elements
    product_detail: {
       optimization: {
         optimized: "Optimized",
         standard: "Standard",
         status_optimized: "Showing AI-optimized content",
         status_standard: "Showing basic content"
       },
       structured_data: {
         title: "Product Structured Data (JSON-LD)",
         description: "This structured data helps AI understand the product details.",
         unavailable: "Structured data is not available when AI Optimization is turned off.",
         enable_button: "Enable AI Optimization",
         tooltip: "JSON-LD structured data for search engines and AI"
       }
     },

    // Homepage content
    hero: { // LP Hero keys + Original Hero keys (choose which ones to use in Hero.tsx)
      // --- New LP Hero Keys ---
      main_headline: "The Era When the Web's Subject Shifts from 'People' to 'AI' Has Begun.",
      main_subheadline: "Now that AI Chooses Information, What's Needed is AIO (AI Optimization).",
      proposition: "Ensure your products are 'found,' 'recommended,' and 'talked about' by AI in the future.",
      feature1: "✅ Structured Data × Semantic Tags × Query Design", // Example EN
      feature2: "✅ Proven Results: EC, Tourism, Movie PR, etc.", // Example EN
      feature3: "✅ Implementation & Creation OK from Individual Level", // Example EN
      cta_button1: "🔹 View Demo Now", // Example EN
      cta_button2: "🔹 What is AIO?", // Example EN
      aio_box: { // Separate object for the AIO explanation box
        title: "What is AIO (AI Optimization)?",
        description: "It refers to information structure and semantic design optimized for the AI recommendation era. It's not just traditional SEO, but a new way of PR that prepares the web so AI can easily 'understand' and 'introduce' it."
      },
      // --- Original Hero Keys ---
      headline: "Optimize Your Products for AI Recommendations",
      subheadline: "Discover how structured data, detailed descriptions, and optimized images can make your products more visible to AI shopping assistants.",
      button1: "Check Your Site",
      button2: "Learn How It Works", // Note: Same text as homepage.why_optimize.button
      assistant: {
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
        button: "Learn How It Works"
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

    // Other general keys
    product: {
      addToCart: "Add to Cart",
      details: "Details",
      features: "Features", // Added from ProductInfo?
      specifications: "Specifications", // Added from ProductInfo?
       tooltip: { // Added from ProductInfo?
         optimized_description: "Optimized product description",
         basic_description: "Basic product description",
         optimized_features: "Optimized feature list",
         basic_features: "Basic feature list"
       }
    },
    greeting: "Hello",
    farewell: "Goodbye",

    // Technical Page Translations
    technical_page: { /* ... (Assume filled similarly) ... */ },

    // Diagnostic Tool Page Translations
    diagnostic_tool_page: { /* ... (Assume filled similarly) ... */ },
  },
  ja: {
    // EC Demo Breadcrumb
    ec_demo: "ECサイトデモ",

    // All Products Page - Japanese
    all_products: {
       meta: {
         title: "ECサイトデモ - 商品一覧",
         description: "AI最適化をデモンストレーションする商品一覧をご覧ください。"
       },
       hero: {
         headline: "ECサイトデモ商品",
         subheadline: "AI最適化された商品ページのショーケースをご覧ください"
       }
     },

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
     site_checker: {
       title: "AI最適化スコアチェッカー",
       description: "商品URLを入力して、AIレコメンデーション向けにどれだけ最適化されているかをチェックします。",
       input_placeholder: "商品URLを入力（例：https://example.com/product）",
       check_button: "スコアをチェック",
       analyzing: "分析中...",
       analyzing_message: "AI最適化のためにウェブサイトを分析しています...",
       score_title: "AI最適化スコア",
       url_prefix: "URL: ",
       category_scores: "カテゴリスコア",
       key_checks: "主要チェック項目",
       improvement_recommendations: "改善の推奨",
       category: { structure: "構造", metadata: "メタデータ", images: "画像", content: "コンテンツ" },
       checks: { product_schema: "商品スキーマ", faq_schema: "FAQスキーマ", breadcrumb: "パンくずナビゲーション", title_tags: "タイトルタグ", meta_descriptions: "メタ説明", canonical_urls: "正規URL", alt_text: "代替テキストの品質", image_naming: "画像の命名", multiple_views: "複数の商品表示", heading_structure: "見出し構造", feature_lists: "機能リスト", specification_tables: "仕様テーブル" },
       add_to_improve: "{name}を追加して{category}スコアを改善"
     },

    // Product Detail Page & Fallbacks - Japanese
    product_not_found: "商品が見つかりません",
    unknown_category: "不明なカテゴリ",
    category_alt_text: "最適化された商品を特集する{categoryName}カテゴリ",

    // Product Detail Page UI elements - Japanese
    product_detail: {
       optimization: {
         optimized: "最適化あり",
         standard: "最適化なし",
         status_optimized: "AI推薦に最適化されたコンテンツを表示中",
         status_standard: "基本的なコンテンツを表示中"
       },
       structured_data: {
         title: "商品構造化データ (JSON-LD)",
         description: "この構造化データはAIが商品詳細を理解するのに役立ちます。",
         unavailable: "AI最適化がオフの場合、構造化データは利用できません。",
         enable_button: "AI最適化を有効にする",
         tooltip: "検索エンジンとAI向けのJSON-LD構造化データ"
       }
     },

    // Homepage content - Japanese
    hero: { // LP Hero keys + Original Hero keys - Japanese
      // --- New LP Hero Keys (Japanese) ---
      main_headline: "Webの主語が\"人\"から\"AI\"へ変わる時代、はじまっています。",
      main_subheadline: "AIが情報を選ぶ今、必要なのはAIO（AI Optimization）。",
      proposition: "あなたの商材がAIに「見つけられ」「推薦され」「語られる」ためのページ、設計しませんか？",
      feature1: "✅ 構造化データ × 意味タグ × 質問設計",
      feature2: "✅ EC、観光、映画PRなど、実績多数",
      feature3: "✅ 導入も制作も、個人レベルからOK",
      cta_button1: "🔹 今すぐデモを見る",
      cta_button2: "🔹 AIOとは？",
      aio_box: {
        title: "AIO（AI Optimization）とは？",
        description: "AIレコメンド時代に最適化された情報構造・意味設計のこと。単なるSEOではなく、AIが「理解しやすく」「紹介しやすい」状態にWebを整える新しいPRの在り方です。"
      },
      // --- Original Hero Keys (Japanese - remove if not needed) ---
      headline: "AIレコメンデーションのために商品を最適化",
      subheadline: "構造化データ、詳細な説明、最適化された画像が、AIショッピングアシスタントへの商品の可視性をどのように高めるかをご覧ください。",
      button1: "サイトをチェック",
      button2: "仕組みを見る",
      assistant: { /* ... (Japanese version) ... */ }
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
       features: "機能", // Added from ProductInfo?
       specifications: "仕様", // Added from ProductInfo?
       tooltip: { // Added from ProductInfo?
         optimized_description: "最適化された商品説明",
         basic_description: "基本的な商品説明",
         optimized_features: "最適化された機能リスト",
         basic_features: "基本的な機能リスト"
       }
    },
    greeting: "こんにちは",
    farewell: "さようなら",

     // Technical Page Translations - Japanese
    technical_page: { /* ... (Assume filled similarly) ... */ },

    // Diagnostic Tool Page Translations - Japanese
    diagnostic_tool_page: { /* ... (Assume filled similarly) ... */ },
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