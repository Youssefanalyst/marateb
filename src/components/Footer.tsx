import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Bismarck" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              شركة الحمد لتصنيع وتوزيع المراتب والمفروشات
              <br />
              مراتب بسمارك الألمانية
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-background mb-4">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li>
                <p>طريق الأسكندرية القاهرة الزراعى - خورشيد القبلية - قسم ثان الرمل - الاسكندرية</p>
              </li>
              <li>
                <a href="tel:01050206001" className="hover:text-accent transition-colors">
                  01050206001
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+201050206001?text=Bismarck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  تواصل عبر واتساب
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/60 hover:text-accent transition-colors text-sm">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/60 hover:text-accent transition-colors text-sm">
                  المنتجات
                </a>
              </li>
              <li>
                <a href="#features" className="text-background/60 hover:text-accent transition-colors text-sm">
                  المميزات
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} بسمارك. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
