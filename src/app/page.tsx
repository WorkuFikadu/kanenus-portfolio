'use client';
import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import { translations } from '@/lib/translations';

export default function Home() {
  const { lang } = useLang();
  const t = translations[lang].home;

  return (
    <div className="bg-[#fcfdfd] dark:bg-gray-950 text-gray-800 dark:text-gray-100 selection:bg-accent selection:text-white overflow-x-hidden">

      {/* ============ HERO ============ */}
      <section className="relative flex items-center min-h-screen bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -right-20 w-[38rem] h-[38rem] rounded-full bg-accent opacity-20 blur-[110px]"></div>
          <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-blue-500 opacity-10 blur-[90px]"></div>
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-32">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-medium text-sm tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {t.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-accent">
              {t.heroTitle1}<br />{t.heroTitle2}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
              <Link href="/about" className="group px-8 py-4 bg-accent hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(74,144,226,0.5)] hover:shadow-[0_0_36px_rgba(74,144,226,0.7)] transform hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                {t.discoverBtn}
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <Link href="/books" className="px-8 py-4 border-2 border-white/30 hover:border-accent hover:text-accent text-white font-semibold rounded-full transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm">
                {t.publicationsBtn}
              </Link>
            </div>

            {/* Quick Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-white">{t.followersCount}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{t.followersLabel}</p>
              </div>
              <div className="w-px bg-white/10 hidden sm:block"></div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-white">{t.leadershipCount}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{t.leadershipLabel}</p>
              </div>
              <div className="w-px bg-white/10 hidden sm:block"></div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-white">{t.booksCount}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{t.booksLabel}</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end w-full order-1 lg:order-2">
            <div className="relative w-72 md:w-[22rem] aspect-[3/4] group">
              <div className="absolute inset-0 bg-accent rounded-[2.5rem] translate-x-5 translate-y-5 opacity-40 transition-all duration-500 group-hover:translate-x-7 group-hover:translate-y-7"></div>
              <div className="absolute inset-0 bg-blue-800 rounded-[2.5rem] -translate-x-5 -translate-y-5 opacity-40 transition-all duration-500 group-hover:-translate-x-7 group-hover:-translate-y-7"></div>
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-2 border-white/10">
                <img
                  src="/profile.jpg"
                  alt="Kanenus Kasa Bayisa"
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a30] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                    <p className="font-bold text-base">{t.communityCard}</p>
                    <p className="text-sm text-blue-200">{t.communitySub}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-xs uppercase tracking-widest">{t.scrollText}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* ============ THREE PILLARS ============ */}
      <section className="bg-white dark:bg-gray-900 py-24 relative -mt-10 z-20 rounded-t-[3rem] shadow-[0_-15px_60px_rgba(0,0,0,0.12)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/contact" className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700/60 border border-gray-100 dark:border-gray-700 hover:border-accent/20 transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 dark:text-white">{t.card1Title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">{t.card1Desc}</p>
              <span className="text-accent font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                {t.card1Btn}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </span>
            </Link>

            <Link href="/books" className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700/60 border border-gray-100 dark:border-gray-700 hover:border-accent/20 transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 dark:text-white">{t.card2Title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">{t.card2Desc}</p>
              <span className="text-accent font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                {t.card2Btn}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </span>
            </Link>

            <Link href="/media" className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700/60 border border-gray-100 dark:border-gray-700 hover:border-accent/20 transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 dark:text-white">{t.card3Title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">{t.card3Desc}</p>
              <span className="text-accent font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                {t.card3Btn}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ ABOUT SNAPSHOT ============ */}
      <section className="py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-5">
                <span className="w-12 h-px bg-accent"></span>
                {t.bioBadge}
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-8">
                {t.bioHeading}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-loose mb-8">
                {t.bioText1}
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-accent text-white font-semibold rounded-full hover:bg-accent dark:hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {t.bioFullBtn}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-5">
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl hover:border-accent/20 transition-all duration-300">
                <p className="text-4xl font-heading font-bold text-primary dark:text-white mb-2">{t.stat1Number}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t.stat1Label}</p>
              </div>
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl hover:border-accent/20 transition-all duration-300">
                <p className="text-4xl font-heading font-bold text-primary dark:text-white mb-2">{t.stat2Number}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t.stat2Label}</p>
              </div>
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl hover:border-accent/20 transition-all duration-300">
                <p className="text-4xl font-heading font-bold text-primary dark:text-white mb-2">{t.stat3Number}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t.stat3Label}</p>
              </div>
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl hover:border-accent/20 transition-all duration-300">
                <p className="text-4xl font-heading font-bold text-primary dark:text-white mb-2">{t.stat4Number}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t.stat4Label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED BOOKS PREVIEW ============ */}
      <section className="py-28 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-4">
              <span className="w-12 h-px bg-accent"></span>
              {t.booksHeading}
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-4">{t.booksHeading}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              {t.booksSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Book 1: Ayyaantummaa */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300">
              <div className="relative w-full max-w-[260px] aspect-[4/5] mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/books/ayyaantummaa.png"
                  alt="Ayyaantummaa by Kanenus Kasa Bayisa"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                {t.b1Badge}
              </span>
              <h3 className="text-3xl font-heading font-bold text-primary dark:text-white mb-2">{t.b1Title}</h3>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{t.b1Sub}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                {t.b1Desc}
              </p>
              <div className="flex gap-3 w-full justify-center">
                <Link href="/books" className="px-6 py-3 bg-primary dark:bg-accent hover:bg-accent text-white font-bold rounded-full text-sm transition shadow-md">
                  {t.b1Btn}
                </Link>
              </div>
            </div>

            {/* Book 2: Dhaloota Mul'ataa */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300">
              <div className="relative w-full max-w-[260px] aspect-[4/5] mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/books/dhaloota-mulataa.jpg"
                  alt="Dhaloota Mul'ataa by Kanenus Kasa Bayisa"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <span className="px-4 py-1 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                {t.b2Badge}
              </span>
              <h3 className="text-3xl font-heading font-bold text-primary dark:text-white mb-2">{t.b2Title}</h3>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{t.b2Sub}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                {t.b2Desc}
              </p>
              <div className="flex gap-3 w-full justify-center">
                <Link href="/books" className="px-6 py-3 bg-primary dark:bg-accent hover:bg-accent text-white font-bold rounded-full text-sm transition shadow-md">
                  {t.b2Btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOCIAL MEDIA / DIGITAL REACH ============ */}
      <section className="py-28 bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            Social Media
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">{t.socialHeading}</h2>
          <p className="text-gray-300 text-lg mb-14 max-w-2xl mx-auto">
            {t.socialSub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://web.facebook.com/kanenus.kasa.33" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 py-3.5 bg-[#1877f2] text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a href="https://www.tiktok.com/@kanenus_kasa_bayisa?_r=1&_t=ZS-99G5TsaooAn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 py-3.5 bg-black text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-md border border-white/10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/></svg>
              TikTok
            </a>
            <a href="https://youtu.be/2iz2uTZde4s" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 py-3.5 bg-[#ff0000] text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
            <a href="https://t.me/kanenus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 py-3.5 bg-[#0088cc] text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.197 1.006.128.832.942z"/></svg>
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ============ VISUAL PORTFOLIO ============ */}
      <section className="py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-5">
              <span className="w-12 h-px bg-accent"></span>
              {t.galleryHeading}
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white">{t.galleryHeading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-lg group">
              <img
                src="/gallery/541162491_2943637469155328_6917349338980761886_n.jpg"
                alt="Cultural moment 1"
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-lg group">
              <img
                src="/gallery/542215310_2944985872353821_1862807247037575291_n.jpg"
                alt="Cultural moment 2"
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-lg group">
              <img
                src="/gallery/543118958_2947552745430467_1368589313288512120_n.jpg"
                alt="Cultural moment 3"
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary dark:border-white/20 text-primary dark:text-white font-semibold rounded-full hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-all duration-300">
              {t.galleryBtn}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6 max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.ctaHeading}</h2>
          <p className="text-lg text-blue-100 mb-10">
            {t.ctaSub}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-accent font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-lg transform hover:-translate-y-1">
            {t.ctaBtn}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
