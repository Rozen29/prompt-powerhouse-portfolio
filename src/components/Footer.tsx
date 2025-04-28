
import { useLanguage } from '../hooks/useLanguage';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} AI Developer. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-1 text-sm text-muted-foreground">
            <span>{t('footer.text')}</span>
            <Heart className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
