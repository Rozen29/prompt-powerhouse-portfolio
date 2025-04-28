
import { useLanguage } from '../hooks/useLanguage';

export default function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="inline-block border-b-2 border-primary pb-1">{t('about.title')}</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>
      </div>
    </section>
  );
}
