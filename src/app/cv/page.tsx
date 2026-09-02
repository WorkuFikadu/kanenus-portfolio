'use client';
import { useLang } from '@/components/LangContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function CVPage() {
  const { lang } = useLang();

  const t = {
    en: {
      printBtn: 'Print / Download PDF',
      printHint: "Use your browser's Print dialog to save as PDF",
      jobTitle: 'Professional Author | PR Manager | Cultural Leader | Digital Creator',
      summaryHeading: 'Professional Summary',
      summary: 'A distinguished professional writer, cultural ambassador, and creative leader with extensive experience in literary authorship, public relations, and digital media. Kanenus Kasa Bayisa has dedicated his career to elevating African heritage through storytelling, strategic communications, and digital content creation, building an online community of over 125,000 engaged followers. Currently serving as PR Manager at the Oromia Writers Association and Director of the Shanan Gadaa Band.',
      expHeading: 'Professional Experience',
      skillsHeading: 'Skills & Competencies',
      eduHeading: 'Education & Cultural Credentials',
      leadershipHeading: 'Cultural Leadership & Community Impact',
    },
    om: {
      printBtn: 'Maxxansi / PDF Buufadhu',
      printHint: 'PDF taasisanii ol-kaawachuuf qajeelfama maxxansaa fayyadamaa',
      jobTitle: 'Barreessaa Ogummaa | Hogganaa PR | Qindeessaa Aadaa | Uumaa Digitaalaa',
      summaryHeading: 'Gabaasa Ogummaa',
      summary: 'Barreessaa ogummaa, ergamaa aadaa, fi hogganaa uumamaa kan ogbarruu, quunnamtii hawaasaa, fi miidiyaa digitaalaa keessatti muuxannoo bal\'aa qabu. Aadaa Oromoo fi Afrikaa guddisuu irratti hordoftoota 125,000 ol ijaareera. Hogganaa Quunnamtii Hawaasaa Waldaa Barreessitoota Oromiyaa fi Daarektara Baandii Shanan Gadaati.',
      expHeading: 'Muuxannoo Hojii',
      skillsHeading: 'Dandeettiiwwan Hojii',
      eduHeading: 'Barnoota fi Ragaalee Aadaa',
      leadershipHeading: 'Hoggansa Aadaa & Dhiibbaa Hawaasummaa',
    },
    am: {
      printBtn: 'አትም / PDF አውርድ',
      printHint: 'ወደ PDF ለማስቀመጥ የብሮውዘርዎን የህትመት ገጽ ይጠቀሙ',
      jobTitle: 'ደራሲ | የህዝብ ግንኙነት ሀላፊ | የባህል መሪ | የዲጂታል ይዘት ፈጣሪ',
      summaryHeading: 'የሙያ ማጠቃለያ',
      summary: 'በስነ-ጽሁፍ፣ በህዝብ ግንኙነት እና በዲጂታል ሚዲያ የካበተ ልምድ ያለው ታዋቂ ደራሲ እና የባህል አምባሳደር። የአፍሪካን ባህል በታሪክ አተረካክ፣ በስትራቴጂክ ኮሙዩኒኬሽን እና በዲጂታል ይዘት ፈጠራ በማስተዋወቅ ከ125,000 በላይ ተከታዮችን አፍርቷል። በአሁኑ ጊዜ በኦሮሚያ ጸሐፊዎች ማህበር የህዝብ ግንኙነት ሀላፊ እና የሸነን ገዳ ባንድ ዳይሬክተር ሆኖ እያገለገለ ይገኛል።',
      expHeading: 'የስራ ልምድ',
      skillsHeading: 'ክህሎቶች እና የሙያ ብቃቶች',
      eduHeading: 'ትምህርት እና የባህል ማረጋገጫዎች',
      leadershipHeading: 'የባህል አመራር እና ማህበራዊ ተጽእኖ',
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Print Button - Hidden on Print */}
      <div className="print:hidden bg-[#0b1a30] py-6 text-center">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-col items-center sm:items-end">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-blue-500 transition shadow-lg text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
              {t.printBtn}
            </button>
            <p className="text-white/60 text-xs mt-1.5">{t.printHint}</p>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto px-8 py-16 print:py-8 print:px-6">

        {/* Header */}
        <div className="border-b-4 border-accent pb-8 mb-10">
          <h1 className="text-5xl font-heading font-bold text-primary dark:text-white mb-2">Kanenus Kasa Bayisa</h1>
          <p className="text-xl text-accent font-medium mb-4">{t.jobTitle}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
            <a href="https://web.facebook.com/kanenus.kasa.33" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium transition">
              📘 Facebook
            </a>
            <a href="https://www.tiktok.com/@kanenus_kasa_bayisa" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium transition">
              🎵 TikTok
            </a>
            <a href="https://youtu.be/2iz2uTZde4s" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium transition">
              ▶️ YouTube
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium transition">
              📸 Instagram
            </a>
            <a href="https://t.me/kanenus" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium transition">
              ✈️ Telegram
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent rounded"></span>
            {t.summaryHeading}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {t.summary}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent rounded"></span>
            {t.expHeading}
          </h2>
          <div className="space-y-8">
            {[
              {
                title: lang === 'om' ? 'Barreessaa Ogummaa' : lang === 'am' ? 'ደራሲ' : 'Professional Author',
                company: 'Independent Publisher',
                date: 'August 2025 – Present',
                bullets: [
                  lang === 'om' ? "Kitaaba 'Ayyaantummaa' (2026) fi 'Dhaloota Mul'ataa' (2ffaa) qopheessee maxxansiise" : lang === 'am' ? "'አያንቱማ' (2026) እና 'ደሎታ ሙልአታ' የተሰኙ ተወዳጅ መጽሐፍትን ጽፎ አሳትሟል" : "Authored 'Ayyaantummaa' (2026) and upcoming 'Dhaloota Mul'ataa' (Book 2)",
                  lang === 'om' ? 'Barreeffamoota aadaa fi seenaa dhalootaa qorachuun dhiheessa' : lang === 'am' ? 'የባህል ማንነትን የሚገልጹ ጥናታዊ ጽሑፎችን ያዘጋጃል' : 'Writes essays and cultural commentary promoting African literature',
                ]
              },
              {
                title: lang === 'om' ? 'Uumaa Digitaalaa & CEO' : lang === 'am' ? 'የዲጂታል ይዘት ፈጣሪ እና ስራ አስኪያጅ' : 'Digital Creator & CEO',
                company: 'Hizbii Keenya Media',
                date: 'September 2024 – Present',
                bullets: [
                  lang === 'om' ? 'Marsariitii Hizbii Keenya hundeessuun hordoftoota 125,000+ horate' : lang === 'am' ? 'የሕዝቢ ኬኛ ዲጂታል መድረክን በመመስረት ከ125,000 በላይ ተከታዮችን አፍርቷል' : 'Founded Hizbii Keenya, building an online community of 125,000+ active followers',
                  lang === 'om' ? 'Viidiyoowwan aadaa miliyoonaan daawwataman qopheesse' : lang === 'am' ? 'በሚሊዮኖች የታዩ የባህል ቪዲዮዎችን አዘጋጅቷል' : 'Directs production of viral, culturally resonant video content',
                ]
              },
              {
                title: lang === 'om' ? 'Daarektara' : lang === 'am' ? 'ዳይሬክተር' : 'Director',
                company: 'Shanan Gadaa Band',
                date: 'March 2023 – Present',
                bullets: [
                  lang === 'om' ? 'Baandii Shanan Gadaa olaantummaan hogganuu fi qindeessuu' : lang === 'am' ? 'የሸነን ገዳ ባንድን በበላይነት መምራት እና ማስተዳደር' : 'Provides executive and artistic leadership for the Shanan Gadaa Band',
                  lang === 'om' ? 'Muuziqaa aadaa Oromoo waltajjiiwwan addunyaatiif qopheessuu' : lang === 'am' ? 'ባህላዊ ሙዚቃዎችን ለአለም አቀፍ መድረኮች ማዘጋጀት' : 'Oversees performance curation, event management, and artist development',
                ]
              },
              {
                title: lang === 'om' ? 'Hogganaa Quunnamtii Hawaasaa' : lang === 'am' ? 'የህዝብ ግንኙነት ሀላፊ' : 'Public Relations Manager',
                company: 'Oromia Writers Association',
                date: 'March 2023 – Present',
                bullets: [
                  lang === 'om' ? 'Quunnamtii miidiyaa fi dhaabbilee waldaa barreessitootaa hogganuu' : lang === 'am' ? 'የማህበሩን የሚዲያ እና ተቋማዊ ግንኙነቶች በበላይነት መምራት' : 'Manages all external communications and media relations for the association',
                  lang === 'om' ? 'Sagantaalee ogbarruu fi beeksisa barreessitootaa qindeessuu' : lang === 'am' ? 'የስነ-ጽሁፍ ዝግጅቶችን እና የመጽሐፍ ምረቃዎችን ማስተባበር' : 'Orchestrates national literary events and author promotional showcases',
                ]
              },
            ].map((job, idx) => (
              <div key={idx} className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 hover:border-accent transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary dark:text-white">{job.title}</h3>
                  <span className="text-sm text-accent font-bold">{job.date}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-medium mb-3">{job.company}</p>
                <ul className="space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent rounded"></span>
            {t.skillsHeading}
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Literary Authorship", "Public Relations", "Digital Content Creation",
              "Cultural Promotion", "Event Management", "Strategic Communications",
              "Audience Building", "Social Media Strategy", "Media Relations",
              "Leadership", "Community Management", "Brand Development"
            ].map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
