import type { Language } from '../i18n/translations';

interface LanguageSwitcherProps {
  lang: Language;
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const otherLang = lang === 'fr' ? 'en' : 'fr';
  const otherLangUrl = `/${otherLang}/`;

  const switchLanguage = () => {
    window.location.href = otherLangUrl;
  };

  return (
    <button
      onClick={switchLanguage}
      className="px-4 py-2 bg-white/10 hover:bg-secondary/30 backdrop-blur-sm border border-white/10 hover:border-secondary/50 rounded-lg text-white font-medium transition-colors"
      aria-label={lang === 'fr' ? 'Switch to English' : 'Passer au français'}
    >
      {otherLang.toUpperCase()}
    </button>
  );
}
