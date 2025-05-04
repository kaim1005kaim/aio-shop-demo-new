import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AIO Shop</h3>
            <p className="text-gray-600 mb-4">
              A demonstration website showcasing how to optimize web content for AI recommendations.
            </p>
            <div className="flex space-x-4 items-center">
              <a 
                href="https://github.com/kaim1005kaim/aio-shop-demo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/beauty" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="/category/electronics" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/category/health" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Health Foods
                </Link>
              </li>
              <li>
                <Link to="/category/kitchen" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Kitchen
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tech-explanation" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/diagnostic-tool" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Score Tool
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} AIO Shop Demo. This is a demonstration site for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;