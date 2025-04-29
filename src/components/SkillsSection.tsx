
import { useLanguage } from '../hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cpu, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function SkillsSection() {
  const { t } = useLanguage();
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  
  const skills = [
    {
      icon: <MessageSquare className="h-12 w-12 text-purple-light" />,
      title: t('skills.prompt.title'),
      description: t('skills.prompt.description'),
    },
    {
      icon: <Code className="h-12 w-12 text-purple-light" />,
      title: t('skills.programming.title'),
      description: t('skills.programming.description'),
    },
    {
      icon: <Cpu className="h-12 w-12 text-purple-light" />,
      title: t('skills.ai.title'),
      description: t('skills.ai.description'),
    }
  ];
  
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="inline-block border-b-2 border-primary pb-1">{t('skills.title')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Card 
                  className={`border border-border hover:border-primary transition-all duration-300 card-glow ${activeCardIndex === index ? 'active-purple' : ''}`}
                  onMouseEnter={() => setActiveCardIndex(index)}
                  onMouseLeave={() => setActiveCardIndex(null)}
                >
                  <CardHeader className="flex items-center">
                    <motion.div 
                      className="mb-4"
                      animate={activeCardIndex === index ? { 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0] 
                      } : {}}
                      transition={{ 
                        duration: 0.6, 
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1]
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <CardTitle>{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{skill.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
