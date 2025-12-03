import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

const products = [
  {
    id: '1',
    name: 'مرتبة بسمارك الملكية',
    description: 'مرتبة طبية فاخرة بتقنية السوست المنفصلة للراحة القصوى',
    price: 8500,
    originalPrice: 10000,
    image: product1,
    badge: 'الأكثر مبيعاً',
    category: 'مراتب',
  },
  {
    id: '2',
    name: 'سرير ميكانيزم فاخر',
    description: 'سرير بتصميم عصري مع مساحة تخزين واسعة أسفل السرير',
    price: 12000,
    image: product2,
    badge: 'جديد',
    category: 'أسرّة',
  },
  {
    id: '3',
    name: 'مرتبة بسمارك بريميوم',
    description: 'مرتبة مميزة بطبقة ميموري فوم لدعم الظهر والعمود الفقري',
    price: 6500,
    image: product3,
    category: 'مراتب',
  },
  {
    id: '4',
    name: 'مرتبة بسمارك كومفورت',
    description: 'مرتبة متعددة الطبقات لنوم هادئ ومريح طوال الليل',
    price: 5000,
    originalPrice: 5800,
    image: product4,
    category: 'مراتب',
  },
  {
    id: '5',
    name: 'طقم مفروشات قطن',
    description: 'طقم مفروشات من القطن المصري الفاخر بألوان هادئة',
    price: 1500,
    originalPrice: 2000,
    image: product1,
    category: 'مفروشات',
  },
  {
    id: '6',
    name: 'مرتبة بسمارك سوبر',
    description: 'مرتبة فائقة الجودة بضمان 15 سنة وتهوية متقدمة',
    price: 9500,
    image: product3,
    badge: 'حصري',
    category: 'مراتب',
  },
];

const categories = ['الكل', 'مراتب', 'أسرّة', 'مفروشات'];
const sortOptions = [
  { value: 'default', label: 'الترتيب الافتراضي' },
  { value: 'price-asc', label: 'السعر: من الأقل للأعلى' },
  { value: 'price-desc', label: 'السعر: من الأعلى للأقل' },
  { value: 'name', label: 'الاسم' },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.includes(searchQuery) || p.description.includes(searchQuery)
      );
    }

    // Category filter
    if (selectedCategory !== 'الكل') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    );

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4" dir="rtl">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowRight className="w-4 h-4" />
            العودة للرئيسية
          </Button>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            جميع <span className="text-gradient-gold">المنتجات</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اكتشف تشكيلتنا الكاملة من المراتب والمفروشات الفاخرة
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-card rounded-2xl p-6 mb-8 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="w-5 h-5 text-accent" />
            <h3 className="font-bold text-foreground">فلترة المنتجات</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="ابحث عن منتج..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="من"
                value={priceRange.min || ''}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    min: Number(e.target.value) || 0,
                  }))
                }
                className="w-full"
              />
              <span className="text-muted-foreground">-</span>
              <Input
                type="number"
                placeholder="إلى"
                value={priceRange.max || ''}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    max: Number(e.target.value) || 20000,
                  }))
                }
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-muted-foreground mb-6">
          عرض {filteredProducts.length} من {products.length} منتج
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              لا توجد منتجات مطابقة للبحث
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('الكل');
                setPriceRange({ min: 0, max: 20000 });
              }}
            >
              إعادة تعيين الفلاتر
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
