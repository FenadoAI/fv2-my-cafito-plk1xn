import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = ({ language }) => {
  const content = {
    en: {
      tagline: "Dubai's Premium Coffee Experience",
      quickLinks: {
        title: "Quick Links",
        links: [
          { label: "Home", href: "#home" },
          { label: "Menu", href: "#menu" },
          { label: "Locations", href: "#locations" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" }
        ]
      },
      contact: {
        title: "Contact Info",
        phone: "+971 4 123 4567",
        email: "hello@cafito.ae",
        hours: "Daily: 6:00 AM - 12:00 AM"
      },
      locations: {
        title: "Locations",
        items: [
          "Dubai Mall, Downtown",
          "Marina Walk, Dubai Marina",
          "The Beach, JBR"
        ]
      },
      social: {
        title: "Follow Us",
        description: "Stay connected for latest updates and offers"
      },
      copyright: "© 2024 Cafito. All rights reserved.",
      developed: "Developed with ❤️ for Dubai"
    },
    ar: {
      tagline: "تجربة القهوة المميزة في دبي",
      quickLinks: {
        title: "روابط سريعة",
        links: [
          { label: "الرئيسية", href: "#home" },
          { label: "القائمة", href: "#menu" },
          { label: "المواقع", href: "#locations" },
          { label: "حولنا", href: "#about" },
          { label: "اتصل بنا", href: "#contact" }
        ]
      },
      contact: {
        title: "معلومات الاتصال",
        phone: "+971 4 123 4567",
        email: "hello@cafito.ae",
        hours: "يومياً: ٦:٠٠ ص - ١٢:٠٠ م"
      },
      locations: {
        title: "المواقع",
        items: [
          "دبي مول، وسط المدينة",
          "ممشى المارينا، دبي مارينا",
          "الشاطئ، جي بي آر"
        ]
      },
      social: {
        title: "تابعنا",
        description: "ابق على تواصل للحصول على آخر التحديثات والعروض"
      },
      copyright: "© ٢٠٢٤ كافيتو. جميع الحقوق محفوظة.",
      developed: "مطور بـ ❤️ لدبي"
    }
  };

  const currentContent = content[language];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/59228f5a-93af-4ff6-80a1-844e7efc51aa.png" 
                alt="Cafito Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="text-2xl font-bold text-white">Cafito</h3>
            </div>
            <p className={`text-gray-300 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {currentContent.tagline}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {currentContent.quickLinks.title}
            </h4>
            <ul className="space-y-2">
              {currentContent.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-gray-300 hover:text-amber-400 transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {currentContent.contact.title}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-400" />
                <a href={`tel:${currentContent.contact.phone}`} className="text-gray-300 hover:text-amber-400">
                  {currentContent.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-400" />
                <a href={`mailto:${currentContent.contact.email}`} className="text-gray-300 hover:text-amber-400">
                  {currentContent.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-amber-400" />
                <span className={`text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {currentContent.contact.hours}
                </span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {currentContent.locations.title}
            </h4>
            <ul className="space-y-2">
              {currentContent.locations.items.map((location, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span className={`text-gray-300 text-sm ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {location}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-gray-400 text-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
              {currentContent.copyright}
            </p>
            <p className={`text-gray-400 text-sm mt-2 md:mt-0 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {currentContent.developed}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;