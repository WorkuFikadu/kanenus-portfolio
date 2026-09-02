'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLang } from './LangContext';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    setLoggedIn(localStorage.getItem('kkb_auth') === 'true');
  }, []);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = () => {
    localStorage.removeItem('kkb_auth');
    setLoggedIn(false);
    router.push('/');
  };

  const links = [
    { href: '/', label: lang === 'om' ? 'Mana' : 'Home' },
    { href: '/about', label: lang === 'om' ? 'Waa\'ee' : 'About' },
    { href: '/gallery', label: lang === 'om' ? 'Suuraa' : 'Gallery' },
    { href: '/experience', label: lang === 'om' ? 'Muuxannoo' : 'Experience' },
    { href: '/media', label: lang === 'om' ? 'Miidiyaa' : 'Media' },
    { href: '/books', label: lang === 'om' ? 'Kitaaba' : 'Books' },
    { href: '/music', label: '🎵 ' + (lang === 'om' ? 'Muuziqaa' : 'Music') },
    { href: '/events', label: lang === 'om' ? 'Sagantaa' : 'Events' },
    { href: '/blog', label: 'Blog' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  if (pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <header className="bg-[#0b1a30]/95 dark:bg-gray-950/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/10 shadow-lg">

      {/* Language & Utility Bar */}
      <div className="border-b border-white/5 bg-[#071324]/80">
        <div className="container mx-auto px-6 flex justify-between items-center py-1.5">
          <p className="text-[11px] text-gray-500 hidden sm:block">
            {lang === 'om' ? '🇪🇹 Afaan Oromoo filatameera' : '🌍 Official website of Kanenus Kasa Bayisa'}
          </p>
          {/* Language Switcher - always visible */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-0.5 text-[11px] font-bold ml-auto">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-white text-[#0b1a30] shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Switch to English"
            >
              🇬🇧 EN
            </button>
            <button
              onClick={() => setLang('om')}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === 'om'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Afaan Oromoo filadhu"
            >
              🇪🇹 OM
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Row */}
      <div className="container mx-auto px-6 flex justify-between items-center py-3.5">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl font-bold tracking-wide hover:text-accent transition">
          KKB
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? 'text-accent bg-white/10 font-bold'
                  : 'text-gray-300 hover:text-accent hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-2 ml-3">
            {loggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-accent hover:bg-white/10 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                  {lang === 'om' ? 'Daashboordii' : 'Dashboard'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition"
                >
                  {lang === 'om' ? 'Ba\'i' : 'Logout'}
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium rounded-full transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                {lang === 'om' ? 'Seeni' : 'Login'}
              </Link>
            )}

            <Link href="/contact" className="px-5 py-2 bg-accent text-white font-bold text-sm rounded-full hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(74,144,226,0.4)]">
              {lang === 'om' ? 'Qunnamii' : 'Contact'}
            </Link>

            {/* Desktop Language Switcher */}
            <div className="flex items-center bg-white/10 border border-white/20 rounded-full p-0.5 text-xs font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-white text-[#0b1a30] shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => setLang('om')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'om'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-label="Afaan Oromoo filadhu"
              >
                🇪🇹 OM
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              title="Toggle dark mode"
            >
              {dark ? (
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile buttons */}
        <div className="flex items-center gap-1.5 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-white/10 border border-white/20 rounded-full p-0.5 text-[11px] font-bold">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-white text-[#0b1a30] shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('om')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                lang === 'om'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              OM
            </button>
          </div>
          {loggedIn ? (
            <Link href="/dashboard" className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </Link>
          ) : (
            <Link href="/login" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </Link>
          )}

          <button onClick={toggleDark} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
            {dark ? (
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
            ) : (
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            )}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex flex-col items-center justify-center gap-1.5 transition">
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-[#071324] border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive(link.href) ? 'text-accent bg-white/10 font-bold' : 'text-gray-300 hover:text-accent hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {loggedIn ? (
            <>
              <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-accent bg-white/5">
                {lang === 'om' ? 'Daashboordii' : 'Dashboard'}
              </Link>
              <button onClick={handleLogout} className="px-4 py-3 rounded-xl text-sm font-medium text-red-400 text-left">
                {lang === 'om' ? 'Ba\'i' : 'Logout'}
              </button>
            </>
          ) : (
            <Link href="/login" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-accent hover:bg-white/10">
              {lang === 'om' ? 'Seeni' : 'Login'}
            </Link>
          )}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-3 px-6 py-3 bg-accent text-white font-bold text-sm rounded-full text-center hover:bg-blue-500 transition">
            {lang === 'om' ? 'Qunnamii' : 'Contact'}
          </Link>
        </div>
      </div>
    </header>
  );
}
