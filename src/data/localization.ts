// src/data/localization.ts (修正後・全文)

// ロケールデータの型定義
interface LocaleData {
  [key: string]: string | LocaleData; // ネストされた構造を許容
}

// 各言語の翻訳データ
// ★ Header や categories.ts で使うキーを追加・確認
const translations: { [locale: string]: LocaleData } = {
  en: {
    // Header links & Site Name
    site_name: "AIO Shop Demo",
    home: "Home",
    beauty: "Beauty",
    electronics: "Electronics",
    fashion: "Fashion",
    health: "Health Foods", // Added for Header/Category link
    kitchen: "Kitchen",     // Added for Header/Category link
    tech_explanation: "Tech Explanation",
    diagnostic_tool: "Diagnostic Tool",

    // Category Names (used via t(category.id))
    category: {
      beauty: "Beauty",
      electronics: "Electronics",
      fashion: "Fashion",
      health: "Health Foods", // Added for category name display
      kitchen: "Kitchen"     // Added for category name display
    },

    // Product Detail Page & Fallbacks
    product_not_found: "Product not found",
    unknown_category: "Unknown Category",

    // Other existing keys (add more as needed)
    product: {
      addToCart: "Add to Cart",
      details: "Details",
    },
    greeting: "Hello",
    farewell: "Goodbye",
    // Add other general translations...
  },
  ja: {
    // Header links & Site Name
    site_name: "AIOデモショップ",
    home: "ホーム",
    beauty: "ビューティー",
    electronics: "家電",
    fashion: "ファッション",
    health: "健康食品",      // Added for Header/Category link
    kitchen: "キッチン用品",    // Added for Header/Category link
    tech_explanation: "技術解説",
    diagnostic_tool: "診断ツール",

    // Category Names (used via t(category.id))
    category: {
      beauty: "ビューティー",
      electronics: "家電",
      fashion: "ファッション",
      health: "健康食品",      // Added for category name display
      kitchen: "キッチン用品"   // Added for category name display
    },

    // Product Detail Page & Fallbacks
    product_not_found: "商品が見つかりません",
    unknown_category: "不明なカテゴリ",

    // Other existing keys (add more as needed)
    product: {
      addToCart: "カートに入れる",
      details: "詳細",
    },
    greeting: "こんにちは",
    farewell: "さようなら",
     // Add other general translations...
  },
};

// ローカルストレージからロケールを取得する関数
export function getLocale(): string {
  // localStorageはブラウザ環境でのみ利用可能
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedLocale = localStorage.getItem("locale");
    // translations に存在する言語コードか確認 (オプション)
    if (storedLocale && translations[storedLocale]) {
      // console.log(`[getLocale] Returning stored locale: ${storedLocale}`);
      return storedLocale;
    }
  }
  const defaultLocale = "ja"; // デフォルト言語
  // console.log(`[getLocale] Returning default locale: ${defaultLocale}`);
  return defaultLocale;
}

// ロケールを設定し、ローカルストレージに保存する関数
export function setLocale(locale: string): void {
  // console.log(`[setLocale] Attempting to set locale: ${locale}`);
  // translations に存在する言語コードか確認 (重要)
  if (translations[locale]) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("locale", locale);
      // console.log(`[setLocale] Locale set in localStorage: ${locale}`);
      // 言語変更を即時反映させるために、Context側でState更新が必要 (実装済みのはず)
    }
  } else {
     console.warn(`[setLocale] Attempted to set unsupported locale: ${locale}`);
  }
}

// キーに基づいて翻訳テキストを取得する関数 (ネスト対応、フォールバック付き)
export function t(key: string, fallback?: string): string {
  const currentLocale = getLocale();
  // console.log(`[t] Translating key: "${key}", locale: "${currentLocale}"`);
  const keys = key.split('.');
  let result: string | LocaleData | undefined = translations[currentLocale];

  try {
      for (const k of keys) {
        // result が null でなく、オブジェクトであり、かつキー k を持っているかチェック
        if (typeof result === 'object' && result !== null && Object.prototype.hasOwnProperty.call(result, k)) {
          result = (result as LocaleData)[k];
        } else {
          // console.warn(`[t] Key segment "${k}" not found in key "${key}" for locale "${currentLocale}"`);
          result = undefined; // 見つからなかったことを示す
          break;
        }
      }
  } catch (error) {
      console.error(`[t] Error accessing key "${key}" for locale "${currentLocale}":`, error);
      result = undefined;
  }

  // 結果が文字列ならそれを返し、そうでなければ fallback があればそれを、なければキー自体を返す
  const finalResult = typeof result === 'string' ? result : fallback ?? key;
  // if (finalResult === key && !fallback) {
  //   console.warn(`[t] Translation missing for key "${key}" in locale "${currentLocale}". Returning key.`);
  // }
  // console.log(`[t] Result for "${key}": "${finalResult}"`);
  return finalResult;
}