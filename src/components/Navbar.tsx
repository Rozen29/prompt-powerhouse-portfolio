
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.education'), href: '#education' },
    { label: t('nav.contact'), href: '#contact' }
  ];
  
  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-primary">
            AI Developer
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="hover:text-primary transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center space-x-1">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <div className="flex items-center space-x-1 mr-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="rounded-full"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="hover:text-primary transition-colors py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
