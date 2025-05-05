// src/data/localization.ts (最終決定版・全文)

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
       category: { structure: "Structure", metadata: "Metadata", images: "Images", content: "Content" },
       checks: { product_schema: "Product Schema", faq_schema: "FAQ Schema", breadcrumb: "Breadcrumb Nav", title_tags: "Title Tags", meta_descriptions: "Meta Descriptions", canonical_urls: "Canonical URLs", alt_text: "Alt Text Quality", image_naming: "Image Naming", multiple_views: "Multiple Product Views", heading_structure: "Heading Structure", feature_lists: "Feature Lists", specification_tables: "Specification Tables" },
       add_to_improve: "Add {name} to improve {category} score"
     },

    // Product Detail Page & Fallbacks
    product_not_found: "Product not found",
    unknown_category: "Unknown Category",
    category_alt_text: "{categoryName} category featuring optimized products", // Interpolation key

    // Product Detail Page UI elements
    product_detail: {
       optimization: { optimized: "Optimized", standard: "Standard", status_optimized: "Showing AI-optimized content", status_standard: "Showing basic content" },
       structured_data: { title: "Product Structured Data (JSON-LD)", description: "This structured data helps AI understand the product details.", unavailable: "Structured data is not available when AI Optimization is turned off.", enable_button: "Enable AI Optimization", tooltip: "JSON-LD structured data for search engines and AI" },
       // Keys for FAQ and Comparison within Product Detail scope
       faq: { title: "Frequently Asked Questions" },
       comparison: { title: "How Our Products Compare", header: { feature: "Feature", our_products: "Our Products", competitors: "Competitor Products" } }
     },

    // Homepage content
    hero: { // LP Hero keys + Original Hero keys
      main_headline: "The Era When the Web's Subject Shifts from 'People' to 'AI' Has Begun.",
      main_subheadline: "Now that AI Chooses Information, What's Needed is AIO (AI Optimization).",
      proposition: "Ensure your products are 'found,' 'recommended,' and 'talked about' by AI in the future.",
      feature1: "✅ Structured Data × Semantic Tags × Query Design",
      feature2: "✅ Proven Results: EC, Tourism, Movie PR, etc.",
      feature3: "✅ Implementation & Creation OK from Individual Level",
      cta_button1: "🔹 View Demo Now",
      cta_button2: "🔹 What is AIO?",
      aio_box: {
        title: "What is AIO (AI Optimization)?",
        description: "It refers to information structure and semantic design optimized for the AI recommendation era. It's not just traditional SEO, but a new way of PR that prepares the web so AI can easily 'understand' and 'introduce' it.",
        point1: "Improves visibility in AI assistants.",
        point2: "Leads to more relevant recommendations.",
        point3: "Crucial for voice search and future platforms.",
        link: "Learn more about the technology"
      },
      headline: "Optimize Your Products for AI Recommendations", // Original - remove if unused
      subheadline: "Discover how structured data, detailed descriptions, and optimized images can make your products more visible to AI shopping assistants.", // Original - remove if unused
      button1: "Check Your Site", // Original - remove if unused
      button2: "Learn How It Works", // Original - remove if unused (Note: Same text as homepage.why_optimize.button)
      assistant: { /* ... Keep if needed ... */ }
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
      meta: { title: "AIO Shop - AI Recommendation Optimized Demo Store", description: "Discover how to structure your online store for optimal AI recommendations and visibility with our interactive demo." },
      why_optimize: {
        headline: "Why AI Optimization Matters",
        subheadline: "As AI shopping assistants become mainstream, having AI-optimized product listings will be a key competitive advantage.",
        point1: { title: "Increased Visibility", text: "AI-optimized products are more likely to be recommended by AI shopping assistants." },
        point2: { title: "Better Conversions", text: "When AI understands your products, it can match them to the right customer needs." },
        point3: { title: "Future-Proof Sales", text: "As voice and AI shopping grows, optimized listings will maintain their competitive edge." },
        button: "Learn How It Works" // Note: Same text as hero.button2
      }
    },
    footer: { // Keys for Footer component
      title: "AIO Shop",
      description: "A demonstration website showcasing how to optimize web content for AI recommendations.",
      categories: { title: "Categories" },
      resources: { title: "Resources" },
      copyright: { pt1: "© {year} AIO Shop Demo.", pt2: "This is a demonstration site for educational purposes only." }
    },

    // Other general keys
    product: { // Merged keys for product related items
      addToCart: "Add to Cart",
      details: "Details",
      features: "Features",
      specifications: "Specifications",
      tooltip: { optimized_description: "Optimized product description", basic_description: "Basic product description", optimized_features: "Optimized feature list", basic_features: "Basic feature list" },
      faq: { title: "Frequently Asked Questions" }, // For ProductFAQ title
      comparison: { title: "How Our Products Compare", header: { feature: "Feature", our_products: "Our Products", competitors: "Competitor Products" } }, // For ProductComparison title/headers
      dummy_reviewer: "AIO Shop User", // For dummy review in StructuredData
      dummy_review: "Great quality, exceeded expectations." // For dummy review in StructuredData
    },
    greeting: "Hello",
    farewell: "Goodbye",

    // Technical Page Translations
    technical_page: {
      meta: { title: "Technical Explanation - AI Optimization Techniques", description: "Learn about the technical implementation of AI optimization for product pages that improve visibility in AI-powered shopping assistants." },
      hero: { headline: "Technical Implementation Guide", subheadline: "How to optimize your product pages for AI recommendations" },
      understanding: { headline: "Understanding AI Perception", paragraph1: "AI shopping assistants like ChatGPT, Claude, and Gemini perceive web content differently than humans. While traditional SEO focuses on keyword targeting and link building, AI optimization requires a focus on structured data, comprehensive product information, and clear, semantic content organization.", paragraph2: "When these AI systems analyze product pages to make recommendations, they prioritize pages that:", list: { item1: "Have clear, structured information that can be easily parsed", item2: "Provide comprehensive product details rather than marketing fluff", item3: "Include technical specifications in a standardized format", item4: "Answer common questions about the product", item5: "Contain proper metadata and image descriptions" } },
      key_elements: { headline: "Key Optimization Elements", structured_data: { title: "Structured Data (JSON-LD)", description: "Implementing schema.org markup in JSON-LD format helps AI systems understand the product information in a standardized way. This is perhaps the most critical element of AI optimization." }, rich_image: { title: "Rich Image Alt Text", description: "AI systems rely heavily on alt text to understand images. Instead of generic alt text, provide detailed, descriptive text that includes the product name, key features, and context.", standard: "Standard Alt Text:", optimized: "AI-Optimized Alt Text:" }, faq_schema: { title: "FAQ Schema Implementation", description: "FAQs not only help users but also provide AI systems with question-answer pairs that can be directly cited when users ask related questions." }, content_organization: { title: "Structured Content Organization", description: "Using proper semantic HTML elements helps AI understand the hierarchy and relationship of information on your page.", standard: "Standard Approach:", optimized: "AI-Optimized Approach:" } },
      checklist: { headline: "Implementation Checklist", items: { title1: "Implement JSON-LD Structured Data", description1: "Include complete Product schema with all available fields including offers, brand, and ratings.", title2: "Optimize Product Descriptions", description2: "Include specific details, measurements, materials, and use cases rather than vague marketing language.", title3: "Add Detailed Alt Text for All Images", description3: "Include product name, key features, and relevant context in alt text for all product images.", title4: "Implement FAQ Schema", description4: "Create comprehensive FAQs addressing common questions, with detailed answers.", title5: "Organize Content with Semantic HTML", description5: "Use proper H1-H6 headings, lists, tables, and semantic elements for content organization.", title6: "Create Specification Tables", description6: "Present technical specifications in a structured table format with clear labels.", title7: "Add Comparative Information", description7: "Provide clear comparisons with similar products or previous versions to help position the product." } },
      testing: { headline: "Testing Your AI Optimization", description: "After implementing these optimizations, you can test their effectiveness by:", list: { item1: "Using our AI Optimization Score Tool to evaluate your page's readiness", item2: "Testing with various AI shopping assistants to see if your product is recommended", item3: "Validating your structured data with Google's Rich Results Test and Schema.org Validator", item4: "Monitoring changes in traffic and conversion rates from AI-powered search tools" } },
      cta: "Try Our AI Optimization Score Tool"
    },

    // Diagnostic Tool Page Translations
    diagnostic_tool_page: {
      meta: { title: "AI Optimization Score Tool - AIO Shop", description: "Check how well your product pages are optimized for AI recommendations with our diagnostic tool." },
      hero: { headline: "AI Optimization Score Tool", subheadline: "Analyze your product pages to see how well they're optimized for AI recommendations" },
      about: { headline: "About the AI Optimization Score", description: "Our AI Optimization Score analyzes various elements of your product pages to determine how well they're structured for AI understanding and recommendations. The tool checks for the presence and quality of structured data, metadata, image optimization, and content structure." },
      checks: { headline: "What We Check", structure: { title: "Structure Checks", items: { item1: "Product structured data", item2: "FAQ schema implementation", item3: "Breadcrumb navigation", item4: "HowTo schema (when applicable)" } }, metadata: { title: "Metadata Checks", items: { item1: "Title tag optimization", item2: "Meta description quality", item3: "Open Graph tags", item4: "Canonical URL implementation" } }, images: { title: "Image Checks", items: { item1: "Alt text quality and length", item2: "Image naming conventions", item3: "Multiple product views", item4: "Image captions" } }, content: { title: "Content Checks", items: { item1: "Heading structure", item2: "Feature lists formatting", item3: "Specification tables", item4: "Q&A content organization" } } },
      score: { headline: "Interpreting Your Score", ranges: { range1: "0-40", title1: "Needs Improvement", description1: "Your product pages are missing many essential elements for AI optimization. AI assistants will struggle to recommend your products accurately.", range2: "41-70", title2: "Average", description2: "Your product pages have some optimization but are missing key elements. AI assistants may recommend your products but with limited details.", range3: "71-100", title3: "Well Optimized", description3: "Your product pages are well structured for AI understanding. AI assistants can accurately recommend and describe your products." }, note: "Remember that AI optimization is an ongoing process. As AI technology evolves, the standards for optimization will continue to develop. Regularly testing your product pages and implementing improvements will help ensure your products remain visible in the AI-driven commerce landscape." }
    },
  },
  ja: {
    // EC Demo Breadcrumb
    ec_demo: "ECサイトデモ",

    // All Products Page - Japanese
    all_products: {
       meta: { title: "ECサイトデモ - 商品一覧", description: "AI最適化をデモンストレーションする商品一覧をご覧ください。" },
       hero: { headline: "ECサイトデモ商品", subheadline: "AI最適化された商品ページのショーケースをご覧ください" }
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
       optimization: { optimized: "最適化あり", standard: "最適化なし", status_optimized: "AI推薦に最適化されたコンテンツを表示中", status_standard: "基本的なコンテンツを表示中" },
       structured_data: { title: "商品構造化データ (JSON-LD)", description: "この構造化データはAIが商品詳細を理解するのに役立ちます。", unavailable: "AI最適化がオフの場合、構造化データは利用できません。", enable_button: "AI最適化を有効にする", tooltip: "検索エンジンとAI向けのJSON-LD構造化データ" },
       // Keys for FAQ and Comparison within Product Detail scope - Japanese
       faq: { title: "よくある質問" },
       comparison: { title: "製品比較", header: { feature: "機能/特徴", our_products: "本製品", competitors: "競合製品" } }
     },

    // Homepage content - Japanese
    hero: { // LP Hero keys + Original Hero keys - Japanese
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
        description: "AIレコメンド時代に最適化された情報構造・意味設計のこと。単なるSEOではなく、AIが「理解しやすく」「紹介しやすい」状態にWebを整える新しいPRの在り方です。",
        point1: "AIアシスタントでの視認性を向上させます。",
        point2: "より関連性の高い推薦につながります。",
        point3: "音声検索や未来のプラットフォームに不可欠です。",
        link: "技術詳細はこちら"
      },
      headline: "AIレコメンデーションのために商品を最適化", // Original - remove if unused
      subheadline: "構造化データ、詳細な説明、最適化された画像が、AIショッピングアシスタントへの商品の可視性をどのように高めるかをご覧ください。", // Original - remove if unused
      button1: "サイトをチェック", // Original - remove if unused
      button2: "仕組みを見る", // Original - remove if unused
      assistant: { /* ... (Assume filled Japanese) ... */ }
    },
    featured: { headline: "注目商品", subheadline: "AIに最適化され、商品の可視性に関するベストプラクティスを示す商品ページのショーケースをご覧ください。", button_all: "すべての商品を見る" },
    categories: { headline: "カテゴリ一覧", subheadline: "AIによる発見と推薦のために最適化された商品カテゴリをご覧ください。" },
    homepage: { meta: { title: "AIOデモショップ - AIレコメンデーション最適化デモストア", description: "オンラインストアをAIレコメンデーションと可視性のために最適に構成する方法を、インタラクティブなデモでご覧ください。" }, why_optimize: { headline: "なぜAI最適化が重要なのか", subheadline: "AIショッピングアシスタントが主流になるにつれて、AIに最適化された商品リストを持つことが競争上の重要な利点となります。", point1: { title: "視認性の向上", text: "AIに最適化された商品は、AIショッピングアシスタントによって推薦される可能性が高くなります。" }, point2: { title: "コンバージョン率の向上", text: "AIが商品を理解すると、適切な顧客のニーズに合致させることができます。" }, point3: { title: "将来性のある販売", text: "音声およびAIショッピングが成長するにつれて、最適化されたリスティングはその競争力を維持します。" }, button: "仕組みを見る" } },
     footer: { title: "AIOデモショップ", description: "AIレコメンデーションのためにウェブコンテンツを最適化する方法を示すデモンストレーションサイト。", categories: { title: "カテゴリ" }, resources: { title: "リソース" }, copyright: { pt1: "© {year} AIOデモショップ.", pt2: "これは教育目的のデモンストレーションサイトです。" } },

    // Other general keys - Japanese
    product: { // Merged keys for product related items - Japanese
      addToCart: "カートに入れる",
      details: "詳細",
      features: "機能",
      specifications: "仕様",
      tooltip: { optimized_description: "最適化された商品説明", basic_description: "基本的な商品説明", optimized_features: "最適化された機能リスト", basic_features: "基本的な機能リスト" },
      faq: { title: "よくある質問" }, // For ProductFAQ title
      comparison: { title: "製品比較", header: { feature: "機能/特徴", our_products: "本製品", competitors: "競合製品" } }, // For ProductComparison title/headers
      dummy_reviewer: "AIショップユーザー", // For dummy review in StructuredData
      dummy_review: "品質が良く、期待以上の商品でした。" // For dummy review in StructuredData
    },
    greeting: "こんにちは",
    farewell: "さようなら",

    // ★★★ Technical Page Translations - Japanese ★★★
    technical_page: {
      meta: { title: "技術解説 - AI最適化テクニック", description: "AI駆動型ショッピングアシスタントでの可視性を向上させる商品ページのAI最適化の技術実装について学びましょう。" },
      hero: { headline: "技術実装ガイド", subheadline: "AIレコメンデーションのために商品ページを最適化する方法" },
      understanding: { headline: "AI認識の理解", paragraph1: "ChatGPT、Claude、GeminiなどのAIショッピングアシスタントは、人間とは異なる方法でWebコンテンツを認識します。従来のSEOがキーワードターゲティングとリンク構築に重点を置いているのに対し、AI最適化では構造化データ、包括的な商品情報、明確なセマンティックコンテンツ構成に重点を置く必要があります。", paragraph2: "これらのAIシステムが推奨事項を作成するために商品ページを分析する際、以下のようなページを優先します：", list: { item1: "簡単に解析できる明確で構造化された情報を持つ", item2: "マーケティング文句ではなく、包括的な商品詳細を提供する", item3: "標準化された形式で技術仕様を含む", item4: "商品に関する一般的な質問に回答する", item5: "適切なメタデータと画像の説明を含む" } },
      key_elements: { headline: "主要な最適化要素", structured_data: { title: "構造化データ（JSON-LD）", description: "JSON-LD形式でschema.orgマークアップを実装することで、AIシステムが標準化された方法で商品情報を理解するのに役立ちます。これはAI最適化の最も重要な要素かもしれません。" }, rich_image: { title: "詳細な画像代替テキスト", description: "AIシステムは画像を理解するために代替テキストに大きく依存しています。一般的な代替テキストではなく、商品名、主要機能、コンテキストを含む詳細な説明テキストを提供してください。", standard: "標準的な代替テキスト：", optimized: "AI最適化された代替テキスト：" }, faq_schema: { title: "FAQスキーマの実装", description: "FAQはユーザーを助けるだけでなく、ユーザーが関連する質問をした際に直接引用できる質問と回答のペアをAIシステムに提供します。" }, content_organization: { title: "構造化されたコンテンツ組織", description: "適切なセマンティックHTML要素を使用することで、AIがページ上の情報の階層と関係を理解するのに役立ちます。", standard: "標準的なアプローチ：", optimized: "AI最適化されたアプローチ：" } },
      checklist: { headline: "実装チェックリスト", items: { title1: "JSON-LD構造化データの実装", description1: "オファー、ブランド、評価など、利用可能なすべてのフィールドを含む完全な商品スキーマを含めます。", title2: "商品説明の最適化", description2: "曖昧なマーケティング言語ではなく、具体的な詳細、寸法、材料、使用例を含めます。", title3: "すべての画像に詳細な代替テキストを追加", description3: "すべての商品画像の代替テキストに商品名、主要機能、関連するコンテキストを含めます。", title4: "FAQスキーマの実装", description4: "詳細な回答を含む一般的な質問に対する包括的なFAQを作成します。", title5: "セマンティックHTMLでコンテンツを整理", description5: "コンテンツ構成には、適切なH1-H6見出し、リスト、テーブル、セマンティック要素を使用します。", title6: "仕様テーブルの作成", description6: "明確なラベルを持つ構造化されたテーブル形式で技術仕様を提示します。", title7: "比較情報の追加", description7: "商品の位置付けを支援するために、類似商品や以前のバージョンとの明確な比較を提供します。" } },
      testing: { headline: "AI最適化のテスト", description: "これらの最適化を実装した後、以下の方法でその効果をテストできます：", list: { item1: "ページのAI対応度を評価するためにAI最適化スコアツールを使用する", item2: "様々なAIショッピングアシスタントでテストして、あなたの商品が推奨されるかどうかを確認する", item3: "GoogleのリッチリザルトテストとSchema.orgバリデーターであなたの構造化データを検証する", item4: "AI駆動型検索ツールからのトラフィックと変換率の変化を監視する" } },
      cta: "AI最適化スコアツールを試す"
    },

    // ★★★ Diagnostic Tool Page Translations - Japanese ★★★
    diagnostic_tool_page: {
       meta: { title: "AI最適化スコアツール - AIOショップ", description: "私たちの診断ツールで、あなたの商品ページがAIレコメンデーションにどれだけ最適化されているかをチェックします。" },
       hero: { headline: "AI最適化スコアツール", subheadline: "AIレコメンデーション向けに商品ページがどれだけよく最適化されているかを分析する" },
       about: { headline: "AI最適化スコアについて", description: "私たちのAI最適化スコアは、商品ページのさまざまな要素を分析して、AIの理解とレコメンデーションにどれだけ適した構造になっているかを判断します。このツールは、構造化データ、メタデータ、画像最適化、コンテンツ構造の存在と品質をチェックします。" },
       checks: { headline: "チェック項目", structure: { title: "構造チェック", items: { item1: "商品構造化データ", item2: "FAQスキーマの実装", item3: "パンくずナビゲーション", item4: "HowToスキーマ（該当する場合）" } }, metadata: { title: "メタデータチェック", items: { item1: "タイトルタグの最適化", item2: "メタ説明の品質", item3: "Openグラフタグ", item4: "正規URLの実装" } }, images: { title: "画像チェック", items: { item1: "代替テキストの品質と長さ", item2: "画像命名規則", item3: "複数の商品表示", item4: "画像キャプション" } }, content: { title: "コンテンツチェック", items: { item1: "見出し構造", item2: "機能リストのフォーマット", item3: "仕様テーブル", item4: "Q&Aコンテンツの構成" } } },
       score: { headline: "スコアの解釈", ranges: { range1: "0-40", title1: "改善が必要", description1: "あなたの商品ページにはAI最適化に必要な多くの重要な要素が欠けています。AIアシスタントはあなたの商品を正確に推奨するのに苦労するでしょう。", range2: "41-70", title2: "平均的", description2: "あなたの商品ページにはある程度の最適化がありますが、重要な要素が欠けています。AIアシスタントはあなたの商品を推奨するかもしれませんが、詳細は限られています。", range3: "71-100", title3: "十分に最適化", description3: "あなたの商品ページはAIの理解のために十分に構造化されています。AIアシスタントはあなたの商品を正確に推奨し説明することができます。" }, note: "AI最適化は継続的なプロセスであることを忘れないでください。AI技術が進化するにつれて、最適化の基準も発展し続けるでしょう。商品ページを定期的にテストし、改善を実装することで、AI主導の商取引環境でも商品の可視性を確保できます。" }
    },
    // ★★★ End of filled sections ★★★
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

  // Warning for missing keys moved slightly to avoid warning on fallback usage
  if (result === undefined && !fallback && key.includes('.')) {
     console.warn(`[t] Translation missing for key "${key}" in locale "${currentLocale}". Returning key.`);
  }

  return finalResult;
}