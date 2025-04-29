
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useThemeTransition } from '../hooks/useThemeTransition';

export default function ThemeSwitcher() {
  const { theme, handleThemeToggle, isTransitioning, transitionStyles } = useThemeTransition({
    duration: 800,
    color: 'hsl(var(--background))'
  });
  
  return (
    <>
      {/* Transition overlay */}
      {isTransitioning && <div style={transitionStyles as React.CSSProperties} />}
      
      <Button 
        variant="ghost" 
        size="icon"
        onClick={handleThemeToggle}
        className="rounded-full transition-all"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    </>
  );
}
