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

    // Language selector and optimization toggle
    language_selector: {
      label: "Language"
    },
    optimization: {
      on: "AI Optimization: ON",
      off: "AI Optimization: OFF"
    },

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
    
    // SiteCheckerコンポーネントの翻訳
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
      category: {
        structure: "構造",
        metadata: "メタデータ",
        images: "画像",
        content: "コンテンツ"
      },
      checks: {
        product_schema: "商品スキーマ",
        faq_schema: "FAQスキーマ",
        breadcrumb: "パンくずナビゲーション",
        title_tags: "タイトルタグ",
        meta_descriptions: "メタ説明",
        canonical_urls: "正規URL",
        alt_text: "代替テキストの品質",
        image_naming: "画像の命名",
        multiple_views: "複数の商品表示",
        heading_structure: "見出し構造",
        feature_lists: "機能リスト",
        specification_tables: "仕様テーブル"
      },
      add_to_improve: "{name}を追加して{category}スコアを改善"
    },

    // Product Detail Page & Fallbacks
    product_not_found: "Product not found",
    unknown_category: "Unknown Category",
    // CategoryHighlights Alt text
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
      features: "Features",
      specifications: "Specifications",
      tooltip: {
        optimized_description: "Optimized product description",
        basic_description: "Basic product description",
        optimized_features: "Optimized feature list",
        basic_features: "Basic feature list"
      }
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

    // Language selector and optimization toggle
    language_selector: {
      label: "言語"
    },
    optimization: {
      on: "AI最適化: ON",
      off: "AI最適化: OFF"
    },

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
      features: "機能",
      specifications: "仕様",
      tooltip: {
        optimized_description: "最適化された商品説明",
        basic_description: "基本的な商品説明",
        optimized_features: "最適化された機能リスト",
        basic_features: "基本的な機能リスト"
      }
    },
    greeting: "こんにちは",
    farewell: "さようなら",
    
    // 技術解説ページの翻訳
    technical_page: {
      meta: {
        title: "技術解説 - AI最適化テクニック",
        description: "AI駆動型ショッピングアシスタントでの可視性を向上させる商品ページのAI最適化の技術的実装について学びます。"
      },
      hero: {
        headline: "技術実装ガイド",
        subheadline: "商品ページをAIレコメンデーション向けに最適化する方法"
      },
      understanding: {
        headline: "AIの認識理解",
        paragraph1: "ChatGPT、Claude、GeminiなどのAIショッピングアシスタントは、人間とは異なる方法でウェブコンテンツを認識します。従来のSEOがキーワードターゲティングとリンク構築に焦点を当てているのに対し、AI最適化には構造化データ、包括的な商品情報、明確なセマンティックコンテンツ構成に焦点を当てる必要があります。",
        paragraph2: "これらのAIシステムが商品ページを分析してレコメンデーションを行う際、以下のようなページを優先します：",
        list: {
          item1: "簡単に解析できる明確で構造化された情報を持つ",
          item2: "マーケティング用語ではなく、包括的な商品詳細を提供する",
          item3: "標準化された形式で技術仕様を含む",
          item4: "商品に関する一般的な質問に回答する",
          item5: "適切なメタデータと画像の説明を含む"
        }
      },
      key_elements: {
        headline: "主要な最適化要素",
        structured_data: {
          title: "構造化データ（JSON-LD）",
          description: "JSON-LD形式でschema.orgマークアップを実装することで、AIシステムが標準化された方法で商品情報を理解するのに役立ちます。これはAI最適化の最も重要な要素かもしれません。"
        },
        rich_image: {
          title: "詳細な画像代替テキスト",
          description: "AIシステムは画像を理解するために代替テキストに大きく依存しています。一般的な代替テキストではなく、商品名、主要機能、コンテキストを含む詳細な説明テキストを提供してください。",
          standard: "標準的な代替テキスト：",
          optimized: "AI最適化された代替テキスト："
        },
        faq_schema: {
          title: "FAQスキーマの実装",
          description: "FAQはユーザーを助けるだけでなく、ユーザーが関連する質問をした際に直接引用できる質問と回答のペアをAIシステムに提供します。"
        },
        content_organization: {
          title: "構造化されたコンテンツ組織",
          description: "適切なセマンティックHTML要素を使用することで、AIがページ上の情報の階層と関係を理解するのに役立ちます。",
          standard: "標準的なアプローチ：",
          optimized: "AI最適化されたアプローチ："
        }
      },
      checklist: {
        headline: "実装チェックリスト",
        items: {
          title1: "JSON-LD構造化データの実装", 
          description1: "オファー、ブランド、評価など、利用可能なすべてのフィールドを含む完全な商品スキーマを含めます。",
          title2: "商品説明の最適化", 
          description2: "曖昧なマーケティング言語ではなく、具体的な詳細、寸法、材料、使用例を含めます。",
          title3: "すべての画像に詳細な代替テキストを追加", 
          description3: "すべての商品画像の代替テキストに商品名、主要機能、関連するコンテキストを含めます。",
          title4: "FAQスキーマの実装", 
          description4: "詳細な回答を含む一般的な質問に対する包括的なFAQを作成します。",
          title5: "セマンティックHTMLでコンテンツを整理", 
          description5: "コンテンツ構成には、適切なH1-H6見出し、リスト、テーブル、セマンティック要素を使用します。",
          title6: "仕様テーブルの作成", 
          description6: "明確なラベルを持つ構造化されたテーブル形式で技術仕様を提示します。",
          title7: "比較情報の追加", 
          description7: "商品の位置付けを支援するために、類似商品や以前のバージョンとの明確な比較を提供します。"
        }
      },
      testing: {
        headline: "AI最適化のテスト",
        description: "これらの最適化を実装した後、以下の方法でその効果をテストできます：",
        list: {
          item1: "ページのAI対応度を評価するためにAI最適化スコアツールを使用する",
          item2: "様々なAIショッピングアシスタントでテストして、あなたの商品が推奨されるかどうかを確認する",
          item3: "GoogleのリッチリザルトテストとSchema.orgバリデーターであなたの構造化データを検証する",
          item4: "AI駆動型検索ツールからのトラフィックと変換率の変化を監視する"
        }
      },
      cta: "AI最適化スコアツールを試す"
    },
    
    // 診断ツールページの翻訳
    diagnostic_tool_page: {
      meta: {
        title: "AI最適化スコアツール - AIOショップ",
        description: "私たちの診断ツールで、あなたの商品ページがAIレコメンデーションにどれだけ最適化されているかをチェックします。"
      },
      hero: {
        headline: "AI最適化スコアツール",
        subheadline: "商品ページがAIレコメンデーションにどれだけ最適化されているかを分析します"
      },
      about: {
        headline: "AI最適化スコアについて",
        description: "私たちのAI最適化スコアは、商品ページのさまざまな要素を分析して、AIの理解とレコメンデーションにどれだけ適した構造になっているかを判断します。このツールは、構造化データ、メタデータ、画像最適化、コンテンツ構造の存在と品質をチェックします。"
      },
      checks: {
        headline: "チェック項目",
        structure: {
          title: "構造チェック",
          items: {
            item1: "商品構造化データ",
            item2: "FAQスキーマの実装",
            item3: "パンくずナビゲーション",
            item4: "HowToスキーマ（該当する場合）"
          }
        },
        metadata: {
          title: "メタデータチェック",
          items: {
            item1: "タイトルタグの最適化",
            item2: "メタ説明の品質",
            item3: "Openグラフタグ",
            item4: "正規URLの実装"
          }
        },
        images: {
          title: "画像チェック",
          items: {
            item1: "代替テキストの品質と長さ",
            item2: "画像命名規則",
            item3: "複数の商品表示",
            item4: "画像キャプション"
          }
        },
        content: {
          title: "コンテンツチェック",
          items: {
            item1: "見出し構造",
            item2: "機能リストのフォーマット",
            item3: "仕様テーブル",
            item4: "Q&Aコンテンツの構成"
          }
        }
      },
      score: {
        headline: "スコアの解釈",
        ranges: {
          range1: "0-40", 
          title1: "改善が必要", 
          description1: "あなたの商品ページにはAI最適化に必要な多くの重要な要素が欠けています。AIアシスタントはあなたの商品を正確に推奨するのに苦労するでしょう。",
          range2: "41-70", 
          title2: "平均的", 
          description2: "あなたの商品ページにはある程度の最適化がありますが、重要な要素が欠けています。AIアシスタントはあなたの商品を推奨するかもしれませんが、詳細は限られています。",
          range3: "71-100", 
          title3: "十分に最適化", 
          description3: "あなたの商品ページはAIの理解のために十分に構造化されています。AIアシスタントはあなたの商品を正確に推奨し説明することができます。"
        },
        note: "AI最適化は継続的なプロセスであることを忘れないでください。AI技術が進化するにつれて、最適化の基準も発展し続けるでしょう。商品ページを定期的にテストし、改善を実装することで、AI主導の商取引環境でも商品の可視性を確保できます。"
      }
    },
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