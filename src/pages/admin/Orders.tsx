import { useState } from 'react';
import { Search, Eye, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const initialOrders = [
  {
    id: '#1234',
    customer: 'أحمد محمد',
    phone: '01012345678',
    product: 'مرتبة بسمارك الملكية',
    amount: 8500,
    date: '2024-01-15',
    status: 'completed',
    address: 'القاهرة - مدينة نصر',
  },
  {
    id: '#1235',
    customer: 'سارة علي',
    phone: '01098765432',
    product: 'سرير ميكانيزم فاخر',
    amount: 12000,
    date: '2024-01-14',
    status: 'shipping',
    address: 'الإسكندرية - سموحة',
  },
  {
    id: '#1236',
    customer: 'محمود حسن',
    phone: '01155544433',
    product: 'مرتبة بسمارك بريميوم',
    amount: 6500,
    date: '2024-01-14',
    status: 'new',
    address: 'الجيزة - الهرم',
  },
  {
    id: '#1237',
    customer: 'فاطمة أحمد',
    phone: '01234567890',
    product: 'طقم مفروشات قطن',
    amount: 1500,
    date: '2024-01-13',
    status: 'completed',
    address: 'القاهرة - المعادي',
  },
  {
    id: '#1238',
    customer: 'خالد إبراهيم',
    phone: '01111222333',
    product: 'مرتبة بسمارك سوبر',
    amount: 9500,
    date: '2024-01-13',
    status: 'processing',
    address: 'المنصورة',
  },
];

const statusConfig = {
  new: {
    label: 'جديد',
    color: 'bg-amber-100 text-amber-700',
    icon: Clock,
  },
  processing: {
    label: 'قيد التجهيز',
    color: 'bg-blue-100 text-blue-700',
    icon: Package,
  },
  shipping: {
    label: 'قيد التوصيل',
    color: 'bg-purple-100 text-purple-700',
    icon: Truck,
  },
  completed: {
    label: 'مكتمل',
    color: 'bg-green-100 text-green-700',
    icon: CheckCircle,
  },
};

const Orders = () => {
  const [orders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statuses = [
    { value: 'all', label: 'الكل' },
    { value: 'new', label: 'جديد' },
    { value: 'processing', label: 'قيد التجهيز' },
    { value: 'shipping', label: 'قيد التوصيل' },
    { value: 'completed', label: 'مكتمل' },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.includes(searchTerm) ||
      order.id.includes(searchTerm) ||
      order.phone.includes(searchTerm);
    const matchesStatus =
      selectedStatus === 'all' || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusInfo = (status: string) => {
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.new;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">الطلبات</h1>
        <p className="text-gray-500 text-sm mt-1">إدارة ومتابعة طلبات العملاء</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <p className="text-sm text-gray-500">إجمالي الطلبات</p>
          <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <p className="text-sm text-gray-500">طلبات جديدة</p>
          <p className="text-2xl font-bold text-amber-600">
            {orders.filter((o) => o.status === 'new').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <p className="text-sm text-gray-500">قيد التوصيل</p>
          <p className="text-2xl font-bold text-purple-600">
            {orders.filter((o) => o.status === 'shipping').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <p className="text-sm text-gray-500">مكتملة</p>
          <p className="text-2xl font-bold text-green-600">
            {orders.filter((o) => o.status === 'completed').length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="بحث برقم الطلب أو اسم العميل أو الهاتف..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {statuses.map((status) => (
              <Button
                key={status.value}
                variant={selectedStatus === status.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedStatus(status.value)}
                className={
                  selectedStatus === status.value
                    ? 'bg-gray-900 hover:bg-gray-800'
                    : ''
                }
              >
                {status.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => {
          const statusInfo = getStatusInfo(order.status);
          const StatusIcon = statusInfo.icon;
          return (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Package className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">{order.id}</span>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full ${statusInfo.color}`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {statusInfo.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{order.product}</p>
                    <p className="text-xs text-gray-400 mt-1">{order.date}</p>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-1">
                  <p className="font-bold text-gray-900">{order.customer}</p>
                  <p className="text-sm text-gray-500">{order.phone}</p>
                  <p className="text-xs text-gray-400">{order.address}</p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-lg font-bold text-amber-600">
                    {order.amount.toLocaleString()} ج.م
                  </p>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Eye className="w-4 h-4" />
                    تفاصيل
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border">
          <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">لا توجد طلبات مطابقة للبحث</p>
        </div>
      )}
    </div>
  );
};

export default Orders;
