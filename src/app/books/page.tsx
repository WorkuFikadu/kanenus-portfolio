'use client';
import { useState } from 'react';

const translations = {
  en: {
    sectionLabel: 'Literature',
    heading: 'Books & Publications',
    subheading: "Explore the literary works of Kanenus Kasa Bayisa — each publication a testament to his dedication to cultural excellence.",
    newRelease: 'New Release',
    published: 'Published 2026',
    bookTitle: 'Ayyaantummaa',
    bookDesc: '"Ayyaantummaa" stands as a cornerstone of Kanenus\'s literary portfolio. This profound publication delves into cultural themes, exploring the intricacies of identity, tradition, and modernity. Written with the precision of a professional author and the passion of a cultural promoter, it offers readers an immersive journey into the heart of African societal values.',
    orderBtn: 'Order Hardcover',
    whatsappBtn: '📲 Order via WhatsApp',
    telegramBtn: '✈️ Order via Telegram',
    readExcerpt: '📖 Read Chapter 1',
    readExcerptSubtitle: 'Free preview — first chapter',
    chapterHeading: 'Chapter 1: Ganama Qilleensa',
    chapterText: [
      'Guyyaan sun ganama barii ka\'amee, qilleensi gabbataa fi hifataa ture. Laga bishaanii cinaa teenyee erga cidha yeroo dheeraaf eegneen booda, namni dhiiraa tokko jalaa ka\'ee dhufe.',
      'Maqaan isaa Gammachuu ture — garuu nama gammachuu fakkaatu miti. Ijji isaa gaddaa fi hubannoo guutuu turte, akkuma namootaa baay\'een waan seenaa dhugaa beekaa jiru fakkaatu.',
      '"Ayyaantummaan kun kabajaa miti," jedhe, sagaleen isaa ol ka\'ee. "Kuni seenaa — seenaa dhalootaa, kabajaa, fi jijjiirama ti."',
      'Namoonni hundi itti dhaggeeffatan. Qilleensi keessatti dubbii isaa cufasaa ture.'
    ],
    chapterNote: '— Continue reading in the full published edition of Ayyaantummaa',
    whyRead: 'Why Read Ayyaantummaa?',
    features: [
      { title: 'Authentic Voice', desc: 'Written from lived experience of Oromo cultural life, offering an authenticity rarely found in contemporary African literature.' },
      { title: 'Profound Themes', desc: 'Explores identity, tradition, and modernity with philosophical depth — questions every reader will carry long after the final page.' },
      { title: 'Award-Worthy Prose', desc: 'Recognized for its literary excellence, rich imagery, and profound cultural impact within the Oromia literary community.' }
    ],
    comingSoon: 'Next Publication',
    comingSoonHeading: 'Coming Soon',
    comingSoonDesc: 'Kanenus is currently working on his next literary masterpiece. Join the exclusive waitlist to be the very first to know when it launches.',
    waitlistPlaceholder: 'Enter your email address',
    joinWaitlist: 'Join Waitlist',
    waitlistSuccess: "✓ You're on the list! We'll notify you when it drops.",
  },
  om: {
    sectionLabel: 'Barreeffama',
    heading: 'Kitaabota & Maxxansa',
    subheading: "Hojii barreeffamaa Kanenus Kasa Bayisa — maxxansa hundi aadaa fi ogummaa isaa mirkaneessa.",
    newRelease: 'Haaraa Ba\'e',
    published: '2026 Maxxansame',
    bookTitle: 'Ayyaantummaa',
    bookDesc: '"Ayyaantummaan" hojii barreeffamaa Kanenus Kasa Bayisaa keessa bakka ol\'aanaa qaba. Maxxansaan kun aadaa, eenyummaa, fi jijjiirama hawaasaa ibsa. Barreessaan ogummaa fi hawwii aadaatiin barreesse waan ta\'eef, dubbistootaaf imalama aadaa Afrikaa keessaatti geessa.',
    orderBtn: 'Hardcover Bitadhu',
    whatsappBtn: '📲 WhatsApp irratti Bitadhu',
    telegramBtn: '✈️ Telegram irratti Bitadhu',
    readExcerpt: '📖 Boqonnaa 1 Dubbisi',
    readExcerptSubtitle: 'Boqonnaa jalqabaa — bilisaan dubbisi',
    chapterHeading: 'Boqonnaa 1: Ganama Qilleensa',
    chapterText: [
      'Guyyaan sun ganama barii ka\'amee, qilleensi gabbataa fi hifataa ture. Laga bishaanii cinaa teenyee erga cidha yeroo dheeraaf eegneen booda, namni dhiiraa tokko jalaa ka\'ee dhufe.',
      'Maqaan isaa Gammachuu ture — garuu nama gammachuu fakkaatu miti. Ijji isaa gaddaa fi hubannoo guutuu turte, akkuma namootaa baay\'een waan seenaa dhugaa beekaa jiru fakkaatu.',
      '"Ayyaantummaan kun kabajaa miti," jedhe, sagaleen isaa ol ka\'ee. "Kuni seenaa — seenaa dhalootaa, kabajaa, fi jijjiirama ti."',
      'Namoonni hundi itti dhaggeeffatan. Qilleensi keessatti dubbii isaa cufasaa ture.'
    ],
    chapterNote: '— Fuula hafe Ayyaantummaa maxxansa guutuu keessa dubbisi',
    whyRead: 'Maaliif Ayyaantummaa Dubbiftu?',
    features: [
      { title: 'Sagalee Dhugaa', desc: 'Jireenya aadaa Oromoo keessaa barreeffame — aadaa fi dhugummaan baay\'ee barreeffama Afrikaa ammayyaa keessatti hin argamu.' },
      { title: 'Mata-duree Gadi Fageenyaa', desc: 'Eenyummaa, aadaa, fi jijjiirama gadi fageenyaan ibsa — gaaffilee dubbisaan hunda itti yaadachiisu.' },
      { title: 'Barreeffama Sadarkaa Ol\'aanaa', desc: 'Sadarkaa barreeffamaa, fakkeenyummaa, fi dhiibbaa aadaa isaa Oromiyaa keessatti beekamtii guddaa argateera.' }
    ],
    comingSoon: 'Maxxansa Itti Aansu',
    comingSoonHeading: 'Dhufu Jira',
    comingSoonDesc: 'Kanenus hojii barreeffamaa itti aanu irratti hojjataa jira. Dursitanii beekuuf liistii keessan galchaa.',
    waitlistPlaceholder: 'Email keessan galchaa',
    joinWaitlist: 'Liistii Galuu',
    waitlistSuccess: '✓ Liistii keessatti jirtu! Yeroo ba\'u beeksifna.',
  }
};

