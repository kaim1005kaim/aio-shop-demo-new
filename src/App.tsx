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
import { LocalizationProvider } from './contexts/LocalizationContext';

function App() {
  return (
    <HelmetProvider>
      <LocalizationProvider>
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
      </LocalizationProvider>
    </HelmetProvider>
  );
}

export default App;
