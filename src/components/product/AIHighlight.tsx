import React, { ReactNode } from 'react';
// import { Info } from 'lucide-react';

interface AIHighlightProps {
  children: ReactNode;
  active: boolean;
  tooltip: string;
}

const AIHighlight: React.FC<AIHighlightProps> = ({ children, active, tooltip }) => {
  if (!active) {
    return <>{children}</>;
  }

  // ★★★ 最終テスト: スタイル無しの div でラップ ★★★
  return (
    <div>
      {children}
    </div>
  );
};

export default AIHighlight;