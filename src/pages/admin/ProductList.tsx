import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// Mock data - replace with real data fetching later
const initialProducts = [
    { id: '1', name: 'مرتبة بسمارك الملكية', price: 8500, category: 'مراتب', stock: 15 },
    { id: '2', name: 'سرير ميكانيزم فاخر', price: 12000, category: 'سراير', stock: 8 },
    { id: '3', name: 'مرتبة بسمارك بريميوم', price: 6500, category: 'مراتب', stock: 20 },
    { id: '4', name: 'مرتبة بسمارك كومفورت', price: 5000, category: 'مراتب', stock: 12 },
    { id: '5', name: 'طقم مفروشات قطن', price: 1500, category: 'مفروشات', stock: 50 },
];

const ProductList = () => {
    const [products, setProducts] = useState(initialProducts);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id: string) => {
        if (window.confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">المنتجات</h1>
                <Button asChild>
                    <Link to="/admin/products/new" className="gap-2">
                        <Plus className="h-4 w-4" />
                        إضافة منتج جديد
                    </Link>
                </Button>
            </div>

            <div className="bg-white rounded-lg shadow border p-4">
                <div className="mb-4 relative">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="بحث عن منتج..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pr-10 max-w-sm"
                    />
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-right">اسم المنتج</TableHead>
                                <TableHead className="text-right">القسم</TableHead>
                                <TableHead className="text-right">السعر</TableHead>
                                <TableHead className="text-right">المخزون</TableHead>
                                <TableHead className="text-right">الإجراءات</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredProducts.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.price.toLocaleString()} ج.م</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link to={`/admin/products/${product.id}/edit`}>
                                                    <Edit className="h-4 w-4 text-blue-500" />
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                <Trash2 className="h-4 w-4 text-red-500" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
