import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Message",
        submit: "Send Message",
        success: "Thank you! We'll get back to you soon."
      },
      info: {
        title: "Contact Information",
        address: "Multiple locations across Dubai",
        phone: "+971 4 123 4567",
        email: "hello@cafito.ae",
        hours: "Daily: 6:00 AM - 12:00 AM"
      }
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "نحب أن نسمع منك",
      form: {
        name: "الاسم الكامل",
        email: "عنوان البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "الرسالة",
        submit: "إرسال الرسالة",
        success: "شكراً! سنعود إليك قريباً."
      },
      info: {
        title: "معلومات الاتصال",
        address: "مواقع متعددة في جميع أنحاء دبي",
        phone: "+971 4 123 4567",
        email: "hello@cafito.ae",
        hours: "يومياً: ٦:٠٠ ص - ١٢:٠٠ م"
      }
    }
  };

  const currentContent = content[language];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert(currentContent.form.success);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 text-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.title}
          </h2>
          <p className={`text-gray-600 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className={language === 'ar' ? 'font-arabic text-right' : ''}>
                {currentContent.form.submit}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={currentContent.form.name}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={language === 'ar' ? 'text-right' : ''}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={currentContent.form.email}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={language === 'ar' ? 'text-right' : ''}
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder={currentContent.form.phone}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={language === 'ar' ? 'text-right' : ''}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={currentContent.form.message}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={language === 'ar' ? 'text-right' : ''}
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  {currentContent.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className={language === 'ar' ? 'font-arabic text-right' : ''}>
                  {currentContent.info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {language === 'ar' ? 'العنوان' : 'Address'}
                    </p>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {currentContent.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {language === 'ar' ? 'الهاتف' : 'Phone'}
                    </p>
                    <a href={`tel:${currentContent.info.phone}`} className="text-amber-600 hover:underline">
                      {currentContent.info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </p>
                    <a href={`mailto:${currentContent.info.email}`} className="text-amber-600 hover:underline">
                      {currentContent.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className={`font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {language === 'ar' ? 'ساعات العمل' : 'Hours'}
                    </p>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {currentContent.info.hours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h3 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {language === 'ar' ? 'إجراءات سريعة' : 'Quick Actions'}
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-amber-300 hover:bg-amber-100"
                    onClick={() => window.open('tel:+97141234567')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-amber-300 hover:bg-amber-100"
                    onClick={() => window.open('https://wa.me/97141234567')}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;