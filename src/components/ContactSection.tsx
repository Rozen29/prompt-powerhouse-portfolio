
import { useLanguage } from '../hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send this to an API
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out, I'll get back to you soon.",
    });
    
    // Reset form
    setEmail('');
    setMessage('');
  };
  
  return (
    <section id="contact" className="py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="inline-block border-b-2 border-primary pb-1">{t('contact.title')}</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>{t('contact.title')}</CardTitle>
              <CardDescription>{t('contact.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your message..." 
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
                
                {/* Contact Links */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>example@email.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="#" className="hover:text-primary transition-colors">github.com/username</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="#" className="hover:text-primary transition-colors">linkedin.com/in/username</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
