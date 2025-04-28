
import { GitHub, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function AvatarCard() {
  const { t } = useLanguage();
  
  return (
    <div className="w-64 h-64 mx-auto">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Card Front */}
          <div className="flip-card-front rounded-xl bg-purple-light dark:bg-purple-dark shadow-lg flex flex-col items-center justify-center p-6">
            {/* Avatar Image */}
            <div className="w-24 h-24 rounded-full bg-white/10 mb-4 flex items-center justify-center border-2 border-white/20">
              {/* Use a placeholder or avatar icon */}
              <svg className="w-16 h-16 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">AI Developer</h3>
            <p className="text-sm text-white/80">{t('avatar.front.title')}</p>
            <p className="text-xs mt-2 text-white/60">Hover to flip</p>
          </div>
          
          {/* Card Back */}
          <div className="flip-card-back rounded-xl bg-purple-dark dark:bg-purple-light shadow-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold text-white mb-4">{t('avatar.back.title')}</h3>
            <ul className="space-y-2 w-full">
              <li className="text-white/90 text-sm flex items-center">
                <span className="w-2 h-2 bg-white/80 rounded-full mr-2"></span>
                {t('avatar.back.skill1')}
              </li>
              <li className="text-white/90 text-sm flex items-center">
                <span className="w-2 h-2 bg-white/80 rounded-full mr-2"></span>
                {t('avatar.back.skill2')}
              </li>
              <li className="text-white/90 text-sm flex items-center">
                <span className="w-2 h-2 bg-white/80 rounded-full mr-2"></span>
                {t('avatar.back.skill3')}
              </li>
            </ul>
            
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <GitHub className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
