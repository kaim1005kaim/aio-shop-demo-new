// src/components/product/AIHighlight.tsx (p-2 を削除して元に戻す試み)

import React, { ReactNode } from 'react';
import { Info } from 'lucide-react';

interface AIHighlightProps {
  children: ReactNode;
  active: boolean;
  tooltip: string;
}

const AIHighlight: React.FC<AIHighlightProps> = ({ children, active, tooltip }) => {
  if (!active) {
    return <>{children}</>;
  }

  // ★ 修正: この div から p-2 を削除してみる
  return (
-   <div className="group relative ai-highlight ai-highlight-active rounded-md p-2 border border-transparent">
+   <div className="group relative ai-highlight ai-highlight-active rounded-md border border-transparent"> {/* p-2 を削除 */}
      <div className="absolute -top-1.5 -right-1.5 bg-blue-500 rounded-full p-0.5 text-white opacity-90 z-10">
        <Info className="h-3.5 w-3.5" />
      </div>
      {children}
      <span className="tooltip top-0 left-1/2 -translate-x-1/2 -translate-y-full">
        {tooltip}
      </span>
    </div>
  );
};

export default AIHighlight;