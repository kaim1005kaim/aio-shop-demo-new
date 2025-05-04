export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  rating: number;
  description: string;
  optimizedDescription: string;
  shortDescription: string;
  optimizedShortDescription: string;
  metaDescription: string;
  optimizedMetaDescription: string;
  features: string[];
  optimizedFeatures: string[];
  specs: Record<string, string>;
  faqs: Array<{ question: string; answer: string }>;
  optimizedFaqs: Array<{ question: string; answer: string }>;
  images: string[];
  imageAlts?: string[];
  optimizedImageAlts?: string[];
  optimizedImageAlt: string;
}