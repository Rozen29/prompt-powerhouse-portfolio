
import { ThemeProvider } from '../hooks/useTheme';
import { LanguageProvider } from '../hooks/useLanguage';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import AIPromptPlayground from '../components/AIPromptPlayground';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import FloatingActionButton from '../components/FloatingActionButton';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <motion.div 
          className="min-h-screen bg-background text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <AIPromptPlayground />
            <EducationSection />
            <ContactSection />
          </main>
          <Footer />
          <FloatingActionButton />
        </motion.div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
