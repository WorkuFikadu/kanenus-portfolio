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
    welcome: "Hello! I am **Kanenus's Cultural AI Assistant & Interactive Website Guide** 🌐✨.\n\nI can help you explore everything on this platform in detail:\n• 📖 **Books**: Order *Ayyaantummaa* or pre-order *Dhaloota Mul'ataa*\n• 🎵 **Music**: Explore Shanan Gadaa Band tracks & bookings\n• 👤 **About & Bio**: Leadership, PR, and achievements\n• 📱 **Social Media**: 125K+ community & channel links\n• ⚙️ **Dashboard**: Social command center & metrics\n• 🌍 **Languages**: How to toggle between EN, OM & AM\n\nHow can I guide you today?",
    quickQuestions: [
      "🌐 How do I navigate this website?",
      "📖 How to read/order 'Ayyaantummaa'?",
      "🎵 How to book Shanan Gadaa Band?",
      "⚙️ How does the Dashboard work?",
      "🌍 How do I change languages?"
    ],
    placeholder: "Ask how to use the site, order books, book music...",
    send: "Send",
    thinking: "Thinking...",
    onlineStatus: "Online • Interactive Website Guide",
    headerTitle: "Kanenus AI Assistant",
    headerSub: "Trilingual Guide & Knowledge Base",
  },
  om: {
    welcome: "Akkam jirtu! Ani **Gargaaraa AI Aadaa fi Qajeelchaa Marsariitii Kanenus Kasa Bayisaati** 🌐✨.\n\nMarsariitii kana guutummaatti akka fayyadamtaniif isin gargaaruu danda'a:\n• 📖 **Kitaabota**: *Ayyaantummaa* bitachuu fi *Dhaloota Mul'ataa* dursa qabachuu\n• 🎵 **Muuziqaa**: Sirboota Baandii Shanan Gadaa fi afeerraa\n• 👤 **Waa'ee Kanenus**: Seenaa jireenyaa, hoggansa PR fi aadaa\n• 📱 **Miidiyaa**: Hordoftoota 125K+ fi liinkiiwwan fuulotaa\n• ⚙️ **Daashboordii**: Giddu-gala ajaja miidiyaa hawaasaa\n• 🌍 **Afaanota**: Akkaataa EN, OM fi AM itti jijjiirtan\n\nHar'a maaliin isin gargaaru?",
    quickQuestions: [
      "🌐 Marsariitii kana akkamittiin fayyadama?",
      "📖 Kitaaba 'Ayyaantummaa' akkamittiin bita?",
      "🎵 Baandii Shanan Gadaa akkamittiin afeera?",
      "⚙️ Daashboordiin akkamitti hojjata?",
      "🌍 Afaan akkamittiin jijjiirama?"
    ],
    placeholder: "Akkaataa fayyadama weebsaayitii, kitaaba, muuziqaa gaafadhaa...",
    send: "Ergi",
    thinking: "Yaadaa jira...",
    onlineStatus: "Toora Irra • Qajeelchaa Afaan Sadii",
    headerTitle: "Gargaaraa AI Kanenus",
    headerSub: "Qajeelchaa Marsariitii & Aadaa",
  },
  am: {
    welcome: "ጤና ይስጥልኝ! እኔ **የቀነኑስ ካሳ ባይሳ የባህል AI ረዳት እና የድረ-ገጹ መመሪያ** ነኝ 🌐✨።\n\nይህንን ድረ-ገጽ በጥልቀት እንዲጠቀሙ ላግዝዎ እችላለሁ፦\n• 📖 **መጽሐፍት**፦ *አያንቱማ* መጽሐፍን ማዘዝ ወይም *ደሎታ ሙልአታ*ን ቀድመው መያዝ\n• 🎵 **ሙዚቃ**፦ የሸነን ገዳ ባንድ ዜማዎችን ማዳመጥ እና ለዝግጅት መጋበዝ\n• 👤 **ስለ ቀነኑስ**፦ የህይወት ታሪክ፣ የህዝብ ግንኙነት እና የባህል ስራዎች\n• 📱 **ማህበራዊ ሚዲያ**፦ 125ሺ+ ተከታዮች እና የቀጥታ ገጾች\n• ⚙️ **ዳሽቦርድ**፦ የማህበራዊ ሚዲያ ማዕከል እና ትንታኔዎች\n• 🌍 **ቋንቋዎች**፦ እንግሊዝኛ፣ ኦሮምኛ እና አማርኛን እንዴት መቀያየር እንደሚቻል\n\nዛሬ በምን ላግዝዎ?",
    quickQuestions: [
      "🌐 ይህንን ድረ-ገጽ እንዴት ልጠቀምበት እችላለሁ?",
      "📖 'አያንቱማ' መጽሐፍን እንዴት ማንበብ/ማዘዝ እችላለሁ?",
      "🎵 የሸነን ገዳ ባንድን እንዴት መጋበዝ እችላለሁ?",
      "⚙️ ዳሽቦርዱ እንዴት ይሰራል?",
      "🌍 ቋንቋውን እንዴት መቀየር እችላለሁ?"
    ],
    placeholder: "ስለ ድረ-ገጹ አጠቃቀም፣ መጽሐፍት፣ ሙዚቃ ይጠይቁ...",
    send: "ላክ",
    thinking: "እያሰበ ነው...",
    onlineStatus: "በመስመር ላይ • የድረ-ገጹ መመሪያ ረዳት",
    headerTitle: "የቀነኑስ AI ረዳት",
    headerSub: "ባለ 3 ቋንቋ የድረ-ገጽ መመሪያ",
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

    // 0. DETAILED HOW TO USE WEBSITE GUIDE
    if (q.includes('how to use') || q.includes('guide') || q.includes('how do i navigate') || q.includes('website') || q.includes('site') || q.includes('akkamittiin fayyadama') || q.includes('fayyadama') || q.includes('እንዴት ልጠቀም') || q.includes('አጠቃቀም') || q.includes('መመሪያ')) {
      if (currentLang === 'om') {
        return {
          text: `🌐 **Akkaataa Marsariitii Kana Guutummaatti Itti Fayyadaman:**\n\n1. 📖 **Kutaa Kitaabotaa (/books)**: \n   • Kitaaba *Ayyaantummaa* Boqonnaa 1 bilisaan dubbisuu fi WhatsApp/Telegram irratti kallattiin bitachuu.\n   • Kitaaba 2ffaa *Dhaloota Mul'ataa* dursa qabachuuf iimeelii galchuu.\n\n2. 🎵 **Giddu-gala Muuziqaa (/music)**: \n   • Sirboota Baandii Shanan Gadaa dhaggeeffachuu fi ayyaanota aadaatiif afeeru.\n\n3. 👤 **Waa'ee & Seenaa (/about, /cv)**: \n   • Seenaa jireenyaa, gahee Waldaa Barreessitootaa, fi ragaa ogummaa (PDF) buufachuu.\n\n4. ⚙️ **Daashboordii (/dashboard)**: \n   • Qindeessaa miidiyaa hawaasaa fi xiinxala hawaasa 158K+ ilaaluu.\n\n5. 🌍 **Afaan Jijjiiruu**: \n   • Bantii gubbaa mirgaarraa **🇬🇧 EN**, **🇪🇹 OM**, fi **🇪🇹 AM** tuquun afaan barbaaddan filadhaa.`,
          actions: [
            { label: "📖 Fuula Kitaabaa", url: "/books" },
            { label: "🎵 Fuula Muuziqaa", url: "/music" },
            { label: "⚙️ Daashboordii", url: "/dashboard" },
            { label: "✉️ Qunnamii", url: "/contact" }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: `🌐 **ይህንን ድረ-ገጽ በጥልቀት የመጠቀሚያ ሙሉ መመሪያ፦**\n\n1. 📖 **የመጽሐፍት ገጽ (/books)**፦ \n   • የ*አያንቱማ* መጽሐፍ ምዕራፍ 1ን በነጻ ማንበብ እና በWhatsApp/Telegram በቀጥታ ማዘዝ።\n   • ሁለተኛውን መጽሐፍ *ደሎታ ሙልአታ* ቀድመው ለመያዝ ኢሜይል ማስመዝገብ።\n\n2. 🎵 **የሙዚቃ ማዕከል (/music)**፦ \n   • የሸነን ገዳ ባንድ ባህላዊ ዜማዎችን ማዳመጥ እና ለዝግጅት መጋበዝ።\n\n3. 👤 **ስለ ቀነኑስ እና የስራ ልምድ (/about, /cv)**፦ \n   • የህይወት ታሪክን ማንበብ እና የሙያ ዝርዝሩን (CV/PDF) ማውረድ።\n\n4. ⚙️ **የአመራር ዳሽቦርድ (/dashboard)**፦ \n   • የሁሉንም ማህበራዊ ገጾች አስተዳደር እና የተከታዮች ትንታኔ ማየት።\n\n5. 🌍 **ቋንቋ መቀየር**፦ \n   • ከላይ በቀኝ በኩል የሚገኙትን **🇬🇧 EN**፣ **🇪🇹 OM** ወይም **🇪🇹 AM** አዝራሮች በመጫን ቋንቋውን ማስተካከል።`,
          actions: [
            { label: "📖 የመጽሐፍት ገጽ", url: "/books" },
            { label: "🎵 የሙዚቃ ገጽ", url: "/music" },
            { label: "⚙️ ዳሽቦርድ", url: "/dashboard" },
            { label: "✉️ ያነጋግሩን", url: "/contact" }
          ]
        };
      }
      return {
        text: `🌐 **Comprehensive Guide on Using This Website:**\n\n1. 📖 **Books & Publications Hub (/books)**:\n   • Read **Chapter 1 Preview** of *Ayyaantummaa* for free.\n   • 1-Click order via **WhatsApp** or **Telegram**.\n   • Join the VIP Waitlist / Pre-order *Dhaloota Mul'ataa*.\n\n2. 🎵 **Shanan Gadaa Music Hub (/music)**:\n   • Listen to track breakdowns (*Oromiyaa Koo*, *Gadaa Mootummaa*).\n   • Direct booking form & WhatsApp for live event performances.\n\n3. 👤 **Biography & CV (/about, /cv)**:\n   • Read Kanenus's literary journey, PR leadership, and download the print-ready CV PDF.\n\n4. ⚙️ **Social Media Command Center (/dashboard)**:\n   • Explore real-time analytics for 158K+ audience and omnichannel post simulator.\n\n5. 🌍 **Trilingual Switcher**:\n   • Switch instantly between **English**, **Afaan Oromoo**, and **Amharic** using the top header pill.`,
        actions: [
          { label: "📖 Books Hub", url: "/books" },
          { label: "🎵 Music Hub", url: "/music" },
          { label: "⚙️ Dashboard", url: "/dashboard" },
          { label: "✉️ Contact Us", url: "/contact" }
        ]
      };
    }

    // 1. How to change language
    if (q.includes('language') || q.includes('afaan') || q.includes('ቋንቋ') || q.includes('amharic') || q.includes('oromoo') || q.includes('english')) {
      if (currentLang === 'om') {
        return {
          text: "🌍 **Afaan Jijjiiruuf:**\nBantii gubbaa mirgaa irratti qabduu filannoo afaanii argattu:\n• **🇬🇧 EN**: English (Ingiliffa)\n• **🇪🇹 OM**: Afaan Oromoo\n• **🇪🇹 AM**: አማርኛ (Amaariffa)\n\nTokko yoo filattan marsariitiin guutuun yeruma sana jijjiirama!",
          actions: [{ label: "🌐 Marsariitii Daawwadhu", url: "/" }]
        };
      }
      if (currentLang === 'am') {
        return {
          text: "🌍 **ቋንቋ ለመቀየር፦**\nበድረ-ገጹ አናት በቀኝ በኩል የሚገኘውን የቋንቋ መምረጫ ይጠቀሙ፦\n• **🇬🇧 EN**፦ እንግሊዝኛ\n• **🇪🇹 OM**፦ አፋን ኦሮሞ\n• **🇪🇹 AM**፦ አማርኛ\n\nየፈለጉትን ቋንቋ ሲጫኑ ድረ-ገጹ ወዲያውኑ ሙሉ በሙሉ ወደተመረጠው ቋንቋ ይቀየራል!",
          actions: [{ label: "🌐 ዋና ገጽ", url: "/" }]
        };
      }
      return {
        text: "🌍 **How to Switch Languages:**\nLocate the executive language pill in the top navigation bar:\n• **🇬🇧 EN**: English\n• **🇪🇹 OM**: Afaan Oromoo\n• **🇪🇹 AM**: አማርኛ (Amharic)\n\nClicking any option instantly translates the entire website and saves your preference across visits!",
        actions: [{ label: "🌐 Explore Homepage", url: "/" }]
      };
    }

    // 2. Dashboard Guide
    if (q.includes('dashboard') || q.includes('daashboordii') || q.includes('ዳሽቦርድ') || q.includes('analytics') || q.includes('social command')) {
      if (currentLang === 'om') {
        return {
          text: "⚙️ **Daashboordiin Akkamitti Hojjata?**\nDaashboordiin kun qindeessaa miidiyaa hawaasaa Kanenus Kasa Bayisaati:\n• **Ilaalcha Waliigalaa**: Hawaasa 158K+ fi dhaqqabamummaa guyyaa 30\n• **Istuudiyoo Maxxansaa**: Facebook, TikTok, YouTube, Telegram irratti yeroo tokkotti maxxansuu\n• **Kalaandarii**: Maxxansaalee qophaa'an yeroo qabsiisuu\n• **Yaada Hawaasaa**: Ergaawwan hunda bakka tokkotti deebisuu",
          actions: [
            { label: "⚙️ Gara Daashboordiitti Deemi", url: "/dashboard" },
            { label: "🔑 Seeni (Login)", url: "/login" }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: "⚙️ **ዳሽቦርዱ እንዴት ይሰራል?**\nዳሽቦርዱ የቀነኑስ ካሳ ባይሳ የማህበራዊ ሚዲያ ማዕከል ነው፦\n• **አጠቃላይ እይታ**፦ 158ሺ+ ተከታዮችን እና የ30 ቀናት ተደራሽነትን ያሳያል\n• **የፖስት ስቱዲዮ**፦ በፌስቡክ፣ ቲክቶክ፣ ዩቲዩብ እና ቴሌግራም በአንድ ጊዜ ፖስት ማድረግ\n• **የቀን መቁጠሪያ**፦ ለወደፊት የሚለጠፉ ጽሑፎችን ማስተካከል\n• **የመልእክት ሳጥን**፦ ከሁሉም ገጾች የሚመጡ መልእክቶችን በአንድ ቦታ ማስተናገድ",
          actions: [
            { label: "⚙️ ወደ ዳሽቦርድ ሂድ", url: "/dashboard" },
            { label: "🔑 ግባ (Login)", url: "/login" }
          ]
        };
      }
      return {
        text: "⚙️ **How the Social Command Dashboard Works:**\nThe executive dashboard provides a centralized management suite for Kanenus's 158K+ audience:\n• **Executive Overview**: Cross-platform reach & engagement metrics\n• **Omnichannel Studio**: Real-time device simulator for multi-platform broadcasting\n• **Content Calendar**: Drag-and-drop post scheduling\n• **Community Inbox**: Unified inbox managing Facebook, TikTok & YouTube comments",
        actions: [
          { label: "⚙️ Open Dashboard", url: "/dashboard" },
          { label: "🔑 Sign In", url: "/login" }
        ]
      };
    }

    // 3. Ayyaantummaa
    if (q.includes('ayyaantummaa') || q.includes('book 1') || q.includes('first book') || q.includes('አያንቱማ') || q.includes('kitaaba 1')) {
      if (currentLang === 'om') {
        return {
          text: "📖 **Kitaaba 'Ayyaantummaa':**\nKitaaba beekamaa Kanenus Kasa Bayisaatiin bara 2026 maxxanfamedha. Aadaa, eenyummaa Oromoo, fi seenaa dhalootaa bal'inaan xiinxala. Fuula 'Books' irratti Boqonnaa 1ffaa bilisaan dubbisuu yookiin WhatsApp irratti bitachuu dandeessu!",
          actions: [
            { label: "📖 Boqonnaa 1 Dubbisi", url: "/books" },
            { label: "📲 WhatsApp irratti Biti", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20order%20Ayyaantummaa." }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: "📖 **የ'አያንቱማ' መጽሐፍ፦**\nበ2026 የታተመው የቀነኑስ ካሳ ባይሳ ድንቅ መጽሐፍ ነው። የኦሮሞን ባህላዊ ማንነት፣ ፍልስፍና እና ማህበራዊ እሴቶችን በጥልቀት ይዳስሳል። በ'Books' ገጽ ላይ ምዕራፍ 1ን በነጻ ማንበብ ወይም በቀጥታ በWhatsApp ማዘዝ ይችላሉ!",
          actions: [
            { label: "📖 ምዕራፍ 1ን አንብብ", url: "/books" },
            { label: "📲 በWhatsApp እዘዝ", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20order%20Ayyaantummaa." }
          ]
        };
      }
      return {
        text: "📖 **About 'Ayyaantummaa':**\nKanenus's landmark 2026 publication exploring Oromo cultural identity, ancestral wisdom, and contemporary African literature. You can read a free preview of Chapter 1 or order your hardcover directly via WhatsApp!",
        actions: [
          { label: "📖 Read Chapter 1 Preview", url: "/books" },
          { label: "📲 Order via WhatsApp", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20order%20Ayyaantummaa." }
        ]
      };
    }

    // 4. Dhaloota Mul'ataa / Book 2
    if (q.includes('dhaloota') || q.includes('mul\'ataa') || q.includes('second book') || q.includes('book 2') || q.includes('ደሎታ') || q.includes('2ffaa')) {
      if (currentLang === 'om') {
        return {
          text: "📚 **Kitaaba 2ffaa: 'Dhaloota Mul'ataa':**\nKitaaba lammaffaa Kanenus qopheessaa jiruudha. Dhaloota haaraa mul'ata qabu ijaaruu fi aadaa gabbisuuf kan qophaa'edha. Yeroo ba'u dursitanii beekuuf liistiitti dabalamuu dandeessu!",
          actions: [
            { label: "📚 Fuula Kitaabaa Ilaali", url: "/books" },
            { label: "📲 Dursa Qabadhu", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20pre-order%20Dhaloota%20Mul'ataa." }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: "📚 **ሁለተኛው መጽሐፍ፡ 'ደሎታ ሙልአታ'፦**\nበቀነኑስ እየተዘጋጀ ያለ ሁለተኛው መጽሐፍ ነው። ለአዲሱ ትውልድ ራዕይ እና የባህል ጥበብን የሚያስተምር መጽሐፍ ሲሆን በቅርቡ ይመረቃል።",
          actions: [
            { label: "📚 የመጽሐፉን ገጽ ይመልከቱ", url: "/books" },
            { label: "📲 በWhatsApp ቀድመው ይዘዙ", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20pre-order%20Dhaloota%20Mul'ataa." }
          ]
        };
      }
      return {
        text: "📚 **Book 2: 'Dhaloota Mul'ataa' (Coming Soon • 2ffaa):**\nKanenus's highly anticipated second book dedicated to empowering the emerging generation with cultural consciousness and leadership philosophy.",
        actions: [
          { label: "📚 View Books Page", url: "/books" },
          { label: "📲 Reserve Pre-order via WhatsApp", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20pre-order%20Dhaloota%20Mul'ataa." }
        ]
      };
    }

    // 5. Shanan Gadaa Band / Music
    if (q.includes('music') || q.includes('band') || q.includes('shanan') || q.includes('gadaa') || q.includes('song') || q.includes('muuziqaa') || q.includes('ሙዚቃ') || q.includes('ባንድ')) {
      if (currentLang === 'om') {
        return {
          text: "🎵 **Baandii Shanan Gadaa:**\nBaandii aadaa Oromoo beekamaa Kanenusiin hogganamuudha. Sirboota akka *'Oromiyaa Koo'*, *'Gadaa Mootummaa'*, fi *'Shanan Gadaa'* qaba. Ayyaana aadaa fi waltajjiiwwaniif afeeruun ni danda'ama!",
          actions: [
            { label: "🎵 Giddu-gala Muuziqaa Ilaali", url: "/music" },
            { label: "📲 Baandicha Afeeraa", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20book%20Shanan%20Gadaa%20Band." }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: "🎵 **የሸነን ገዳ ባንድ፦**\nበቀነኑስ ካሳ ባይሳ የሚመራ ተወዳጅ የባህል ሙዚቃ ባንድ ነው። እንደ *'ኦሮሚያ ኮ'*, *'ገዳ ሞቱማ'* የመሳሰሉ ዜማዎች ያሉት ሲሆን ለባህል ዝግጅቶች እና ኮንሰርቶች መጋበዝ ይቻላል!",
          actions: [
            { label: "🎵 የሙዚቃ ማዕከልን ይመልከቱ", url: "/music" },
            { label: "📲 ባንዱን ይጋብዙ", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20book%20Shanan%20Gadaa%20Band." }
          ]
        };
      }
      return {
        text: "🎵 **About Shanan Gadaa Band:**\nDirected by Kanenus Kasa Bayisa, bringing traditional Gadaa rhythms and cultural folk music to audiences worldwide with tracks like *'Oromiyaa Koo'* and *'Gadaa Mootummaa'*.",
        actions: [
          { label: "🎵 Explore Music Hub", url: "/music" },
          { label: "📲 Book the Band via WhatsApp", url: "https://wa.me/251000000000?text=Hello!%20I%20want%20to%20book%20Shanan%20Gadaa%20Band." }
        ]
      };
    }

    // 6. Who is Kanenus / Biography
    if (q.includes('who is') || q.includes('about') || q.includes('bio') || q.includes('eenyu') || q.includes('ማን ነው') || q.includes('ስለ')) {
      if (currentLang === 'om') {
        return {
          text: "👤 **Kanenus Kasa Bayisa Eenyu?**\nBarreessaa ogummaa, Hogganaa Quunnamtii Hawaasaa Waldaa Barreessitoota Oromiyaa, Daarektara Baandii Shanan Gadaa, fi uumaa marsariitii 'Hizbii Keenya'ti (hordoftoota 125K+).",
          actions: [
            { label: "👤 Seenaa Guutuu Ilaali", url: "/about" },
            { label: "📄 CV / Resume", url: "/cv" }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: "👤 **ቀነኑስ ካሳ ባይሳ ማን ነው?**\nደራሲ፣ በኦሮሚያ ጸሐፊዎች ማህበር የህዝብ ግንኙነት ኃላፊ፣ የሸነን ገዳ ባንድ ዳይሬክተር እና ከ125,000 በላይ ተከታዮች ያሉት የ'ሕዝቢ ኬኛ' ዲጂታል መድረክ መስራች ነው።",
          actions: [
            { label: "👤 ሙሉ የህይወት ታሪክ", url: "/about" },
            { label: "📄 የሙያ ዝርዝር (CV)", url: "/cv" }
          ]
        };
      }
      return {
        text: "👤 **About Kanenus Kasa Bayisa:**\nProfessional author, Public Relations Manager at the Oromia Writers Association, Director of the Shanan Gadaa Band, and digital community leader with over 125,000 followers on social media.",
        actions: [
          { label: "👤 Full Biography", url: "/about" },
          { label: "📄 View CV / Resume", url: "/cv" }
        ]
      };
    }

    // 7. Contact / Booking
    if (q.includes('contact') || q.includes('email') || q.includes('social') || q.includes('qunnam') || q.includes('አግኝ') || q.includes('ስልክ')) {
      if (currentLang === 'om') {
        return {
          text: "✉️ **Quunnamtii Uumuuf:**\nKanenus wajjin qunnamtii uumuuf foormii marsariitii keenyaa, WhatsApp, Telegram, yookiin miidiyaa hawaasaa (Facebook, TikTok, YouTube) fayyadamuu dandeessu.",
          actions: [
            { label: "✉️ Fuula Qunnamtii", url: "/contact" },
            { label: "📲 WhatsApp", url: "https://wa.me/251000000000" }
          ]
        };
      }
      if (currentLang === 'am') {
        return {
          text: "✉️ **አድራሻ እና ግንኙነት፦**\nከቀነኑስ ጋር ለመገናኘት የድረ-ገጹን የመልእክት ቅጽ፣ WhatsApp፣ ቴሌግራም ወይም ይፋዊ ማህበራዊ ገጾቹን (ፌስቡክ፣ ቲክቶክ፣ ዩቲዩብ) መጠቀም ይችላሉ።",
          actions: [
            { label: "✉️ የአድራሻ ገጽ", url: "/contact" },
            { label: "📲 WhatsApp", url: "https://wa.me/251000000000" }
          ]
        };
      }
      return {
        text: "✉️ **How to Connect:**\nYou can reach Kanenus and his management team via the official contact page, direct WhatsApp, Telegram, or through his social media channels (Facebook, TikTok, YouTube).",
        actions: [
          { label: "✉️ Contact Form", url: "/contact" },
          { label: "📲 Direct WhatsApp", url: "https://wa.me/251000000000" }
        ]
      };
    }

    // Default Fallback
    if (currentLang === 'om') {
      return {
        text: `Gaaffii keessaniif galatoomaa! Kanenus Kasa Bayisa barreessaa kitaaba **'Ayyaantummaa'**, hogganaa PR, fi qindeessaa Baandii Shanan Gadaati. Marsariitii kana akkamitti akka fayyadamtaniif gaaffii qabdanii?`,
        actions: [
          { label: "🌐 Qajeelfama Marsariitii", query: "Marsariitii kana akkamittiin fayyadama?" },
          { label: "📚 Kitaabota Ilaali", url: "/books" },
          { label: "🎵 Muuziqaa Dhaggeeffadhu", url: "/music" }
        ]
      };
    }
    if (currentLang === 'am') {
      return {
        text: `ስለ ጥያቄዎ እናመሰግናለን! ቀነኑስ ካሳ ባይሳ የ**'አያንቱማ'** መጽሐፍ ደራሲ፣ የሸነን ገዳ ባንድ ዳይሬክተር እና የባህል አምባሳደር ነው። ድረ-ገጹን እንዴት መጠቀም እንደሚቻል ተጨማሪ መረጃ ይፈልጋሉ?`,
        actions: [
          { label: "🌐 የድረ-ገጹ መመሪያ", query: "ይህንን ድረ-ገጽ እንዴት ልጠቀምበት እችላለሁ?" },
          { label: "📚 መጽሐፍትን ይመልከቱ", url: "/books" },
          { label: "🎵 ሙዚቃዎችን ያዳምጡ", url: "/music" }
        ]
      };
    }
    return {
      text: "Thank you for asking! Kanenus Kasa Bayisa is a cultural author (*'Ayyaantummaa'* & *'Dhaloota Mul'ataa'*), PR leader at the Oromia Writers Association, and Director of the Shanan Gadaa Band. Would you like a detailed guide on how to use any section of this site?",
      actions: [
        { label: "🌐 Website Usage Guide", query: "How do I navigate this website?" },
        { label: "📚 Explore Books", url: "/books" },
        { label: "🎵 Music Hub", url: "/music" }
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
