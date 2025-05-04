import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { useAIOptimization } from '../../contexts/AIOptimizationContext';
import AIToggle from '../ui/AIToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isOptimized } = useAIOptimization();

  const categories = [
    { id: 'beauty', name: 'Beauty' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'health', name: 'Health Foods' },
    { id: 'kitchen', name: 'Kitchen' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AIO Shop</span>
            <div className={`ml-2 px-2 py-0.5 text-xs rounded ${isOptimized ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}>
              {isOptimized ? 'AI Optimized' : 'Standard'}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <Link 
              to="/tech-explanation"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Technology
            </Link>
            <Link 
              to="/diagnostic-tool"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Score Tool
            </Link>
            <AIToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <AIToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 animate-fade-in">
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors block py-2"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/tech-explanation"
                  className="text-gray-700 hover:text-blue-600 transition-colors block py-2"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link 
                  to="/diagnostic-tool"
                  className="text-gray-700 hover:text-blue-600 transition-colors block py-2"
                >
                  Score Tool
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;