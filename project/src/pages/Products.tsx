import { useState, useEffect } from 'react';
import {
  Search,
  Star,
  Heart,
  Eye,
  ArrowRight,
} from 'lucide-react';

const BadgeLabel = ({ label }: { label: string }) => {
  const badgeStyles: { [key: string]: string } = {
    'Best Seller': 'bg-green-700',
    'New': 'bg-green-600',
    'Organic': 'bg-green-800',
    'Premium': 'bg-green-900',
  };

  const bgColor = badgeStyles[label] || 'bg-green-800';

  return (
      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg ${bgColor} select-none`}>
        {label}
      </div>
  );
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const categories = [
    { id: 'all', name: 'All Products', count: 89 },
    { id: 'spice-mixes', name: 'Spice Mixes', count: 25 },
    { id: 'rice-grains', name: 'Rice & Grains', count: 18 },
    { id: 'lentils-beans', name: 'Lentils & Beans', count: 15 },
    { id: 'ready-meals', name: 'Ready Meals', count: 12 },
    { id: 'snacks', name: 'Snacks', count: 8 },
    { id: 'condiments', name: 'Condiments', count: 7 },
    { id: 'beverages', name: 'Beverages', count: 4 },
  ];

  const products = [
    // Spice Mixes - Shan Brand Products
    {
      id: 1,
      name: 'Shan Biryani Masala',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 234,
      description: 'Authentic biryani spice mix for perfect aromatic rice dishes',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 2,
      name: 'Shan Bombay Biryani',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 189,
      description: 'Traditional Bombay-style biryani spice blend',
      inStock: true,
    },
    {
      id: 3,
      name: 'Shan Pilau Biryani',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 156,
      description: 'Delicate pilau biryani seasoning mix',
      inStock: true,
    },
    {
      id: 4,
      name: 'Shan Sindhi Biryani',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 143,
      description: 'Tangy and spicy Sindhi-style biryani mix',
      inStock: true,
    },
    {
      id: 5,
      name: 'Shan Karachi Beef Biryani',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 198,
      description: 'Rich and flavorful Karachi beef biryani spices',
      inStock: true,
    },
    {
      id: 6,
      name: 'Shan Punjabi Yakhni Pulao',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 167,
      description: 'Aromatic Punjabi yakhni pulao seasoning',
      inStock: true,
    },
    {
      id: 7,
      name: 'Shan Mutton Biryani',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 221,
      description: 'Traditional mutton biryani spice blend',
      inStock: true,
    },
    {
      id: 8,
      name: 'Shan Chicken Biryani',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 312,
      description: 'Perfect chicken biryani spice mix',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 9,
      name: 'Shan Chicken Handi',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 134,
      description: 'Creamy chicken handi masala mix',
      inStock: true,
    },
    {
      id: 10,
      name: 'Shan Butter Chicken',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 278,
      description: 'Rich and creamy butter chicken masala',
      inStock: true,
    },
    {
      id: 11,
      name: 'Shan Chana Chaat',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 89,
      description: 'Tangy chana chaat seasoning mix',
      inStock: true,
    },
    {
      id: 12,
      name: 'Shan Meat Masala',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 156,
      description: 'All-purpose meat masala blend',
      inStock: true,
    },
    {
      id: 13,
      name: 'Shan Chicken Broast',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 201,
      description: 'Crispy chicken broast coating mix',
      inStock: true,
    },
    {
      id: 14,
      name: 'Shan Pani Puri Masala',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 78,
      description: 'Spicy pani puri water seasoning',
      inStock: true,
    },
    {
      id: 15,
      name: 'Shan Haleem',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 189,
      description: 'Traditional haleem spice blend',
      inStock: true,
    },
    {
      id: 16,
      name: 'Shan Kofta',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 112,
      description: 'Delicious kofta curry masala',
      inStock: true,
    },
    {
      id: 17,
      name: 'Shan Achar Gosht',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 145,
      description: 'Tangy pickled meat curry spice',
      inStock: true,
    },
    {
      id: 18,
      name: 'Shan Nihari',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 234,
      description: 'Authentic nihari stew spice mix',
      badge: 'Premium',
      inStock: true,
    },
    {
      id: 19,
      name: 'Shan Chicken Masala',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 167,
      description: 'Classic chicken curry masala',
      inStock: true,
    },
    {
      id: 20,
      name: 'Shan Shami Kabab',
      category: 'spice-mixes',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 98,
      description: 'Traditional shami kabab seasoning',
      inStock: true,
    },

    // Aachi Brand Products
    {
      id: 21,
      name: 'Aachi Biryani Pulao Masala',
      category: 'spice-mixes',
      price: 1.69,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 156,
      description: 'South Indian style biryani pulao masala',
      inStock: true,
    },
    {
      id: 22,
      name: 'Aachi Sambar Powder',
      category: 'spice-mixes',
      price: 1.49,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 189,
      description: 'Authentic Tamil sambar powder',
      inStock: true,
    },
    {
      id: 23,
      name: 'Aachi Chicken Curry Masala',
      category: 'spice-mixes',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 134,
      description: 'Traditional South Indian chicken curry blend',
      inStock: true,
    },
    {
      id: 24,
      name: 'Aachi Fish Fry Masala',
      category: 'spice-mixes',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 87,
      description: 'Crispy fish fry seasoning powder',
      inStock: true,
    },
    {
      id: 25,
      name: 'Aachi Mutton Curry Masala',
      category: 'spice-mixes',
      price: 2.69,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 145,
      description: 'Rich mutton curry spice blend',
      inStock: true,
    },

    // Rice and Grains
    {
      id: 26,
      name: 'Basmati Rice Premium',
      category: 'rice-grains',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 312,
      description: 'Long grain premium basmati rice',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 27,
      name: 'Jasmine Rice',
      category: 'rice-grains',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 189,
      description: 'Fragrant Thai jasmine rice',
      inStock: true,
    },
    {
      id: 28,
      name: 'Brown Parboiled Rice',
      category: 'rice-grains',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 134,
      description: 'Healthy brown parboiled rice',
      badge: 'Organic',
      inStock: true,
    },
    {
      id: 29,
      name: 'Sella Rice',
      category: 'rice-grains',
      price: 4.49,
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 167,
      description: 'Premium sella parboiled rice',
      inStock: true,
    },
    {
      id: 30,
      name: 'Black Sesame Seeds',
      category: 'rice-grains',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1609501676725-7186f5a4cf93?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 89,
      description: 'Premium black sesame seeds',
      inStock: true,
    },
    {
      id: 31,
      name: 'White Sesame Seeds',
      category: 'rice-grains',
      price: 2.49,
      image: 'https://images.unsplash.com/photo-1609501676725-7186f4cf93?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 76,
      description: 'Pure white sesame seeds',
      inStock: true,
    },
    {
      id: 32,
      name: 'Quinoa',
      category: 'rice-grains',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 198,
      description: 'Organic white quinoa grains',
      badge: 'Organic',
      inStock: true,
    },
    {
      id: 33,
      name: 'Pearl Barley',
      category: 'rice-grains',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=compress&cs=tinysrgb&w=500',
      rating: 4.2,
      reviews: 67,
      description: 'Nutritious pearl barley',
      inStock: true,
    },
    {
      id: 34,
      name: 'Bulgur Wheat',
      category: 'rice-grains',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 89,
      description: 'Cracked bulgur wheat',
      inStock: true,
    },
    {
      id: 35,
      name: 'Couscous',
      category: 'rice-grains',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 112,
      description: 'Mediterranean couscous',
      inStock: true,
    },

    // Lentils and Beans
    {
      id: 36,
      name: 'Red Kidney Beans',
      category: 'lentils-beans',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 156,
      description: 'Premium red kidney beans',
      inStock: true,
    },
    {
      id: 37,
      name: 'Black Kidney Beans',
      category: 'lentils-beans',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 134,
      description: 'Organic black kidney beans',
      badge: 'Organic',
      inStock: true,
    },
    {
      id: 38,
      name: 'Chickpeas (Garbanzo)',
      category: 'lentils-beans',
      price: 1.79,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 189,
      description: 'Premium chickpeas',
      inStock: true,
    },
    {
      id: 39,
      name: 'Red Lentils',
      category: 'lentils-beans',
      price: 2.29,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 212,
      description: 'Split red lentils (masoor dal)',
      inStock: true,
    },
    {
      id: 40,
      name: 'Yellow Split Peas',
      category: 'lentils-beans',
      price: 1.89,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 98,
      description: 'Yellow split peas (chana dal)',
      inStock: true,
    },
    {
      id: 41,
      name: 'Black Lentils',
      category: 'lentils-beans',
      price: 2.49,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 167,
      description: 'Whole black lentils (urad dal)',
      inStock: true,
    },
    {
      id: 42,
      name: 'Green Lentils',
      category: 'lentils-beans',
      price: 2.19,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 143,
      description: 'Whole green moong dal',
      inStock: true,
    },
    {
      id: 43,
      name: 'Pigeon Peas',
      category: 'lentils-beans',
      price: 2.69,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.2,
      reviews: 87,
      description: 'Split pigeon peas (toor dal)',
      inStock: true,
    },
    {
      id: 44,
      name: 'Navy Beans',
      category: 'lentils-beans',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 76,
      description: 'Small white navy beans',
      inStock: true,
    },
    {
      id: 45,
      name: 'Black Eyed Peas',
      category: 'lentils-beans',
      price: 1.89,
      image: 'https://images.unsplash.com/photo-1583064095725-2e3424c22e90?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 89,
      description: 'Traditional black eyed peas',
      inStock: true,
    },

    // Ready Meals
    {
      id: 46,
      name: 'MDH Garam Masala',
      category: 'ready-meals',
      price: 1.49,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 298,
      description: 'Premium garam masala blend',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 47,
      name: 'MDH Butter Chicken Masala',
      category: 'ready-meals',
      price: 1.79,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 176,
      description: 'Rich butter chicken curry mix',
      inStock: true,
    },
    {
      id: 48,
      name: 'Badshah Madras Sambar Masala',
      category: 'ready-meals',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 134,
      description: 'Authentic Madras sambar spice',
      inStock: true,
    },
    {
      id: 49,
      name: 'Ready to Cook Curry Base',
      category: 'ready-meals',
      price: 2.49,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 98,
      description: 'Convenient curry base for quick meals',
      inStock: true,
    },
    {
      id: 50,
      name: 'Instant Khichdi Mix',
      category: 'ready-meals',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 112,
      description: 'Nutritious instant khichdi mix',
      inStock: true,
    },
    {
      id: 51,
      name: 'Poha Mix',
      category: 'ready-meals',
      price: 1.69,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.2,
      reviews: 87,
      description: 'Traditional poha breakfast mix',
      inStock: true,
    },
    {
      id: 52,
      name: 'Upma Mix',
      category: 'ready-meals',
      price: 1.59,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 76,
      description: 'Quick upma breakfast mix',
      inStock: true,
    },
    {
      id: 53,
      name: 'Pasta Masala Mix',
      category: 'ready-meals',
      price: 1.79,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.1,
      reviews: 65,
      description: 'Indian-style pasta seasoning',
      inStock: true,
    },
    {
      id: 54,
      name: 'Maggi Noodles 2-Minute',
      category: 'ready-meals',
      price: 0.49,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 189,
      description: 'Classic instant noodles',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 55,
      name: 'Yippee Noodles',
      category: 'ready-meals',
      price: 0.39,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 134,
      description: 'Tasty instant noodles',
      inStock: true,
    },
    {
      id: 56,
      name: 'Top Ramen Noodles',
      category: 'ready-meals',
      price: 0.45,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=compress&cs=tinysrgb&w=500',
      rating: 4.2,
      reviews: 98,
      description: 'Flavorful ramen noodles',
      inStock: true,
    },
    {
      id: 57,
      name: 'Wai Wai Noodles',
      category: 'ready-meals',
      price: 0.55,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 156,
      description: 'Premium instant noodles',
      inStock: true,
    },

    // Snacks
    {
      id: 58,
      name: 'Haldiram Mixture',
      category: 'snacks',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 234,
      description: 'Traditional Indian namkeen mixture',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 59,
      name: 'Bikaji Bhujia',
      category: 'snacks',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 189,
      description: 'Crispy gram flour noodles',
      inStock: true,
    },
    {
      id: 60,
      name: 'Lay Chips Masala',
      category: 'snacks',
      price: 1.49,
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 167,
      description: 'Spicy masala flavored chips',
      inStock: true,
    },
    {
      id: 61,
      name: 'Kurkure Snacks',
      category: 'snacks',
      price: 1.29,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=compress&cs=tinysrgb&w=500',
      rating: 4.2,
      reviews: 143,
      description: 'Crunchy corn puff snacks',
      inStock: true,
    },
    {
      id: 62,
      name: 'Parle-G Biscuits',
      category: 'snacks',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 312,
      description: 'Classic glucose biscuits',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 63,
      name: 'Monaco Biscuits',
      category: 'snacks',
      price: 1.19,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 198,
      description: 'Salted crackers biscuits',
      inStock: true,
    },
    {
      id: 64,
      name: 'Good Day Cookies',
      category: 'snacks',
      price: 1.39,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 156,
      description: 'Butter cookies with cashew',
      inStock: true,
    },
    {
      id: 65,
      name: 'Marie Gold Biscuits',
      category: 'snacks',
      price: 1.09,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 234,
      description: 'Light and crispy tea biscuits',
      inStock: true,
    },

    // Condiments and Sauces
    {
      id: 66,
      name: 'Maggi Tomato Ketchup',
      category: 'condiments',
      price: 2.49,
      image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 198,
      description: 'Rich tomato ketchup',
      inStock: true,
    },
    {
      id: 67,
      name: 'Kissan Mixed Fruit Jam',
      category: 'condiments',
      price: 3.29,
      image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 234,
      description: 'Sweet mixed fruit jam',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 68,
      name: 'Amul Butter',
      category: 'condiments',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1589985269871-ac8bbdc9473c?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 412,
      description: 'Fresh salted butter',
      badge: 'Premium',
      inStock: true,
    },
    {
      id: 69,
      name: 'Patak Curry Paste',
      category: 'condiments',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 167,
      description: 'Authentic curry paste',
      inStock: true,
    },
    {
      id: 70,
      name: 'Ching Secret Sauce',
      category: 'condiments',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=compress&cs=tinysrgb&w=500',
      rating: 4.2,
      reviews: 134,
      description: 'Indo-Chinese sauce',
      inStock: true,
    },
    {
      id: 71,
      name: 'Priya Pickle Mixed',
      category: 'condiments',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 189,
      description: 'Traditional Indian pickle',
      inStock: true,
    },
    {
      id: 72,
      name: 'MTR Coconut Chutney',
      category: 'condiments',
      price: 2.29,
      image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 156,
      description: 'Ready-to-eat coconut chutney',
      inStock: true,
    },

    // Beverages
    {
      id: 73,
      name: 'Tata Tea Gold',
      category: 'beverages',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 298,
      description: 'Premium black tea blend',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 74,
      name: 'Red Label Tea',
      category: 'beverages',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 234,
      description: 'Strong black tea',
      inStock: true,
    },
    {
      id: 75,
      name: 'Bru Coffee',
      category: 'beverages',
      price: 5.49,
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 189,
      description: 'Instant coffee powder',
      inStock: true,
    },
    {
      id: 76,
      name: 'Nescafe Coffee',
      category: 'beverages',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 267,
      description: 'Classic instant coffee',
      badge: 'Premium',
      inStock: true,
    },

    // Spices and Seasonings (Individual Spices)
    {
      id: 77,
      name: 'Turmeric Powder',
      category: 'spice-mixes',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 234,
      description: 'Pure turmeric powder',
      badge: 'Organic',
      inStock: true,
    },
    {
      id: 78,
      name: 'Red Chili Powder',
      category: 'spice-mixes',
      price: 1.79,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 198,
      description: 'Hot red chili powder',
      inStock: true,
    },
    {
      id: 79,
      name: 'Cumin Powder',
      category: 'spice-mixes',
      price: 2.29,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 167,
      description: 'Ground cumin seeds',
      inStock: true,
    },
    {
      id: 80,
      name: 'Coriander Powder',
      category: 'spice-mixes',
      price: 1.89,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 143,
      description: 'Freshly ground coriander',
      inStock: true,
    },
    {
      id: 81,
      name: 'Fennel Seeds',
      category: 'spice-mixes',
      price: 2.49,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.2,
      reviews: 89,
      description: 'Whole fennel seeds',
      inStock: true,
    },
    {
      id: 82,
      name: 'Methi Seeds (Fenugreek)',
      category: 'spice-mixes',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.1,
      reviews: 76,
      description: 'Dried fenugreek seeds',
      inStock: true,
    },
    {
      id: 83,
      name: 'Whole Jeera (Cumin Seeds)',
      category: 'spice-mixes',
      price: 2.19,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 156,
      description: 'Whole cumin seeds',
      inStock: true,
    },
    {
      id: 84,
      name: 'Black Pepper Powder',
      category: 'spice-mixes',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 198,
      description: 'Freshly ground black pepper',
      badge: 'Premium',
      inStock: true,
    },
    {
      id: 85,
      name: 'Cardamom Pods',
      category: 'spice-mixes',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 167,
      description: 'Green cardamom pods',
      badge: 'Premium',
      inStock: true,
    },
    {
      id: 86,
      name: 'Cinnamon Sticks',
      category: 'spice-mixes',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 134,
      description: 'Whole cinnamon bark',
      inStock: true,
    },
    {
      id: 87,
      name: 'Star Anise',
      category: 'spice-mixes',
      price: 4.49,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.3,
      reviews: 89,
      description: 'Whole star anise',
      inStock: true,
    },
    {
      id: 88,
      name: 'Bay Leaves',
      category: 'spice-mixes',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.2,
      reviews: 98,
      description: 'Dried bay leaves',
      inStock: true,
    },
    {
      id: 89,
      name: 'Cloves',
      category: 'spice-mixes',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 123,
      description: 'Whole cloves',
      badge: 'Premium',
      inStock: true,
    },
  ];

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
      <div className="pt-16 min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Tropical <span className="block text-yellow-300">Paradise</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our premium collection of authentic South Asian spices, rice, lentils, and specialty foods sourced from the finest suppliers.
            </p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 bg-white dark:bg-gray-800 shadow-sm sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-green-700 dark:focus:ring-green-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                  <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-2 rounded-full font-medium transition-all ${
                          selectedCategory === category.id
                              ? 'bg-green-700 dark:bg-green-800 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-600'
                      }`}
                  >
                    {category.name} <span className="ml-2 text-sm opacity-75">({category.count})</span>
                  </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            {filteredProducts.length === 0 ? (
                <div className="text-center py-20 fade-in">
                  <Search className="mx-auto h-10 w-10 text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">No products found</h3>
                  <p className="mb-6 dark:text-gray-300">Try adjusting your search or filter criteria</p>
                  <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full"
                  >
                    Clear Filters
                  </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product, index) => (
                      <div
                          key={product.id}
                          className="fade-in bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-3 overflow-hidden group"
                          style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative">
                          <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                              loading="lazy"
                          />

                          {product.badge && <BadgeLabel label={product.badge} />}

                          <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="w-9 h-9 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:text-red-600 hover:shadow-lg transition">
                              <Heart className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setSelectedProduct(product)}
                                className="w-9 h-9 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:text-green-700 dark:hover:text-green-600 hover:shadow-lg transition"
                                aria-label={`View details of ${product.name}`}
                            >
                              <Eye className="h-5 w-5" />
                            </button>
                          </div>

                          {!product.inStock && (
                              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-3xl">
                                <span className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold select-none">Out of Stock</span>
                              </div>
                          )}
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                        i < Math.floor(product.rating)
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-300'
                                    }`}
                                />
                            ))}
                            <span className="text-sm text-gray-600 dark:text-gray-300 select-none">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold mb-2 dark:text-white">{product.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 line-clamp-3">{product.description}</p>

                          <div className="flex items-center justify-between mb-5">
                            <span className="text-2xl font-extrabold text-green-700 dark:text-green-600">€{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">€{product.originalPrice}</span>
                            )}
                          </div>

                          <button
                              onClick={() => setSelectedProduct(product)}
                              className="w-full py-3 rounded-full font-semibold bg-green-700 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-900 text-white shadow-md transition"
                              aria-label={`View details of ${product.name}`}
                          >
                            <Eye className="inline h-5 w-5 mr-2" />
                            View
                          </button>
                        </div>
                      </div>
                  ))}
                </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-6">Stay Fresh with Our Newsletter</h2>
            <p className="text-xl mb-8">Get exclusive deals and seasonal updates delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-green-800 rounded-full hover:bg-gray-100 font-semibold flex items-center gap-2">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedProduct && (
            <div
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
                onClick={closeModal}
                role="dialog"
                aria-modal="true"
            >
              <div
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
              >
                <button
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-3xl font-bold leading-none"
                    onClick={closeModal}
                    aria-label="Close modal"
                >
                  &times;
                </button>
                <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-72 object-cover rounded-lg mb-6"
                />
                <h2 className="text-3xl font-extrabold mb-3 dark:text-white">{selectedProduct.name}</h2>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{selectedProduct.description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-green-700 dark:text-green-600 font-extrabold text-2xl">€{selectedProduct.price}</span>
                  {selectedProduct.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">€{selectedProduct.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  {[...Array(5)].map((_, i) => (
                      <Star
                          key={i}
                          className={`h-6 w-6 ${
                              i < Math.floor(selectedProduct.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                          }`}
                      />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-300 select-none">
                    {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default Products;