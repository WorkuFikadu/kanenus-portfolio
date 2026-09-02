'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/components/LangContext';

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { lang } = useLang();

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const labels = {
    days: lang === 'om' ? 'Guyyoota' : lang === 'am' ? 'ቀናት' : 'Days',
    hours: lang === 'om' ? 'Sa\'aatii' : lang === 'am' ? 'ሰዓታት' : 'Hours',
    minutes: lang === 'om' ? 'Daqiiqaa' : lang === 'am' ? 'ደቂቃዎች' : 'Minutes',
    seconds: lang === 'om' ? 'Sekondii' : lang === 'am' ? 'ሰከንዶች' : 'Seconds',
  };

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-3xl font-bold font-heading tabular-nums text-white">
            {String(value).padStart(2, '0')}
          </div>
          <span className="text-xs text-gray-300 uppercase tracking-widest mt-2">{labels[unit as keyof typeof labels]}</span>
        </div>
      ))}
    </div>
  );
}

const eventsContent = {
  en: {
    badge: 'Schedule',
    heading: 'Events & Appearances',
    desc: 'Join Kanenus at cultural symposiums, literary keynote speeches, and live musical performances worldwide.',
    nextEventBadge: 'Next Major Appearance',
    reserveSpot: 'Reserve a Seat via WhatsApp',
    allEventsHeading: 'Upcoming Events Schedule',
    ctaHeading: 'Want to host or invite Kanenus?',
    ctaDesc: 'Available for university lectures, festival keynotes, and cultural ceremonies.',
    ctaBtn: 'Send Event Invitation',
    events: [
      {
        title: "Oromia Cultural Literature Forum",
        type: "Panel Discussion",
        date: "October 18, 2026",
        location: "Addis Ababa Cultural Center",
        description: "Kanenus will moderate a panel of leading Oromo authors discussing the future of indigenous literature in the digital age.",
      },
      {
        title: "Shanan Gadaa Band — Grand Performance",
        type: "Live Performance",
        date: "November 5, 2026",
        location: "Jimma National Theater",
        description: "A landmark cultural evening featuring the Shanan Gadaa Band under Kanenus's artistic direction, celebrating Oromo musical heritage.",
      },
      {
        title: "East Africa Writers Summit",
        type: "Keynote Speech",
        date: "December 12, 2026",
        location: "Nairobi / Virtual",
        description: "Delivering the opening keynote on 'Bridging Digital Media and Ancient Heritage in Modern African Authorship'.",
      }
    ]
  },
  om: {
    badge: 'Sagantaalee',
    heading: 'Sagantaalee & Walgahiiwwan',
    desc: 'Walgahii aadaa, waltajjii ogbarruu, fi sirba baandii Shanan Gadaa irratti Kanenus wajjin hirmaadhaa.',
    nextEventBadge: 'Sagantaa Itti Aanu',
    reserveSpot: 'Iddoo Qabadhu (WhatsApp)',
    allEventsHeading: 'Tarree Sagantaalee Dhufanii',
    ctaHeading: 'Kanenus afeeruu yookiin qopheessuu barbaadduu?',
    ctaDesc: 'Walgahii yuunivarsiitii, ayyaanota aadaa, fi sagantaalee ogbarruutiif qophiidha.',
    ctaBtn: 'Afeerraa Sagantaa Ergi',
    events: [
      {
        title: "Fooramii Ogbarruu Aadaa Oromiyaa",
        type: "Maree Waltajjii",
        date: "Onkoloolessa 18, 2026",
        location: "Giddu-gala Aadaa Finfinnee",
        description: "Kanenus barreessitoota Oromoo bebbeekamoo wajjin waa'ee ogbarruu ammayyaa irratti marii gaggeessa.",
      },
      {
        title: "Sirba Guddaa Baandii Shanan Gadaa",
        type: "Agarsiisa Sirbaa",
        date: "Sadaasa 5, 2026",
        location: "Tiyyaatira Biyyooleessaa Jimmaa",
        description: "Hoggansa Kanenusiin qophii sirba aadaa guddaa dhalootaaf dhihaatu.",
      },
      {
        title: "Walgahii Barreessitoota Baha Afrikaa",
        type: "Haasawa Ijoo",
        date: "Muddee 12, 2026",
        location: "Naayiroobii / Toora Intarneetii",
        description: "Haasawa ijoo waa'ee aadaa fi miidiyaa digitaalaa ogbarruu Afrikaa keessatti dhiheessa.",
      }
    ]
  },
  am: {
    badge: 'መርሃ ግብሮች',
    heading: 'ክስተቶች እና የባህል ዝግጅቶች',
    desc: 'በስነ-ጽሁፍ መድረኮች፣ በባህል ሲምፖዚየሞች እና በሸነን ገዳ ባንድ ዝግጅቶች ላይ ከቀነኑስ ጋር ይሳተፉ።',
    nextEventBadge: 'ቀጣዩ ትልቅ መርሃ ግብር',
    reserveSpot: 'ቦታ ይያዙ (በWhatsApp)',
    allEventsHeading: 'የሚመጡ ዝግጅቶች ዝርዝር',
    ctaHeading: 'ቀነኑስን ወደ ዝግጅትዎ መጋበዝ ይፈልጋሉ?',
    ctaDesc: 'ለዩኒቨርሲቲ ንግግሮች፣ ለባህል ፌስቲቫሎች እና ለስነ-ጽሁፍ ምረቃዎች ዝግጁ ነው።',
    ctaBtn: 'የግብዣ ጥያቄ ላክ',
    events: [
      {
        title: "የኦሮሚያ ባህላዊ ስነ-ጽሁፍ ፎረም",
        type: "የፓናል ውይይት",
        date: "ጥቅምት 18, 2026",
        location: "አዲስ አበባ ባህል ማዕከል",
        description: "ቀነኑስ ታዋቂ ደራሲያንን በማስተባበር በዲጂታል ዘመን ስላለው የስነ-ጽሁፍ ጉዞ ውይይት ይመራል።",
      },
      {
        title: "የሸነን ገዳ ባንድ ታላቅ የሙዚቃ ዝግጅት",
        type: "የቀጥታ ኮንሰርት",
        date: "ህዳር 5, 2026",
        location: "የጅማ ብሔራዊ ቴአትር",
        description: "በቀነኑስ አዘጋጅነት የኦሮሞን ባህላዊ ሙዚቃዎች የሚያቀርብ ድንቅ ምሽት።",
      },
      {
        title: "የምስራቅ አፍሪካ ጸሐፊዎች ጉባዔ",
        type: "የክብር ንግግር",
        date: "ታህሳስ 12, 2026",
        location: "ናይሮቢ / በበይነ-መረብ",
        description: "ዲጂታል ሚዲያን እና ጥንታዊ ቅርሶችን በዘመናዊ ስነ-ጽሁፍ ማስተሳሰር በሚል ርዕስ ንግግር ያቀርባል።",
      }
    ]
  }
};

