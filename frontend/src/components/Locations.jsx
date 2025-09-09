import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'https://8001-izkm30z1fzazobgt114qb.e2b.app';
const API = `${API_BASE}/api`;

const Locations = ({ language }) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const content = {
    en: {
      title: "Our Locations",
      subtitle: "Find Cafito near you in Dubai",
      getDirections: "Get Directions",
      call: "Call",
      hours: "Hours"
    },
    ar: {
      title: "مواقعنا",
      subtitle: "اعثر على كافيتو بالقرب منك في دبي",
      getDirections: "احصل على الاتجاهات",
      call: "اتصل",
      hours: "ساعات العمل"
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await axios.get(`${API}/locations`);
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDirections = (lat, lng) => {
    window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank');
  };

  const LocationCard = ({ location }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className={`flex items-center gap-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
          <MapPin className="h-5 w-5 text-amber-600" />
          {language === 'ar' ? location.name_ar : location.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
          <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
            {language === 'ar' ? location.address_ar : location.address}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-gray-500" />
          <a href={`tel:${location.phone}`} className="text-amber-600 hover:underline">
            {location.phone}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? location.hours_ar : location.hours}
          </span>
        </div>

        <div className="flex gap-2 pt-4">
          <Button
            onClick={() => getDirections(location.latitude, location.longitude)}
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
          >
            <Navigation className="h-4 w-4 mr-2" />
            {currentContent.getDirections}
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open(`tel:${location.phone}`)}
            className="border-amber-600 text-amber-600 hover:bg-amber-50"
          >
            <Phone className="h-4 w-4 mr-2" />
            {currentContent.call}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <section id="locations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-gray-300 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="locations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 text-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.title}
          </h2>
          <p className={`text-gray-600 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
          <h3 className={`text-2xl font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'خريطة دبي' : 'Dubai Map'}
          </h3>
          <p className={`text-gray-600 mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' 
              ? 'اعثر على أقرب فرع لك في أنحاء دبي'
              : 'Find the nearest Cafito location throughout Dubai'
            }
          </p>
          <div className="bg-white rounded-lg h-64 flex items-center justify-center border">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-2" />
              <p className="text-gray-500">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;