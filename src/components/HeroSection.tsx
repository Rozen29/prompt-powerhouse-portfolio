
import { useLanguage } from '../hooks/useLanguage';
import AvatarCard from './AvatarCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-primary font-medium mb-2">{t('hero.greeting')}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t('hero.name')}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              {t('hero.title')}
            </h2>
            <p className="mb-8 max-w-md text-muted-foreground">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#projects">
                  {t('nav.projects')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">{t('nav.contact')}</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <AvatarCard />
          </div>
        </div>
      </div>
    </section>
  );
}
