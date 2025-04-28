
import { Languages } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button variant="ghost" size="icon" className="rounded-full">
            <motion.div 
              whileHover={{ rotate: 20 }} 
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Languages className="h-5 w-5" />
            </motion.div>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-accent' : ''}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('id')} className={language === 'id' ? 'bg-accent' : ''}>
          Bahasa Indonesia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
