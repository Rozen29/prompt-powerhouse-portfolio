
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProjectForm from './ProjectForm';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  const { toast } = useToast();
  
  useEffect(() => {
    // In a real app, you'd fetch projects from an API
    // For demo purposes, we'll use localStorage
    try {
      const storedProjects = localStorage.getItem('portfolio_projects');
      setProjects(storedProjects ? JSON.parse(storedProjects) : []);
    } catch (error) {
      console.error("Failed to load projects:", error);
      toast({
        title: "Error",
        description: "Failed to load projects",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);
  
  const handleEditProject = (project: Project) => {
    setSelectedProject(project);
    setIsEditDialogOpen(true);
  };
  
  const handleDeleteProject = (projectId: string) => {
    try {
      const updatedProjects = projects.filter(p => p.id !== projectId);
      localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
      setProjects(updatedProjects);
      
      toast({
        title: "Success",
        description: "Project deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive",
      });
    }
  };
  
  const handleProjectUpdated = () => {
    setIsEditDialogOpen(false);
    
    // Refresh project list
    try {
      const storedProjects = localStorage.getItem('portfolio_projects');
      setProjects(storedProjects ? JSON.parse(storedProjects) : []);
    } catch (error) {
      console.error("Failed to refresh projects:", error);
    }
  };
  
  if (isLoading) {
    return <div className="text-center py-8">Loading projects...</div>;
  }
  
  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="mb-4">No projects found. Add your first project!</p>
      </div>
    );
  }
  
  return (
    <>
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-darkblue-light">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEditProject(project)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Project</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{project.title}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDeleteProject(project.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <ProjectForm 
              project={selectedProject} 
              onSuccess={handleProjectUpdated} 
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
