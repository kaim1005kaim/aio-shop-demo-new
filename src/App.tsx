import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import TechnicalPage from './pages/TechnicalPage';
import DiagnosticTool from './pages/DiagnosticTool';
import { AIOptimizationProvider } from './contexts/AIOptimizationContext';

function App() {
  return (
    <HelmetProvider>
      <AIOptimizationProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/tech-explanation" element={<TechnicalPage />} />
              <Route path="/diagnostic-tool" element={<DiagnosticTool />} />
            </Routes>
          </Layout>
        </Router>
      </AIOptimizationProvider>
    </HelmetProvider>
  );
}

export default App;