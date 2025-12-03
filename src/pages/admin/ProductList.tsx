import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Package,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

const initialProducts = [
  {
    id: '1',
    name: 'مرتبة بسمارك الملكية',
    price: 8500,
    category: 'مراتب',
    stock: 15,
    status: 'متاح',
    image: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'سرير ميكانيزم فاخر',
    price: 12000,
    category: 'أسرّة',
    stock: 8,
    status: 'متاح',
    image: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'مرتبة بسمارك بريميوم',
    price: 6500,
    category: 'مراتب',
    stock: 20,
    status: 'متاح',
    image: '/placeholder.svg',
  },
  {
    id: '4',
    name: 'مرتبة بسمارك كومفورت',
    price: 5000,
    category: 'مراتب',
    stock: 0,
    status: 'نفذ',
    image: '/placeholder.svg',
  },
  {
    id: '5',
    name: 'طقم مفروشات قطن',
    price: 1500,
    category: 'مفروشات',
    stock: 50,
    status: 'متاح',
    image: '/placeholder.svg',
  },
  {
    id: '6',
    name: 'مرتبة بسمارك سوبر',
    price: 9500,
    category: 'مراتب',
    stock: 5,
    status: 'متاح',
    image: '/placeholder.svg',
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'مراتب', 'أسرّة', 'مفروشات'];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.includes(searchTerm);
    const matchesCategory =
      selectedCategory === 'الكل' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      setProducts(products.filter((p) => p.id !== id));
      toast.success('تم حذف المنتج بنجاح');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">المنتجات</h1>
          <p className="text-gray-500 text-sm mt-1">
            إدارة جميع منتجات المتجر
          </p>
        </div>
        <Button
          asChild
          className="bg-gradient-to-l from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/30"
        >
          <Link to="/admin/products/new" className="gap-2">
            <Plus className="h-4 w-4" />
            إضافة منتج جديد
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="بحث عن منتج..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={
                  selectedCategory === cat
                    ? 'bg-gray-900 hover:bg-gray-800'
                    : ''
                }
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-gray-100 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span
                className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full ${
                  product.status === 'متاح'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {product.status}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link
                        to={`/admin/products/${product.id}/edit`}
                        className="flex items-center gap-2"
                      >
                        <Edit className="h-4 w-4" />
                        تعديل
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600 focus:text-red-600"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="h-4 w-4 ml-2" />
                      حذف
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-amber-600">
                  {product.price.toLocaleString()} ج.م
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Package className="h-4 w-4" />
                  <span>{product.stock} في المخزون</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border">
          <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">لا توجد منتجات مطابقة للبحث</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
