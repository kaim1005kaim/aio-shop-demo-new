import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Zap } from 'lucide-react';

const AIToggle: React.FC = () => {
  const { isOptimized, toggleOptimization } = useAIOptimization();

  return (
    <div className="flex items-center gap-2">
      <label className="ai-toggle-switch">
        <input
          type="checkbox"
          checked={isOptimized}
          onChange={toggleOptimization}
          className="sr-only peer"
        />
        <div className="ai-toggle-slider"></div>
      </label>
      <span className="flex items-center text-sm font-medium">
        <Zap className={`h-4 w-4 mr-1 ${isOptimized ? 'text-blue-600' : 'text-gray-400'}`} />
        AI Optimized
      </span>
    </div>
  );
};

export default AIToggle;