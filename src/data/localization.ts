// src/data/localization.ts

// ロケールデータの型定義
interface LocaleData {
  [key: string]: string | LocaleData; // ネストされた構造を許容
}

// 各言語の翻訳データ (仮。実際にはJSONファイルなどから読み込むべき)
const translations: { [locale: string]: LocaleData } = {
  en: {
    greeting: "Hello",
    farewell: "Goodbye",
    category: { // ネストされたカテゴリ
      electronics: "Electronics",
      clothing: "Clothing",
      home: "Home Goods",
      books: "Books",
      sports: "Sports & Outdoors",
    },
    product: {
      addToCart: "Add to Cart",
      details: "Details",
    },
    // ... other translations
  },
  ja: {
    greeting: "こんにちは",
    farewell: "さようなら",
    category: {
      electronics: "電化製品",
      clothing: "衣料品",
      home: "家庭用品",
      books: "書籍",
      sports: "スポーツ・アウトドア",
    },
    product: {
      addToCart: "カートに入れる",
      details: "詳細",
    },
    // ... other translations
  },
  // ... other languages
};

// --- ここから修正 ---

// ローカルストレージからロケールを取得する関数 (定義を先に移動)
export function getLocale(): string {
  return localStorage.getItem("locale") || "ja"; // デフォルトは 'ja'
}

// 現在のロケール (getLocale() の定義後に初期化)
let currentLocale: string = getLocale();

// ロケールを設定し、ローカルストレージに保存する関数
export function setLocale(locale: string): void {
  currentLocale = locale;
  localStorage.setItem("locale", locale);
  // 必要であれば、言語変更イベントを発火させるなどの処理を追加
  // window.dispatchEvent(new Event('languagechange'));
}

// --- ここまで修正 ---


// キーに基づいて翻訳テキストを取得する関数 (ネスト対応)
export function t(key: string): string {
  const keys = key.split('.'); // ドット区切りでキーを分割 (例: "category.electronics")
  let result: string | LocaleData | undefined = translations[currentLocale]; // 現在のロケールの翻訳データを取得

  for (const k of keys) {
    // result が null でなく、オブジェクトであり、かつキー k を持っているかチェック
    if (typeof result === 'object' && result !== null && k in result) {
      // result[k] の型アサーションを追加するか、より安全な型チェックを行う
      // ここでは、result が LocaleData 型であることを期待してアクセス
      result = (result as LocaleData)[k];
    } else {
      return key; // 見つからない場合はキー自体を返す
    }
  }

  // result が最終的に文字列でなければキーを返す
  return typeof result === 'string' ? result : key;
}

// 不要な初期化呼び出しはコメントアウトまたは削除
// setLocale(getLocale());