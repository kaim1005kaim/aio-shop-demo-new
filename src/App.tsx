// src/App.tsx (修正後・全文)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage'; // HomePageをインポート
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import TechnicalPage from './pages/TechnicalPage';
import DiagnosticTool from './pages/DiagnosticTool';
import AllProductsPage from './pages/AllProductsPage'; // AllProductsPageもインポート
import { AIOptimizationProvider } from './contexts/AIOptimizationContext';
import { LocalizationProvider } from './contexts/LocalizationContext';

function App() {
  return (
    <HelmetProvider>
      <LocalizationProvider>
        <AIOptimizationProvider>
          <Router>
            <Layout>
              <Routes>
                {/* ↓↓↓ ルートパスの修正 ↓↓↓ */}
                <Route path="/" element={<HomePage />} />
                {/* ↑↑↑ ルートパス ("/") に HomePage を表示 */}

                {/* 必要であれば、AllProductsPage に新しいパスを割り当て */}
                <Route path="/products" element={<AllProductsPage />} />

                {/* /home パスは不要になる可能性が高いのでコメントアウトまたは削除 */}
                {/* <Route path="/home" element={<HomePage />} /> */}

                <Route path="/category/:categoryId" element={<CategoryPage />} />
                <Route path="/product/:productId" element={<ProductDetailPage />} />
                <Route path="/tech-explanation" element={<TechnicalPage />} />
                <Route path="/diagnostic-tool" element={<DiagnosticTool />} />
              </Routes>
            </Layout>
          </Router>
        </AIOptimizationProvider>
      </LocalizationProvider>
    </HelmetProvider>
  );
}

export default App;