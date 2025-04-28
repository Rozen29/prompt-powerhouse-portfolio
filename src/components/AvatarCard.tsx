
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function AvatarCard() {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      className="w-64 h-64 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Card Front */}
          <div className="flip-card-front rounded-xl bg-purple-light dark:bg-purple-dark shadow-lg flex flex-col items-center justify-center p-6">
            {/* Avatar Image */}
            <div className="w-24 h-24 rounded-full bg-white/10 mb-4 flex items-center justify-center border-2 border-white/20 animate-pulse">
              {/* Use a placeholder or avatar icon */}
              <svg className="w-16 h-16 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <motion.h3 
              className="text-lg font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              AI Developer
            </motion.h3>
            <motion.p 
              className="text-sm text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {t('avatar.front.title')}
            </motion.p>
            <motion.p 
              className="text-xs mt-2 text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              Hover to flip
            </motion.p>
          </div>
          
          {/* Card Back */}
          <div className="flip-card-back rounded-xl bg-purple-dark dark:bg-purple-light shadow-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold text-white mb-4">{t('avatar.back.title')}</h3>
            <ul className="space-y-2 w-full">
              <motion.li 
                className="text-white/90 text-sm flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 bg-white/80 rounded-full mr-2"></span>
                {t('avatar.back.skill1')}
              </motion.li>
              <motion.li 
                className="text-white/90 text-sm flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="w-2 h-2 bg-white/80 rounded-full mr-2"></span>
                {t('avatar.back.skill2')}
              </motion.li>
              <motion.li 
                className="text-white/90 text-sm flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="w-2 h-2 bg-white/80 rounded-full mr-2"></span>
                {t('avatar.back.skill3')}
              </motion.li>
            </ul>
            
            <div className="mt-4 flex justify-center space-x-4">
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
