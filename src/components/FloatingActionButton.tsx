
import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePageTransition } from '../hooks/usePageTransition';

export default function FloatingActionButton() {
  const [isHovered, setIsHovered] = useState(false);
  const { navigateWithTransition, isTransitioning, transitionStyles } = 
    usePageTransition({ type: 'radial', duration: 800, color: 'hsl(var(--primary))' });
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const position = { x: e.clientX, y: e.clientY };
    navigateWithTransition('/admin', position);
  };
  
  return (
    <>
      {/* Transition overlay */}
      {isTransitioning && <div style={transitionStyles as React.CSSProperties} />}
      
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <a
          href="/admin"
          aria-label="Admin Panel"
          className={`block p-3 rounded-full bg-primary shadow-lg transition-all duration-300 ${
            isHovered ? 'card-glow active-purple transform scale-110' : ''
          }`}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={isHovered ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Settings className="h-6 w-6 text-white" />
          </motion.div>
        </a>
      </motion.div>
    </>
  );
}
