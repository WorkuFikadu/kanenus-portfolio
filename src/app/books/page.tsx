'use client';
import { useState } from 'react';

export default function BooksPage() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setJoined(true);
    setEmail('');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            Literature
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Books & Publications</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore the literary works of Kanenus Kasa Bayisa — each publication a testament to his dedication to cultural excellence.
          </p>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-700">
            <div className="w-full md:w-5/12 bg-gradient-to-br from-[#0b1a30] to-accent flex items-center justify-center p-16 min-h-[500px] relative">
              <div className="relative z-10 w-full aspect-[2/3] bg-white rounded-r-2xl shadow-2xl flex flex-col items-center justify-center p-8 border-l-8 border-accent transform md:rotate-2 hover:rotate-0 transition duration-500">
                <div className="text-center">
                  <h4 className="font-heading text-4xl text-primary font-bold mb-2">Ayyaantummaa</h4>
                  <div className="w-12 h-1 bg-accent mx-auto mb-6"></div>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Kanenus Kasa Bayisa</p>
                  <p className="text-gray-300 text-xs mt-2 uppercase tracking-widest">2026</p>
                </div>
              </div>
            </div>
            <div className="p-12 lg:p-20 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest">New Release</span>
                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Published 2026</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading text-primary dark:text-white font-bold mb-8">Ayyaantummaa</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10">
                "Ayyaantummaa" stands as a cornerstone of Kanenus's literary portfolio. This prominent publication delves into profound cultural themes, exploring the intricacies of identity, tradition, and modernity. Written with the precision of a professional author and the passion of a cultural promoter, it offers readers an immersive journey into the heart of African societal values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-accent transition duration-300 shadow-lg text-center">Order Hardcover</button>
                <button className="px-8 py-4 bg-gray-100 dark:bg-gray-700 text-primary dark:text-white font-medium rounded-full hover:bg-gray-200 transition duration-300 text-center">Read Excerpt</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Read Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white">Why Read Ayyaantummaa?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>,
                title: "Authentic Voice",
                desc: "Written from lived experience of Oromo cultural life, offering an authenticity rarely found in contemporary African literature."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>,
                title: "Profound Themes",
                desc: "Explores identity, tradition, and modernity with philosophical depth — questions every reader will carry long after the final page."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>,
                title: "Award-Worthy Prose",
                desc: "Recognized for its literary excellence, rich imagery, and profound cultural impact within the Oromia literary community."
              }
            ].map((feat, idx) => (
              <div key={idx} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group text-center">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feat.icon}</svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-3">{feat.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 bg-gradient-to-br from-[#0b1a30] to-[#122a4f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent border border-accent/30 rounded-full text-xs font-bold uppercase tracking-widest mb-8">Next Publication</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Coming Soon</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            Kanenus is currently working on his next literary masterpiece. Join the exclusive waitlist to be the very first to know when it launches.
          </p>
          {joined ? (
            <div className="py-4 px-8 bg-green-500/20 border border-green-400/30 rounded-2xl text-green-300 font-medium text-lg">
              ✓ You're on the list! We'll notify you when it drops.
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent backdrop-blur-sm"
              />
              <button type="submit" className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-500 transition shadow-lg whitespace-nowrap">
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
