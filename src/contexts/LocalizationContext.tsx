import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
// '../data/localization' から正しくインポートし、名前の衝突を避けるために別名も使用
import { getLocale, setLocale as setLocaleInData, t as translateFromData } from '../data/localization';

interface LocalizationContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context; // これは元々正しい
};

interface LocalizationProviderProps {
  children: ReactNode;
}

// --- LocalizationProvider 外の不要な関数定義は削除 ---

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  // useState の初期化は getLocale() でOK
  const [locale, setLocaleState] = useState(getLocale());

  useEffect(() => {
    // HTMLのlang属性を更新
    document.documentElement.lang = locale;
  }, [locale]);

  // setLocale ハンドラを修正: data層の関数を呼び出し、Reactのstateも更新
  const handleSetLocale = (newLocale: string) => {
    // ここで newLocale が有効な言語コードかチェックするロジックを追加しても良い
    // (例: importしたtranslationsオブジェクトのキーに存在するか確認するなど)
    // 今回はシンプルに data 層の関数を呼ぶ
    setLocaleInData(newLocale); // data層の setLocale を実行 (localStorage 等を更新)
    setLocaleState(newLocale);  // React の state を更新して再レンダリングをトリガー
  };

  // --- t 関数の再定義は不要 ---

  // Provider に渡す value を修正: インポートした関数と、修正したハンドラを渡す
  return (
    <LocalizationContext.Provider value={{
      locale,                // 現在のロケール state
      setLocale: handleSetLocale, // 修正したロケール設定関数
      t: translateFromData   // data層からインポートした翻訳関数を 't' として渡す
    }}>
      {children}
    </LocalizationContext.Provider>
  );
};