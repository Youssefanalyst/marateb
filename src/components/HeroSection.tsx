import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bismarck.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center" dir="rtl">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-cream text-sm font-medium">مراتب ألمانية فاخرة</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            عيش الرفاهية مع{' '}
            <span className="text-gradient-gold">بسمارك</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-cream/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            أقوي المراتب والمفروشات لفرش بيتك من بسمارك، مع مراتب بسمارك هاتقضي أفضل ساعات النوم
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#products">تسوق الآن</a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-transparent border-cream/30 text-cream hover:bg-cream/10"
              asChild
            >
              <a href="#features">اكتشف المزيد</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">10+</div>
              <div className="text-cream/60 text-sm">سنوات ضمان</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">50K+</div>
              <div className="text-cream/60 text-sm">عميل سعيد</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">100%</div>
              <div className="text-cream/60 text-sm">جودة ألمانية</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
