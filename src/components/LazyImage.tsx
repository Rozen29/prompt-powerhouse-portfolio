
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Create IntersectionObserver to detect when image is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary animate-pulse" />
      )}
      
      <motion.img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleImageLoad}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