export default function EventsPage() {
  const { lang } = useLang();
  const t = eventsContent[lang];

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
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{t.desc}</p>
        </div>
      </section>

      {/* Featured Event Countdown */}
      <section className="py-16 bg-[#071324] border-b border-white/10 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="px-4 py-1.5 bg-accent/20 text-accent border border-accent/30 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-6">
            {t.nextEventBadge}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            {t.events[0].title}
          </h2>
          <CountdownTimer targetDate="2026-10-18T09:00:00" />
          <div className="mt-8">
            <a
              href="https://wa.me/251000000000?text=Hello!%20I%20would%20like%20to%20reserve%20a%20seat%20for%20the%20Oromia%20Cultural%20Literature%20Forum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-blue-500 text-white font-bold rounded-full transition shadow-lg text-sm"
            >
              {t.reserveSpot}
            </a>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-12 text-center">{t.allEventsHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.events.map((evt, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                <div>
                  <span className="px-3.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4">
                    {evt.type}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-2">{evt.title}</h3>
                  <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">
                    <p>📅 {evt.date}</p>
                    <p>📍 {evt.location}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{evt.description}</p>
                </div>
                <a
                  href={`https://wa.me/251000000000?text=${encodeURIComponent('Hello! I would like more information about: ' + evt.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 bg-gray-50 dark:bg-gray-700 text-primary dark:text-white font-bold text-xs rounded-xl hover:bg-accent hover:text-white transition"
                >
                  {t.reserveSpot}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invite Host Banner */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t.ctaHeading}</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">{t.ctaDesc}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold rounded-full hover:bg-gray-100 transition shadow-xl text-sm">
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
