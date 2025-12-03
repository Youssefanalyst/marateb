import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
  },
  {
    id: '2',
    name: 'سرير ميكانيزم فاخر',
    description: 'سرير بتصميم عصري مع مساحة تخزين واسعة أسفل السرير',
    price: 12000,
    image: product2,
    badge: 'جديد',
  },
  {
    id: '3',
    name: 'مرتبة بسمارك بريميوم',
    description: 'مرتبة مميزة بطبقة ميموري فوم لدعم الظهر والعمود الفقري',
    price: 6500,
    image: product3,
  },
  {
    id: '4',
    name: 'مرتبة بسمارك كومفورت',
    description: 'مرتبة متعددة الطبقات لنوم هادئ ومريح طوال الليل',
    price: 5000,
    originalPrice: 5800,
    image: product4,
  },
  {
    id: '5',
    name: 'طقم مفروشات قطن',
    description: 'طقم مفروشات من القطن المصري الفاخر بألوان هادئة',
    price: 1500,
    originalPrice: 2000,
    image: product1,
  },
  {
    id: '6',
    name: 'مرتبة بسمارك سوبر',
    description: 'مرتبة فائقة الجودة بضمان 15 سنة وتهوية متقدمة',
    price: 9500,
    image: product3,
    badge: 'حصري',
  },
];

const Products = () => {
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
