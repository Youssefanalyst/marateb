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
import { ArrowRight, Upload, X, ImageIcon } from 'lucide-react';

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    originalPrice: '',
    category: '',
    stock: '',
    badge: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success(
      isEditing ? 'تم تحديث المنتج بنجاح' : 'تم إضافة المنتج بنجاح'
    );
    navigate('/admin/products');
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Button
          variant="ghost"
          className="mb-4 gap-2 text-gray-600"
          onClick={() => navigate('/admin/products')}
        >
          <ArrowRight className="w-4 h-4" />
          العودة للمنتجات
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">
          {isEditing ? 'تعديل منتج' : 'إضافة منتج جديد'}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          {isEditing
            ? 'قم بتعديل بيانات المنتج'
            : 'أضف منتج جديد إلى المتجر'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="font-bold text-gray-900 mb-4">صورة المنتج</h2>
          <div className="flex items-start gap-6">
            {imagePreview ? (
              <div className="relative w-40 h-40 rounded-xl overflow-hidden border">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="w-40 h-40 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition-colors">
                <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">اختر صورة</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-2">
                اختر صورة واضحة للمنتج بجودة عالية
              </p>
              <p className="text-xs text-gray-400">
                الصيغ المدعومة: JPG, PNG, WebP
                <br />
                الحجم الأقصى: 5MB
              </p>
            </div>
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="font-bold text-gray-900 mb-4">معلومات المنتج</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">اسم المنتج *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="مثال: مرتبة بسمارك الملكية"
              />
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">القسم *</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange('category', value)
                  }
                  value={formData.category}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر القسم" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mattresses">مراتب</SelectItem>
                    <SelectItem value="beds">أسرّة</SelectItem>
                    <SelectItem value="bedding">مفروشات</SelectItem>
                    <SelectItem value="accessories">اكسسوارات</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="badge">شارة المنتج</Label>
                <Select
                  onValueChange={(value) => handleSelectChange('badge', value)}
                  value={formData.badge}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر شارة (اختياري)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">بدون شارة</SelectItem>
                    <SelectItem value="new">جديد</SelectItem>
                    <SelectItem value="bestseller">الأكثر مبيعاً</SelectItem>
                    <SelectItem value="exclusive">حصري</SelectItem>
                    <SelectItem value="sale">تخفيض</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="font-bold text-gray-900 mb-4">التسعير والمخزون</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">السعر (ج.م) *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="originalPrice">السعر قبل الخصم (ج.م)</Label>
              <Input
                id="originalPrice"
                name="originalPrice"
                type="number"
                value={formData.originalPrice}
                onChange={handleChange}
                placeholder="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock">المخزون *</Label>
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
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/admin/products')}
          >
            إلغاء
          </Button>
          <Button
            type="submit"
            className="bg-gradient-to-l from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/30"
          >
            {isEditing ? 'حفظ التغييرات' : 'إضافة المنتج'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
