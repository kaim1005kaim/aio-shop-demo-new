// src/components/product/AIRecommendationScore.tsx

import React from 'react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import { Product } from '../../types/product';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// ChartJSの必要なコンポーネントを登録
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface AIRecommendationScoreProps {
  product: Product;
}

const AIRecommendationScore: React.FC<AIRecommendationScoreProps> = ({ product }) => {
  const { isOptimized } = useAIOptimization();

  // 非最適化と最適化のスコア設定
  const scores = {
    standard: {
      '構造化データ': 30,
      '画像説明': 25,
      '商品詳細': 40,
      'FAQ質問数': 35,
      'SEO最適化': 30,
    },
    optimized: {
      '構造化データ': 85,
      '画像説明': 90,
      '商品詳細': 95,
      'FAQ質問数': 85,
      'SEO最適化': 90,
    }
  };

  const currentScores = isOptimized ? scores.optimized : scores.standard;
  
  // 平均スコアを計算
  const calculateAverage = (scores: Record<string, number>): number => {
    const values = Object.values(scores);
    return Math.round(values.reduce((acc, curr) => acc + curr, 0) / values.length);
  };

  const averageScore = calculateAverage(currentScores);
  
  // データの設定
  const data = {
    labels: Object.keys(currentScores),
    datasets: [
      {
        label: 'AI推薦スコア',
        data: Object.values(currentScores),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }
    ]
  };

  // チャートオプション
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-100">
      <h3 className="font-bold text-xl mb-4">AI推薦スコア評価</h3>
      
      <div className="h-64 mb-6">
        <Radar data={data} options={options} />
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-2xl font-bold mb-2">
          総合スコア: <span className={isOptimized ? 'text-green-600' : 'text-orange-500'}>
            {averageScore}/100
          </span>
        </p>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          {isOptimized 
            ? 'この商品はAI推薦に最適化されています。構造化データ、詳細な商品説明、最適化された画像代替テキストにより、AIアシスタントに推薦されやすくなっています。' 
            : 'この商品はAI推薦への最適化が必要です。情報が限定的で構造化されておらず、AIアシスタントによる推薦の可能性が低くなっています。'}
        </p>
      </div>
      
      {!isOptimized && (
        <div className="mt-4 text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            AI最適化を有効にする
          </button>
        </div>
      )}
    </div>
  );
};

export default AIRecommendationScore;
