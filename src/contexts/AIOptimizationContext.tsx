import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AIOptimizationContextType {
  isOptimized: boolean;
  toggleOptimization: () => void;
}

const AIOptimizationContext = createContext<AIOptimizationContextType | undefined>(undefined);

export const useAIOptimization = () => {
  const context = useContext(AIOptimizationContext);
  if (context === undefined) {
    throw new Error('useAIOptimization must be used within an AIOptimizationProvider');
  }
  return context;
};

interface AIOptimizationProviderProps {
  children: ReactNode;
}

export const AIOptimizationProvider: React.FC<AIOptimizationProviderProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(true);

  const toggleOptimization = () => {
    setIsOptimized(!isOptimized);
  };

  return (
    <AIOptimizationContext.Provider value={{ isOptimized, toggleOptimization }}>
      {children}
    </AIOptimizationContext.Provider>
  );
};