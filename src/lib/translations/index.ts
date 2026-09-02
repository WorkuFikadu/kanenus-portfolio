import { Lang } from '@/components/LangContext';

export interface Translations {
  nav: {
    home: string;
    about: string;
    gallery: string;
    experience: string;
    media: string;
    books: string;
    music: string;
    events: string;
    blog: string;
    login: string;
    dashboard: string;
    logout: string;
    contact: string;
  };
  footer: {
    title: string;
    tagline: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    subscribeBtn: string;
    quickLinks: string;
    socialMedia: string;
    rights: string;
  };
  home: {
    badge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroDesc: string;
    discoverBtn: string;
    publicationsBtn: string;
    followersCount: string;
    followersLabel: string;
    leadershipCount: string;
    leadershipLabel: string;
    booksCount: string;
    booksLabel: string;
    communityCard: string;
    communitySub: string;
    scrollText: string;
    card1Title: string;
    card1Desc: string;
    card1Btn: string;
    card2Title: string;
    card2Desc: string;
    card2Btn: string;
    card3Title: string;
    card3Desc: string;
    card3Btn: string;
    bioBadge: string;
    bioHeading: string;
    bioText1: string;
    bioFullBtn: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    stat4Number: string;
    stat4Label: string;
    booksHeading: string;
    booksSubheading: string;
    b1Title: string;
    b1Sub: string;
    b1Badge: string;
    b1Desc: string;
    b1Btn: string;
    b2Title: string;
    b2Sub: string;
    b2Badge: string;
    b2Desc: string;
    b2Btn: string;
    socialHeading: string;
    socialSub: string;
    galleryHeading: string;
    galleryBtn: string;
    ctaHeading: string;
    ctaSub: string;
    ctaBtn: string;
  };
  books: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    b1Badge: string;
    b1Title: string;
    b1Subtitle: string;
    b1Desc: string;
    orderHardcover: string;
    whatsappOrder: string;
    telegramOrder: string;
    readExcerpt: string;
    closeExcerpt: string;
    chapterHeading: string;
    chapterNote: string;
    b2Badge: string;
    b2Title: string;
    b2Subtitle: string;
    b2Desc: string;
    preorderBtn: string;
    waitlistLabel: string;
    waitlistPlaceholder: string;
    joinWaitlistBtn: string;
    waitlistSuccess: string;
    whyReadHeading: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
  };
  music: {
    badge: string;
    heroTitle: string;
    heroTitleHighlight: string;
    heroDesc: string;
    watchYouTube: string;
    followTikTok: string;
    discographyBadge: string;
    featuredHeading: string;
    membersBadge: string;
    membersHeading: string;
    bookingHeading: string;
    bookingDesc: string;
    bookWhatsApp: string;
    bookInquiry: string;
  };
  about: {
    badge: string;
    heading: string;
    subheading: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    card1Label: string;
    card1Desc: string;
    card2Label: string;
    card2Desc: string;
    card3Label: string;
    card3Desc: string;
    card4Label: string;
    card4Desc: string;
    expertiseHeading: string;
  };
  contact: {
    badge: string;
    heading: string;
    desc: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    typeLabel: string;
    type1: string;
    type2: string;
    type3: string;
    type4: string;
    msgLabel: string;
    msgPlaceholder: string;
    submitBtn: string;
    successMsg: string;
    socialChannels: string;
  };
  dashboard: {
    centerTitle: string;
    liveSync: string;
    tagline: string;
    lightTheme: string;
    royalTheme: string;
    darkTheme: string;
    createPostBtn: string;
    backWebsite: string;
    totalAudience: string;
    mainNav: string;
    tabOverview: string;
    tabCompose: string;
    tabCalendar: string;
    tabInbox: string;
    tabAnalytics: string;
    tabCampaigns: string;
    tabListening: string;
    tabSettings: string;
    connectedChannels: string;
    kpiAudience: string;
    kpiReach: string;
    kpiEngagement: string;
    kpiWatchTime: string;
    quickComposer: string;
    selectTarget: string;
    composerPlaceholder: string;
    publishBtn: string;
    scheduleBtn: string;
    simulatorHeading: string;
  };
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
      experience: 'Experience',
      media: 'Media',
      books: 'Books',
      music: '🎵 Music',
      events: 'Events',
      blog: 'Blog',
      login: 'Login',
      dashboard: 'Dashboard',
      logout: 'Logout',
      contact: 'Contact',
    },
    footer: {
      title: 'Kanenus Kasa Bayisa',
      tagline: 'Professional Author, Public Relations Manager, Cultural Promoter, and Digital Creator dedicated to preserving and elevating African heritage.',
      newsletterTitle: 'Stay in the Loop',
      newsletterDesc: 'Subscribe to receive exclusive announcements on upcoming publications, cultural events, and literary essays from Kanenus.',
      newsletterPlaceholder: 'Enter your email address',
      subscribeBtn: 'Subscribe',
      quickLinks: 'Quick Links',
      socialMedia: 'Social Media',
      rights: '© 2026 Kanenus Kasa Bayisa. All Rights Reserved.',
    },
    home: {
      badge: 'Author • Creator • Cultural Leader',
      heroTitle1: 'Kanenus',
      heroTitle2: 'Kasa Bayisa',
      heroDesc: 'Preserving cultural heritage, shaping modern African literature, and engaging global audiences through storytelling.',
      discoverBtn: 'Discover My Story',
      publicationsBtn: 'Explore Publications',
      followersCount: '125K+',
      followersLabel: 'Followers',
      leadershipCount: '3+',
      leadershipLabel: 'Leadership Roles',
      booksCount: '2',
      booksLabel: 'Published Books',
      communityCard: '125K+ Community',
      communitySub: 'Across Digital Platforms',
      scrollText: 'Scroll',
      card1Title: 'Book a Speaker',
      card1Desc: 'Invite Kanenus for inspiring keynotes on African literature, cultural preservation, and modern storytelling.',
      card1Btn: 'Send Invitation',
      card2Title: 'Publications',
      card2Desc: 'Explore profound literature that bridges ancient traditions and contemporary African society.',
      card2Btn: 'View Books',
      card3Title: 'Media & Press',
      card3Desc: 'Watch recent interviews, television appearances, and discussions on cultural leadership.',
      card3Btn: 'Watch Now',
      bioBadge: 'Who Is Kanenus?',
      bioHeading: 'Cultural Visionary, Literary Pioneer',
      bioText1: 'Kanenus Kasa Bayisa is a distinguished professional writer, PR strategist, and cultural ambassador. As PR Manager of the Oromia Writers Association and Director of the Shanan Gadaa Band, he tirelessly bridges the gap between age-old traditions and modern digital platforms — making culture accessible to the world.',
      bioFullBtn: 'Full Biography',
      stat1Number: '125K+',
      stat1Label: 'Social Media Followers',
      stat2Number: '3+',
      stat2Label: 'Active Leadership Roles',
      stat3Number: '2',
      stat3Label: 'Authored Books',
      stat4Number: '5+',
      stat4Label: 'Years of PR Experience',
      booksHeading: 'Published & Upcoming Books',
      booksSubheading: 'Explore the two major publications authored by Kanenus Kasa Bayisa (Hizbii Keenya).',
      b1Title: 'Ayyaantummaa',
      b1Sub: 'Kitaaba Afaan Oromoo Haaraa',
      b1Badge: 'Official Release 2026',
      b1Desc: 'A landmark publication exploring cultural identity, ancestral values, and the spirit of modern African literature.',
      b1Btn: 'View Book & Excerpt',
      b2Title: "Dhaloota Mul'ataa",
      b2Sub: 'Kitaaba 2ffaa — Second Publication',
      b2Badge: 'Coming Soon • 2ffaa',
      b2Desc: 'A visionary guide for the emerging generation, weaving philosophy and cultural consciousness into future leadership.',
      b2Btn: 'Pre-order / Waitlist',
      socialHeading: 'Join 125,000+ on Social Media',
      socialSub: "Follow Kanenus's cultural journey across Facebook, TikTok, YouTube, Instagram, and Telegram for the latest insights.",
      galleryHeading: 'A Life in Culture',
      galleryBtn: 'View Full Gallery',
      ctaHeading: 'Ready to collaborate or connect?',
      ctaSub: 'Whether you are a publisher, journalist, event organizer, or fellow cultural advocate — Kanenus is ready to hear from you.',
      ctaBtn: 'Get In Touch',
    },
    books: {
      sectionLabel: 'Literature & Publications',
      heading: 'Published & Upcoming Books',
      subheading: 'Explore the literary masterpieces of Kanenus Kasa Bayisa — dedicated to cultural preservation, visionary storytelling, and African literary excellence.',
      b1Badge: 'Official Release 2026',
      b1Title: 'Ayyaantummaa',
      b1Subtitle: 'Kitaaba Afaan Oromoo Haaraa',
      b1Desc: '"Ayyaantummaa" stands as a cornerstone of Kanenus\'s literary portfolio. This profound publication delves into cultural themes, exploring the intricacies of identity, tradition, and modernity. Written with the precision of a professional author and the passion of a cultural promoter, it offers readers an immersive journey into the heart of African societal values.',
      orderHardcover: 'Order Hardcover',
      whatsappOrder: '📲 Order via WhatsApp',
      telegramOrder: '✈️ Order via Telegram',
      readExcerpt: '📖 Read Chapter 1 Preview',
      closeExcerpt: 'Close Preview',
      chapterHeading: 'Chapter 1: Ganama Qilleensa',
      chapterNote: '— Continue reading in the full published edition of Ayyaantummaa',
      b2Badge: 'Coming Soon • 2ffaa',
      b2Title: "Dhaloota Mul'ataa",
      b2Subtitle: 'Kitaaba 2ffaa — Second Publication',
      b2Desc: '"Dhaloota Mul\'ataa" is Kanenus Kasa Bayisa\'s highly anticipated second major book. A visionary work dedicated to the emerging generation, it weaves profound philosophy, cultural consciousness, and personal empowerment into an unforgettable guide for future leaders.',
      preorderBtn: 'Reserve Copy via WhatsApp',
      waitlistLabel: 'Get Release Date Notification:',
      waitlistPlaceholder: 'Enter your email address',
      joinWaitlistBtn: 'Join Waitlist',
      waitlistSuccess: "✓ You're registered for the Dhaloota Mul'ataa release alert!",
      whyReadHeading: "Why Read Kanenus's Books?",
      f1Title: 'Authentic Cultural Voice',
      f1Desc: 'Rooted directly in living Oromo heritage and African philosophy, presenting authentic narratives rarely captured in contemporary literature.',
      f2Title: 'Visionary & Philosophical',
      f2Desc: 'Explores generational identity, destiny, and societal progress with inspiring depth that sparks intellectual growth.',
      f3Title: 'Award-Standard Prose',
      f3Desc: 'Celebrated by readers and the Oromia Writers Association for literary excellence and community impact.',
    },
    music: {
      badge: 'Shanan Gadaa Band',
      heroTitle: 'Cultural',
      heroTitleHighlight: 'Music Hub',
      heroDesc: 'Where ancient Gadaa rhythms meet modern expression — preserving and broadcasting Oromo cultural heritage through music.',
      watchYouTube: 'Watch on YouTube',
      followTikTok: 'Follow on TikTok',
      discographyBadge: 'Discography',
      featuredHeading: 'Featured Cultural Tracks',
      membersBadge: 'The Artists',
      membersHeading: 'Shanan Gadaa Band Members',
      bookingHeading: 'Book the Shanan Gadaa Band',
      bookingDesc: 'Available for cultural festivals, academic events, state ceremonies, and diaspora gatherings worldwide.',
      bookWhatsApp: '📲 Book via WhatsApp',
      bookInquiry: 'Send Booking Inquiry',
    },
    about: {
      badge: 'Biography',
      heading: 'The Voice Behind the Words',
      subheading: 'Cultural ambassador, literary pioneer, and digital community builder',
      p1: 'Kanenus Kasa Bayisa is a distinguished professional writer, cultural ambassador, and creative leader dedicated to the elevation of African heritage. Operating at the intersection of literature, public relations, and digital media, Kanenus captures the essence of cultural identity while addressing contemporary themes.',
      p2: 'As the Public Relations Manager at the Oromia Writers Association, he orchestrates strategic communications, fostering institutional partnerships and advocating for emerging authors on national and international stages.',
      p3: 'Beyond literature, Kanenus guides the artistic vision of the Shanan Gadaa Band as its Director. Under his leadership, the ensemble serves as a dynamic vehicle for cultural expression, utilizing traditional melodies to inspire audiences across generations.',
      p4: 'Through his digital platform Hizbii Keenya, Kanenus has built an extraordinary online community of over 125,000 active followers across Facebook and TikTok — proving that cultural promotion and modern technology can coexist powerfully.',
      card1Label: 'Active Followers',
      card1Desc: 'Digital Community',
      card2Label: 'PR Manager',
      card2Desc: 'Oromia Writers Assoc.',
      card3Label: 'Director',
      card3Desc: 'Shanan Gadaa Band',
      card4Label: 'Author',
      card4Desc: '2 Published Books',
      expertiseHeading: 'Core Areas of Expertise',
    },
    contact: {
      badge: 'Inquiries',
      heading: 'Connect With Kanenus',
      desc: 'Available for media interviews, speaking engagements, literary collaborations, and strategic partnerships.',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. Abebe Bikila',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@example.com',
      typeLabel: 'Type of Inquiry',
      type1: 'Literary & Book Inquiry',
      type2: 'Speaking Engagement / Keynote',
      type3: 'Shanan Gadaa Band Booking',
      type4: 'Media Interview & Press',
      msgLabel: 'Your Message',
      msgPlaceholder: 'Please describe your request in detail...',
      submitBtn: 'Send Message',
      successMsg: "✓ Thank you! Your message has been sent. Kanenus's team will respond shortly.",
      socialChannels: 'Or Connect Across Official Channels',
    },
    dashboard: {
      centerTitle: 'Social Command Center',
      liveSync: 'Live Sync',
      tagline: 'Kanenus Kasa Bayisa • Multi-Channel Management Suite',
      lightTheme: '☀️ Light',
      royalTheme: '👑 Royal',
      darkTheme: '🌙 Dark',
      createPostBtn: 'Create Post',
      backWebsite: '← Back to Public Website',
      totalAudience: '158K Total Audience',
      mainNav: 'Main Navigation',
      tabOverview: 'Executive Overview',
      tabCompose: 'Omnichannel Studio',
      tabCalendar: 'Content Calendar',
      tabInbox: 'Community Inbox',
      tabAnalytics: 'Audience Intelligence',
      tabCampaigns: 'Active Campaigns',
      tabListening: 'Brand Mentions',
      tabSettings: 'Accounts & API Hub',
      connectedChannels: 'Connected Channels',
      kpiAudience: 'Total Audience',
      kpiReach: '30-Day Reach',
      kpiEngagement: 'Avg. Engagement',
      kpiWatchTime: 'Video Watch Time',
      quickComposer: 'Omnichannel Post Composer',
      selectTarget: 'Select Target Channels',
      composerPlaceholder: 'Share cultural wisdom, announce upcoming books, or post media updates across all platforms...',
      publishBtn: 'Broadcast Now',
      scheduleBtn: 'Schedule Post',
      simulatorHeading: 'Real-Time Device Simulator',
    },
  },

  om: {
    nav: {
      home: 'Mana',
      about: "Waa'ee",
      gallery: 'Suuraa',
      experience: 'Muuxannoo',
      media: 'Miidiyaa',
      books: 'Kitaaba',
      music: '🎵 Muuziqaa',
      events: 'Sagantaa',
      blog: 'Blog',
      login: 'Seeni',
      dashboard: 'Daashboordii',
      logout: "Ba'i",
      contact: 'Qunnamii',
    },
    footer: {
      title: 'Kanenus Kasa Bayisa',
      tagline: 'Barreessaa Ogummaa, Hogganaa Quunnamtii Hawaasaa Waldaa Barreessitoota Oromiyaa, fi Qindeessaa Aadaa.',
      newsletterTitle: 'Hordofaa',
      newsletterDesc: 'Maxxansaalee haaraa, sagantaalee aadaa, fi barreeffamoota Kanenus dursitanii argachuuf galmaa\'aa.',
      newsletterPlaceholder: 'Imeelii keessan galchaa',
      subscribeBtn: "Galmaa'i",
      quickLinks: 'Liinkiiwwan Ariifachiisoo',
      socialMedia: 'Miidiyaa Hawaasaa',
      rights: '© 2026 Kanenus Kasa Bayisa. Mirgi Qopheessaa Seeraan Kan Eegameedha.',
    },
    home: {
      badge: 'Barreessaa • Uumaa • Hogganaa Aadaa',
      heroTitle1: 'Kanenus',
      heroTitle2: 'Kasa Bayisa',
      heroDesc: "Aadaa dhalootaa eeguu, ogbarruu Afrikaa ammayyaa bocuu, fi seenaa hawaasaa addunyaatti beeksisuu.",
      discoverBtn: 'Seenaa Koo Baradhu',
      publicationsBtn: 'Kitaabota Ilaalaa',
      followersCount: '125K+',
      followersLabel: 'Hordoftoota',
      leadershipCount: '3+',
      leadershipLabel: 'Gahee Hojii',
      booksCount: '2',
      booksLabel: 'Kitaabota Maxxanfaman',
      communityCard: 'Hawaasa 125K+',
      communitySub: 'Miidiyaalee Hundarratti',
      scrollText: 'Gadi Bu\'aa',
      card1Title: 'Walgahii Aadaa',
      card1Desc: "Walgahii, leenjii, fi sagantaalee ogbarruu irratti Kanenus afeeraa.",
      card1Btn: 'Afeerraa Ergaa',
      card2Title: 'Kitaabota',
      card2Desc: 'Ogbarruu aadaa fi ammayyummaa wal-simsiisan dubbisaa.',
      card2Btn: 'Kitaabota Ilaali',
      card3Title: 'Miidiyaa & Gaaf-deebii',
      card3Desc: 'Gaaf-deebiiwwan televijiinii fi qophiilee aadaa hordofaa.',
      card3Btn: 'Amma Daawwadhaa',
      bioBadge: 'Kanenus Eenyu?',
      bioHeading: 'Hogganaa Aadaa, Qajeelchaa Ogbarruu',
      bioText1: 'Kanenus Kasa Bayisa barreessaa ogummaa, ogeessa quunnamtii hawaasaa, fi ergamaa aadaati. Hogganaa Quunnamtii Hawaasaa Waldaa Barreessitoota Oromiyaa fi Daarektara Baandii Shanan Gadaati.',
      bioFullBtn: 'Seenaa Guutuu',
      stat1Number: '125K+',
      stat1Label: 'Hordoftoota Miidiyaa',
      stat2Number: '3+',
      stat2Label: 'Gahee Hojii Hawaasummaa',
      stat3Number: '2',
      stat3Label: 'Kitaabota Maxxanfaman',
      stat4Number: '5+',
      stat4Label: 'Waggaa Muuxannoo PR',
      booksHeading: 'Kitaabota Maxxanfamanii fi Dhufan',
      booksSubheading: 'Hojiiwwan barreeffamaa Kanenus Kasa Bayisa (Hizbii Keenya) ilaalaa.',
      b1Title: 'Ayyaantummaa',
      b1Sub: 'Kitaaba Afaan Oromoo Haaraa',
      b1Badge: 'Maxxansa Haaraa 2026',
      b1Desc: "Aadaa, eenyummaa, fi falaasama hawaasaa gadi fageenyaan kan xiinxalu kitaaba boonsaa.",
      b1Btn: 'Ilaali & Boqonnaa 1 Dubbisi',
      b2Title: "Dhaloota Mul'ataa",
      b2Sub: 'Kitaaba 2ffaa — Maxxansa Lammaffaa',
      b2Badge: 'Dhufuuf Jira • 2ffaa',
      b2Desc: "Kitaaba lammaffaa dhaloota haaraa mul'ata qabu ijaaruuf qophaa'aa jiru.",
      b2Btn: 'WhatsApp irratti Qabadhu',
      socialHeading: 'Hawaasa 125,000+tti Dabalamaa',
      socialSub: "Facebook, TikTok, YouTube, Instagram, fi Telegram irratti nu hordofaa.",
      galleryHeading: 'Jireenya Aadaa Keessaa',
      galleryBtn: 'Suuraalee Hundaa Ilaali',
      ctaHeading: 'Wal-wajjiin hojjachuuf qophiidhaa?',
      ctaSub: 'Maxxansitoota, gaazexeesitoota, fi qindeessitoota sagantaatiif Kanenus qophiidha.',
      ctaBtn: 'Nu Qunnamaa',
    },
    books: {
      sectionLabel: 'Ogbarruu & Maxxansawwan',
      heading: 'Kitaabota Maxxanfamanii fi Dhufan',
      subheading: "Hojii barreeffamaa Kanenus Kasa Bayisa — maxxansa hundi aadaa fi ogummaa isaa mirkaneessa.",
      b1Badge: 'Maxxansa Haaraa 2026',
      b1Title: 'Ayyaantummaa',
      b1Subtitle: 'Kitaaba Afaan Oromoo Haaraa',
      b1Desc: '"Ayyaantummaan" hojii barreeffamaa Kanenus Kasa Bayisaa keessatti bakka guddaa qaba. Maxxansi kun aadaa, eenyummaa, fi falaasama hawaasaa gadi fageenyaan xiinxala. Dhalootaaf qabeenya guddaa kan ta\'e kitaabni kun ergaa seenaa fi aadaa Oromoo bal\'inaan qabateera.',
      orderHardcover: 'Hardcover Bitadhu',
      whatsappOrder: '📲 WhatsApp irratti Bitadhu',
      telegramOrder: '✈️ Telegram irratti Bitadhu',
      readExcerpt: '📖 Boqonnaa 1 Dubbisi',
      closeExcerpt: 'Cufi',
      chapterHeading: 'Boqonnaa 1: Ganama Qilleensa',
      chapterNote: '— Fuula hafe kitaaba Ayyaantummaa maxxansa guutuu keessatti argattu',
      b2Badge: 'Dhufuuf Jira • 2ffaa',
      b2Title: "Dhaloota Mul'ataa",
      b2Subtitle: 'Kitaaba 2ffaa — Kaanenus Kaasaa Baayisaa',
      b2Desc: '"Dhaloota Mul\'ataa" kitaaba lammaffaa Kanenus Kasa Bayisaatiin qophaa\'aa jiruudha. Kitaabni kun dhaloota haaraa mul\'ata qabu ijaaruu, aadaa fi ammayyummaa wal-simsiisuu, fi dhaloota gara fuulduraatti deemsisuuf gumaacha olaanaa qaba.',
      preorderBtn: 'WhatsApp irratti Qabadhu',
      waitlistLabel: 'Beeksisa Jalqabaa Argachuuf:',
      waitlistPlaceholder: 'Imeelii keessan galchaa',
      joinWaitlistBtn: 'Liistiitti Dabalami',
      waitlistSuccess: "✓ Galmooftaniittu! Yeroo Dhaloota Mul'ataan ba'u isin beeksifna.",
      whyReadHeading: 'Maaliif Kitaabota Kanenus Dubbiftu?',
      f1Title: 'Sagalee Aadaa Dhugaa',
      f1Desc: 'Handhuura aadaa fi seenaa Oromoo keessaa kan madde, ergaa qabatamaa fi dhugaa ta\'e qabata.',
      f2Title: 'Mul\'ata fi Falaasama',
      f2Desc: 'Eenyummaa dhalootaa fi adeemsa fuulduraa gadi fageenyaan xiinxaluun sammuu namaa bal\'isa.',
      f3Title: 'Qulqullina Ogbarruu',
      f3Desc: 'Waldaa Barreessitoota Oromiyaa fi dubbistoota biratti beekamtii fi jaalala guddaa kan horate.',
    },
    music: {
      badge: 'Baandii Shanan Gadaa',
      heroTitle: 'Giddu-gala',
      heroTitleHighlight: 'Muuziqaa Aadaa',
      heroDesc: 'Rukuttaan Gadaa durii ammayyummaa wajjin wal simatee — aadaa Oromoo muuziqaan addunyaatti beeksisna.',
      watchYouTube: 'YouTube irratti Daawwadhaa',
      followTikTok: 'TikTok irratti Hordofaa',
      discographyBadge: 'Sirboota',
      featuredHeading: 'Sirboota Filataman',
      membersBadge: 'Artisoota',
      membersHeading: 'Miseensota Baandii Shanan Gadaa',
      bookingHeading: 'Baandii Shanan Gadaa Afeeraa',
      bookingDesc: 'Ayyaana aadaa, cidha, sagantaalee barnootaa, fi waltajjiiwwan addunyaatiif qophiidha.',
      bookWhatsApp: '📲 WhatsApp irratti Afeeraa',
      bookInquiry: 'Afeerraa Ergaa',
    },
    about: {
      badge: 'Seenaa Jireenyaa',
      heading: 'Sagalee Jechoota Duubaa',
      subheading: 'Dhaabbata aadaa, qajeelchaa ogbarruu, fi ijaaraa hawaasa digitaalaa',
      p1: 'Kanenus Kasa Bayisa barreessaa ogummaa, ergamaa aadaa, fi hogganaa uumamaati. Ogbarruu, quunnamtii hawaasaa, fi miidiyaa digitaalaa wal-simsiisuun eenyummaa aadaa eega.',
      p2: 'Hogganaa Quunnamtii Hawaasaa Waldaa Barreessitoota Oromiyaa ta\'uun quunnamtii dhaabbilee cimsuu fi barreessitoota haaraa gargaaruu irratti hojjata.',
      p3: 'Daarektara Baandii Shanan Gadaa ta\'uun aadaa Oromoo muuziqaa aadaatiin dhaloota haaraaf dhiheessa.',
      p4: 'Marsariitii Hizbii Keenyaa jedhuun hordoftoota 125,000 ol Facebook fi TikTok irratti ijaareera.',
      card1Label: 'Hordoftoota',
      card1Desc: 'Hawaasa Digitaalaa',
      card2Label: 'Hogganaa PR',
      card2Desc: 'Waldaa Barreessitoota',
      card3Label: 'Daarektara',
      card3Desc: 'Baandii Shanan Gadaa',
      card4Label: 'Barreessaa',
      card4Desc: 'Kitaabota 2 Maxxanse',
      expertiseHeading: 'Ogummaa fi Dandeettii',
    },
    contact: {
      badge: 'Gaaffiiwwan',
      heading: 'Kanenus Wajjin Quunnamaa',
      desc: 'Gaaf-deebii miidiyaa, haasawa beekamtii, sagantaalee ogbarruu, fi wal-ta\'iinsaaf qophiidha.',
      nameLabel: 'Maqaa Guutuu',
      namePlaceholder: 'Fkn: Caalaa Bultum',
      emailLabel: 'Teessoo Imeelii',
      emailPlaceholder: 'you@example.com',
      typeLabel: 'Gosa Gaaffii',
      type1: 'Waa\'ee Kitaabaa & Ogbarruu',
      type2: 'Haasawa / Sagantaa irratti Afeeruu',
      type3: 'Baandii Shanan Gadaa Afeeruu',
      type4: 'Gaaf-deebii Miidiyaa',
      msgLabel: 'Ergaa Keessan',
      msgPlaceholder: 'Ergaa keessan bal\'inaan barreessaa...',
      submitBtn: 'Ergaa Ergi',
      successMsg: '✓ Galatoomaa! Ergaan keessan darbeera. Gareen Kanenus dafee isin qunnama.',
      socialChannels: 'Yookiin Karaa Fuulawwan Kanaan Nu Qunnamaa',
    },
    dashboard: {
      centerTitle: 'Giddu-gala Ajaja Miidiyaa',
      liveSync: 'Wal-simannaa Qulqulluu',
      tagline: 'Kanenus Kasa Bayisa • Qindeessaa Miidiyaa Hawaasaa Hunda',
      lightTheme: '☀️ Ifaa',
      royalTheme: '👑 Rooyaal',
      darkTheme: '🌙 Dukkana',
      createPostBtn: 'Maxxansa Haaraa',
      backWebsite: '← Gara Weebsaayitii Deebi\'i',
      totalAudience: 'Hawaasa 158K Waliigalaa',
      mainNav: 'Kallattii Hojii',
      tabOverview: 'Ilaalcha Waliigalaa',
      tabCompose: 'Istuudiyoo Maxxansaa',
      tabCalendar: 'Kalaandarii Qophii',
      tabInbox: 'Qulqulleessaa Yaadaa',
      tabAnalytics: 'Xiinxala Hawaasaa',
      tabCampaigns: 'Duula Hojii',
      tabListening: 'Ilaalcha Maqaa',
      tabSettings: 'Qindaa\'ina & API',
      connectedChannels: 'Fuulawwan Wal-qabatan',
      kpiAudience: 'Hawaasa Waliigalaa',
      kpiReach: 'Dhaqqabamummaa Guyyaa 30',
      kpiEngagement: 'Hirmaannaa Giddu-galeessaa',
      kpiWatchTime: 'Sa\'aatii Daawwannaa',
      quickComposer: 'Istuudiyoo Maxxansa Miidiyaa Hundaa',
      selectTarget: 'Miidiyaalee Maxxansaa Filadhu',
      composerPlaceholder: 'Odeeffannoo aadaa, beeksisa kitaabaa, fi ergaawwan adda addaa miidiyaa hundarratti maxxansaa...',
      publishBtn: 'Amma Maxxansi',
      scheduleBtn: 'Yeroo Qabiif',
      simulatorHeading: 'Ilaalcha Bilbilaa fi Moobaayilii',
    },
  },

  am: {
    nav: {
      home: 'ዋና ገጽ',
      about: 'ስለ እኔ',
      gallery: 'ፎቶዎች',
      experience: 'ልምድ',
      media: 'ሚዲያ',
      books: 'መጽሐፍት',
      music: '🎵 ሙዚቃ',
      events: 'ክስተቶች',
      blog: 'ብሎግ',
      login: 'ግባ',
      dashboard: 'ዳሽቦርድ',
      logout: 'ውጣ',
      contact: 'አግኙኝ',
    },
    footer: {
      title: 'ቀነኑስ ካሳ ባይሳ',
      tagline: 'ደራሲ፣ የሕዝብ ግንኙነት ባለሙያ፣ የባህል አምባሳደር እና የዲጂታል ይዘት ፈጣሪ።',
      newsletterTitle: 'አዳዲስ መረጃዎችን ያግኙ',
      newsletterDesc: 'ስለሚቀጥሉት መጽሐፍት፣ የባህል ዝግጅቶች እና ጽሑፎች ቀድመው ለማወቅ ይመዝገቡ።',
      newsletterPlaceholder: 'የኢሜል አድራሻዎን ያስገቡ',
      subscribeBtn: 'ተመዝገብ',
      quickLinks: 'ፈጣን ማያያዣዎች',
      socialMedia: 'ማህበራዊ ሚዲያ',
      rights: '© 2026 ቀነኑስ ካሳ ባይሳ። መብቱ በሕግ የተጠበቀ ነው።',
    },
    home: {
      badge: 'ደራሲ • ፈጣሪ • የባህል መሪ',
      heroTitle1: 'ቀነኑስ',
      heroTitle2: 'ካሳ ባይሳ',
      heroDesc: 'የባህል ቅርሶችን መጠበቅ፣ ዘመናዊ የአፍሪካ ሥነ ጽሑፍን መቅረጽ እና ታሪኮችን ለአለም ማካፈል።',
      discoverBtn: 'ታሪኬን ይወቁ',
      publicationsBtn: 'መጽሐፍትን ያስሱ',
      followersCount: '125ሺ+',
      followersLabel: 'ተከታዮች',
      leadershipCount: '3+',
      leadershipLabel: 'የአመራር ሚናዎች',
      booksCount: '2',
      booksLabel: 'የታተሙ መጽሐፍት',
      communityCard: '125ሺ+ ማህበረሰብ',
      communitySub: 'በሁሉም ዲጂታል መድረኮች',
      scrollText: 'ወደ ታች ይሸብልሉ',
      card1Title: 'ተናጋሪ ይጋብዙ',
      card1Desc: 'በአፍሪካ ሥነ ጽሑፍ፣ የባህል ጥበቃ እና ዘመናዊ የታሪክ አተረካክ ዙሪያ ቀነኑስን ይጋብዙ።',
      card1Btn: 'ግብዣ ላክ',
      card2Title: 'የታተሙ ሥራዎች',
      card2Desc: 'ጥንታዊ ወጎችን እና ዘመናዊ ማህበረሰብን የሚያገናኙ ጥልቅ ሥራዎችን ያንብቡ።',
      card2Btn: 'መጽሐፍትን ይመልከቱ',
      card3Title: 'ሚዲያ እና ቃለ መጠይቅ',
      card3Desc: 'የቴሌቪዥን ዝግጅቶችን እና የባህል ውይይቶችን ይከታተሉ።',
      card3Btn: 'አሁን ይመልከቱ',
      bioBadge: 'ቀነኑስ ማን ነው?',
      bioHeading: 'የባህል መሪ፣ የስነ-ጽሑፍ ፈር ቀዳጅ',
      bioText1: 'ቀነኑስ ካሳ ባይሳ ታዋቂ ደራሲ፣ የሕዝብ ግንኙነት ስትራቴጂስት እና የባህል አምባሳደር ነው። በኦሮሚያ ጸሐፊዎች ማህበር የሕዝብ ግንኙነት ኃላፊ እና የሸነን ገዳ ባንድ ዳይሬክተር ሆኖ ያገለግላል።',
      bioFullBtn: 'ሙሉ የሕይወት ታሪክ',
      stat1Number: '125ሺ+',
      stat1Label: 'የማህበራዊ ሚዲያ ተከታዮች',
      stat2Number: '3+',
      stat2Label: 'ንቁ የአመራር ሚናዎች',
      stat3Number: '2',
      stat3Label: 'የተጻፉ መጽሐፍት',
      stat4Number: '5+',
      stat4Label: 'ዓመታት የPR ልምድ',
      booksHeading: 'የታተሙ እና በቅርብ የሚወጡ መጽሐፍት',
      booksSubheading: 'በቀነኑስ ካሳ ባይሳ (ሕዝቢ ኬኛ) የተጻፉ ዋና ሥራዎችን ይመልከቱ።',
      b1Title: 'አያንቱማ (Ayyaantummaa)',
      b1Sub: 'አዲስ የአፋን ኦሮሞ መጽሐፍ',
      b1Badge: 'ኦፊሴላዊ እትም 2026',
      b1Desc: 'የማንነት፣ የባህል እሴቶች እና ዘመናዊ የአፍሪካ ሥነ ጽሑፍን የሚዳስስ ድንቅ መጽሐፍ።',
      b1Btn: 'መጽሐፉን እና ምዕራፍ 1ን ይመልከቱ',
      b2Title: "ደሎታ ሙልአታ (Dhaloota Mul'ataa)",
      b2Sub: 'ሁለተኛ መጽሐፍ — በቅርብ ቀን',
      b2Badge: 'በቅርብ ቀን • 2ኛ',
      b2Desc: 'ለአዲሱ ትውልድ ራዕይ፣ ፍልስፍና እና አመራር የሚያስተምር ተወዳጅ መጽሐፍ።',
      b2Btn: 'በWhatsApp ይዘዙ / ይመዝገቡ',
      socialHeading: 'ከ125,000+ ማህበረሰብ ጋር ይቀላቀሉ',
      socialSub: 'በፌስቡክ፣ ቲክቶክ፣ ዩቲዩብ፣ ኢንስታግራም እና ቴሌግራም ይከታተሉን።',
      galleryHeading: 'የባህል ሕይወት በምስል',
      galleryBtn: 'ሙሉ ፎቶዎችን ይመልከቱ',
      ctaHeading: 'አብሮ ለመስራት ዝግጁ ነዎት?',
      ctaSub: 'አታሚዎች፣ ጋዜጠኞች እና የባህል አዘጋጆች ከቀነኑስ ጋር ለመገናኘት ዝግጁ ናቸው።',
      ctaBtn: 'ያነጋግሩን',
    },
    books: {
      sectionLabel: 'ሥነ ጽሑፍ እና መጽሐፍት',
      heading: 'የታተሙ እና የሚወጡ መጽሐፍት',
      subheading: 'የቀነኑስ ካሳ ባይሳን ድንቅ የስነ-ጽሑፍ ስራዎች ያስሱ — ለባህል ጥበቃ እና ለአፍሪካ ስነ-ጽሑፍ እድገት የተዘጋጁ።',
      b1Badge: 'ኦፊሴላዊ እትም 2026',
      b1Title: 'አያንቱማ (Ayyaantummaa)',
      b1Subtitle: 'አዲስ የአፋን ኦሮሞ መጽሐፍ',
      b1Desc: '"አያንቱማ" የቀነኑስ ዋና የስነ-ጽሑፍ ስራ ነው። ይህ ጥልቅ መጽሐፍ የማንነት፣ የባህል እና የዘመናዊነት ጭብጦችን ይመረምራል። ለአንባቢዎች የአፍሪካን ማህበራዊ እሴቶች ውበት ያስቃኛል።',
      orderHardcover: 'መጽሐፉን ይዘዙ',
      whatsappOrder: '📲 በWhatsApp ይዘዙ',
      telegramOrder: '✈️ በTelegram ይዘዙ',
      readExcerpt: '📖 ምዕራፍ 1ን ያንብቡ',
      closeExcerpt: 'ዝጋ',
      chapterHeading: 'ምዕራፍ 1፡ ገነመ ቂሌንሳ (Ganama Qilleensa)',
      chapterNote: '— ቀሪውን ክፍል ሙሉው የታተመው አያንቱማ መጽሐፍ ውስጥ ያገኛሉ',
      b2Badge: 'በቅርብ ቀን • 2ኛ',
      b2Title: "ደሎታ ሙልአታ (Dhaloota Mul'ataa)",
      b2Subtitle: 'ሁለተኛ መጽሐፍ — ቀነኑስ ካሳ ባይሳ',
      b2Desc: '"ደሎታ ሙልአታ" በቀነኑስ ካሳ ባይሳ እየተዘጋጀ ያለ ሁለተኛው ትልቅ መጽሐፍ ነው። ራዕይ ያለው አዲስ ትውልድ ለመገንባት እና ባህልን ከዘመናዊነት ጋር ለማስተሳሰር ትልቅ ድርሻ አለው።',
      preorderBtn: 'በWhatsApp ቀድመው ይዘዙ',
      waitlistLabel: 'የሚወጣበትን ቀን መረጃ ለማግኘት:',
      waitlistPlaceholder: 'የኢሜል አድራሻዎን ያስገቡ',
      joinWaitlistBtn: 'ይመዝገቡ',
      waitlistSuccess: '✓ ተመዝግበዋል! መጽሐፉ ሲወጣ ወዲያውኑ እናሳውቆታለን።',
      whyReadHeading: 'የቀነኑስን መጽሐፍት ለምን ያነባሉ?',
      f1Title: 'እውነተኛ የባህል ድምፅ',
      f1Desc: 'ከኦሮሞ ባህል እና ከአፍሪካ ፍልስፍና በቀጥታ የተቀዳ እውነተኛ ታሪክ።',
      f2Title: 'ራዕይ እና ጥልቅ ፍልስፍና',
      f2Desc: 'የትውልድን ማንነት እና የወደፊት ጉዞ በጥልቀት በመመርመር አእምሮን የሚያነቃቃ።',
      f3Title: 'ከፍተኛ የስነ-ጽሑፍ ጥራት',
      f3Desc: 'በኦሮሚያ ጸሐፊዎች ማህበር እና በአንባቢዎች ዘንድ ከፍተኛ አድናቆትን ያተረፈ።',
    },
    music: {
      badge: 'የሸነን ገዳ ባንድ',
      heroTitle: 'የባህል',
      heroTitleHighlight: 'ሙዚቃ ማዕከል',
      heroDesc: 'ጥንታዊ የገዳ ዜማዎች ከዘመናዊ ሙዚቃ ጋር የሚዋሃዱበት — የኦሮሞ ባህል በሙዚቃ ለአለም የሚቀርብበት።',
      watchYouTube: 'በYouTube ይመልከቱ',
      followTikTok: 'በTikTok ይከታተሉ',
      discographyBadge: 'ዘፈኖች',
      featuredHeading: 'ተወዳጅ የባህል ሙዚቃዎች',
      membersBadge: 'አርቲስቶች',
      membersHeading: 'የሸነን ገዳ ባንድ አባላት',
      bookingHeading: 'የሸነን ገዳ ባንድን ይጋብዙ',
      bookingDesc: 'ለባህል ፌስቲቫሎች፣ ለአካዳሚክ ዝግጅቶች እና ለአለም አቀፍ መድረኮች ዝግጁ ነው።',
      bookWhatsApp: '📲 በWhatsApp ይጋብዙ',
      bookInquiry: 'የግብዣ ጥያቄ ላክ',
    },
    about: {
      badge: 'የሕይወት ታሪክ',
      heading: 'ከቃላቱ ጀርባ ያለው ድምፅ',
      subheading: 'የባህል አምባሳደር፣ የስነ-ጽሑፍ ፈር ቀዳጅ እና የዲጂታል ማህበረሰብ ገንቢ',
      p1: 'ቀነኑስ ካሳ ባይሳ የአፍሪካን ቅርስ ለማሳደግ የቆረጠ ታዋቂ ደራሲ፣ የባህል አምባሳደር እና ፈጣሪ ነው። በስነ-ጽሑፍ፣ በህዝብ ግንኙነት እና በዲጂታል ሚዲያ አማካኝነት የባህል ማንነትን ይጠብቃል።',
      p2: 'በኦሮሚያ ጸሐፊዎች ማህበር የሕዝብ ግንኙነት ኃላፊ በመሆን ተቋማዊ ግንኙነቶችን በማጠናከር እና አዳዲስ ደራሲያንን በመደገፍ ላይ ይገኛል።',
      p3: 'የሸነን ገዳ ባንድ ዳይሬክተር ሆኖ ባህላዊ ዜማዎችን በመጠቀም ትውልድን የሚያነቃቁ የሙዚቃ ስራዎችን ይመራል።',
      p4: 'በሕዝቢ ኬኛ ዲጂታል መድረክ ከ125,000 በላይ ተከታዮችን በፌስቡክ እና ቲክቶክ በማፍራት የባህል ማስተዋወቅ እና ቴክኖሎጂ አብረው መሄድ እንደሚችሉ አሳይቷል።',
      card1Label: 'ተከታዮች',
      card1Desc: 'ዲጂታል ማህበረሰብ',
      card2Label: 'የPR ኃላፊ',
      card2Desc: 'የኦሮሚያ ጸሐፊዎች ማህበር',
      card3Label: 'ዳይሬክተር',
      card3Desc: 'የሸነን ገዳ ባንድ',
      card4Label: 'ደራሲ',
      card4Desc: '2 መጽሐፍት የታተሙ',
      expertiseHeading: 'ዋና የልህቀት መስኮች',
    },
    contact: {
      badge: 'ጥያቄዎች',
      heading: 'ከቀነኑስ ጋር ይገናኙ',
      desc: 'ለሚዲያ ቃለ-መጠይቆች፣ ለንግግር መድረኮች፣ ለስነ-ጽሑፍ ትብብር እና ለአጋርነት ዝግጁ ነው።',
      nameLabel: 'ሙሉ ስምዎ',
      namePlaceholder: 'ምሳሌ፡ አበበ ቢቂላ',
      emailLabel: 'የኢሜል አድራሻ',
      emailPlaceholder: 'you@example.com',
      typeLabel: 'የጥያቄው ዓይነት',
      type1: 'የመጽሐፍ እና የስነ-ጽሑፍ ጥያቄ',
      type2: 'የንግግር መድረክ ግብዣ',
      type3: 'የሸነን ገዳ ባንድ ግብዣ',
      type4: 'የሚዲያ ቃለ-መጠይቅ',
      msgLabel: 'መልእክትዎ',
      msgPlaceholder: 'መልእክትዎን በዝርዝር ይፃፉ...',
      submitBtn: 'መልእክት ላክ',
      successMsg: '✓ እናመሰግናለን! መልእክትዎ ደርሷል። የቀነኑስ ቡድን በቅርቡ ያነጋግሮታል።',
      socialChannels: 'ወይም በይፋዊ ማህበራዊ ገጾቻችን ያግኙን',
    },
    dashboard: {
      centerTitle: 'የማህበራዊ ሚዲያ ማዕከል',
      liveSync: 'ቀጥታ ግንኙነት',
      tagline: 'ቀነኑስ ካሳ ባይሳ • የሁሉንም ማህበራዊ ገጾች አስተዳደር',
      lightTheme: '☀️ ብሩህ',
      royalTheme: '👑 ሮያል',
      darkTheme: '🌙 ጨለማ',
      createPostBtn: 'አዲስ ፖስት ፍጠር',
      backWebsite: '← ወደ ድረ-ገጹ ተመለስ',
      totalAudience: '158ሺ+ ጠቅላላ ተከታዮች',
      mainNav: 'ዋና አሰሳ',
      tabOverview: 'አጠቃላይ እይታ',
      tabCompose: 'የፖስት ስቱዲዮ',
      tabCalendar: 'የይዘት የቀን መቁጠሪያ',
      tabInbox: 'የመልእክት ሳጥን',
      tabAnalytics: 'የተመልካች ትንታኔ',
      tabCampaigns: 'የማስተዋወቅ ዘመቻዎች',
      tabListening: 'የስም ቅኝት',
      tabSettings: 'ቅንብሮች እና API',
      connectedChannels: 'የተገናኙ ማህበራዊ ገጾች',
      kpiAudience: 'ጠቅላላ ተከታዮች',
      kpiReach: 'የ30 ቀናት ተደራሽነት',
      kpiEngagement: 'አማካይ ተሳትፎ',
      kpiWatchTime: 'የቪዲዮ እይታ ሰዓት',
      quickComposer: 'በሁሉም ገጾች በአንድ ጊዜ ፖስት ማድረጊያ',
      selectTarget: 'የሚለጠፉባቸውን ገጾች ይምረጡ',
      composerPlaceholder: 'የባህል ጥበብ፣ የመጽሐፍ ዜናዎችን እና አዳዲስ መረጃዎችን በሁሉም ገጾች ያጋሩ...',
      publishBtn: 'አሁን አሰራጭ',
      scheduleBtn: 'ለወደፊት ቀጠሮ ያዝ',
      simulatorHeading: 'የሞባይል ስልክ እይታ አስመስሎ ማሳያ',
    },
  },
};
