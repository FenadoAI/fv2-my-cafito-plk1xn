import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Coffee, IceCream, Cake } from 'lucide-react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'https://8001-izkm30z1fzazobgt114qb.e2b.app';
const API = `${API_BASE}/api`;

const Menu = ({ language }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const content = {
    en: {
      title: "Our Menu",
      subtitle: "Crafted with passion, served with love",
      categories: {
        all: "All Items",
        hot_drinks: "Hot Drinks",
        cold_drinks: "Cold Drinks",
        specialty: "Specialty",
        desserts: "Desserts"
      },
      popular: "Popular",
      currency: "AED"
    },
    ar: {
      title: "قائمتنا",
      subtitle: "مصنوعة بشغف، تُقدم بحب",
      categories: {
        all: "جميع العناصر",
        hot_drinks: "المشروبات الساخنة",
        cold_drinks: "المشروبات الباردة",
        specialty: "المتخصصة",
        desserts: "الحلويات"
      },
      popular: "مشهور",
      currency: "درهم"
    }
  };

  const categoryIcons = {
    hot_drinks: <Coffee className="h-4 w-4" />,
    cold_drinks: <IceCream className="h-4 w-4" />,
    specialty: <Star className="h-4 w-4" />,
    desserts: <Cake className="h-4 w-4" />
  };

  const currentContent = content[language];

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get(`${API}/menu`);
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredItems = (category) => {
    if (category === 'all') return menuItems;
    return menuItems.filter(item => item.category === category);
  };

  const MenuItemCard = ({ item }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={item.image_url || 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
          alt={language === 'ar' ? item.name_ar : item.name}
          className="w-full h-48 object-cover"
        />
        {item.popular && (
          <Badge className="absolute top-2 right-2 bg-amber-500 text-white">
            <Star className="h-3 w-3 mr-1" />
            {currentContent.popular}
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`font-semibold text-lg ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
            {language === 'ar' ? item.name_ar : item.name}
          </h3>
          <span className="text-lg font-bold text-amber-600">
            {item.price} {currentContent.currency}
          </span>
        </div>
        <p className={`text-gray-600 text-sm mb-3 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
          {language === 'ar' ? item.description_ar : item.description}
        </p>
        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
          {language === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
        </Button>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <section id="menu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-64 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 text-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.title}
          </h2>
          <p className={`text-gray-600 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.subtitle}
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white border">
            <TabsTrigger value="all" className="flex items-center gap-2">
              {currentContent.categories.all}
            </TabsTrigger>
            {Object.entries(currentContent.categories).slice(1).map(([key, label]) => (
              <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                {categoryIcons[key]}
                <span className="hidden sm:inline">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(currentContent.categories).map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredItems(category).map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;