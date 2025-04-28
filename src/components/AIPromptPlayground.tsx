
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Loader2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

// Sample prompt examples
const PROMPT_EXAMPLES = [
  "Write a prompt to create a responsive navbar with dark mode",
  "Generate a prompt for creating an animated 3D avatar",
  "Create a prompt for designing an AI chat interface",
];

export default function AIPromptPlayground() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // This is a demo implementation - in a real app, you'd call an actual API
      const demoResponses = [
        "To create a responsive navbar with dark mode, I recommend using a combination of Tailwind CSS and React context. Start by setting up a ThemeContext that manages a 'dark' state. Then, create a Navbar component that uses flex layout with responsive classes. For mobile, implement a hamburger menu that shows/hides based on screen size using 'md:hidden' and 'hidden md:flex'. Add a theme toggle button that updates the context. Apply conditional classes based on the theme state.",
        "For optimal results with this task, I'd structure the prompt with clear sections: 1) Specify the technologies (React, Three.js, and GSAP), 2) Describe the desired aesthetics and style, 3) Detail the animation requirements (idle animations, reactions), 4) Request code breakdown with comments for customization points. Remember to mention responsiveness and performance optimization for mobile devices.",
        "When creating a prompt for an AI chat interface, focus on these key elements: 1) Visual design (bubble style, colors, spacing), 2) UX patterns (typing indicators, timestamps, read receipts), 3) Accessibility requirements, 4) Animation details (message appear/disappear effects), and 5) Responsive behavior across devices. Specifying these components will yield the most comprehensive and implementable results.",
      ];

      // Select a random response
      const randomIndex = Math.floor(Math.random() * demoResponses.length);
      setResponse(demoResponses[randomIndex]);
      
    } catch (error) {
      setResponse("Sorry, there was an error processing your prompt. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  return (
    <AnimatedSection className="py-16 bg-darkblue-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-center">AI Prompt Playground</h2>
          </div>
          <p className="text-center text-muted-foreground mb-8">
            Test your prompt engineering skills - see how I'd approach crafting effective AI prompts
          </p>

          <Card className="border-darkblue-light bg-darkblue-DEFAULT text-foreground mb-6">
            <CardHeader>
              <CardTitle>Your Prompt</CardTitle>
              <CardDescription>
                Enter a description of what you want to create, and I'll suggest how to structure it as an effective prompt
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent>
                <Textarea 
                  placeholder="Describe what you want to create with AI..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] bg-darkblue-light border-darkblue-light"
                />
                
                <div className="mt-4">
                  <p className="text-sm mb-2">Try an example:</p>
                  <div className="flex flex-wrap gap-2">
                    {PROMPT_EXAMPLES.map((example, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => handleExampleClick(example)}
                      >
                        {example.length > 30 ? example.substring(0, 30) + '...' : example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading || !prompt.trim()}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : "Get Prompt Engineering Tips"}
                </Button>
              </CardFooter>
            </form>
          </Card>

          {(response || isLoading) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-primary/20 bg-darkblue-DEFAULT">
                <CardHeader>
                  <CardTitle>Prompt Engineering Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : (
                    <div className="prose prose-invert max-w-none">
                      <p className="whitespace-pre-line">{response}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
