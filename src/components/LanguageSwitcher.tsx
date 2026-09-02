'use client';
import { useLang, Lang } from './LangContext';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export default function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { lang, setLang } = useLang();

  const options: { code: Lang; label: string; flag: string; title: string }[] = [
    { code: 'en', label: 'EN', flag: '🇬🇧', title: 'English' },
    { code: 'om', label: 'OM', flag: '🇪🇹', title: 'Afaan Oromoo' },
    { code: 'am', label: 'AM', flag: '🇪🇹', title: 'አማርኛ (Amharic)' },
  ];

  if (compact) {
    return (
      <div className="inline-flex items-center bg-white/10 dark:bg-gray-800/80 backdrop-blur-md p-0.5 rounded-full border border-white/20 dark:border-gray-700 shadow-inner">
        {options.map(opt => (
          <button
            key={opt.code}
            onClick={() => setLang(opt.code)}
            title={opt.title}
            className={`px-2 py-1 text-[11px] font-bold rounded-full transition-all duration-200 flex items-center gap-1 ${
              lang === opt.code
                ? 'bg-accent text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>{opt.flag}</span>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center bg-slate-900/60 dark:bg-gray-800/80 backdrop-blur-md p-1 rounded-full border border-white/15 dark:border-gray-700 shadow-inner">
      {options.map(opt => {
        const isActive = lang === opt.code;
        return (
          <button
            key={opt.code}
            onClick={() => setLang(opt.code)}
            title={opt.title}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 ${
              isActive
                ? 'bg-gradient-to-r from-accent to-blue-500 text-white shadow-[0_2px_10px_rgba(74,144,226,0.5)] font-bold scale-[1.02]'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
            aria-pressed={isActive}
          >
            <span className="text-sm leading-none">{opt.flag}</span>
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
