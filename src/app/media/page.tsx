'use client';
import { useState } from 'react';

const pressItems = [
  {
    publication: "Oromia Times",
    date: "June 2026",
    title: "Kanenus Kasa Bayisa: The Literary Voice of a Generation",
    excerpt: "An in-depth profile on how Kanenus has emerged as both a prolific author and a tireless cultural promoter, bridging the gap between traditional heritage and modern media.",
    link: "#"
  },
  {
    publication: "Ethiopian Cultural Review",
    date: "April 2026",
    title: "Digital Culture Meets Traditional Heritage",
    excerpt: "A feature exploring how Kanenus built a digital community of 125,000+ followers, using platforms like TikTok and Facebook to make Oromo culture accessible to younger global audiences.",
    link: "#"
  },
  {
    publication: "East Africa Writers Forum",
    date: "January 2026",
    title: "PR and Literature: A New Paradigm",
    excerpt: "An analysis of Kanenus's groundbreaking work as PR Manager at the Oromia Writers Association, outlining his impact on shaping institutional communications in the literary sector.",
    link: "#"
  }
];

export default function MediaPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            Media & Press
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Interviews & Insights</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Watch Kanenus Kasa Bayisa's latest discussions and cultural insights broadcasted across digital platforms.
          </p>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              "https://www.youtube.com/embed/2iz2uTZde4s",
              "https://www.youtube.com/embed/AuRgIT_wqEw"
            ].map((url, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] bg-gray-900 border border-gray-200 dark:border-gray-700">
                <div className="aspect-video relative z-10">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
            <a href="https://web.facebook.com/kanenus.kasa.33" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1877f2] text-white font-bold rounded-full hover:opacity-90 transition duration-300 shadow-lg transform hover:-translate-y-0.5 text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a href="https://www.tiktok.com/@kanenus_kasa_bayisa?_r=1&_t=ZS-99G5TsaooAn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black text-white font-bold rounded-full hover:opacity-90 transition duration-300 shadow-lg transform hover:-translate-y-0.5 text-sm border border-white/10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/></svg>
              TikTok
            </a>
            <a href="https://youtu.be/2iz2uTZde4s" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#ff0000] text-white font-bold rounded-full hover:opacity-90 transition duration-300 shadow-lg transform hover:-translate-y-0.5 text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white font-bold rounded-full hover:opacity-90 transition duration-300 shadow-lg transform hover:-translate-y-0.5 text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0088cc] text-white font-bold rounded-full hover:opacity-90 transition duration-300 shadow-lg transform hover:-translate-y-0.5 text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.197 1.006.128.832.942z"/></svg>
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-5">
              <span className="w-12 h-px bg-accent"></span>
              Press Coverage
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white">Press & Media Mentions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressItems.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 p-8 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{item.publication}</span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-primary dark:text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1 mb-6">{item.excerpt}</p>
                <a href={item.link} className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-4 transition-all">
                  Read Feature
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
