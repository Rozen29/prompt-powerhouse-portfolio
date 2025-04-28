
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface ProjectFormProps {
  project?: {
    id: string;
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
    technologies: string[];
  };
  onSuccess?: () => void;
}

export default function ProjectForm({ project, onSuccess }: ProjectFormProps) {
  const [title, setTitle] = useState(project?.title || '');
  const [description, setDescription] = useState(project?.description || '');
  const [image, setImage] = useState(project?.image || '');
  const [githubUrl, setGithubUrl] = useState(project?.githubUrl || '');
  const [liveUrl, setLiveUrl] = useState(project?.liveUrl || '');
  const [technologies, setTechnologies] = useState(project?.technologies?.join(', ') || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Form validation
      if (!title || !description) {
        throw new Error('Title and description are required');
      }
      
      // Prepare project data
      const projectData = {
        id: project?.id || Date.now().toString(),
        title,
        description,
        image: image || '/placeholder.svg',
        githubUrl,
        liveUrl,
        technologies: technologies.split(',').map(tech => tech.trim()).filter(Boolean),
      };
      
      // In a real app, you'd send this to an API
      // For demo, we'll store in localStorage
      const existingProjects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
      
      if (project?.id) {
        // Update existing project
        const updatedProjects = existingProjects.map((p: any) => 
          p.id === project.id ? projectData : p
        );
        localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
      } else {
        // Add new project
        localStorage.setItem('portfolio_projects', 
          JSON.stringify([...existingProjects, projectData])
        );
      }
      
      toast({
        title: "Success!",
        description: project?.id 
          ? "Project updated successfully" 
          : "New project added to your portfolio",
        duration: 3000,
      });
      
      if (onSuccess) onSuccess();
      
      // Clear form if adding new project
      if (!project?.id) {
        setTitle('');
        setDescription('');
        setImage('');
        setGithubUrl('');
        setLiveUrl('');
        setTechnologies('');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save project",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="My Awesome Project"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your project..."
          className="min-h-[100px]"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="/images/project.jpg or https://example.com/image.jpg"
        />
        <p className="text-sm text-muted-foreground">Leave blank to use a placeholder image</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="githubUrl">GitHub URL</Label>
        <Input
          id="githubUrl"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          placeholder="https://github.com/username/repo"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="liveUrl">Live Demo URL</Label>
        <Input
          id="liveUrl"
          value={liveUrl}
          onChange={(e) => setLiveUrl(e.target.value)}
          placeholder="https://myproject.com"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="technologies">Technologies Used</Label>
        <Input
          id="technologies"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          placeholder="React, TypeScript, Tailwind CSS"
        />
        <p className="text-sm text-muted-foreground">Comma-separated list of technologies</p>
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : (project?.id ? "Update Project" : "Add Project")}
      </Button>
    </form>
  );
}
