// src/components/product/AIHighlight.tsx (修正後・全文)

import React, { ReactNode } from 'react';
import { Info } from 'lucide-react';

interface AIHighlightProps {
  children: ReactNode;
  active: boolean;
  tooltip: string;
}

const AIHighlight: React.FC<AIHighlightProps> = ({ children, active, tooltip }) => {
  // active でない場合は、子要素をそのまま返す
  if (!active) {
    return <>{children}</>;
  }

  // active な場合は、div でラップしてアイコンとツールチップを追加
  return (
    // この div が return 内の最上位要素
    <div className="group relative ai-highlight ai-highlight-active rounded-md border border-transparent"> {/* p-2 は削除したまま */}
      {/* Info アイコン */}
      <div className="absolute -top-1.5 -right-1.5 bg-blue-500 rounded-full p-0.5 text-white opacity-90 z-10">
        <Info className="h-3.5 w-3.5" />
      </div>
      {/* 元々の子要素 (サムネイルボタン) */}
      {children}
      {/* ツールチップ */}
      <span className="tooltip top-0 left-1/2 -translate-x-1/2 -translate-y-full">
        {tooltip}
      </span>
    </div> // ← ★★★ おそらくこの閉じタグが抜けていました ★★★
  ); // return 文の閉じ括弧
}; // コンポーネントの閉じ括弧

export default AIHighlight;