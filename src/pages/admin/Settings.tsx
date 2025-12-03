import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Store, Bell, Shield, Palette } from 'lucide-react';

const Settings = () => {
  const [storeSettings, setStoreSettings] = useState({
    storeName: 'بسمارك للمراتب',
    email: 'info@bismarck-mattresses.com',
    phone: '01050206001',
    address: 'طريق الأسكندرية القاهرة الزراعى - خورشيد القبلية - الاسكندرية',
    description: 'شركة الحمد لتصنيع وتوزيع المراتب والمفروشات - مراتب بسمارك الألمانية',
  });

  const [notifications, setNotifications] = useState({
    newOrders: true,
    lowStock: true,
    customerMessages: false,
  });

  const handleSaveStore = () => {
    toast.success('تم حفظ إعدادات المتجر بنجاح');
  };

  const handleSaveNotifications = () => {
    toast.success('تم حفظ إعدادات الإشعارات بنجاح');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">الإعدادات</h1>
        <p className="text-gray-500 text-sm mt-1">إدارة إعدادات المتجر والحساب</p>
      </div>

      {/* Store Settings */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
            <Store className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">معلومات المتجر</h2>
            <p className="text-sm text-gray-500">البيانات الأساسية للمتجر</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="storeName">اسم المتجر</Label>
              <Input
                id="storeName"
                value={storeSettings.storeName}
                onChange={(e) =>
                  setStoreSettings({ ...storeSettings, storeName: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={storeSettings.email}
                onChange={(e) =>
                  setStoreSettings({ ...storeSettings, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                value={storeSettings.phone}
                onChange={(e) =>
                  setStoreSettings({ ...storeSettings, phone: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">العنوان</Label>
              <Input
                id="address"
                value={storeSettings.address}
                onChange={(e) =>
                  setStoreSettings({ ...storeSettings, address: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">وصف المتجر</Label>
            <Textarea
              id="description"
              value={storeSettings.description}
              onChange={(e) =>
                setStoreSettings({ ...storeSettings, description: e.target.value })
              }
              rows={3}
            />
          </div>

          <Button
            onClick={handleSaveStore}
            className="bg-gradient-to-l from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
          >
            حفظ التغييرات
          </Button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <Bell className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">الإشعارات</h2>
            <p className="text-sm text-gray-500">تحكم في الإشعارات التي تصلك</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium text-gray-900">طلبات جديدة</p>
              <p className="text-sm text-gray-500">إشعار عند وصول طلب جديد</p>
            </div>
            <Switch
              checked={notifications.newOrders}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, newOrders: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium text-gray-900">نفاذ المخزون</p>
              <p className="text-sm text-gray-500">تنبيه عند انخفاض مخزون منتج</p>
            </div>
            <Switch
              checked={notifications.lowStock}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, lowStock: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-900">رسائل العملاء</p>
              <p className="text-sm text-gray-500">إشعار عند وصول رسالة من عميل</p>
            </div>
            <Switch
              checked={notifications.customerMessages}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, customerMessages: checked })
              }
            />
          </div>

          <Button
            onClick={handleSaveNotifications}
            className="bg-gradient-to-l from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
          >
            حفظ الإعدادات
          </Button>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">الأمان</h2>
            <p className="text-sm text-gray-500">إعدادات الحماية وكلمة المرور</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">كلمة المرور الحالية</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div></div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </div>

          <Button variant="outline">تغيير كلمة المرور</Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
