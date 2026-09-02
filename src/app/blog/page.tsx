'use client';
import { useLang } from '@/components/LangContext';
import NewsletterForm from '@/components/NewsletterForm';

const blogContent = {
  en: {
    badge: 'Written Insights',
    heading: 'Articles & Essays',
    desc: 'Cultural reflections, literary insights, and public discourse from Kanenus Kasa Bayisa — published to inform, inspire, and preserve.',
    readMore: 'Read Full Essay →',
    minRead: 'min read',
    articles: [
      {
        category: "Culture",
        title: "The Role of Literature in Preserving Oromo Heritage",
        excerpt: "In an era of rapid globalization, written literature serves as the most durable vessel for oral traditions. Kanenus explores how Oromo storytelling, passed down through generations, can be captured in written form without losing its spiritual and communal essence.",
        readTime: "6",
        date: "August 2026",
      },
      {
        category: "Digital Media",
        title: "Digital Storytelling and the African Creator Economy",
        excerpt: "The rise of TikTok and Facebook has created an unprecedented opportunity for African cultural creators to reach global audiences. This essay examines how platforms built for entertainment can become powerful tools for cultural education and identity affirmation.",
        readTime: "8",
        date: "July 2026",
      },
      {
        category: "PR & Strategy",
        title: "Public Relations in the Literary World",
        excerpt: "Managing communications for authors and cultural institutions requires a unique blend of storytelling instinct and strategic thinking. Drawing from his experience at the Oromia Writers Association, Kanenus outlines a modern PR framework for the literary sector.",
        readTime: "5",
        date: "June 2026",
      },
    ]
  },
  om: {
    badge: 'Barreeffamoota',
    heading: 'Barruulee & Yaada Aadaa',
    desc: 'Yaada aadaa, ogbarruu, fi haasaa hawaasummaa Kanenus Kasa Bayisaa — dhaloota barsiisuu fi aadaa eeguuf kan qophaa\'an.',
    readMore: 'Barruu Guutuu Dubbisi →',
    minRead: 'daqiiqaa',
    articles: [
      {
        category: "Aadaa",
        title: "Gahee Ogbarruun Aadaa Oromoo Eeguu Keessatti Qabu",
        excerpt: "Bara teknooloojii keessatti ogbarruun barreeffamaa seenaa afaanii tursiisuuf murteessaadha. Kanenus akkamitti aadaa Oromoo barreeffamaan dhalootaaf akka dabarsinu ibsa.",
        readTime: "6",
        date: "Hagayya 2026",
      },
      {
        category: "Miidiyaa Digitaalaa",
        title: "Odeeffannoo Digitaalaa fi Uumama Qabeenya Afrikaa",
        excerpt: "TikTok fi Facebook aadaa Afrikaa addunyaatti beeksisuuf carraa guddaa uumaniiru. Qophiileen miidiyaa hawaasaa akkamitti barnoota aadaatiif ooluu akka danda'an xiinxala.",
        readTime: "8",
        date: "Adoolessa 2026",
      },
      {
        category: "Quunnamtii Hawaasaa (PR)",
        title: "Quunnamtii Hawaasaa Addunyaa Ogbarruu Keessatti",
        excerpt: "Dhaabbilee ogbarruutiif quunnamtii miidiyaa qindeessuun ogummaa addaa barbaada. Muuxannoo Waldaa Barreessitoota Oromiyaa keessatti argate irratti hundaa'uun qajeelfama dhiheessa.",
        readTime: "5",
        date: "Waxabajjii 2026",
      },
    ]
  },
  am: {
    badge: 'የተጻፉ ግንዛቤዎች',
    heading: 'ጽሑፎች እና ድርሰቶች',
    desc: 'የባህል ነጸብራቆች፣ የስነ-ጽሑፍ ግንዛቤዎች እና ማህበራዊ ውይይቶች በቀነኑስ ካሳ ባይሳ — ለማስተማር፣ ለማነሳሳት እና ቅርስን ለመጠበቅ።',
    readMore: 'ሙሉውን ጽሑፍ አንብብ →',
    minRead: 'ደቂቃ ንባብ',
    articles: [
      {
        category: "ባህል",
        title: "የስነ-ጽሁፍ ሚና የኦሮሞን ቅርስ በመጠበቅ ረገድ",
        excerpt: "በግሎባላይዜሽን ዘመን የጽሁፍ ስነ-ጽሁፍ የቃል ወጎችን ጠብቆ ለማቆየት ቁልፍ መሳሪያ ነው። ቀነኑስ የኦሮሞን የታሪክ አተረካክ መንፈሳዊ ይዘቱን ሳይለቅ እንዴት በጽሁፍ ማቆየት እንደሚቻል ያብራራል።",
        readTime: "6",
        date: "ነሐሴ 2026",
      },
      {
        category: "ዲጂታል ሚዲያ",
        title: "ዲጂታል ታሪክ አተረካክ እና የአፍሪካ ፈጣሪዎች ኢኮኖሚ",
        excerpt: "የቲክቶክ እና ፌስቡክ እድገት የአፍሪካን ባህል ለአለም ለማስተዋወቅ ታላቅ እድል ፈጥሯል። ለመዝናኛ የተሰሩ መድረኮች ለባህል ትምህርት እንዴት እንደሚውሉ የሚመረምር ጽሁፍ።",
        readTime: "8",
        date: "ሐምሌ 2026",
      },
      {
        category: "የህዝብ ግንኙነት (PR)",
        title: "የህዝብ ግንኙነት በስነ-ጽሁፍ አለም ውስጥ",
        excerpt: "ለደራሲያን እና ለባህል ተቋማት የሚዲያ ግንኙነትን መምራት ልዩ ስልትን ይጠይቃል። ቀነኑስ በኦሮሚያ ጸሐፊዎች ማህበር ካለው ልምድ በመነሳት አዲስ አሰራርን ያጋራል።",
        readTime: "5",
        date: "ሰኔ 2026",
      },
    ]
  }
};

export default function BlogPage() {
  const { lang } = useLang();
  const t = blogContent[lang];

  return (
    <div className="bg-[#fcfdfd] dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-28 relative overflow-hidden">
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

      {/* Articles Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.articles.map((article, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300 flex flex-col justify-between overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-accent to-blue-400"></div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">{article.category}</span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-3">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">{article.excerpt}</p>
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
                    <span>⏱️ {article.readTime} {t.minRead}</span>
                    <span className="text-accent font-bold">{t.readMore}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
