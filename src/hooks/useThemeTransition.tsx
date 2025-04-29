
import { useState, useEffect } from 'react';
import { useTheme } from './useTheme';

interface UseThemeTransitionOptions {
  duration?: number;
  color?: string;
}

export function useThemeTransition(options: UseThemeTransitionOptions = {}) {
  const { 
    duration = 800, 
    color = 'hsl(var(--background))' // Use the background color for transition
  } = options;
  
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionStyles, setTransitionStyles] = useState({});
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null);
  
  // Function to handle the theme toggle with transition effect
  const handleThemeToggle = (e: React.MouseEvent) => {
    // Save click position
    const pos = { 
      x: e.clientX, 
      y: e.clientY 
    };
    setMousePosition(pos);
    
    // Start transition
    setIsTransitioning(true);
    
    // After transition animation has started, toggle the theme
    setTimeout(() => {
      // Toggle theme (we'll add this function to the hook later)
      toggleTheme();
      
      // Reset after theme has been toggled
      setTimeout(() => {
        setIsTransitioning(false);
      }, duration * 0.8);
    }, 100);
  };
  
  // Get the toggle function from useTheme
  const { toggleTheme } = useTheme();
  
  // Update transition styles based on mouse position
  useEffect(() => {
    if (isTransitioning && mousePosition) {
      // Radial transition effect
      setTransitionStyles({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9998, // High but below any modal dialogs
        pointerEvents: 'none',
        background: theme === 'dark' ? 'hsl(var(--background))' : 'hsl(var(--background))',
        clipPath: isTransitioning 
          ? `circle(150% at ${mousePosition.x}px ${mousePosition.y}px)` 
          : `circle(0% at ${mousePosition.x}px ${mousePosition.y}px)`,
        transition: `clip-path ${duration}ms ease-in-out`
      });
    }
  }, [isTransitioning, mousePosition, theme, duration]);

  return {
    handleThemeToggle,
    isTransitioning,
    transitionStyles,
    theme
  };
}
