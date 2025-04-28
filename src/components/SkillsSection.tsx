
import { useLanguage } from '../hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cpu, MessageSquare } from 'lucide-react';

export default function SkillsSection() {
  const { t } = useLanguage();
  
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
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="inline-block border-b-2 border-primary pb-1">{t('skills.title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="border border-border hover:border-primary transition-all duration-300">
              <CardHeader className="flex items-center">
                <div className="mb-4">
                  {skill.icon}
                </div>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{skill.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
