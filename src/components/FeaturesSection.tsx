import { Shield, Truck, Palette, BadgePercent } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'ضمان 10 سنوات',
    description: 'ضمان حقيقي على شاسية المرتبة يعكس ثقتنا في جودة منتجاتنا',
  },
  {
    icon: Palette,
    title: 'تصميمات حديثة',
    description: 'تصميمات عصرية ومختلفة تتناسب مع كافة الديكورات والأذواق',
  },
  {
    icon: BadgePercent,
    title: 'خصومات خاصة',
    description: 'عروض وخصومات حصرية لتجار الجملة والعملاء المميزين',
  },
  {
    icon: Truck,
    title: 'توصيل لجميع المحافظات',
    description: 'خدمة توصيل سريعة وآمنة لجميع المحافظات في مصر',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4" dir="rtl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            لماذا <span className="text-gradient-gold">بسمارك</span>؟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم لك أفضل تجربة نوم مع منتجات عالية الجودة وخدمات متميزة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
