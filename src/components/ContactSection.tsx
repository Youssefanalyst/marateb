import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    label: 'اتصل بنا',
    value: '01050206001',
    href: 'tel:01050206001',
  },
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'info@bismarck-mattresses.com',
    href: 'mailto:info@bismarck-mattresses.com',
  },
  {
    icon: MapPin,
    label: 'العنوان',
    value: 'طريق الأسكندرية القاهرة الزراعى - خورشيد القبلية - الاسكندرية',
    href: 'https://maps.google.com/?q=خورشيد+القبلية+الاسكندرية',
  },
  {
    icon: Clock,
    label: 'ساعات العمل',
    value: 'السبت - الخميس: 9ص - 9م',
    href: '#',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-brown-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
              تواصل <span className="text-gradient-gold">معنا</span>
            </h2>
            <p className="text-cream/70 mb-8 max-w-md">
              نحن هنا لمساعدتك في اختيار المرتبة المثالية لك. تواصل معنا للاستفسارات أو الطلبات الخاصة
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 bg-cream/5 hover:bg-cream/10 rounded-xl p-4 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">{info.label}</p>
                    <p className="text-cream font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated">
            <h3 className="text-xl font-bold text-foreground mb-6">أرسل رسالة</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="اسمك الكريم"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="01xxxxxxxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  الرسالة
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>
              <Button variant="gold" size="lg" className="w-full">
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
