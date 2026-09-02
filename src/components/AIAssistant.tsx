'use client';
import { useState, useRef, useEffect } from 'react';
import { useLang } from './LangContext';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  actions?: { label: string; url?: string; query?: string }[];
}

const aiKnowledge = {
  en: {
    welcome: "Hello! I am **Kanenus's Cultural AI Assistant & Interactive Services Directory** 🌐✨.\n\nI can assist you with all services and features offered across this platform:\n\n1. 📖 **Literary & Book Orders**: Buy *Ayyaantummaa* or pre-order *Dhaloota Mul'ataa*\n2. 🎵 **Live Music & Band Bookings**: Hire Shanan Gadaa Band for cultural ceremonies & concerts\n3. 🎤 **Keynote Speaking & Panel Moderation**: Invite Kanenus to universities & conferences\n4. 📢 **Public Relations & Media Strategy**: Strategic literary & institutional communications\n5. 📱 **Digital Content Creation & Promotion**: Reach 125K+ cultural audience via Hizbii Keenya\n6. ⚙️ **Social Media Command Center**: Multi-channel publisher & live analytics suite\n7. 📄 **Official CV & Credentials**: Instant PDF resume download\n8. 🌍 **Trilingual Experience**: Switch between EN, OM & AM anytime\n\nWhich service would you like to explore or book?",
    quickQuestions: [
      "✨ Explore all services",
      "📖 Order Books (Ayyaantummaa)",
      "🎵 Book Shanan Gadaa Band",
      "🎤 Invite for Keynote Speaking",
      "📢 PR & Media Consulting",
      "⚙️ Open Social Dashboard"
    ],
    placeholder: "Ask about book orders, music booking, speaking, PR services...",
    send: "Send",
    thinking: "Thinking...",
    onlineStatus: "Online • Full Services & Knowledge Hub",
    headerTitle: "Kanenus AI Assistant",
    headerSub: "All Platform Services & Guide",
  },
  om: {
    welcome: "Akkam jirtu! Ani **Gargaaraa AI Tajaajiloota Marsariitii Kanenus Kasa Bayisaati** 🌐✨.\n\nTajaajiloota fi qophiilee marsariitii kana keessatti dhihaatan hunda dhiheessuu danda'a:\n\n1. 📖 **Bittaafi Ajaja Kitaabotaa**: *Ayyaantummaa* bitachuu fi *Dhaloota Mul'ataa* dursa qabachuu\n2. 🎵 **Afeerraa Baandii Shanan Gadaa**: Ayyaana aadaa fi waltajjiiwwan sirbaatiif afeeruu\n3. 🎤 **Haasawa Ijoo & Qindeessaa Waltajjii**: Yuunivarsiitii fi sagantaalee gurguddoof afeeruu\n4. 📢 **Quunnamtii Hawaasaa (PR) & Miidiyaa**: Tarsiimoo ogbarruu fi dhaabbilee\n5. 📱 **Uumama Qabeenya Digitaalaa**: Marsariitii Hizbii Keenya (hordoftoota 125K+) beeksisuu\n6. ⚙️ **Giddu-gala Ajaja Miidiyaa (Daashboordii)**: Xiinxala hawaasa 158K+ fi maxxansaalee\n7. 📄 **CV & Ragaa Ogummaa**: PDF battalumatti buufachuu\n8. 🌍 **Tajaajila Afaan Sadii**: EN, OM, fi AM gidduutti jijjiiruu\n\nTajaajila isa kam ilaaluu yookiin ajajuu barbaaddu?",
    quickQuestions: [
      "✨ Tajaajiloota Hunda Ilaali",
      "📖 Kitaaba Biti (Ayyaantummaa)",
      "🎵 Baandii Shanan Gadaa Afeeri",
      "🎤 Haasawa Ijootiif Afeeri",
      "📢 Gorsa PR & Miidiyaa",
      "⚙️ Daashboordii Bani"
    ],
    placeholder: "Waa'ee bittaa kitaabaa, baandii, haasawa, tajaajila PR gaafadhaa...",
    send: "Ergi",
    thinking: "Yaadaa jira...",
    onlineStatus: "Toora Irra • Tarree Tajaajilootaa Guutuu",
    headerTitle: "Gargaaraa AI Kanenus",
    headerSub: "Qajeelchaa Tajaajiloota Hunda",
  },
  am: {
    welcome: "ጤና ይስጥልኝ! እኔ **የቀነኑስ ካሳ ባይሳ የድረ-ገጹ አገልግሎቶች AI ረዳት** ነኝ 🌐✨።\n\nበዚህ ድረ-ገጽ ላይ የሚገኙትን ሁሉንም አገልግሎቶች በተሟላ ሁኔታ ማግኘት ይችላሉ፦\n\n1. 📖 **የመጽሐፍት ሽያጭ እና ትዕዛዝ**፦ *አያንቱማ* መጽሐፍን ማዘዝ እና *ደሎታ ሙልአታ*ን ቀድመው መያዝ\n2. 🎵 **የሸነን ገዳ ባንድ የሙዚቃ ግብዣ**፦ ለባህል ፌስቲቫሎች እና ዝግጅቶች ባንዱን መጋበዝ\n3. 🎤 **የክብር እንግዳ ንግግር እና ፓናል መሪነት**፦ ለዩኒቨርሲቲ ጉባዔዎች እና የባህል መድረኮች\n4. 📢 **የህዝብ ግንኙነት (PR) እና የሚዲያ ስትራቴጂ**፦ ለስነ-ጽሁፍ እና ባህል ተቋማት የሚዲያ አመራር\n5. 📱 **የዲጂታል ይዘት ፈጠራ እና ማስተዋወቅ**፦ ከ125ሺ+ በላይ ተከታዮች ወዳለው የሕዝቢ ኬኛ መድረክ\n6. ⚙️ **የማህበራዊ ሚዲያ ማዕከል (ዳሽቦርድ)**፦ የ158ሺ+ ተከታዮች ትንታኔ እና የይዘት ማዘጋጃ\n7. 📄 **ይፋዊ የሙያ ዝርዝር (CV/PDF)**፦ በቀጥታ ማውረድ\n8. 🌍 **የ3 ቋንቋ አገልግሎት**፦ በእንግሊዝኛ፣ ኦሮምኛ እና አማርኛ መጠቀም\n\nየትኛውን አገልግሎት ማሰስ ወይም ማዘዝ ይፈልጋሉ?",
    quickQuestions: [
      "✨ ሁሉንም አገልግሎቶች አሳይ",
      "📖 መጽሐፍ እዘዝ (አያንቱማ)",
      "🎵 የሸነን ገዳ ባንድን ጋብዝ",
      "🎤 ለክብር ንግግር ጋብዝ",
      "📢 የህዝብ ግንኙነት (PR) ምክክር",
      "⚙️ ዳሽቦርዱን ክፈት"
    ],
    placeholder: "ስለ መጽሐፍት ትዕዛዝ፣ የባንድ ግብዣ፣ የንግግር መድረክ ወይም PR ይጠይቁ...",
    send: "ላክ",
    thinking: "እያሰበ ነው...",
    onlineStatus: "በመስመር ላይ • የሁሉም አገልግሎቶች ማዕከል",
    headerTitle: "የቀነኑስ AI ረዳት",
    headerSub: "የድረ-ገጹ ሙሉ አገልግሎቶች መመሪያ",
  }
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { lang } = useLang();
  const t = aiKnowledge[lang];
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: t.welcome,
      timestamp: 'Just now',
    }
  ]);

  useEffect(() => {
    setMessages([
      {
        id: 'welcome-' + lang,
        sender: 'ai',
        text: aiKnowledge[lang].welcome,
        timestamp: 'Just now',
      }
    ]);
  }, [lang]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const generateAIResponse = (query: string, currentLang: 'en' | 'om' | 'am') => {
    const q = query.toLowerCase();

    // 1. ALL SERVICES DIRECTORY OVERVIEW
    if (q.includes('all services') || q.includes('service') || q.includes('services') || q.includes('tajaajiloota') || q.includes('tajaajila') || q.includes('አገልግሎት') || q.includes('አገልግሎቶች')) {
      if (currentLang === 'om') {
        return {
          text: `🌟 **Tarree Tajaajiloota Marsariitii Kanenus Kasa Bayisaa:**\n\n1. 📖 **Bittaa Kitaabaa**: Kitaaba *'Ayyaantummaa'* (2026) bitachuu fi *'Dhaloota Mul'ataa'* dursa qabachuu.\n2. 🎵 **Afeerraa Baandii**: Baandii Shanan Gadaa ayyaanota aadaa fi sirbaatiif afeeru.\n3. 🎤 **Haasawa Ijoo**: Sagantaalee yuunivarsiitii, simpooziyeemii, fi waltajjii aadaatiif Kanenus afeeruu.\n4. 📢 **Gorsa PR & Miidiyaa**: Waldaa Barreessitoota Oromiyaa fi dhaabbilee ogbarruuf gorsa tarsiimoo laachuu.\n5. 📱 **Beeksisa Digitaalaa**: Marsariitii Hizbii Keenya (hordoftoota 125K+) irratti ergaa aadaa beeksisuu.\n6. ⚙️ **Giddu-gala Ajaja Miidiyaa**: Daashboordii qindeessaa miidiyaa fi xiinxala 158K+.\n7. 📄 **CV / Resume**: Ragaa muuxannoo fi barnootaa PDFn buufachuu.\n8. ✉️ **Qunnamtii Kallattii**: WhatsApp, Telegram, fi Iimeeliidhaan walitti dhufeenya uumuu.`,
          actions: [
            { label: "📖 Kitaabota Biti", url: "/books" },
            { label: "🎵 Baandii Afeeri", url: "/music" },
            { label: "🎤 Haasawa Afeeri", url: "/contact" },
            { label: "⚙️ Daashboordii", url: "/dashboard" }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: `🌟 **የቀነኑስ ካሳ ባይሳ ድረ-ገጽ ሙሉ አገልግሎቶች ዝርዝር፦**\n\n1. 📖 **የመጽሐፍት ሽያጭ እና ትዕዛዝ**፦ *'አያንቱማ'* (2026) መጽሐፍን በቀጥታ ማዘዝ እና ሁለተኛውን መጽሐፍ *'ደሎታ ሙልአታ'* ቀድመው መያዝ።\n2. 🎵 **የሸነን ገዳ ባንድ ግብዣ**፦ ለባህል ኮንሰርቶች፣ ለሰርግ እና ለበዓላት ዝግጅቶች ባንዱን መጋበዝ።\n3. 🎤 **የክብር እንግዳ ንግግር**፦ ለዩኒቨርሲቲ ጉባዔዎች፣ ለስነ-ጽሁፍ መድረኮች እና ለሲምፖዚየሞች ንግግር ማቅረብ።\n4. 📢 **የህዝብ ግንኙነት (PR) እና የሚዲያ ስትራቴጂ**፦ ለስነ-ጽሁፍ ተቋማት እና ደራሲያን የሚዲያ ማማከር።\n5. 📱 **የዲጂታል ይዘት ማስተዋወቅ**፦ ከ125,000 በላይ ተከታዮች ባሉት የሕዝቢ ኬኛ ገጽ ላይ የባህል ይዘቶችን ማሰራጨት።\n6. ⚙️ **የአመራር ዳሽቦርድ**፦ የማህበራዊ ገጾች አስተዳደር እና የ158ሺ+ ተከታዮች የቀጥታ ትንታኔ።\n7. 📄 **የስራ ልምድ (CV/PDF)**፦ ዝርዝር የሙያ ማስረጃን በPDF ማውረድ።\n8. ✉️ **የቀጥታ ግንኙነት**፦ በWhatsApp፣ በቴሌግራም ወይም በድረ-ገጽ ቅጽ ማነጋገር።`,
          actions: [
            { label: "📖 መጽሐፍ እዘዝ", url: "/books" },
            { label: "🎵 ባንዱን ጋብዝ", url: "/music" },
            { label: "🎤 ንግግር ጋብዝ", url: "/contact" },
            { label: "⚙️ ዳሽቦርድ", url: "/dashboard" }
          ]
        };
      }
      return {
        text: `🌟 **Full Directory of Services on This Website:**\n\n1. 📖 **Book Authoring & Direct Orders**: Purchase *'Ayyaantummaa'* or pre-order *'Dhaloota Mul'ataa'*.\n2. 🎵 **Live Music & Band Bookings**: Hire the Shanan Gadaa Band for cultural ceremonies, tours, and festivals.\n3. 🎤 **Keynote Speaking & Lectures**: Invite Kanenus for university talks, literary conferences, and cultural symposiums.\n4. 📢 **PR & Literary Communications Consulting**: Strategic media management drawing on Oromia Writers Association leadership.\n5. 📱 **Digital Media Promotion**: Reach an engaged 125,000+ cultural audience via Hizbii Keenya.\n6. ⚙️ **Executive Social Dashboard**: Omnichannel broadcast studio and 158K+ audience intelligence hub.\n7. 📄 **Credentials & CV Export**: Print and download a comprehensive PDF resume.\n8. ✉️ **Direct Management Support**: 24/7 direct inquiry channels via WhatsApp, Telegram, and Contact form.`,
        actions: [
          { label: "📖 Order Books", url: "/books" },
          { label: "🎵 Book Band", url: "/music" },
          { label: "🎤 Book Speaking", url: "/contact" },
          { label: "⚙️ Dashboard", url: "/dashboard" }
        ]
      };
    }

    // 2. KEYNOTE SPEAKING & LECTURES SERVICE
    if (q.includes('speaking') || q.includes('keynote') || q.includes('lecture') || q.includes('panel') || q.includes('haasawa') || q.includes('ንግግር') || q.includes('ጉባዔ') || q.includes('ኮንፈረንስ')) {
      if (currentLang === 'om') {
        return {
          text: `🎤 **Tajaajila Haasawa Ijoo fi Maree Waltajjii:**\nKanenus Kasa Bayisa waltajjiiwwan aadaa, fooramii ogbarruu yuunivarsiitii, fi sagantaalee gurguddoo irratti haasawa dhiheessuuf qophiidha.\n\n• **Mata-dureewwan**: Eenyummaa fi aadaa Oromoo, ogbarruu ammayyaa, hoggansa PR, fi miidiyaa digitaalaa.\n• **Akkaataa Afeeramu**: Fuula 'Contact' irratti 'Speaking' filachuun yookiin WhatsApp irratti kallattiin barreessuun.`,
          actions: [
            { label: "🎤 Afeerraa Ergi", url: "/contact" },
            { label: "📲 WhatsApp irratti Afeeri", url: "https://wa.me/251000000000?text=Hello!%20I%20would%20like%20to%20invite%20Kanenus%20for%20a%20keynote%20speaking%20engagement." }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: `🎤 **የክብር እንግዳ ንግግር እና የፓናል መሪነት አገልግሎት፦**\nቀነኑስ ካሳ ባይሳ ለዩኒቨርሲቲ ንግግሮች፣ ለስነ-ጽሁፍ ኮንፈረንሶች እና ለባህል ሲምፖዚየሞች ጥሪዎችን ይቀበላል።\n\n• **ዋና ዋና ርዕሶች**፦ የባህል ማንነት እና ቅርስ፣ ዘመናዊ ስነ-ጽሁፍ፣ የህዝብ ግንኙነት (PR) አመራር እና ዲጂታል ሚዲያ።\n• **የመጋበዣ መንገድ**፦ በ'Contact' ገጽ ላይ 'Speaking' በመምረጥ ወይም በWhatsApp በቀጥታ በመላክ።`,
          actions: [
            { label: "🎤 የግብዣ ጥያቄ ላክ", url: "/contact" },
            { label: "📲 በWhatsApp ጋብዝ", url: "https://wa.me/251000000000?text=Hello!%20I%20would%20like%20to%20invite%20Kanenus%20for%20a%20keynote%20speaking%20engagement." }
          ]
        };
      }
      return {
        text: `🎤 **Keynote Speaking & Panel Moderation Service:**\nKanenus Kasa Bayisa is available for keynote addresses, literary symposiums, university guest lectures, and cultural panels.\n\n• **Core Topics**: African cultural preservation, contemporary Oromo literature, PR strategy in arts, and digital creator economies.\n• **How to Book**: Fill out the Contact form under 'Speaking' or send a direct WhatsApp proposal.`,
        actions: [
          { label: "🎤 Submit Speaking Request", url: "/contact" },
          { label: "📲 Invite via WhatsApp", url: "https://wa.me/251000000000?text=Hello!%20I%20would%20like%20to%20invite%20Kanenus%20for%20a%20keynote%20speaking%20engagement." }
        ]
      };
    }

    // 3. PR & MEDIA CONSULTING SERVICE
    if (q.includes('pr') || q.includes('consulting') || q.includes('public relations') || q.includes('strategy') || q.includes('gorsa') || q.includes('ምክር') || q.includes('የህዝብ ግንኙነት')) {
      if (currentLang === 'om') {
        return {
          text: `📢 **Tajaajila Quunnamtii Hawaasaa (PR) & Gorsa Miidiyaa:**\nKanenus Hogganaa PR Waldaa Barreessitoota Oromiyaa ta'uun muuxannoo bal'aa qaba. Dhaabbilee aadaa, barreessitoota, fi qopheessitoota sagantaaleetiif gorsa tarsiimoo ni laata.\n\n• **Tajaajiloota**: Beeksisa kitaabaa, quunnamtii gaazexeessitootaa, fi ijaarsa maqa-gaarii dhaabbilee.`,
          actions: [
            { label: "📢 Gorsa Gaafadhu", url: "/contact" },
            { label: "📄 Muuxannoo PR Ilaali", url: "/cv" }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: `📢 **የህዝብ ግንኙነት (PR) እና የሚዲያ ማማከር አገልግሎት፦**\nቀነኑስ በኦሮሚያ ጸሐፊዎች ማህበር የህዝብ ግንኙነት ሀላፊ ሆኖ ካለው ከፍተኛ ልምድ በመነሳት ለደራሲያን፣ ለባህል ማህበራት እና ለድርጅቶች ስትራቴጂክ ምክር ይሰጣል።\n\n• **አገልግሎቶች**፦ የመጽሐፍ ምረቃ ዘመቻዎች፣ የሚዲያ ግንኙነት አመራር እና የተቋማት ገጽታ ግንባታ።`,
          actions: [
            { label: "📢 ምክክር ጠይቅ", url: "/contact" },
            { label: "📄 የPR የስራ ልምድ ይመልከቱ", url: "/cv" }
          ]
        };
      }
      return {
        text: `📢 **Public Relations & Media Strategy Consulting:**\nDrawing from his tenure as PR Manager at the Oromia Writers Association, Kanenus consults for authors, institutions, and cultural organizations on external communications.\n\n• **Services**: Book promotional campaigns, press release distribution, crisis communication, and institutional branding.`,
        actions: [
          { label: "📢 Inquire for PR Consulting", url: "/contact" },
          { label: "📄 View PR Background", url: "/cv" }
        ]
      };
    }

    // 4. BOOK SERVICES (Ayyaantummaa & Dhaloota Mul'ataa)
    if (q.includes('ayyaantummaa') || q.includes('book') || q.includes('kitaaba') || q.includes('መጽሐፍ') || q.includes('dhaloota') || q.includes('order')) {
      if (currentLang === 'om') {
        return {
          text: `📖 **Tajaajila Kitaabotaa & Bittaa:**\n1. **'Ayyaantummaa' (2026)**: Kitaaba aadaa fi eenyummaa Oromoo. Boqonnaa 1ffaa fuula 'Books' irratti dubbisuu fi WhatsApp irratti kallattiin bitachuun ni danda'ama.\n2. **'Dhaloota Mul'ataa' (Kitaaba 2ffaa)**: Kitaaba lammaffaa Kanenus. Dursitanii galmaa'uun yeroo maxxanfamu dursitanii argattu.`,
          actions: [
            { label: "📖 Boqonnaa 1 Dubbisi", url: "/books" },
            { label: "📲 WhatsApp irratti Biti", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20order%20Ayyaantummaa." }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: `📖 **የመጽሐፍት አገልግሎት እና ትዕዛዝ፦**\n1. **'አያንቱማ' (2026)**፦ የኦሮሞን ባህላዊ ማንነት የሚዳስስ ድንቅ መጽሐፍ። ምዕራፍ 1ን በነጻ ማንበብ እና በWhatsApp በቀጥታ ማዘዝ ይቻላል።\n2. **'ደሎታ ሙልአታ' (ሁለተኛ መጽሐፍ)**፦ በቅርቡ የሚመረቅ ሁለተኛው መጽሐፍ። ቀድመው በመመዝገብ ቅጂዎን ማስያዝ ይችላሉ።`,
          actions: [
            { label: "📖 ምዕራፍ 1ን አንብብ", url: "/books" },
            { label: "📲 በWhatsApp እዘዝ", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20order%20Ayyaantummaa." }
          ]
        };
      }
      return {
        text: `📖 **Book Publishing & Direct Ordering Services:**\n1. **'Ayyaantummaa' (2026 Publication)**: Landmark literature on cultural philosophy. Preview Chapter 1 for free or order directly on WhatsApp.\n2. **'Dhaloota Mul'ataa' (Upcoming Book 2)**: Visionary generational guide. Register on the VIP waitlist for early-bird access.`,
        actions: [
          { label: "📖 Read Chapter 1 Preview", url: "/books" },
          { label: "📲 Order via WhatsApp", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20order%20Ayyaantummaa." }
        ]
      };
    }

    // 5. SHANAN GADAA BAND SERVICE
    if (q.includes('music') || q.includes('band') || q.includes('shanan') || q.includes('gadaa') || q.includes('song') || q.includes('muuziqaa') || q.includes('ሙዚቃ') || q.includes('ባንድ')) {
      if (currentLang === 'om') {
        return {
          text: `🎵 **Tajaajila Baandii Shanan Gadaa:**\nBaandiin Shanan Gadaa aadaa fi muuziqaa Oromoo waltajjiiwwan gurguddoo irratti dhiheessa. Ayyaana aadaa, sirba waltajjii, cidha, fi simpooziyeemiif afeeruun ni danda'ama!`,
          actions: [
            { label: "🎵 Giddu-gala Muuziqaa", url: "/music" },
            { label: "📲 Baandicha Afeeraa", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20book%20Shanan%20Gadaa%20Band." }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: `🎵 **የሸነን ገዳ ባንድ የሙዚቃ አገልግሎት፦**\nየሸነን ገዳ ባንድ ባህላዊ የኦሮሞ ዜማዎችን በአገር ውስጥ እና በአለም አቀፍ መድረኮች ያቀርባል። ለኮንሰርቶች፣ ለባህል ፌስቲቫሎች እና ለዝግጅቶች መጋበዝ ይቻላል!`,
          actions: [
            { label: "🎵 የሙዚቃ ማዕከል", url: "/music" },
            { label: "📲 ባንዱን ጋብዝ", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20book%20Shanan%20Gadaa%20Band." }
          ]
        };
      }
      return {
        text: `🎵 **Shanan Gadaa Band Live Performance Service:**\nThe Shanan Gadaa Band is available for major cultural festivals, tours, private galas, and concert performances under Kanenus's artistic direction.`,
        actions: [
          { label: "🎵 Explore Music Hub", url: "/music" },
          { label: "📲 Book Band via WhatsApp", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20book%20Shanan%20Gadaa%20Band." }
        ]
      };
    }

    // 6. DASHBOARD & SOCIAL MEDIA SERVICE
    if (q.includes('dashboard') || q.includes('daashboordii') || q.includes('ዳሽቦርድ') || q.includes('analytics') || q.includes('social command')) {
      if (currentLang === 'om') {
        return {
          text: `⚙️ **Tajaajila Giddu-gala Ajaja Miidiyaa (Daashboordii):**\n• Hordoftoota 158K+ fi dhaqqabamummaa guyyaa 30 hordofuu\n• Istuudiyoo Maxxansaa: Facebook, TikTok, YouTube, Telegram irratti yeroo tokkotti qopheessuu\n• Kalaandarii qophii maxxansaa fi ergaawwan hawaasaa bakka tokkotti deebisuu`,
          actions: [
            { label: "⚙️ Daashboordii Bani", url: "/dashboard" },
            { label: "🔑 Seeni (Login)", url: "/login" }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: `⚙️ **የአመራር ዳሽቦርድ አገልግሎት፦**\n• የ158ሺ+ ተከታዮች የቀጥታ ትንታኔ እና የ30 ቀናት ተደራሽነት\n• የፖስት ስቱዲዮ፦ በፌስቡክ፣ ቲክቶክ፣ ዩቲዩብ እና ቴሌግራም በአንድ ጊዜ ማሰራጨት\n• የመልእክት ሳጥን እና የይዘት መርሃ-ግብር ማስተዳደር`,
          actions: [
            { label: "⚙️ ዳሽቦርድ ክፈት", url: "/dashboard" },
            { label: "🔑 ግባ (Login)", url: "/login" }
          ]
        };
      }
      return {
        text: `⚙️ **Social Media Command Suite:**\n• Cross-platform audience tracking for 158K+ community\n• Omnichannel broadcast simulator for Facebook, TikTok, YouTube, and Telegram\n• Content calendar scheduling and unified community inbox`,
        actions: [
          { label: "⚙️ Open Dashboard", url: "/dashboard" },
          { label: "🔑 Sign In", url: "/login" }
        ]
      };
    }

    // Default Fallback
    if (currentLang === 'om') {
      return {
        text: `Gaaffii keessaniif galatoomaa! Tajaajiloota Kanenus Kasa Bayisaa hunda (Bittaa Kitaabaa, Afeerraa Baandii Shanan Gadaa, Haasawa Ijoo, Gorsa PR, fi Daashboordii) qindeessuuf qophiidha. Isa kam dursa baruu barbaaddu?`,
        actions: [
          { label: "✨ Tajaajiloota Hunda", query: "Tajaajiloota hunda natti agarsiisi" },
          { label: "📖 Kitaabota Biti", url: "/books" },
          { label: "🎵 Baandii Afeeri", url: "/music" }
        ]
      };
    }
    if (currentLang === 'am') {
      return {
        text: `ስለ ጥያቄዎ እናመሰግናለን! የቀነኑስ ካሳ ባይሳን ሁሉንም አገልግሎቶች (የመጽሐፍት ትዕዛዝ፣ የሸነን ገዳ ባንድ ግብዣ፣ የክብር ንግግር፣ የህዝብ ግንኙነት ማማከር እና ዳሽቦርድ) ማግኘት ይችላሉ። የትኛውን መመልከት ይፈልጋሉ?`,
        actions: [
          { label: "✨ ሁሉንም አገልግሎቶች አሳይ", query: "ሁሉንም አገልግሎቶች አሳይ" },
          { label: "📖 መጽሐፍ እዘዝ", url: "/books" },
          { label: "🎵 ባንዱን ጋብዝ", url: "/music" }
        ]
      };
    }
    return {
      text: "Thank you for asking! I can assist you with all of Kanenus Kasa Bayisa's professional services: Book Orders (*'Ayyaantummaa'* & *'Dhaloota Mul'ataa'*), Shanan Gadaa Band Bookings, Keynote Speaking, PR & Media Strategy, and the Social Command Dashboard.",
      actions: [
        { label: "✨ Explore All Services", query: "Explore all services of this website" },
        { label: "📖 Order Books", url: "/books" },
        { label: "🎵 Book Band", url: "/music" }
      ]
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const resp = generateAIResponse(query, lang);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: resp.text,
        timestamp: 'Just now',
        actions: resp.actions,
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating AI Bubble Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-accent text-white shadow-[0_4px_25px_rgba(124,58,237,0.5)] hover:shadow-[0_6px_35px_rgba(124,58,237,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 z-50 focus:outline-none"
        aria-label="Open Kanenus AI Assistant"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#0b1a30] rounded-full animate-pulse"></span>
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
          <div className="relative">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-200"></span>
            </span>
          </div>
        )}
      </button>

      {/* AI Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 sm:right-6 w-[92vw] sm:w-[420px] h-[580px] max-h-[84vh] bg-white dark:bg-gray-900 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-purple-500/20 dark:border-purple-500/30 flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0b1a30] via-purple-950 to-[#071324] text-white p-4.5 px-5 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-accent flex items-center justify-center text-white shadow-md">
                <span className="text-lg font-bold">✨</span>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#0b1a30]"></span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm leading-tight flex items-center gap-1.5">
                  {t.headerTitle}
                </h3>
                <p className="text-[11px] text-purple-200">{t.onlineStatus}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-gray-950/60 scrollbar-thin">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-accent to-blue-600 text-white rounded-br-none shadow-md'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  
                  {/* Action Link Pills */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-1.5">
                      {msg.actions.map((act, i) => (
                        act.url ? (
                          <a
                            key={i}
                            href={act.url}
                            target={act.url.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 text-[11px] font-bold rounded-lg transition border border-purple-200/60 dark:border-purple-800 flex items-center gap-1"
                          >
                            {act.label}
                          </a>
                        ) : act.query ? (
                          <button
                            key={i}
                            onClick={() => handleSend(act.query)}
                            className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 text-blue-700 dark:text-blue-300 text-[11px] font-bold rounded-lg transition border border-blue-200/60 flex items-center gap-1"
                          >
                            {act.label}
                          </button>
                        ) : null
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 max-w-[80px] bg-white dark:bg-gray-800 rounded-2xl rounded-bl-none border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Pills */}
          <div className="p-2.5 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
            {t.quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-3 py-1.5 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-[11px] font-medium rounded-full transition border border-purple-200 dark:border-purple-800/60 shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-transparent"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-accent text-white flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition shadow-md shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
