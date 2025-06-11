import React, { useState, useEffect } from 'react';
import {
  Search,
  Star,
  Heart,
  Eye,
  ArrowRight,
} from 'lucide-react';

const BadgeLabel = ({ label }: { label: string }) => {
  const badgeStyles: { [key: string]: string } = {
    'Best Seller': 'bg-orange-500',
    'New': 'bg-green-500',
    'Organic': 'bg-emerald-500',
    'Premium': 'bg-purple-500',
  };

  const bgColor = badgeStyles[label] || 'bg-purple-500';

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
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'fresh-fruits', name: 'Fresh Fruits', count: 12 },
    { id: 'dried-fruits', name: 'Dried Fruits', count: 6 },
    { id: 'smoothies', name: 'Smoothie Mixes', count: 4 },
    { id: 'gift-boxes', name: 'Gift Boxes', count: 2 },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Dragon Fruit',
      category: 'fresh-fruits',
      price: 8.99,
      originalPrice: 12.99,
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 124,
      description: 'Sweet and refreshing dragon fruit with vibrant pink skin and white flesh',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 2,
      name: 'Golden Pineapple',
      category: 'fresh-fruits',
      price: 6.49,
      image: 'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      reviews: 89,
      description: 'Juicy golden pineapple bursting with tropical sweetness',
      inStock: true,
    },
    {
      id: 3,
      name: 'Ripe Mango Selection',
      category: 'fresh-fruits',
      price: 9.99,
      image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 156,
      description: 'Hand-picked mangoes at perfect ripeness for maximum flavor',
      badge: 'New',
      inStock: true,
    },
    {
      id: 4,
      name: 'Passion Fruit Pack',
      category: 'fresh-fruits',
      price: 12.99,
      image: 'https://images.pexels.com/photos/4750371/pexels-photo-4750371.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 73,
      description: 'Aromatic passion fruits perfect for desserts and beverages',
      inStock: true,
    },
    {
      id: 5,
      name: 'Coconut Water Fresh',
      category: 'fresh-fruits',
      price: 4.99,
      image: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 201,
      description: 'Fresh coconut water straight from young green coconuts',
      inStock: true,
    },
    {
      id: 6,
      name: 'Papaya Paradise',
      category: 'fresh-fruits',
      price: 7.99,
      image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.4,
      reviews: 67,
      description: 'Sweet and creamy papaya with bright orange flesh',
      inStock: false,
    },
    {
      id: 7,
      name: 'Dried Mango Strips',
      category: 'dried-fruits',
      price: 11.99,
      image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 145,
      description: 'Naturally dried mango strips with no added sugar',
      badge: 'Organic',
      inStock: true,
    },
    {
      id: 8,
      name: 'Tropical Smoothie Mix',
      category: 'smoothies',
      price: 15.99,
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 98,
      description: 'Premium blend of tropical fruits perfect for smoothies',
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
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center fade-in">
          <h1 className="text-5xl font-bold mb-6">
            Tropical <span className="block text-yellow-300">Paradise</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our premium collection of fresh tropical fruits, dried delights, and exotic blends sourced from the world's finest orchards.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search tropical fruits..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500"
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
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
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
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="fade-in bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-3 overflow-hidden group"
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
                      <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:text-red-600 hover:shadow-lg transition">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:text-emerald-600 hover:shadow-lg transition"
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
                      <span className="text-sm text-gray-600 select-none">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-5 line-clamp-3">{product.description}</p>

                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-extrabold text-emerald-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-3 rounded-full font-semibold bg-emerald-500 text-white hover:bg-emerald-600 shadow-md transition"
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Stay Fresh with Our Newsletter</h2>
          <p className="text-xl mb-8">Get exclusive deals and seasonal updates delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-emerald-600 rounded-full hover:bg-gray-100 font-semibold flex items-center gap-2">
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
            className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold leading-none"
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
            <h2 className="text-3xl font-extrabold mb-3">{selectedProduct.name}</h2>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">{selectedProduct.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-emerald-700 font-extrabold text-2xl">${selectedProduct.price}</span>
              {selectedProduct.originalPrice && (
                <span className="text-lg text-gray-400 line-through">${selectedProduct.originalPrice}</span>
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
              <span className="text-sm text-gray-600 select-none">
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
