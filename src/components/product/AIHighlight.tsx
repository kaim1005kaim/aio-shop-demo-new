import React, { ReactNode } from 'react';
import { Info } from 'lucide-react'; // Info は実際には使われないが import は残してもOK

interface AIHighlightProps {
  children: ReactNode;
  active: boolean;
  tooltip: string;
}

const AIHighlight: React.FC<AIHighlightProps> = ({ children, active, tooltip }) => {
  // ★★★ デバッグのため一時的に active の値に関わらず常に children を返す ★★★
  return <>{children}</>;
};

export default AIHighlight;