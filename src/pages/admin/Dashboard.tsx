import {
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const stats = [
  {
    title: 'إجمالي المنتجات',
    value: '24',
    change: '+3',
    changeType: 'positive',
    icon: Package,
    color: 'bg-blue-500',
  },
  {
    title: 'الطلبات الجديدة',
    value: '18',
    change: '+12%',
    changeType: 'positive',
    icon: ShoppingCart,
    color: 'bg-green-500',
  },
  {
    title: 'إجمالي المبيعات',
    value: '125,000 ج.م',
    change: '+8%',
    changeType: 'positive',
    icon: DollarSign,
    color: 'bg-amber-500',
  },
  {
    title: 'العملاء',
    value: '1,250',
    change: '-2%',
    changeType: 'negative',
    icon: Users,
    color: 'bg-purple-500',
  },
];

const recentOrders = [
  { id: '#1234', customer: 'أحمد محمد', product: 'مرتبة بسمارك الملكية', amount: '8,500 ج.م', status: 'مكتمل' },
  { id: '#1235', customer: 'سارة علي', product: 'سرير ميكانيزم فاخر', amount: '12,000 ج.م', status: 'قيد التوصيل' },
  { id: '#1236', customer: 'محمود حسن', product: 'مرتبة بسمارك بريميوم', amount: '6,500 ج.م', status: 'جديد' },
  { id: '#1237', customer: 'فاطمة أحمد', product: 'طقم مفروشات قطن', amount: '1,500 ج.م', status: 'مكتمل' },
];

const topProducts = [
  { name: 'مرتبة بسمارك الملكية', sales: 45, revenue: '382,500 ج.م' },
  { name: 'سرير ميكانيزم فاخر', sales: 32, revenue: '384,000 ج.م' },
  { name: 'مرتبة بسمارك بريميوم', sales: 28, revenue: '182,000 ج.م' },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
        <p className="text-sm text-gray-500">آخر تحديث: اليوم 10:30 ص</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
                {stat.changeType === 'positive' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-bold text-gray-900">أحدث الطلبات</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    رقم الطلب
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    العميل
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    المنتج
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    المبلغ
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {order.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          order.status === 'مكتمل'
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'قيد التوصيل'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              الأكثر مبيعاً
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.sales} مبيعة</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
