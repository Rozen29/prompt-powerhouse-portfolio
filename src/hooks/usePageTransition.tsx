
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface UsePageTransitionOptions {
  type?: 'radial' | 'fade';
  duration?: number;
  color?: string;
}

export function usePageTransition(options: UsePageTransitionOptions = {}) {
  const { 
    type = 'radial', 
    duration = 800, 
    color = '#3b82f6'  // primary blue color
  } = options;
  
  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionStyles, setTransitionStyles] = useState({});
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null);
  
  // Function to handle navigation with transition effect
  const navigateWithTransition = (to: string, position?: { x: number, y: number }) => {
    // Save click position or use center of screen
    const pos = position || { 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2 
    };
    setMousePosition(pos);
    
    // Start transition
    setIsTransitioning(true);
    
    // After transition animation, navigate
    setTimeout(() => {
      navigate(to);
      // Reset after navigating
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, duration - 100);
  };
  
  // Update transition styles based on type and mouse position
  useEffect(() => {
    if (isTransitioning && mousePosition) {
      if (type === 'radial') {
        // Radial transition effect
        setTransitionStyles({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          background: color,
          clipPath: isTransitioning 
            ? `circle(150% at ${mousePosition.x}px ${mousePosition.y}px)` 
            : `circle(0% at ${mousePosition.x}px ${mousePosition.y}px)`,
          transition: `clip-path ${duration}ms ease-in-out`
        });
      } else {
        // Default fade transition
        setTransitionStyles({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          background: color,
          opacity: isTransitioning ? 1 : 0,
          transition: `opacity ${duration}ms ease-in-out`
        });
      }
    }
  }, [isTransitioning, mousePosition, type, color, duration]);

  return {
    navigateWithTransition,
    isTransitioning,
    transitionStyles
  };
}
