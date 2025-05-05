import React, { ReactNode } from 'react';
// import { Info } from 'lucide-react'; // 使わないので不要

interface AIHighlightProps {
  children: ReactNode;
  active: boolean;
  tooltip: string;
}

const AIHighlight: React.FC<AIHighlightProps> = ({ children, active, tooltip }) => {
  // active が true の場合でも、スタイルクラスや追加要素なしの
  // 単純な div でラップするだけにする (デバッグ用)
  if (active) {
    return (
      <div style={{ position: 'relative' }}> {/* 必要最低限のスタイル */}
        {children}
      </div>
    );
  }

  // active でない場合は、そのまま children を返す
  return <>{children}</>;
};

export default AIHighlight;