'use client';
import { useLang } from '@/components/LangContext';

const pressData = {
  en: {
    badge: 'Media & Press',
    heading: 'Interviews & Insights',
    desc: "Watch Kanenus Kasa Bayisa's latest discussions and cultural insights broadcasted across digital platforms.",
    featuredVideos: 'Featured Video Broadcasts',
    pressCoverage: 'Selected Press Articles',
    readArticle: 'Read Full Coverage →',
    press: [
      {
        publication: "Oromia Times",
        date: "June 2026",
        title: "Kanenus Kasa Bayisa: The Literary Voice of a Generation",
        excerpt: "An in-depth profile on how Kanenus has emerged as both a prolific author and a tireless cultural promoter, bridging the gap between traditional heritage and modern media.",
      },
      {
        publication: "Ethiopian Cultural Review",
        date: "April 2026",
        title: "Digital Culture Meets Traditional Heritage",
        excerpt: "A feature exploring how Kanenus built a digital community of 125,000+ followers, using platforms like TikTok and Facebook to make Oromo culture accessible to younger global audiences.",
      },
      {
        publication: "East Africa Writers Forum",
        date: "January 2026",
        title: "PR and Literature: A New Paradigm",
        excerpt: "An analysis of Kanenus's groundbreaking work as PR Manager at the Oromia Writers Association, outlining his impact on shaping institutional communications in the literary sector.",
      }
    ]
  },
  om: {
    badge: 'Miidiyaa & Gaazexaa',
    heading: 'Gaaf-Deebiiwwan & Yaada Aadaa',
    desc: 'Gaaf-deebii televijiinii, qophiilee aadaa, fi barreeffamoota Kanenus Kasa Bayisa miidiyaalee adda addaa irratti dhihaatan.',
    featuredVideos: 'Viidiyoowwan Filataman',
    pressCoverage: 'Barreeffamoota Gaazexaa Filataman',
    readArticle: 'Guutuu Dubbisi →',
    press: [
      {
        publication: "Oromia Times",
        date: "Waxabajjii 2026",
        title: "Kanenus Kasa Bayisa: Sagalee Ogbarruu Dhaloota Haaraa",
        excerpt: "Qorannoo bal'aa Kanenus akkamitti akka barreessaa fi qindeessaa aadaa ta'uun aadaa Oromoo addunyaatti beeksisaa jiru mul'isu.",
      },
      {
        publication: "Ethiopian Cultural Review",
        date: "Ebla 2026",
        title: "Aadaa fi Miidiyaa Digitaalaa",
        excerpt: "Kanenus akkamitti hordoftoota 125,000+ TikTok fi Facebook irratti ijaaruun aadaa Oromoo dhaloota haaraaf akka dhiheesse kan xiinxalu.",
      },
      {
        publication: "East Africa Writers Forum",
        date: "Amajjii 2026",
        title: "Quunnamtii Hawaasaa fi Ogbarruu",
        excerpt: "Hojii guddaa Kanenus Hogganaa PR Waldaa Barreessitoota Oromiyaa ta'uun gumaache kan ibsu.",
      }
    ]
  },
  am: {
    badge: 'ሚዲያ እና ፕሬስ',
    heading: 'ቃለ መጠይቆች እና የባህል ግንዛቤዎች',
    desc: 'በቀነኑስ ካሳ ባይሳ የተካሄዱ የቴሌቪዥን ቃለ-መጠይቆች፣ የባህል ውይይቶች እና የፕሬስ ዘገባዎች።',
    featuredVideos: 'ተወዳጅ የቪዲዮ ዝግጅቶች',
    pressCoverage: 'የተመረጡ የጋዜጣ ጽሑፎች',
    readArticle: 'ሙሉውን አንብብ →',
    press: [
      {
        publication: "ኦሮሚያ ታይምስ",
        date: "ሰኔ 2026",
        title: "ቀነኑስ ካሳ ባይሳ፡ የአዲሱ ትውልድ የስነ-ጽሁፍ ድምፅ",
        excerpt: "ቀነኑስ እንደ ደራሲ እና የባህል አምባሳደር ባህልን ከዘመናዊ ሚዲያ ጋር እንዴት እያስተሳሰረ እንዳለ የሚያሳይ ጥልቅ ዘገባ።",
      },
      {
        publication: "የኢትዮጵያ ባህል ሪቪው",
        date: "ሚያዝያ 2026",
        title: "ዲጂታል ባህል እና ባህላዊ ቅርስ",
        excerpt: "ቀነኑስ በቲክቶክ እና ፌስቡክ ከ125,000 በላይ ተከታዮችን በማፍራት ባህልን ለወጣቶች ተደራሽ ያደረገበት መንገድ።",
      },
      {
        publication: "የምስራቅ አፍሪካ ጸሐፊዎች መድረክ",
        date: "ጥር 2026",
        title: "የህዝብ ግንኙነት እና ስነ-ጽሁፍ አዲስ እይታ",
        excerpt: "ቀነኑስ በኦሮሚያ ጸሐፊዎች ማህበር የህዝብ ግንኙነት ሀላፊ ሆኖ ያበረከተውን ጉልህ አስተዋጽኦ የሚተነትን ጽሑፍ።",
      }
    ]
  }
};

export default function MediaPage() {
  const { lang } = useLang();
  const t = pressData[lang];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            {t.badge}
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{t.heading}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-12 text-center">{t.featuredVideos}</h2>
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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white">{t.pressCoverage}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.press.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">
                    <span className="text-accent">{item.publication}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{item.excerpt}</p>
                </div>
                <span className="text-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  {t.readArticle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
