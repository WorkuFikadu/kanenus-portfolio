'use client';
import { useLang } from '@/components/LangContext';

const expData = {
  en: {
    badge: 'Career Timeline',
    heading: 'Professional Trajectory',
    eduHeading: 'Education & Credentials',
    edu1Title: 'Higher Education',
    edu1Desc: 'Formal academic grounding in communications and cultural studies, providing the theoretical foundation for applied cultural promotion.',
    edu2Title: 'Professional Certifications',
    edu2Desc: 'Accredited certifications in advanced public relations, digital media strategy, and institutional leadership.',
    items: [
      { date: "August 2025 – Present", title: "Professional Author", desc: "Authored impactful literature designed to promote cultural awareness, preserve linguistic heritage, and offer profound societal commentary. Kanenus's written works serve as educational tools and historical records." },
      { date: "September 2024 – Present", title: "Digital Creator & CEO, Hizbii Keenya", desc: "Pioneered a digital-first approach to cultural promotion by founding and leading Hizbii Keenya, successfully building an online community of over 125,000 active followers who engage daily with cultural education." },
      { date: "March 2023 – Present", title: "Director, Shanan Gadaa Band", desc: "Provides executive and artistic leadership, overseeing performance curation and event management, ensuring the band remains a premier ambassador for traditional music and performance art." },
      { date: "March 2023 – Present", title: "Public Relations Manager, OWA", desc: "Serves as the strategic communications lead for the Oromia Writers Association, managing media relations and public events to enhance the organization's public image across literary sectors." }
    ]
  },
  om: {
    badge: 'Tartiiba Hojii',
    heading: 'Adeemsa Muuxannoo Ogummaa',
    eduHeading: 'Barnoota fi Ragaalee Ogummaa',
    edu1Title: 'Barnoota Olaanaa',
    edu1Desc: 'Quunnamtii hawaasaa fi qorannoo aadaa irratti barnoota sadarkaa olaanaa qabaachuun bu\'uura cimaa uumeera.',
    edu2Title: 'Waraqaa Ragaa Ogummaa',
    edu2Desc: 'Quunnamtii hawaasaa ammayyaa, tarsiimoo miidiyaa digitaalaa, fi hoggansa dhaabbilee irratti ragaa beekamtii qaba.',
    items: [
      { date: "Hagayya 2025 – Amma", title: "Barreessaa Ogummaa", desc: "Kitaabota dhaloota barsiisan, eenyummaa fi aadaa Oromoo eegan barreessuun maxxansiiseera. Hojiiwwan isaa ragaa seenaa fi barnootaaf oolu." },
      { date: "Fulbaana 2024 – Amma", title: "Uumaa Digitaalaa & CEO, Hizbii Keenya", desc: "Marsariitii Hizbii Keenya hundeessuun hordoftoota 125,000+ horateera. Guyyaa guyyaan barnoota aadaa dhaloota haaraaf dhiheessa." },
      { date: "Bitootessa 2023 – Amma", title: "Daarektara, Baandii Shanan Gadaa", desc: "Baandii Shanan Gadaa olaantummaan hogganuun aadaa fi muuziqaa Oromoo waltajjiiwwan addunyaatiif qopheessa." },
      { date: "Bitootessa 2023 – Amma", title: "Hogganaa Quunnamtii Hawaasaa, WBO", desc: "Waldaa Barreessitoota Oromiyaa keessatti quunnamtii miidiyaa fi dhaabbilee qindeessuun ogbarruu Oromoo beeksisuu irratti hojjata." }
    ]
  },
  am: {
    badge: 'የስራ ታሪክ',
    heading: 'የሙያ እና የስራ ጉዞ',
    eduHeading: 'ትምህርት እና የሙያ ማረጋገጫዎች',
    edu1Title: 'ከፍተኛ ትምህርት',
    edu1Desc: 'በኮሙዩኒኬሽን እና በባህል ጥናት ዙሪያ የከፍተኛ ትምህርት ዝግጅት ያለው።',
    edu2Title: 'የሙያ ማረጋገጫ የምስክር ወረቀቶች',
    edu2Desc: 'በህዝብ ግንኙነት ስትራቴጂ፣ በዲጂታል ሚዲያ አመራር እና በተቋማዊ አስተዳደር የተሰጡ እውቅናዎች።',
    items: [
      { date: "ነሐሴ 2025 – አሁን", title: "ደራሲ", desc: "የባህል ማንነትን የሚጠብቁ፣ ታሪክን የሚያስተምሩ እና ማህበራዊ እሴቶችን የሚያጎሉ መጽሐፍትን ጽፎ አሳትሟል።" },
      { date: "መስከረም 2024 – አሁን", title: "የዲጂታል ይዘት ፈጣሪ እና CEO (ሕዝቢ ኬኛ)", desc: "የሕዝቢ ኬኛ ዲጂታል መድረክን በመመስረት ከ125,000 በላይ ተከታዮችን በየቀኑ በባህል ትምህርት ዙሪያ እያሳተፈ ይገኛል።" },
      { date: "መጋቢት 2023 – አሁን", title: "ዳይሬክተር (የሸነን ገዳ ባንድ)", desc: "የሸነን ገዳ ባንድን በበላይነት በመምራት የባህል ሙዚቃዎችን ለአገር ውስጥ እና ለአለም አቀፍ መድረኮች ያዘጋጃል።" },
      { date: "መጋቢት 2023 – አሁን", title: "የህዝብ ግንኙነት ሀላፊ (የኦሮሚያ ጸሐፊዎች ማህበር)", desc: "የማህበሩን የሚዲያ ግንኙነቶች እና የስነ-ጽሁፍ ዝግጅቶችን በበላይነት በማስተባበር ላይ ይገኛል።" }
    ]
  }
};

export default function ExperiencePage() {
  const { lang } = useLang();
  const t = expData[lang];

  return (
    <div className="bg-[#0b1a30] text-white min-h-screen relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-accent"><polygon points="0,100 100,0 100,100"/></svg>
      </div>

      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-accent"></span>
              {t.badge}
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">{t.heading}</h1>
          </div>
          
          <div className="relative border-l border-white/20 ml-6 md:ml-12 space-y-20 py-8 mb-32">
            {t.items.map((item, idx) => (
              <div key={idx} className="relative pl-12 md:pl-20 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent ring-8 ring-[#0b1a30] group-hover:scale-150 transition duration-300"></div>
                <div className="absolute -left-[1px] top-1.5 w-0 h-0 group-hover:w-12 border-t border-accent/50 transition-all duration-300"></div>
                
                <span className="inline-block px-4 py-1 bg-white/10 text-accent text-sm font-bold tracking-widest uppercase rounded-full mb-4">
                  {item.date}
                </span>
                <h3 className="text-3xl font-heading font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Education & Credentials */}
          <div className="pt-20 border-t border-white/10 text-center">
            <h2 className="text-3xl font-heading font-bold mb-12 text-white">{t.eduHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.edu1Title}</h3>
                <p className="text-gray-400">{t.edu1Desc}</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.edu2Title}</h3>
                <p className="text-gray-400">{t.edu2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
