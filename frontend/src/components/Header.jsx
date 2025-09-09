import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, MapPin, Phone, Clock } from 'lucide-react';

const Header = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = {
    en: ['Home', 'Menu', 'Locations', 'About', 'Contact'],
    ar: ['الرئيسية', 'القائمة', 'المواقع', 'حولنا', 'اتصل بنا']
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/59228f5a-93af-4ff6-80a1-844e7efc51aa.png" 
              alt="Cafito Logo" 
              className="h-10 w-10 rounded-lg"
            />
            <h1 className="text-2xl font-bold text-amber-800">Cafito</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation[language].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'left' : 'right'}>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation[language].map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-lg text-gray-700 hover:text-amber-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;