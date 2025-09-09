import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee, Users, Heart, Award } from 'lucide-react';

const About = ({ language }) => {
  const content = {
    en: {
      title: "About Cafito",
      subtitle: "Bringing authentic coffee culture to Dubai",
      story: "Founded in 2020, Cafito began as a passion project to blend traditional Arabic coffee culture with modern coffee innovation. Located in the heart of Dubai, we serve both locals and visitors seeking an authentic yet contemporary coffee experience.",
      mission: "Our mission is to create a warm, welcoming space where every cup tells a story and every visit feels like coming home.",
      values: [
        {
          icon: <Coffee className="h-8 w-8" />,
          title: "Quality Coffee",
          description: "We source the finest beans from around the world and blend them with traditional Arabic coffee techniques."
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: "Community",
          description: "Creating connections and fostering relationships in the vibrant multicultural landscape of Dubai."
        },
        {
          icon: <Heart className="h-8 w-8" />,
          title: "Passion",
          description: "Every cup is crafted with love and dedication to provide an exceptional experience."
        },
        {
          icon: <Award className="h-8 w-8" />,
          title: "Excellence",
          description: "Committed to maintaining the highest standards in service, quality, and ambiance."
        }
      ],
      stats: [
        { number: "3", label: "Locations" },
        { number: "10000+", label: "Happy Customers" },
        { number: "25+", label: "Coffee Varieties" },
        { number: "4", label: "Years of Excellence" }
      ]
    },
    ar: {
      title: "حول كافيتو",
      subtitle: "نحضر ثقافة القهوة الأصيلة إلى دبي",
      story: "تأسست كافيتو في عام ٢٠٢٠ كمشروع شغف لدمج ثقافة القهوة العربية التقليدية مع الابتكار الحديث في القهوة. نقع في قلب دبي، ونخدم السكان المحليين والزوار الباحثين عن تجربة قهوة أصيلة ومعاصرة.",
      mission: "مهمتنا هي خلق مساحة دافئة ومرحبة حيث كل كوب يحكي قصة وكل زيارة تشعرك وكأنك في البيت.",
      values: [
        {
          icon: <Coffee className="h-8 w-8" />,
          title: "قهوة عالية الجودة",
          description: "نحصل على أفضل حبوب القهوة من حول العالم ونمزجها بتقنيات القهوة العربية التقليدية."
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: "المجتمع",
          description: "خلق الروابط وتعزيز العلاقات في المشهد متعدد الثقافات النابض بالحياة في دبي."
        },
        {
          icon: <Heart className="h-8 w-8" />,
          title: "الشغف",
          description: "كل كوب مصنوع بحب وتفان لتوفير تجربة استثنائية."
        },
        {
          icon: <Award className="h-8 w-8" />,
          title: "التميز",
          description: "ملتزمون بالحفاظ على أعلى المعايير في الخدمة والجودة والأجواء."
        }
      ],
      stats: [
        { number: "٣", label: "مواقع" },
        { number: "١٠٠٠٠+", label: "عميل سعيد" },
        { number: "٢٥+", label: "نوع قهوة" },
        { number: "٤", label: "سنوات من التميز" }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 text-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.title}
          </h2>
          <p className={`text-gray-600 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
            {currentContent.subtitle}
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className={`text-lg leading-relaxed mb-6 text-gray-700 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {currentContent.story}
            </p>
            <p className={`text-lg leading-relaxed text-gray-700 font-medium ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {currentContent.mission}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {currentContent.values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-amber-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {value.title}
                </h3>
                <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {currentContent.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Image */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className={`text-2xl font-semibold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'فريقنا' : 'Our Team'}
            </h3>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <p className={`text-gray-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' 
                    ? 'فريق متخصص من محبي القهوة'
                    : 'Dedicated team of coffee enthusiasts'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;