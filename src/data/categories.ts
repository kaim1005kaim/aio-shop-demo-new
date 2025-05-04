// src/data/categories.ts (最終修正版・全文)

// Category 型の定義
export interface Category {
  id: string;
  nameKey: string;        // カテゴリ名用の翻訳キー
  descriptionKey: string; // ★ 説明文用の翻訳キーを追加
  imageUrl: string;
}

export const categories: Category[] = [
  {
    id: 'beauty',
    nameKey: 'category.beauty',
    descriptionKey: 'category.beauty.description', // ★ 説明文用のキーを設定
    imageUrl: 'https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'electronics',
    nameKey: 'category.electronics',
    descriptionKey: 'category.electronics.description', // ★ 説明文用のキーを設定
    imageUrl: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'fashion',
    nameKey: 'category.fashion',
    descriptionKey: 'category.fashion.description', // ★ 説明文用のキーを設定
    imageUrl: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'health',
    nameKey: 'category.health',
    descriptionKey: 'category.health.description', // ★ 説明文用のキーを設定
    imageUrl: 'https://images.pexels.com/photos/3735155/pexels-photo-3735155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'kitchen',
    nameKey: 'category.kitchen',
    descriptionKey: 'category.kitchen.description', // ★ 説明文用のキーを設定
    imageUrl: 'https://images.pexels.com/photos/6996145/pexels-photo-6996145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];