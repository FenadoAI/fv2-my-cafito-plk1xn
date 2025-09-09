import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';

const Hero = ({ language }) => {
  const content = {
    en: {
      title: "Welcome to Cafito",
      subtitle: "Dubai's Premium Coffee Experience",
      description: "Experience the finest Arabic coffee and international blends in the heart of Dubai. From traditional Karak to modern specialty drinks.",
      menuButton: "View Menu",
      locationButton: "Find Us",
      features: [
        { icon: <MapPin className="h-5 w-5" />, text: "3 Locations in Dubai" },
        { icon: <Clock className="h-5 w-5" />, text: "Open Daily 6AM - 12AM" },
        { icon: <Phone className="h-5 w-5" />, text: "Order Ahead Available" }
      ]
    },
    ar: {
      title: "أهلاً بكم في كافيتو",
      subtitle: "تجربة القهوة المميزة في دبي",
      description: "اختبروا أفضل أنواع القهوة العربية والعالمية في قلب دبي. من الكرك التقليدي إلى المشروبات المتخصصة الحديثة.",
      menuButton: "عرض القائمة",
      locationButton: "موقعنا",
      features: [
        { icon: <MapPin className="h-5 w-5" />, text: "٣ مواقع في دبي" },
        { icon: <Clock className="h-5 w-5" />, text: "مفتوح يومياً ٦ص - ١٢م" },
        { icon: <Phone className="h-5 w-5" />, text: "الطلب المسبق متاح" }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-white ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.title}
          </h1>
          <p className={`text-xl md:text-2xl mb-4 text-amber-100 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.subtitle}
          </p>
          <p className={`text-lg mb-8 text-white/90 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
            >
              {currentContent.menuButton}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3 text-lg"
            >
              {currentContent.locationButton}
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-white">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                {feature.icon}
                <span className={language === 'ar' ? 'font-arabic' : ''}>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;