
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from '@/components/admin/LoginForm';
import ProjectForm from '@/components/admin/ProjectForm';
import ProjectList from '@/components/admin/ProjectList';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('projects');

  // Check if user is already authenticated
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      // You would typically validate the token here
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard!",
        duration: 3000,
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-darkblue-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-darkblue-light bg-darkblue-DEFAULT">
            <CardHeader>
              <CardTitle className="text-center">Admin Login</CardTitle>
              <CardDescription className="text-center">Log in to manage your portfolio content</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm onLoginSuccess={handleLogin} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-darkblue-dark text-foreground py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button 
            variant="outline" 
            onClick={() => {
              localStorage.removeItem('admin_token');
              setIsAuthenticated(false);
              toast({
                title: "Logged Out",
                description: "You've been successfully logged out.",
                duration: 3000,
              });
            }}
          >
            Logout
          </Button>
        </div>
        
        <Tabs defaultValue="projects" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="new">Add New Project</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="space-y-4">
            <ProjectList />
          </TabsContent>
          
          <TabsContent value="new">
            <Card className="border-darkblue-light">
              <CardHeader>
                <CardTitle>Add New Project</CardTitle>
                <CardDescription>Fill in the details to add a new project to your portfolio.</CardDescription>
              </CardHeader>
              <CardContent>
                <ProjectForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
