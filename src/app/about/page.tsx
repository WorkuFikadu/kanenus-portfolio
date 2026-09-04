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

      {/* Core Competencies & Specializations */}
      <section className="py-24 bg-[#0b1a30] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t.expertiseHeading}</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto uppercase tracking-widest font-semibold">
              {lang === 'om' ? 'Ogummaa Ijoo & Gahee Hojii' : lang === 'am' ? 'ዋና የልህቀት ዘርፎች እና አገልግሎቶች' : 'Core Disciplines & Professional Practice'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Event Organization */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-400/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🎪
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-white">
                  {lang === 'om' ? 'Qindeessaa Sagantaa' : lang === 'am' ? 'የዝግጅት አዘጋጅነት' : 'Event Organization'}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {lang === 'om' ? 'Ayyaanota aadaa gurguddoo, konsartii muuziqaa, eebba kitaabaa, fi sagantaalee waltajjii hoggansa qulqulluun qindeessuu.' : lang === 'am' ? 'ታላላቅ የባህል ፌስቲቫሎችን፣ ኮንሰርቶችን፣ የመጽሐፍ ምረቃዎችን እና የጉባዔ መድረኮችን በከፍተኛ ጥራት ማዘጋጀት።' : 'Directing mega cultural gatherings, literary book launches, concert tours, and VIP gala ceremonies with turnkey stage production.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-amber-300">
                {lang === 'om' ? '• Sagantaalee 50+ Hoggane' : lang === 'am' ? '• 50+ ዝግጅቶችን የመራ' : '• 50+ Major Events Produced'}
              </div>
            </div>

            {/* 2. Cultural Promotion */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  📢
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-white">
                  {lang === 'om' ? 'Beeksisla Aadaa' : lang === 'am' ? 'የባህል ማስተዋወቅ' : 'Cultural Promotion'}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {lang === 'om' ? 'Aadaa, muuziqaa Baandii Shanan Gadaa, fi barreessitoota Oromoo waltajjii addunyaatti beeksisuu fi tuurii hoogganuu.' : lang === 'am' ? 'የሸነን ገዳ ባንድ ባህላዊ ሙዚቃዎችን፣ ደራሲያንን እና የባህል እሴቶችን ለአለም አቀፍ መድረኮች ማስተዋወቅ።' : 'Championing African music, regional tour management for Shanan Gadaa Band, and high-profile artist media campaigns.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-emerald-300">
                {lang === 'om' ? '• Tuuriiwwan Naannoo & Addunyaa' : lang === 'am' ? '• ክልላዊ እና አለም አቀፍ ጉብኝቶች' : '• Regional & International Tours'}
              </div>
            </div>

            {/* 3. Strategic Marketing */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-400/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  📈
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-white">
                  {lang === 'om' ? 'Ogeessa Gabaa' : lang === 'am' ? 'የገበያ ስትራቴጂስት' : 'Strategic Marketing'}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {lang === 'om' ? 'Hordeftoota 125,000+ horachuun, beeksisa miidiyaa hawaasaa, vidiyoo hawwataa, fi gabaa bu\'aa qabeessa taasisanii dhiheessuu.' : lang === 'am' ? 'ከ125,000 በላይ ተከታዮችን በማፍራት በማህበራዊ ሚዲያ ማርኬቲንግ፣ በቫይራል ይዘቶች እና በብራንድ ግንባታ ከፍተኛ ውጤት ማምጣት።' : 'Digital audience growth architect via Hizbii Keenya, viral social media video production, and high-impact brand campaigns.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-blue-300">
                {lang === 'om' ? '• Hordoftoota 125K+ Miidiyaa' : lang === 'am' ? '• 125ሺ+ ማህበራዊ ተከታዮች' : '• 125K+ Audience Network'}
              </div>
            </div>

            {/* 4. Authorship & Literary PR */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-14 h-14 bg-purple-500/10 border border-purple-400/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  📖
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-white">
                  {lang === 'om' ? 'Ogbarruu & PR' : lang === 'am' ? 'ሥነ ጽሑፍ እና PR' : 'Literature & PR'}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {lang === 'om' ? 'Kitaabota "Ayyaantummaa" fi "Dhaloota Mul\'ataa" maxxansiisuu fi Waldaa Barreessitoota Oromiyaa keessatti quunnamtii PR hogganuu.' : lang === 'am' ? '"አያንቱማ" እና "ደሎታ ሙልአታ" መጽሐፍትን ማሳተም እና የኦሮሚያ ጸሐፊዎች ማህበር የህዝብ ግንኙነትን በበላይነት መምራት።' : 'Author of 2 published works, and PR Director of the Oromia Writers Association, elevating African literary traditions.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-purple-300">
                {lang === 'om' ? '• Kitaabota Maxxanfaman 2' : lang === 'am' ? '• 2 የታተሙ መጽሐፍት' : '• 2 Published Masterpieces'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
