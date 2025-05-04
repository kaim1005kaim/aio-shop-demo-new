import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductFAQ from '../components/product/ProductFAQ';
import ProductComparison from '../components/product/ProductComparison';
import StructuredDataViewer from '../components/product/StructuredDataViewer';
import { products } from '../data/products';
import { useAIOptimization } from '../contexts/AIOptimizationContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { isOptimized } = useAIOptimization();
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return <div className="container mx-auto px-4 py-16">Product not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>
          {isOptimized 
            ? `${product.name} | ${product.brand} | ${product.category.name} | AIO Shop`
            : `${product.name} - AIO Shop`
          }
        </title>
        <meta 
          name="description" 
          content={isOptimized ? product.optimizedMetaDescription : product.metaDescription}
        />
        {isOptimized && (
          <>
            <meta property="og:title" content={`${product.name} | ${product.brand}`} />
            <meta property="og:description" content={product.optimizedMetaDescription} />
            <meta property="og:image" content={product.images[0]} />
            <meta property="og:type" content="product" />
            <meta property="og:price:amount" content={product.price.toString()} />
            <meta property="og:price:currency" content="USD" />
            <meta property="og:availability" content="in stock" />
            <link rel="canonical" href={`https://aioshop.example/product/${product.id}`} />
          </>
        )}
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { name: product.category.name, path: `/category/${product.category.id}` },
            { name: product.name, path: `/product/${product.id}` }
          ]}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6 mb-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
        
        <ProductFAQ product={product} />
        <ProductComparison />
        <StructuredDataViewer product={product} />
      </div>
    </>
  );
};

export default ProductDetailPage;