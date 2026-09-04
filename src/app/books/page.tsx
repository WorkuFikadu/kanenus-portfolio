'use client';
import { useState } from 'react';
import { useLang } from '@/components/LangContext';
import { translations } from '@/lib/translations';

export default function BooksPage() {
  const { lang } = useLang();
  const [showChapter, setShowChapter] = useState(false);

  const t = translations[lang].books;

  const ayyaantummaaMsg = encodeURIComponent("Hello! I would like to order a copy of 'Ayyaantummaa' by Kanenus Kasa Bayisa.");
  const dhalootaMsg = encodeURIComponent("Hello! I would like to order a copy of 'Dhaloota Mul'ataa' (Book 2) by Kanenus Kasa Bayisa.");

  return (
    <div className="bg-[#fcfdfd] dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            {t.sectionLabel}
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{t.heading}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{t.subheading}</p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* BOOK 1: AYYAANTUMMAA (Main Feature)                      */}
      {/* ======================================================== */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-700">
            {/* Real Book Cover Image */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-[#0b1a30] via-[#0e2240] to-accent flex items-center justify-center p-8 lg:p-12 min-h-[460px]">
              <div className="relative group max-w-[320px] w-full">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition"></div>
                <img
                  src="/books/ayyaantummaa.png"
                  alt="Ayyaantummaa Book Cover by Kanenus Kasa Bayisa"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transform md:-rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 object-contain"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="p-8 lg:p-14 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest border border-accent/20">
                  {t.b1Badge}
                </span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  {t.b1Subtitle}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading text-primary dark:text-white font-bold mb-4">
                {t.b1Title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
                {t.b1Desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={`https://wa.me/251000000000?text=${ayyaantummaaMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition duration-300 text-sm text-center flex items-center justify-center gap-2"
                >
                  {t.whatsappOrder}
                </a>
                <button
                  onClick={() => setShowChapter(!showChapter)}
                  className="px-6 py-3.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-primary dark:text-white font-bold rounded-full transition duration-300 text-sm text-center"
                >
                  {showChapter ? t.closeExcerpt : t.readExcerpt}
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://t.me/kanenus?text=${ayyaantummaaMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#0088cc] hover:bg-sky-600 text-white text-xs font-bold rounded-full transition shadow-sm"
                >
                  {t.telegramOrder}
                </a>
              </div>
            </div>
          </div>

          {/* Chapter Preview Drawer */}
          {showChapter && (
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl border border-amber-200 dark:border-amber-900/40 shadow-xl overflow-hidden animate-fadeIn">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-amber-100 dark:border-amber-900/40 px-8 py-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">📖 {t.readExcerpt}</span>
                  <h3 className="text-2xl font-heading font-bold text-primary dark:text-white mt-1">{t.chapterHeading}</h3>
                </div>
                <button
                  onClick={() => setShowChapter(false)}
                  className="p-2 hover:bg-amber-100 dark:hover:bg-amber-900/40 rounded-full text-gray-500 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <div className="p-8 md:p-12 max-w-3xl mx-auto">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-loose mb-6 font-serif">
                  {lang === 'am' ? 'ያ ቀን በማለዳ ተጀምሮ አየሩ ሞቅ ያለ እና ደስ የሚል ነበር። ከወንዙ ዳርቻ ተቀምጠን ሰርጉን ለረጅም ጊዜ ስንጠብቅ አንድ ሰው ብቅ አለ።' : 'Guyyaan sun ganama barii ka\'amee, qilleensi gabbataa fi hifataa ture. Laga bishaanii cinaa teenyee erga cidha yeroo dheeraaf eegneen booda, namni dhiiraa tokko jalaa ka\'ee dhufe.'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-loose mb-6 font-serif">
                  {lang === 'am' ? 'ስሙ ገማቹ ነበር — ግን ደስተኛ የሚመስል ሰው አልነበረም። ዓይኖቹ በሀዘን እና በጥልቅ ግንዛቤ የተሞሉ ነበሩ።' : 'Maqaan isaa Gammachuu ture — garuu nama gammachuu fakkaatu miti. Ijji isaa gaddaa fi hubannoo guutuu turte, akkuma namootaa baay\'een waan seenaa dhugaa beekaa jiru fakkaatu.'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-loose mb-6 font-serif">
                  {lang === 'am' ? '"ይህ አያንቱማ ክብር ብቻ አይደለም" አለ ድምፁን ከፍ አድርጎ። "ይህ ታሪክ ነው — የትውልድ፣ የክብር እና የለውጥ ታሪክ!"' : '"Ayyaantummaan kun kabajaa miti," jedhe, sagaleen isaa ol ka\'ee. "Kuni seenaa — seenaa dhalootaa, kabajaa, fi jijjiirama ti."'}
                </p>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                  <p className="text-gray-400 italic text-sm mb-6">{t.chapterNote}</p>
                  <a
                    href={`https://wa.me/251000000000?text=${ayyaantummaaMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full text-sm shadow-md transition"
                  >
                    {t.whatsappOrder}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* BOOK 2: DHALOOTA MUL'ATAA (Published)                    */}
      {/* ======================================================== */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-[#071324] to-[#0b1a30] text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row-reverse backdrop-blur-md shadow-2xl">
            {/* Real Book Cover Image */}
            <div className="w-full md:w-5/12 bg-gradient-to-tr from-amber-500/10 via-blue-900/40 to-indigo-900/20 flex items-center justify-center p-8 lg:p-12 min-h-[460px]">
              <div className="relative group max-w-[320px] w-full">
                <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition"></div>
                <img
                  src="/books/dhaloota-mulataa.jpg"
                  alt="Dhaloota Mul'ataa Book Cover by Kanenus Kasa Bayisa"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transform md:rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 object-contain"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="p-8 lg:p-14 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-4 py-1 bg-green-500/20 text-green-300 border border-green-400/30 rounded-full text-xs font-bold uppercase tracking-widest">
                  {t.b2Badge}
                </span>
                <span className="text-xs text-blue-200 font-bold uppercase tracking-wider">
                  {t.b2Subtitle}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading text-white font-bold mb-4">
                {t.b2Title}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                {t.b2Desc}
              </p>

              {/* Order Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={`https://wa.me/251000000000?text=${dhalootaMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition duration-300 text-sm text-center flex items-center justify-center gap-2"
                >
                  {t.whatsappOrder}
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://t.me/kanenus?text=${dhalootaMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#0088cc] hover:bg-sky-600 text-white text-xs font-bold rounded-full transition shadow-sm"
                >
                  {t.telegramOrder}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* WHY READ SECTION                                         */}
      {/* ======================================================== */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white">{t.whyReadHeading}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>,
                title: t.f1Title,
                desc: t.f1Desc
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>,
                title: t.f2Title,
                desc: t.f2Desc
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>,
                title: t.f3Title,
                desc: t.f3Desc
              }
            ].map((feat, idx) => (
              <div key={idx} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group text-center">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feat.icon}</svg>
                </div>
                <h4 className="text-xl font-heading font-bold text-primary dark:text-white mb-3">{feat.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
