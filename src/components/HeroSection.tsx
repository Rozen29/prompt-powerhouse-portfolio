
import { useLanguage } from '../hooks/useLanguage';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import AvatarCard from './AvatarCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection, { AnimatedItem } from './AnimatedSection';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { t } = useLanguage();
  const { scrollToSection } = useSmoothScroll();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <AnimatedSection>
              <AnimatedItem delay={0.1}>
                <p className="text-primary font-medium mb-2">{t('hero.greeting')}</p>
              </AnimatedItem>
              <AnimatedItem delay={0.3}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {t('hero.name')}
                </h1>
              </AnimatedItem>
              <AnimatedItem delay={0.5}>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                  {t('hero.title')}
                </h2>
              </AnimatedItem>
              <AnimatedItem delay={0.7}>
                <p className="mb-8 max-w-md text-muted-foreground">
                  {t('hero.description')}
                </p>
              </AnimatedItem>
              <AnimatedItem delay={0.9}>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild>
                      <a href="#projects" className="group" onClick={(e) => handleNavClick(e, 'projects')}>
                        {t('nav.projects')}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            repeat: Infinity, 
                            repeatType: "loop", 
                            duration: 1.5, 
                            ease: "easeInOut" 
                          }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" asChild>
                      <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t('nav.contact')}</a>
                    </Button>
                  </motion.div>
                </div>
              </AnimatedItem>
            </AnimatedSection>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <AvatarCard />
          </div>
        </div>
      </div>
    </section>
  );
}
