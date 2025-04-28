
import { useLanguage } from '../hooks/useLanguage';
import { School } from 'lucide-react';

export default function EducationSection() {
  const { t } = useLanguage();
  
  const educationItems = [
    {
      period: '2010 - 2016',
      name: t('education.elementary.name'),
      description: t('education.elementary.description'),
    },
    {
      period: '2016 - 2019',
      name: t('education.middle.name'),
      description: t('education.middle.description'),
    },
    {
      period: '2019 - 2022',
      name: t('education.high.name'),
      description: t('education.high.description'),
    }
  ];
  
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="inline-block border-b-2 border-primary pb-1">{t('education.title')}</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <div key={index} className="relative">
                  {/* Circle */}
                  <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 -translate-y-3 w-4 h-4 rounded-full bg-primary"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                      <div className="flex items-center mb-2 justify-start md:justify-between">
                        <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                        <School className="h-5 w-5 text-primary hidden md:block" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
