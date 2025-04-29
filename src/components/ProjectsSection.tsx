
import { useLanguage } from '../hooks/useLanguage';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedSection, { AnimatedItem } from './AnimatedSection';
import LazyImage from './LazyImage';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  
  useEffect(() => {
    // Load projects from localStorage (added by the admin CMS)
    const storedProjects = localStorage.getItem('portfolio_projects');
    const parsedProjects = storedProjects ? JSON.parse(storedProjects) : [];
    
    // If there are stored projects, use them; otherwise, use default projects
    if (parsedProjects.length > 0) {
      setProjects(parsedProjects);
    } else {
      // Default projects when none exist in localStorage
      setProjects([
        {
          id: "1",
          title: t('projects.bolt.title'),
          description: t('projects.bolt.description'),
          image: '/placeholder.svg',
          githubUrl: '#',
          liveUrl: '#',
          technologies: ["React", "TypeScript", "Tailwind"],
        },
        {
          id: "2",
          title: t('projects.loveable.title'),
          description: t('projects.loveable.description'),
          image: '/placeholder.svg',
          githubUrl: '#',
          liveUrl: '#',
          technologies: ["Next.js", "React", "Framer Motion"],
        }
      ]);
    }
  }, [t]);
  
  return (
    <section id="projects" className="py-24 bg-darkblue-dark">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="inline-block border-b-2 border-primary pb-1">{t('projects.title')}</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.2 * (index + 1)}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onHoverStart={() => setActiveProjectId(project.id)}
                onHoverEnd={() => setActiveProjectId(null)}
              >
                <Card className={`overflow-hidden border border-darkblue-light hover:border-primary transition-all duration-300 h-full bg-darkblue-DEFAULT card-glow ${activeProjectId === project.id ? 'active-blue' : ''}`}>
                  <LazyImage 
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
                    
                    {project.technologies && (
                      <div className="mt-4 flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-primary/10 border-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
