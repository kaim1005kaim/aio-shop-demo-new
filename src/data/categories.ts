// src/data/categories.ts (修正後・全文)

// Category 型の定義 (必要であればインポート元を修正、またはここで定義)
// import { Category } from '../types/product'; // もし別の場所で定義している場合
export interface Category {
  id: string;
  nameKey: string; // 'name' から 'nameKey' に変更し、翻訳キーを格納
  description: string; // description も翻訳が必要な場合は同様に descriptionKey に変更
  imageUrl: string;
}

export const categories: Category[] = [
  {
    id: 'beauty',
    nameKey: 'category.beauty', // ← 翻訳キーに変更
    description: 'Skincare, cosmetics, and personal care products for your beauty routine.', // 必要ならこれもキー化
    imageUrl: 'https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'electronics',
    nameKey: 'category.electronics', // ← 翻訳キーに変更
    description: 'Latest gadgets, smart devices, and electronics for modern living.',
    imageUrl: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'fashion',
    nameKey: 'category.fashion', // ← 翻訳キーに変更
    description: 'Sustainable clothing, accessories, and footwear for your conscious wardrobe.',
    imageUrl: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'health',
    nameKey: 'category.health', // ← 翻訳キーに変更 (対応するキーを localization.ts に追加必要)
    description: 'Nutritional supplements, organic foods, and wellness products for a healthier you.',
    imageUrl: 'https://images.pexels.com/photos/3735155/pexels-photo-3735155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'kitchen',
    nameKey: 'category.kitchen', // ← 翻訳キーに変更 (対応するキーを localization.ts に追加必要)
    description: 'Innovative cookware, appliances, and kitchen essentials for home chefs.',
    imageUrl: 'https://images.pexels.com/photos/6996145/pexels-photo-6996145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];