export interface MenuItem {
  id: number;
  name: string;
  description: string | null;
  price: number;
  category: 'pizza' | 'antipasto' | 'bevanda' | 'dolce' | 'insalata' | 'altro';
  image_url: string | null;
  is_available: boolean;
}