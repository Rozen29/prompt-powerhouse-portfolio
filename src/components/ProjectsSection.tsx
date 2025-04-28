
import { useLanguage } from '../hooks/useLanguage';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.bolt.title'),
      description: t('projects.bolt.description'),
      image: '/placeholder.svg', // Using placeholder image
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: t('projects.loveable.title'),
      description: t('projects.loveable.description'),
      image: '/placeholder.svg', // Using placeholder image
      githubUrl: '#',
      liveUrl: '#',
    }
  ];
  
  return (
    <section id="projects" className="py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="inline-block border-b-2 border-primary pb-1">{t('projects.title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:border-primary transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover" 
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
