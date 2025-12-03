import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const ProductForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditing = !!id;

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCategoryChange = (value: string) => {
        setFormData(prev => ({ ...prev, category: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, image: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to backend
        console.log('Form submitted:', formData);
        toast.success(isEditing ? 'تم تحديث المنتج بنجاح' : 'تم إضافة المنتج بنجاح');
        navigate('/admin/products');
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    {isEditing ? 'تعديل منتج' : 'إضافة منتج جديد'}
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow border p-6 space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">اسم المنتج</Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="مثال: مرتبة بسمارك الملكية"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="price">السعر (ج.م)</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            placeholder="0.00"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="stock">المخزون</Label>
                        <Input
                            id="stock"
                            name="stock"
                            type="number"
                            value={formData.stock}
                            onChange={handleChange}
                            required
                            placeholder="0"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="category">القسم</Label>
                    <Select onValueChange={handleCategoryChange} value={formData.category}>
                        <SelectTrigger>
                            <SelectValue placeholder="اختر القسم" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="mattresses">مراتب</SelectItem>
                            <SelectItem value="beds">سراير</SelectItem>
                            <SelectItem value="bedding">مفروشات</SelectItem>
                            <SelectItem value="accessories">اكسسوارات</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">وصف المنتج</Label>
                    <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="اكتب وصفاً تفصيلياً للمنتج..."
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="image">صورة المنتج</Label>
                    <Input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="cursor-pointer"
                    />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate('/admin/products')}
                    >
                        إلغاء
                    </Button>
                    <Button type="submit">
                        {isEditing ? 'حفظ التغييرات' : 'إضافة المنتج'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