export default function BooksPage() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [lang, setLang] = useState<'en' | 'om'>('en');
  const [showChapter, setShowChapter] = useState(false);

  const t = translations[lang];

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setJoined(true);
    setEmail('');
  };

  const whatsappMsg = encodeURIComponent("Hello! I would like to order a copy of 'Ayyaantummaa' by Kanenus Kasa Bayisa. Please send me the details.");
  const telegramMsg = encodeURIComponent("Hello! I want to order 'Ayyaantummaa' by Kanenus Kasa Bayisa.");

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Language Toggle */}
      <div className="flex justify-end px-6 pt-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-full p-1 shadow-sm text-xs font-bold">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 rounded-full transition ${lang === 'en' ? 'bg-[#0b1a30] text-white' : 'text-gray-500 hover:text-gray-800'}`}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => setLang('om')}
            className={`px-3 py-1.5 rounded-full transition ${lang === 'om' ? 'bg-accent text-white' : 'text-gray-500 hover:text-gray-800'}`}
          >
            🇪🇹 Afaan Oromoo
          </button>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-24 relative overflow-hidden mt-4">
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

      {/* Featured Book */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row border border-gray-100">
            <div className="w-full md:w-5/12 bg-gradient-to-br from-[#0b1a30] to-accent flex items-center justify-center p-12 min-h-[460px] relative">
              <div className="relative z-10 w-full aspect-[2/3] bg-white rounded-r-2xl shadow-2xl flex flex-col items-center justify-center p-8 border-l-8 border-accent transform md:rotate-2 hover:rotate-0 transition duration-500 max-w-[220px]">
                <div className="text-center">
                  <h4 className="font-heading text-3xl text-primary font-bold mb-2">Ayyaantummaa</h4>
                  <div className="w-10 h-1 bg-accent mx-auto mb-4"></div>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">Kanenus Kasa Bayisa</p>
                  <p className="text-gray-300 text-xs mt-2 uppercase tracking-widest">2026</p>
                </div>
              </div>
            </div>
            <div className="p-10 lg:p-16 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest">{t.newRelease}</span>
                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">{t.published}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading text-primary font-bold mb-6">{t.bookTitle}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8">{t.bookDesc}</p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button className="px-7 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-accent transition duration-300 shadow-lg text-sm text-center">
                  {t.orderBtn}
                </button>
                <button
                  onClick={() => setShowChapter(!showChapter)}
                  className="px-7 py-3.5 bg-gray-100 text-primary font-bold rounded-full hover:bg-gray-200 transition duration-300 text-sm text-center"
                >
                  {t.readExcerpt}
                  <span className="text-[10px] text-gray-500 block font-normal">{t.readExcerptSubtitle}</span>
                </button>
              </div>

              {/* Order via Messaging */}
              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/251000000000?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white text-xs font-bold rounded-full hover:bg-green-600 transition shadow-md"
                >
                  {t.whatsappBtn}
                </a>
                <a
                  href={`https://t.me/kanenus?text=${telegramMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0088cc] text-white text-xs font-bold rounded-full hover:bg-sky-600 transition shadow-md"
                >
                  {t.telegramBtn}
                </a>
              </div>
            </div>
          </div>

          {/* Chapter Preview */}
          {showChapter && (
            <div className="mt-8 bg-white rounded-3xl border border-amber-200 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100 px-8 py-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700">📖 {lang === 'en' ? 'Free Chapter Preview' : 'Boqonnaa Bilisaa'}</span>
                  <h3 className="text-2xl font-heading font-bold text-primary mt-1">{t.chapterHeading}</h3>
                </div>
                <button
                  onClick={() => setShowChapter(false)}
                  className="p-2 hover:bg-amber-100 rounded-full text-gray-500 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <div className="p-8 md:p-12 max-w-3xl mx-auto">
                {t.chapterText.map((para, i) => (
                  <p key={i} className="text-gray-700 text-lg leading-loose mb-6 font-serif">{para}</p>
                ))}
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-400 italic text-sm mb-6">{t.chapterNote}</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a href={`https://wa.me/251000000000?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
                      className="px-7 py-3 bg-green-500 text-white font-bold rounded-full text-sm hover:bg-green-600 transition shadow">
                      {t.whatsappBtn}
                    </a>
                    <a href={`https://t.me/kanenus?text=${telegramMsg}`} target="_blank" rel="noopener noreferrer"
                      className="px-7 py-3 bg-[#0088cc] text-white font-bold rounded-full text-sm hover:bg-sky-600 transition shadow">
                      {t.telegramBtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Read Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{t.whyRead}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/> },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/> },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/> }
            ].map((feat, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group text-center">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feat.icon}</svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{t.features[idx].title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.features[idx].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-24 bg-gradient-to-br from-[#0b1a30] to-[#122a4f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent border border-accent/30 rounded-full text-xs font-bold uppercase tracking-widest mb-8">{t.comingSoon}</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{t.comingSoonHeading}</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">{t.comingSoonDesc}</p>
          {joined ? (
            <div className="py-4 px-8 bg-green-500/20 border border-green-400/30 rounded-2xl text-green-300 font-medium text-lg">
              {t.waitlistSuccess}
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t.waitlistPlaceholder}
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent backdrop-blur-sm"
              />
              <button type="submit" className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-500 transition shadow-lg whitespace-nowrap">
                {t.joinWaitlist}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
