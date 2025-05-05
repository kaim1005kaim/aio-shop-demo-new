import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { useLocalization } from '../../contexts/LocalizationContext'; // ★ インポート
import { categories } from '../../data/categories'; // カテゴリデータをインポートしてリンクを動的に生成

const Footer: React.FC = () => {
  const { t } = useLocalization(); // ★ t 関数を取得
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* ★ t 関数を使用 */}
            <h3 className="text-lg font-semibold mb-4">{t('footer.title', 'AIO Shop')}</h3>
            <p className="text-gray-600 mb-4">
              {/* ★ t 関数を使用 */}
              {t('footer.description', 'A demonstration website showcasing how to optimize web content for AI recommendations.')}
            </p>
            <div className="flex space-x-4 items-center">
              <a
                href="https://github.com/kaim1005kaim/aio-shop-demo" // GitHubリンクはそのまま
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="GitHub Repository" // アクセシビリティのためのラベル追加
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            {/* ★ t 関数を使用 */}
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources.title', 'Resources')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  ECサイトデモ
                </Link>
              </li>
              <li>
                <Link to="/tech-explanation" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {/* ★ 既存のヘッダー用キーを流用 */}
                  {t('tech_explanation', 'Technology')}
                </Link>
              </li>
              <li>
                <Link to="/diagnostic-tool" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {/* ★ 既存のヘッダー用キーを流用 */}
                  {t('diagnostic_tool', 'Score Tool')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            {/* ★ t 関数を使用 (2つのキーに分割) */}
            {t('footer.copyright.pt1', `© ${currentYear} AIO Shop Demo.`, { year: currentYear })}
            {' '} {/* スペース */}
            {t('footer.copyright.pt2', 'This is a demonstration site for educational purposes only.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;