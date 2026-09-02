'use client';
import { useState } from 'react';
import { useLang } from '@/components/LangContext';
import { translations } from '@/lib/translations';

const songs = [
  {
    title: 'Oromiyaa Koo',
    duration: '4:32',
    year: '2024',
    genre: 'Cultural / Folk',
    youtubeId: '2iz2uTZde4s',
    desc: {
      en: 'A heartfelt ode to the beauty and resilience of Oromia, celebrating ancestral roots and cultural pride.',
      om: 'Faaruu mi\'aawaa bareedina fi jabaannaa Oromiyaa faarsu, seenaa fi aadaa dhalootaa kan mul\'isu.',
      am: 'የኦሮሚያን ውበት፣ ፅናት እና ጥንታዊ ባህላዊ ኩራትን የሚያወድስ ልብ የሚነካ የባህል ሙዚቃ።'
    }
  },
  {
    title: 'Gadaa Mootummaa',
    duration: '3:58',
    year: '2024',
    genre: 'Traditional / Modern',
    youtubeId: '2iz2uTZde4s',
    desc: {
      en: 'An exploration of the Gadaa democratic system — its wisdom, governance, and timeless relevance to modern society.',
      om: 'Sirna dimokiraasii Gadaa — ogummaa, bulchiinsa, fi faayidaa inni addunyaa ammayyaatiif qabu ibsa.',
      am: 'የገዳ ዲሞክራሲያዊ ስርዓት ጥበብ፣ አስተዳደር እና ለዘመናዊው አለም ያለውን ዘመን ተሻጋሪ ጠቀሜታ የሚያሳይ።'
    }
  },
  {
    title: 'Aadaa Keenya',
    duration: '5:14',
    year: '2025',
    genre: 'Cultural Fusion',
    youtubeId: '2iz2uTZde4s',
    desc: {
      en: 'A fusion piece blending traditional Oromo instruments with contemporary rhythms to bridge generations.',
      om: 'Meeshaalee aadaa Oromoo muuziqaa ammayyaa wajjin wal-simsiisuun dhaloota walitti fida.',
      am: 'ባህላዊ የኦሮሞ የሙዚቃ መሳሪያዎችን ከዘመናዊ ስልት ጋር በማዋሃድ ትውልድን የሚያስተሳስር ድንቅ ስራ።'
    }
  },
  {
    title: 'Shanan Gadaa',
    duration: '4:47',
    year: '2025',
    genre: 'Ceremonial',
    youtubeId: '2iz2uTZde4s',
    desc: {
      en: 'The title track — a ceremonial piece commemorating the five Gadaa generation classes and their cycles of wisdom.',
      om: 'Sirba mata-duree — miseensota Gadaa shanan fi marsaa ogummaa isaanii kan faarsu.',
      am: 'አምስቱን የገዳ እርከኖች እና የጥበብ ዑደታቸውን የሚያወድስ የክብር የባህል ሙዚቃ።'
    }
  },
];

export default function MusicPage() {
  const [playing, setPlaying] = useState<number | null>(null);
  const { lang } = useLang();
  const t = translations[lang].music;

  const members = [
    { name: 'Kanenus Kasa Bayisa', role: lang === 'om' ? 'Daarektara & Qindeessaa Aadaa' : lang === 'am' ? 'ዳይሬክተር እና የባህል ተራኪ' : 'Director & Cultural Narrator', initials: 'KK' },
    { name: 'Adugna Benti', role: lang === 'om' ? 'Sagalee Duraa' : lang === 'am' ? 'ዋና ድምፃዊ' : 'Lead Vocalist', initials: 'AB' },
    { name: 'Chaltu Wayessa', role: 'Masankoo & Krar', initials: 'CW' },
    { name: 'Girma Tolassa', role: 'Percussion & Kabaro', initials: 'GT' },
    { name: 'Lensa Daba', role: lang === 'om' ? 'Sagalee Deeggarsaa & Ragada' : lang === 'am' ? 'ረዳት ድምፃዊ እና ባህላዊ ዳንስ' : 'Backup Vocals & Dance', initials: 'LD' },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#1a0a2e] text-white py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-tr from-purple-600 to-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-900/50">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19V6l12-3v13M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM9 10l12-3"/></svg>
          </div>
          <div className="flex items-center justify-center gap-4 text-purple-400 font-bold tracking-widest uppercase text-sm mb-4">
            <span className="w-12 h-px bg-purple-400"></span>
            {t.badge}
            <span className="w-12 h-px bg-purple-400"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            {t.heroTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">{t.heroTitleHighlight}</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            {t.heroDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="https://youtu.be/2iz2uTZde4s" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition shadow-lg flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              {t.watchYouTube}
            </a>
            <a href="https://www.tiktok.com/@kanenus_kasa_bayisa" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 bg-black border border-white/20 text-white font-bold rounded-full hover:bg-gray-900 transition shadow-lg flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/></svg>
              {t.followTikTok}
            </a>
          </div>
        </div>
      </section>

      {/* Tracklist */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-4">
              <span className="w-12 h-px bg-accent"></span>{t.discographyBadge}<span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white">{t.featuredHeading}</h2>
          </div>

          <div className="space-y-3">
            {songs.map((song, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 rounded-2xl border transition-all duration-300 overflow-hidden ${playing === i ? 'border-accent shadow-xl shadow-accent/10' : 'border-gray-100 dark:border-gray-700 hover:border-accent/30 hover:shadow-md'}`}>
                <div className="flex items-center gap-4 p-5 cursor-pointer" onClick={() => setPlaying(playing === i ? null : i)}>
                  <button className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition ${playing === i ? 'bg-accent text-white shadow-lg shadow-accent/30' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-accent hover:text-white'}`}>
                    {playing === i ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    ) : (
                      <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    )}
                  </button>
                  <div className="w-8 text-sm font-bold text-gray-400 text-center">{String(i + 1).padStart(2, '0')}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-primary dark:text-white truncate">{song.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{song.genre} · {song.year}</p>
                  </div>
                  <div className="hidden sm:block text-xs text-gray-400 font-mono">{song.duration}</div>
                  <a href={`https://youtu.be/${song.youtubeId}`} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 px-3 py-1.5 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-bold rounded-full hover:bg-red-600 hover:text-white transition"
                    onClick={e => e.stopPropagation()}>
                    YouTube
                  </a>
                </div>
                {playing === i && (
                  <div className="px-5 pb-5 pt-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed pl-[76px]">{song.desc[lang] || song.desc.en}</p>
                    <div className="pl-[76px]">
                      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                        <div className="bg-accent h-1.5 rounded-full animate-pulse" style={{width: '38%'}}></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                        <span>1:47</span><span>{song.duration}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band Members */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-4">
              <span className="w-12 h-px bg-accent"></span>{t.membersBadge}<span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white">{t.membersHeading}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-accent/20 transition">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-accent flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md">
                  {m.initials}
                </div>
                <div>
                  <p className="font-bold text-primary dark:text-white text-sm">{m.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0b1a30] to-[#1a0a2e] text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="text-4xl mb-5">🎵</div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">{t.bookingHeading}</h2>
          <p className="text-gray-300 text-lg mb-10">
            {t.bookingDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/251000000000?text=Hello!%20I%20would%20like%20to%20book%20the%20Shanan%20Gadaa%20Band%20for%20an%20event." target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition shadow-lg text-sm">
              {t.bookWhatsApp}
            </a>
            <a href="/contact"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition text-sm">
              {t.bookInquiry}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
