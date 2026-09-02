'use client';
import { useLang } from '@/components/LangContext';
import { translations } from '@/lib/translations';

export default function AboutPage() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <div className="bg-[#fcfdfd] dark:bg-gray-900 text-gray-800 selection:bg-accent selection:text-white min-h-screen">

      {/* Header */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            {t.badge}
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{t.heading}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{t.subheading}</p>
        </div>
      </section>

      {/* Bio + Stats */}
      <section className="py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-loose">
              <p>
                <strong className="text-primary dark:text-white font-bold">Kanenus Kasa Bayisa</strong> {t.p1.replace('Kanenus Kasa Bayisa', '')}
              </p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
              <p>{t.p4}</p>
            </div>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { number: "125K+", label: t.card1Label, desc: t.card1Desc },
                { number: "PR", label: t.card2Label, desc: t.card2Desc },
                { number: "Director", label: t.card3Label, desc: t.card3Desc },
                { number: "Author", label: t.card4Label, desc: t.card4Desc }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-accent/30 hover:shadow-xl transition duration-300 group flex flex-col justify-center">
                  <h3 className="text-4xl font-heading font-bold text-primary dark:text-white mb-2 group-hover:text-accent transition">{stat.number}</h3>
                  <p className="font-bold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 bg-[#0b1a30] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">{t.expertiseHeading}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 transition duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{lang === 'om' ? 'Ogbarruu & Barreeffama' : lang === 'am' ? 'ሥነ ጽሑፍ እና ድርሰት' : 'Literature & Authorship'}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {lang === 'om' ? 'Afaan Oromootiin kitaabota aadaa fi seenaa barreessuu fi maxxansiisuu.' : lang === 'am' ? 'ባህላዊ እና ማህበራዊ ይዘት ያላቸውን ጥልቅ መጽሐፍት መጻፍ እና ማሳተም።' : 'Authoring and publishing culturally resonant literature that preserves Oromo identity and philosophy.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 transition duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{lang === 'om' ? 'Quunnamtii Hawaasaa (PR)' : lang === 'am' ? 'የሕዝብ ግንኙነት (PR)' : 'Strategic PR & Communications'}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {lang === 'om' ? 'Waldaa Barreessitoota Oromiyaa keessatti quunnamtii dhaabbilee fi miidiyaa hogganuu.' : lang === 'am' ? 'በኦሮሚያ ጸሐፊዎች ማህበር ውስጥ ተቋማዊ ግንኙነቶችን እና የሚዲያ ስትራቴጂዎችን መምራት።' : 'Guiding institutional communications, media relations, and strategic messaging for literary institutions.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 transition duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM9 10l12-3"/></svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{lang === 'om' ? 'Qindeessaa Aadaa & Baandii' : lang === 'am' ? 'የባህል ሙዚቃ አመራር' : 'Cultural Direction'}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {lang === 'om' ? 'Baandii Shanan Gadaa qindeessuun aadaa Oromoo waltajjii addunyaatti dhiheessuu.' : lang === 'am' ? 'የሸነን ገዳ ባንድን በመምራት ባህላዊ ሙዚቃዎችን ለአለም አቀፍ መድረኮች ማዘጋጀት።' : 'Directing the Shanan Gadaa Band, curating musical heritage, and directing major cultural stage productions.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
