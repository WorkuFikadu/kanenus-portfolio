'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// ─── Types ───────────────────────────────────────────────────────────────────
type Platform = 'facebook' | 'tiktok' | 'youtube' | 'instagram' | 'telegram';
type Tab = 'overview' | 'compose' | 'calendar' | 'inbox' | 'analytics' | 'campaigns' | 'listening' | 'settings';
type DashboardTheme = 'light' | 'dark' | 'royal';

interface PostDraft {
  id: string;
  platforms: Platform[];
  content: string;
  media: string | null;
  scheduledTime: string;
  status: 'published' | 'scheduled' | 'draft';
  likes?: number;
  comments?: number;
  shares?: number;
}

interface InboxMessage {
  id: string;
  author: string;
  avatar: string;
  platform: Platform;
  content: string;
  timestamp: string;
  status: 'unread' | 'read' | 'replied' | 'starred';
  sentiment: 'positive' | 'question' | 'neutral';
  replyText?: string;
}

// ─── Preset Data ─────────────────────────────────────────────────────────────
const sampleGalleryImages = [
  '541162491_2943637469155328_6917349338980761886_n.jpg',
  '542215310_2944985872353821_1862807247037575291_n.jpg',
  '543118958_2947552745430467_1368589313288512120_n.jpg',
  '544884853_2947567858762289_8646088527851460264_n.jpg',
  '571111242_2997132293805845_7069421411883888637_n.jpg',
  '574101259_3006179576234450_5052014067433980813_n.jpg',
];

const platformMeta: Record<Platform, {
  name: string;
  handle: string;
  url: string;
  followers: string;
  growth: string;
  reach: string;
  engagement: string;
  color: string;
  bgBadge: string;
  lightBadge: string;
  icon: JSX.Element;
}> = {
  facebook: {
    name: 'Facebook Page',
    handle: 'kanenus.kasa.33',
    url: 'https://web.facebook.com/kanenus.kasa.33',
    followers: '98.4K',
    growth: '+2.8%',
    reach: '1.24M',
    engagement: '8.7%',
    color: '#1877f2',
    bgBadge: 'bg-[#1877f2] text-white',
    lightBadge: 'bg-blue-50 text-blue-700 border border-blue-200',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  tiktok: {
    name: 'TikTok Creator',
    handle: '@kanenus_kasa_bayisa',
    url: 'https://www.tiktok.com/@kanenus_kasa_bayisa',
    followers: '24.8K',
    growth: '+16.2%',
    reach: '540K',
    engagement: '12.4%',
    color: '#010101',
    bgBadge: 'bg-slate-900 text-white',
    lightBadge: 'bg-slate-100 text-slate-800 border border-slate-300',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
      </svg>
    ),
  },
  youtube: {
    name: 'YouTube Channel',
    handle: 'Kanenus Kasa Bayisa',
    url: 'https://www.youtube.com/@kanenus_kasa_bayisa',
    followers: '2.1K',
    growth: '+5.4%',
    reach: '82K',
    engagement: '7.1%',
    color: '#ff0000',
    bgBadge: 'bg-[#ff0000] text-white',
    lightBadge: 'bg-red-50 text-red-700 border border-red-200',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  instagram: {
    name: 'Instagram Pro',
    handle: '@kanenus_kasa',
    url: '#',
    followers: '14.2K',
    growth: '+9.1%',
    reach: '190K',
    engagement: '9.8%',
    color: '#e1306c',
    bgBadge: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white',
    lightBadge: 'bg-pink-50 text-pink-700 border border-pink-200',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  telegram: {
    name: 'Telegram Channel',
    handle: '@kanenus_official',
    url: '#',
    followers: '18.5K',
    growth: '+12.0%',
    reach: '115K',
    engagement: '18.4%',
    color: '#0088cc',
    bgBadge: 'bg-[#0088cc] text-white',
    lightBadge: 'bg-sky-50 text-sky-700 border border-sky-200',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.197 1.006.128.832.942z"/>
      </svg>
    ),
  },
};

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [theme, setTheme] = useState<DashboardTheme>('light');

  // Auth gate
  useEffect(() => {
    if (localStorage.getItem('kkb_auth') !== 'true') {
      router.push('/login');
    }
    const savedTheme = localStorage.getItem('kkb_dash_theme') as DashboardTheme;
    if (savedTheme) setTheme(savedTheme);
  }, [router]);

  const handleSetTheme = (newTheme: DashboardTheme) => {
    setTheme(newTheme);
    localStorage.setItem('kkb_dash_theme', newTheme);
  };

  // Composer State
  const [selectedChannels, setSelectedChannels] = useState<Platform[]>(['facebook', 'tiktok']);
  const [postContent, setPostContent] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<string | null>(sampleGalleryImages[0]);
  const [scheduleDateTime, setScheduleDateTime] = useState('');
  const [simulatorPlatform, setSimulatorPlatform] = useState<Platform>('facebook');
  const [publishStatus, setPublishStatus] = useState<string | null>(null);

  // Scheduled Posts State
  const [posts, setPosts] = useState<PostDraft[]>([
    {
      id: 'p-1',
      platforms: ['facebook', 'telegram'],
      content: 'Aadaa fi seenaa keenya dhalootatti dabarsuuf kitaabni "Ayyaantummaa" gumaacha guddaa qaba. Qophiin eebbisaa guyyoota muraasa keessatti ifa baha! 📖✨ #Ayyaantummaa #OromoLiterature',
      media: sampleGalleryImages[0],
      scheduledTime: '2026-09-04 18:30',
      status: 'scheduled',
      likes: 0,
      comments: 0,
    },
    {
      id: 'p-2',
      platforms: ['tiktok'],
      content: 'Kitaaba Ayyaantummaa keessaa boqonnaa 2ffaa: Waa\'ee dhalootaa fi duudhaa Oromoo. Daawwadhaa yaada keessan qoodaa! 🎵🔥 #CulturalHeritage #OromoTikTok',
      media: sampleGalleryImages[1],
      scheduledTime: '2026-09-05 20:00',
      status: 'scheduled',
      likes: 0,
      comments: 0,
    },
    {
      id: 'p-3',
      platforms: ['facebook', 'youtube'],
      content: 'Qophii Sagantaa Sirba Aadaa Shanan Gadaa Band waliin qophaa\'aa jiru kana hordofaa. Aadaan keenya mallattoo eenyummaa keenyaati!',
      media: sampleGalleryImages[2],
      scheduledTime: '2026-09-01 10:15',
      status: 'published',
      likes: 1840,
      comments: 242,
      shares: 98,
    },
  ]);

  // Inbox State
  const [inboxFilter, setInboxFilter] = useState<'all' | Platform | 'unread'>('all');
  const [messages, setMessages] = useState<InboxMessage[]>([
    {
      id: 'm-1',
      author: 'Dr. Lemma Girma',
      avatar: 'LG',
      platform: 'facebook',
      content: 'Baga gammadde obbo Kanenus! Kitaabni kee "Ayyaantummaa" dhaloota boruutiif ibsa guddaadha. Galatoomi!',
      timestamp: '15 mins ago',
      status: 'unread',
      sentiment: 'positive',
    },
    {
      id: 'm-2',
      author: 'Caalaa Bultum',
      avatar: 'CB',
      platform: 'tiktok',
      content: 'Sirbi Shanan Gadaa Band yoom qophii biroo dhiyeessa? We are waiting in Finfinnee!',
      timestamp: '1 hour ago',
      status: 'unread',
      sentiment: 'question',
    },
    {
      id: 'm-3',
      author: 'Ayantu Tolera',
      avatar: 'AT',
      platform: 'facebook',
      content: 'Kitaaba kana Finfinnee keessaa bakka kamitti argachuu dandeenya? I want to buy 5 copies for my students.',
      timestamp: '3 hours ago',
      status: 'unread',
      sentiment: 'question',
    },
    {
      id: 'm-4',
      author: 'Oromo Heritage Forum',
      avatar: 'OH',
      platform: 'youtube',
      content: 'Great interview Kanenus! Your perspective on digital cultural preservation is very inspiring.',
      timestamp: 'Yesterday',
      status: 'read',
      sentiment: 'positive',
      replyText: 'Galatoomaa! Thank you so much for the continuous support.',
    },
  ]);
  const [activeReplyId, setActiveReplyId] = useState<string | null>('m-1');
  const [customReply, setCustomReply] = useState('');

  // Quick Action Handlers
  const handleToggleChannel = (p: Platform) => {
    if (selectedChannels.includes(p)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter(c => c !== p));
      }
    } else {
      setSelectedChannels([...selectedChannels, p]);
    }
  };

  const handlePublishNow = () => {
    if (!postContent.trim()) return;
    const newPost: PostDraft = {
      id: `p-${Date.now()}`,
      platforms: selectedChannels,
      content: postContent,
      media: selectedMedia,
      scheduledTime: 'Just now',
      status: 'published',
      likes: 1,
      comments: 0,
      shares: 0,
    };
    setPosts([newPost, ...posts]);
    setPublishStatus('🎉 Post successfully published to ' + selectedChannels.map(c => platformMeta[c].name).join(', ') + '!');
    setTimeout(() => setPublishStatus(null), 5000);
    setPostContent('');
  };

  const handleSchedulePost = () => {
    if (!postContent.trim()) return;
    const newPost: PostDraft = {
      id: `p-${Date.now()}`,
      platforms: selectedChannels,
      content: postContent,
      media: selectedMedia,
      scheduledTime: scheduleDateTime || '2026-09-06 18:00',
      status: 'scheduled',
    };
    setPosts([newPost, ...posts]);
    setPublishStatus('📅 Scheduled for ' + (scheduleDateTime || 'Tomorrow at 6:00 PM') + ' across selected channels!');
    setTimeout(() => setPublishStatus(null), 5000);
    setPostContent('');
  };

  const handleSendReply = (id: string, text: string) => {
    setMessages(messages.map(m => m.id === id ? { ...m, status: 'replied', replyText: text } : m));
    setCustomReply('');
  };

  const handleLogout = () => {
    localStorage.removeItem('kkb_auth');
    router.push('/login');
  };

  const filteredMessages = messages.filter(m => {
    if (inboxFilter === 'all') return true;
    if (inboxFilter === 'unread') return m.status === 'unread';
    return m.platform === inboxFilter;
  });

  // Dynamic Theme Styling Classes
  const themeClasses = {
    light: {
      bg: 'bg-slate-50 text-slate-900',
      header: 'bg-white border-slate-200 shadow-sm text-slate-900',
      sidebar: 'bg-white border-slate-200 text-slate-700',
      navActive: 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/25',
      navInactive: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
      card: 'bg-white border-slate-200/90 shadow-sm hover:shadow-md text-slate-800',
      cardAlt: 'bg-slate-100/70 border-slate-200 text-slate-800',
      mutedText: 'text-slate-500',
      input: 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500',
      pill: 'bg-slate-100 text-slate-700 border-slate-200',
    },
    royal: {
      bg: 'bg-[#f4f7fb] text-slate-900',
      header: 'bg-[#0b1a30] border-blue-900 shadow-md text-white',
      sidebar: 'bg-[#0f2342] border-blue-900 text-slate-200',
      navActive: 'bg-accent text-white font-bold shadow-md shadow-blue-500/30',
      navInactive: 'text-slate-300 hover:text-white hover:bg-white/10',
      card: 'bg-white border-blue-100 shadow-sm hover:shadow-md text-slate-800',
      cardAlt: 'bg-blue-50/50 border-blue-100 text-slate-800',
      mutedText: 'text-slate-500',
      input: 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-accent',
      pill: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    dark: {
      bg: 'bg-[#070e1a] text-slate-100',
      header: 'bg-[#0b1626] border-slate-800 shadow-xl text-white',
      sidebar: 'bg-[#09121f] border-slate-800 text-slate-300',
      navActive: 'bg-accent text-white font-bold shadow-lg shadow-accent/25',
      navInactive: 'text-slate-300 hover:text-white hover:bg-slate-800/60',
      card: 'bg-[#0b1626] border-slate-800 shadow-lg text-slate-100',
      cardAlt: 'bg-slate-900/60 border-slate-800 text-slate-200',
      mutedText: 'text-slate-400',
      input: 'bg-[#08101d] border-slate-800 text-slate-100 placeholder-slate-500 focus:border-accent',
      pill: 'bg-slate-800 text-slate-300 border-slate-700',
    },
  }[theme];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${themeClasses.bg}`}>

      {/* ── Top Unified Command Bar ── */}
      <header className={`px-6 py-3 flex items-center justify-between sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-300 ${themeClasses.header}`}>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/25 tracking-wider">
              KKB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold leading-none">Social Command Center</h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Sync
                </span>
              </div>
              <p className={`text-xs mt-0.5 ${theme === 'dark' || theme === 'royal' ? 'text-slate-300' : 'text-slate-500'}`}>
                Kanenus Kasa Bayisa • Multi-Channel Management Suite
              </p>
            </div>
          </div>
        </div>

        {/* Global Quick Action & Theme Selector */}
        <div className="flex items-center gap-3">
          
          {/* Visual Theme Selector */}
          <div className="flex items-center bg-slate-200/70 dark:bg-slate-800 p-1 rounded-xl border border-slate-300/60 dark:border-slate-700 text-xs">
            <button
              onClick={() => handleSetTheme('light')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition ${
                theme === 'light' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Clean Light Executive Mode"
            >
              ☀️ Light
            </button>
            <button
              onClick={() => handleSetTheme('royal')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition ${
                theme === 'royal' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Royal Navy Brand Theme"
            >
              👑 Royal
            </button>
            <button
              onClick={() => handleSetTheme('dark')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition ${
                theme === 'dark' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Midnight Dark Mode"
            >
              🌙 Dark
            </button>
          </div>

          <button
            onClick={() => setActiveTab('compose')}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition duration-200 transform hover:-translate-y-0.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/></svg>
            Create Post
          </button>

          <div className="h-5 w-px bg-slate-300 dark:bg-slate-700"></div>

          <Link
            href="/"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              theme === 'dark' || theme === 'royal' ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            ← Public Site
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 border border-rose-300 dark:border-rose-500/30 transition"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* ── Left Interactive Navigation Rail ── */}
        <aside className={`w-64 border-r flex flex-col p-4 shrink-0 transition-colors duration-300 ${themeClasses.sidebar}`}>
          
          {/* Profile Card */}
          <div className={`p-3.5 rounded-2xl border flex items-center gap-3 mb-6 shadow-sm ${
            theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : theme === 'royal' ? 'bg-[#0b1a30] border-blue-800 text-white' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-blue-500/40 shadow shrink-0">
              <img src="/profile.jpg" alt="Kanenus" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
            </div>
            <div className="min-w-0 flex-1">
              <p className={`text-xs font-bold truncate ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Kanenus Kasa Bayisa</p>
              <p className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">158K Total Audience</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-3 mb-2">Main Navigation</div>
          <nav className="space-y-1">
            {[
              { id: 'overview', label: 'Executive Overview', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
              { id: 'compose', label: 'Omnichannel Studio', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', badge: 'Simulator' },
              { id: 'calendar', label: 'Content Calendar', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', count: posts.filter(p=>p.status==='scheduled').length },
              { id: 'inbox', label: 'Community Inbox', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', count: messages.filter(m=>m.status==='unread').length },
              { id: 'analytics', label: 'Audience Intelligence', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              { id: 'campaigns', label: 'Active Campaigns', icon: 'M13 10V3L4 14h7v7l9-11h-7z', badge: 'Ayyaantummaa' },
              { id: 'listening', label: 'Brand Mentions', icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828', count: '94% Pos' },
              { id: 'settings', label: 'Accounts & API Hub', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === item.id ? themeClasses.navActive : themeClasses.navInactive
                }`}
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}/></svg>
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    activeTab === item.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}>
                    {item.count}
                  </span>
                )}
                {item.badge && (
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                    activeTab === item.id ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Connected Channels Mini Widget */}
          <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">Connected Channels</div>
            <div className="space-y-1.5">
              {(['facebook', 'tiktok', 'youtube', 'instagram', 'telegram'] as Platform[]).map(p => {
                const info = platformMeta[p];
                return (
                  <div key={p} className={`flex items-center justify-between p-2 rounded-xl border text-xs ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200/80' : 'bg-slate-900/50 border-slate-800'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-md ${info.bgBadge} text-white flex items-center justify-center`}>
                        {info.icon}
                      </div>
                      <span className="text-[11px] font-medium">{info.name.split(' ')[0]}</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{info.followers}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ── Center / Main Work Area ── */}
        <main className="flex-1 overflow-y-auto p-8">
          
          {/* Status Toast */}
          {publishStatus && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-center justify-between shadow-md animate-fade-in-up">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold">✓</span>
                <span className="font-medium">{publishStatus}</span>
              </div>
              <button onClick={() => setPublishStatus(null)} className="text-emerald-700 hover:text-emerald-900 text-xs font-bold">Dismiss</button>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 1: EXECUTIVE OVERVIEW
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'overview' && (
            <div className="space-y-8 max-w-7xl mx-auto">
              
              {/* Header banner */}
              <div className={`p-6 rounded-3xl border shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border-blue-500'
                  : theme === 'royal'
                  ? 'bg-gradient-to-r from-[#0b1a30] to-[#1a386b] text-white border-blue-900'
                  : 'bg-gradient-to-r from-slate-900 to-[#0d2242] text-white border-slate-800'
              }`}>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-white">Cross-Platform Executive Overview</h2>
                  <p className="text-blue-100 text-xs mt-1">Real-time performance metrics across Facebook, TikTok, YouTube, Instagram & Telegram.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] text-blue-200 uppercase tracking-widest block">Last Synchronized</span>
                    <span className="text-xs font-mono text-emerald-300 font-bold">Just now • Live Stream</span>
                  </div>
                  <button onClick={() => alert('All channels synced successfully with Meta Graph API & TikTok Creator Studio.')} className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition backdrop-blur-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  </button>
                </div>
              </div>

              {/* Big KPI Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Total Reach (30D)', value: '2.18M', change: '+14.2%', note: 'vs last month', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200' },
                  { title: 'Combined Followers', value: '158.0K', change: '+5,420', note: 'new followers', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', iconBg: 'bg-blue-50 text-blue-600 border border-blue-200' },
                  { title: 'Engagement Rate', value: '11.2%', change: '+2.4%', note: 'industry benchmark: 4.8%', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', iconBg: 'bg-pink-50 text-pink-600 border border-pink-200' },
                  { title: 'Video Watch Time', value: '48.2K hrs', change: '+18.9%', note: 'cultural shorts & clips', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', iconBg: 'bg-amber-50 text-amber-600 border border-amber-200' },
                ].map((stat, i) => (
                  <div key={i} className={`p-5 rounded-2xl border transition group ${themeClasses.card}`}>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className={themeClasses.mutedText}>{stat.title}</span>
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon}/></svg>
                      </span>
                    </div>
                    <div className="text-2xl font-heading font-bold mb-2">{stat.value}</div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{stat.change}</span>
                      <span className={themeClasses.mutedText}>{stat.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Multi-Platform Performance Cards */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Live Network Breakdown</h3>
                  <span className="text-xs font-bold text-blue-600">5 Connected Profiles</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {(['facebook', 'tiktok', 'youtube', 'instagram', 'telegram'] as Platform[]).map(p => {
                    const info = platformMeta[p];
                    return (
                      <div key={p} className={`p-5 rounded-2xl border flex flex-col justify-between transition ${themeClasses.card}`}>
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-9 h-9 rounded-xl ${info.bgBadge} flex items-center justify-center shadow`}>
                              {info.icon}
                            </div>
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 px-2 py-0.5 rounded-full">{info.growth}</span>
                          </div>
                          <h4 className="font-bold text-sm">{info.name}</h4>
                          <p className={`text-[11px] truncate mb-4 ${themeClasses.mutedText}`}>{info.handle}</p>
                          
                          <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-3">
                            <div className="flex justify-between text-xs">
                              <span className={themeClasses.mutedText}>Audience:</span>
                              <span className="font-bold">{info.followers}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className={themeClasses.mutedText}>Reach:</span>
                              <span className="font-bold">{info.reach}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className={themeClasses.mutedText}>Engage:</span>
                              <span className="font-bold text-blue-600">{info.engagement}</span>
                            </div>
                          </div>
                        </div>

                        <a href={info.url} target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 transition">
                          Manage Channel
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Two Column Section: Recent Scheduled + Real-time Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Upcoming Queue */}
                <div className={`p-6 rounded-3xl border ${themeClasses.card}`}>
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-bold text-base">Next in Schedule Queue</h3>
                      <p className={`text-xs ${themeClasses.mutedText}`}>Automated multi-channel broadcast plan</p>
                    </div>
                    <button onClick={() => setActiveTab('calendar')} className="text-xs text-blue-600 font-bold hover:underline">
                      View Calendar →
                    </button>
                  </div>

                  <div className="space-y-3">
                    {posts.filter(p => p.status === 'scheduled').map(post => (
                      <div key={post.id} className={`p-4 rounded-2xl border flex gap-3.5 items-start ${themeClasses.cardAlt}`}>
                        {post.media && (
                          <img src={`/gallery/${post.media}`} alt="Media" className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm" />
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            {post.platforms.map(p => (
                              <span key={p} className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${platformMeta[p].bgBadge}`}>
                                {p.toUpperCase()}
                              </span>
                            ))}
                            <span className={`text-[11px] font-mono ${themeClasses.mutedText}`}>⏰ {post.scheduledTime}</span>
                          </div>
                          <p className="text-xs line-clamp-2 leading-relaxed">{post.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Social Stream */}
                <div className={`p-6 rounded-3xl border ${themeClasses.card}`}>
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-bold text-base">Community Engagement Stream</h3>
                      <p className={`text-xs ${themeClasses.mutedText}`}>Comments, DMs & Inquiries</p>
                    </div>
                    <button onClick={() => setActiveTab('inbox')} className="text-xs text-blue-600 font-bold hover:underline">
                      Open Inbox →
                    </button>
                  </div>

                  <div className="space-y-3">
                    {messages.slice(0, 3).map(msg => (
                      <div key={msg.id} className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${themeClasses.cardAlt}`}>
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">
                            {msg.avatar}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold">{msg.author}</span>
                              <span className={`px-1.5 py-0.5 text-[9px] rounded font-bold ${platformMeta[msg.platform].bgBadge}`}>
                                {msg.platform}
                              </span>
                            </div>
                            <p className={`text-xs truncate mt-0.5 ${themeClasses.mutedText}`}>{msg.content}</p>
                          </div>
                        </div>
                        <span className={`text-[10px] shrink-0 ${themeClasses.mutedText}`}>{msg.timestamp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 2: OMNICHANNEL STUDIO & LIVE SIMULATOR
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'compose' && (
            <div className="max-w-6xl mx-auto space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold">Omnichannel Publisher & Real-Time Simulator</h2>
                <p className={`text-xs mt-1 ${themeClasses.mutedText}`}>Compose your message once, adapt for each platform, preview live inside device mockups, and broadcast.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 7 Cols: Editor & Target Channels */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Channel Multi-Selector */}
                  <div className={`p-5 rounded-2xl border ${themeClasses.card}`}>
                    <label className={`text-xs font-bold uppercase tracking-wider block mb-3 ${themeClasses.mutedText}`}>Broadcast Destinations</label>
                    <div className="flex flex-wrap gap-2.5">
                      {(['facebook', 'tiktok', 'youtube', 'instagram', 'telegram'] as Platform[]).map(p => {
                        const active = selectedChannels.includes(p);
                        const info = platformMeta[p];
                        return (
                          <button
                            key={p}
                            onClick={() => handleToggleChannel(p)}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition border ${
                              active
                                ? `${info.bgBadge} border-transparent shadow-md`
                                : `${themeClasses.pill} hover:border-slate-400`
                            }`}
                          >
                            <span className="w-3.5 h-3.5">{info.icon}</span>
                            <span>{info.name}</span>
                            {active && <span className="text-[10px] bg-white/20 px-1 rounded">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Main Text Content */}
                  <div className={`p-5 rounded-2xl border space-y-3 ${themeClasses.card}`}>
                    <div className="flex items-center justify-between">
                      <label className={`text-xs font-bold uppercase tracking-wider ${themeClasses.mutedText}`}>Post Caption & Copy</label>
                      <div className={`flex items-center gap-2 text-[11px] ${themeClasses.mutedText}`}>
                        <span>Characters: <strong className="text-blue-600">{postContent.length}</strong></span>
                        <span>•</span>
                        <span>TikTok limit: 2,200</span>
                      </div>
                    </div>

                    <textarea
                      rows={6}
                      value={postContent}
                      onChange={e => setPostContent(e.target.value)}
                      placeholder="Qophii kitaaba Ayyaantummaa, sirba aadaa Shanan Gadaa, ykn yaada aadaa Oromoo qoodaa..."
                      className={`w-full rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition leading-relaxed resize-none border ${themeClasses.input}`}
                    />

                    {/* Quick Cultural Hashtags */}
                    <div>
                      <span className={`text-[11px] block mb-2 font-medium ${themeClasses.mutedText}`}>1-Click Recommended Cultural Tags:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {['#Ayyaantummaa', '#OromoCulture', '#ShananGadaa', '#AfricanLiterature', '#OromiaWriters', '#Oromia', '#CulturalHeritage', '#OromoPride'].map(tag => (
                          <button
                            key={tag}
                            onClick={() => setPostContent(prev => prev ? `${prev} ${tag}` : tag)}
                            className="text-[11px] font-mono px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Media Library Selector */}
                  <div className={`p-5 rounded-2xl border space-y-3 ${themeClasses.card}`}>
                    <div className="flex items-center justify-between">
                      <label className={`text-xs font-bold uppercase tracking-wider ${themeClasses.mutedText}`}>Attach Cultural Media</label>
                      {selectedMedia && (
                        <button onClick={() => setSelectedMedia(null)} className="text-xs text-rose-500 hover:underline">Remove Media</button>
                      )}
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                      {sampleGalleryImages.map((imgName, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedMedia(imgName)}
                          className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition ${
                            selectedMedia === imgName ? 'border-blue-600 ring-2 ring-blue-500/30 scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={`/gallery/${imgName}`} alt="Asset" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scheduling & Publish Actions */}
                  <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${themeClasses.card}`}>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <input
                        type="datetime-local"
                        value={scheduleDateTime}
                        onChange={e => setScheduleDateTime(e.target.value)}
                        className={`rounded-xl px-3 py-2 text-xs border focus:outline-none focus:ring-1 focus:ring-blue-500 ${themeClasses.input}`}
                      />
                      <button
                        onClick={() => setScheduleDateTime('2026-09-04T18:30')}
                        className="px-2.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-[11px] font-bold rounded-xl border border-blue-200 dark:border-blue-800 transition shrink-0"
                      >
                        ⚡ Best Time (6:30 PM)
                      </button>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <button
                        onClick={handleSchedulePost}
                        disabled={!postContent.trim()}
                        className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition disabled:opacity-40"
                      >
                        Schedule
                      </button>

                      <button
                        onClick={handlePublishNow}
                        disabled={!postContent.trim()}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition duration-200 transform hover:-translate-y-0.5 disabled:opacity-40"
                      >
                        Publish Instantly
                      </button>
                    </div>
                  </div>

                </div>

                {/* Right 5 Cols: Real-time Platform Simulator */}
                <div className="lg:col-span-5 space-y-4">
                  <div className={`p-3 rounded-2xl border flex items-center justify-between ${themeClasses.card}`}>
                    <span className="text-xs font-bold">Simulator Device:</span>
                    <div className="flex gap-1">
                      {(['facebook', 'tiktok', 'youtube'] as Platform[]).map(p => (
                        <button
                          key={p}
                          onClick={() => setSimulatorPlatform(p)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition ${
                            simulatorPlatform === p ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-900'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ── Facebook Newsfeed Mockup ── */}
                  {simulatorPlatform === 'facebook' && (
                    <div className="bg-white dark:bg-[#18191a] border border-slate-200 dark:border-[#3a3b3c] rounded-2xl overflow-hidden shadow-xl text-slate-800 dark:text-[#e4e6eb] text-sm">
                      <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                          <img src="/profile.jpg" alt="Avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500" />
                          <div>
                            <div className="flex items-center gap-1.5 font-bold text-sm">
                              <span>Kanenus Kasa Bayisa</span>
                              <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                            </div>
                            <div className="text-[11px] text-slate-400 flex items-center gap-1">
                              <span>Just now</span>
                              <span>•</span>
                              <span>🌐 Public</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-slate-400">•••</span>
                      </div>

                      <div className="px-4 py-3 whitespace-pre-wrap text-[13px] leading-relaxed">
                        {postContent || 'Your live Facebook post preview will appear right here as you type in the studio...'}
                      </div>

                      {selectedMedia && (
                        <div className="w-full aspect-[4/3] bg-black">
                          <img src={`/gallery/${selectedMedia}`} alt="Post Asset" className="w-full h-full object-cover" />
                        </div>
                      )}

                      <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-slate-500 text-xs">
                        <span>👍 ❤️ 2.4K</span>
                        <span>418 Comments • 92 Shares</span>
                      </div>

                      <div className="px-2 py-1.5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 text-center text-xs font-bold text-slate-600 dark:text-slate-400">
                        <span className="py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">👍 Like</span>
                        <span className="py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">💬 Comment</span>
                        <span className="py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">↗ Share</span>
                      </div>
                    </div>
                  )}

                  {/* ── TikTok Phone Mockup ── */}
                  {simulatorPlatform === 'tiktok' && (
                    <div className="relative w-full max-w-[320px] mx-auto aspect-[9/16] rounded-[2.5rem] bg-black border-4 border-slate-800 overflow-hidden shadow-2xl flex flex-col justify-between p-4 text-white">
                      {selectedMedia ? (
                        <img src={`/gallery/${selectedMedia}`} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-black"></div>
                      )}

                      <div className="relative z-10 flex justify-between text-xs font-bold pt-2 px-2">
                        <span>Live Preview</span>
                        <span>For You</span>
                      </div>

                      <div className="relative z-10 self-end space-y-4 text-center text-xs">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur flex items-center justify-center">❤️</div>
                          <span className="text-[10px] mt-1">42.8K</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur flex items-center justify-center">💬</div>
                          <span className="text-[10px] mt-1">1,240</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur flex items-center justify-center">🔖</div>
                          <span className="text-[10px] mt-1">680</span>
                        </div>
                      </div>

                      <div className="relative z-10 bg-gradient-to-t from-black via-black/60 to-transparent p-2 rounded-xl">
                        <p className="font-bold text-xs mb-1">@kanenus_kasa_bayisa</p>
                        <p className="text-[11px] line-clamp-3 leading-tight opacity-90">
                          {postContent || 'TikTok cultural showcase preview... #Ayyaantummaa #OromoLiterature'}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-300 mt-2">
                          <span>🎵 Original Sound - Shanan Gadaa Ensemble</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── YouTube Community Post Mockup ── */}
                  {simulatorPlatform === 'youtube' && (
                    <div className="bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xl space-y-4 text-slate-800 dark:text-white">
                      <div className="flex items-center gap-3">
                        <img src="/profile.jpg" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-bold text-xs">Kanenus Kasa Bayisa</p>
                          <p className="text-[10px] text-slate-400">2.1K subscribers • Just now</p>
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed whitespace-pre-wrap">
                        {postContent || 'Your YouTube Community announcement preview...'}
                      </p>
                      {selectedMedia && (
                        <div className="rounded-xl overflow-hidden aspect-video bg-black shadow-sm">
                          <img src={`/gallery/${selectedMedia}`} alt="Asset" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex items-center gap-6 text-xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span>👍 840</span>
                        <span>👎</span>
                        <span>💬 94 Comments</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 3: INTERACTIVE CONTENT CALENDAR
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'calendar' && (
            <div className="max-w-6xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-heading font-bold">Editorial & Content Calendar</h2>
                  <p className={`text-xs mt-1 ${themeClasses.mutedText}`}>Plan and coordinate cultural broadcasts, book discussions, and band updates.</p>
                </div>
                <button
                  onClick={() => setActiveTab('compose')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow transition self-start"
                >
                  + Add New Scheduled Slot
                </button>
              </div>

              {/* Month Planner Grid */}
              <div className={`p-6 rounded-3xl border ${themeClasses.card}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-base">September 2026 Schedule</h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700 font-bold">Facebook</span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-200 text-slate-800 font-bold">TikTok</span>
                    <span className="px-2.5 py-1 rounded-lg bg-red-100 text-red-700 font-bold">YouTube</span>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2.5 text-center text-xs font-bold text-slate-400 mb-3">
                  <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
                </div>

                <div className="grid grid-cols-7 gap-2.5">
                  {Array.from({ length: 30 }).map((_, dayIdx) => {
                    const dayNum = dayIdx + 1;
                    const dayPosts = posts.filter(p => p.scheduledTime.includes(`-09-${String(dayNum).padStart(2, '0')}`));
                    return (
                      <div
                        key={dayIdx}
                        className={`min-h-[100px] p-2.5 rounded-xl border text-left flex flex-col justify-between transition ${
                          dayPosts.length > 0
                            ? 'bg-blue-50/70 dark:bg-slate-900 border-blue-200 dark:border-accent'
                            : 'bg-slate-50 dark:bg-[#08101d] border-slate-200/60 dark:border-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className={`font-bold ${dayPosts.length > 0 ? 'text-blue-600' : 'text-slate-400'}`}>{dayNum}</span>
                          {dayPosts.length > 0 && <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>}
                        </div>

                        <div className="space-y-1 my-1">
                          {dayPosts.map(p => (
                            <div key={p.id} className="text-[10px] p-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 truncate shadow-xs">
                              {p.content.slice(0, 18)}...
                            </div>
                          ))}
                        </div>

                        <div className="text-[9px] text-slate-400">
                          {dayPosts.length > 0 ? `${dayPosts.length} Broadcast` : ''}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scheduled Posts Detailed List */}
              <div className={`p-6 rounded-3xl border space-y-4 ${themeClasses.card}`}>
                <h3 className="font-bold text-base">Detailed Upcoming Posts Queue</h3>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {posts.map(post => (
                    <div key={post.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {post.media && (
                          <img src={`/gallery/${post.media}`} alt="Media" className="w-14 h-14 rounded-xl object-cover border border-slate-200 shadow-sm" />
                        )}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {post.platforms.map(p => (
                              <span key={p} className={`px-2 py-0.5 rounded text-[10px] font-bold ${platformMeta[p].bgBadge}`}>
                                {p.toUpperCase()}
                              </span>
                            ))}
                            <span className={`text-xs font-mono ${themeClasses.mutedText}`}>📅 {post.scheduledTime}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              post.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              {post.status.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-xs max-w-2xl leading-relaxed">{post.content}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end md:self-center">
                        <button onClick={() => alert('Post rescheduled.')} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium rounded-lg transition">Reschedule</button>
                        <button onClick={() => setPosts(posts.filter(p => p.id !== post.id))} className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs rounded-lg transition">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 4: UNIFIED COMMUNITY INBOX
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'inbox' && (
            <div className="max-w-6xl mx-auto space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold">Unified Social Inbox & Community Engagement</h2>
                <p className={`text-xs mt-1 ${themeClasses.mutedText}`}>Reply to Facebook comments, TikTok questions, and YouTube inquiries from one single command window.</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Inquiries' },
                  { id: 'unread', label: 'Unanswered' },
                  { id: 'facebook', label: 'Facebook' },
                  { id: 'tiktok', label: 'TikTok' },
                  { id: 'youtube', label: 'YouTube' },
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setInboxFilter(f.id as any)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition border ${
                      inboxFilter === f.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : `${themeClasses.pill} hover:border-slate-400`
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Two Panel Messaging Center */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl border overflow-hidden shadow-lg min-h-[560px] ${themeClasses.card}`}>
                
                {/* Left List */}
                <div className="lg:col-span-5 border-r border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 overflow-y-auto max-h-[600px]">
                  {filteredMessages.map(msg => (
                    <div
                      key={msg.id}
                      onClick={() => setActiveReplyId(msg.id)}
                      className={`p-4 cursor-pointer transition ${
                        activeReplyId === msg.id
                          ? 'bg-blue-50/80 dark:bg-slate-800/60 border-l-4 border-blue-600'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-900/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${msg.status === 'unread' ? 'bg-blue-600 animate-pulse' : 'bg-slate-300'}`}></span>
                          <span className="font-bold text-xs">{msg.author}</span>
                          <span className={`px-1.5 py-0.5 text-[9px] rounded font-bold ${platformMeta[msg.platform].bgBadge}`}>
                            {msg.platform}
                          </span>
                        </div>
                        <span className={`text-[10px] ${themeClasses.mutedText}`}>{msg.timestamp}</span>
                      </div>
                      <p className={`text-xs line-clamp-2 leading-relaxed ${themeClasses.mutedText}`}>{msg.content}</p>
                      {msg.replyText && (
                        <div className="mt-2 text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                          <span>✓ Replied:</span>
                          <span className="truncate text-slate-500">{msg.replyText}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Interactive Reply Workspace */}
                <div className="lg:col-span-7 p-6 flex flex-col justify-between">
                  {(() => {
                    const activeMsg = messages.find(m => m.id === activeReplyId);
                    if (!activeMsg) return <div className={`text-xs m-auto ${themeClasses.mutedText}`}>Select an inquiry to view details and respond.</div>;
                    
                    return (
                      <div className="space-y-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                                {activeMsg.avatar}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm">{activeMsg.author}</h4>
                                <p className={`text-[11px] ${themeClasses.mutedText}`}>Via {platformMeta[activeMsg.platform].name} • {activeMsg.timestamp}</p>
                              </div>
                            </div>
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                              Positive Sentiment
                            </span>
                          </div>

                          <div className={`p-4 rounded-2xl border text-sm leading-relaxed mb-6 ${themeClasses.cardAlt}`}>
                            "{activeMsg.content}"
                          </div>

                          {activeMsg.replyText && (
                            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 mb-4">
                              <span className="font-bold block mb-1">Your Sent Response:</span>
                              "{activeMsg.replyText}"
                            </div>
                          )}

                          {/* Quick 1-Click Cultural Responses */}
                          <div>
                            <span className={`text-[11px] block mb-2 font-bold ${themeClasses.mutedText}`}>Instant 1-Click Cultural Responses:</span>
                            <div className="space-y-1.5">
                              {[
                                "Galatoomaa! Deeggarsa keessaniif baay'ee galatoomaa. Kitaabni Ayyaantummaa kun kan hunda keenyaati!",
                                "Ayyaantummaa website keenya kanarraa ykn toora bilbila keenyaan ergaa erguun ajajuu dandeessu!",
                                "Hirmaannaa keessaniif guddaa galatoomaa! Sagantaa itti aanurratti wal argina.",
                              ].map((reply, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleSendReply(activeMsg.id, reply)}
                                  className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-xs text-slate-700 dark:text-slate-300 transition"
                                >
                                  ⚡ "{reply}"
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Custom Reply Box */}
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                          <textarea
                            rows={3}
                            value={customReply}
                            onChange={e => setCustomReply(e.target.value)}
                            placeholder={`Reply directly to ${activeMsg.author} on ${platformMeta[activeMsg.platform].name}...`}
                            className={`w-full rounded-xl p-3 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none border ${themeClasses.input}`}
                          />
                          <div className="flex items-center justify-between">
                            <span className={`text-[11px] ${themeClasses.mutedText}`}>Will post public response to channel</span>
                            <button
                              onClick={() => handleSendReply(activeMsg.id, customReply)}
                              disabled={!customReply.trim()}
                              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition disabled:opacity-40"
                            >
                              Send Response
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 5: DEEP ANALYTICS & AUDIENCE INTELLIGENCE
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'analytics' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-heading font-bold">Audience Demographics & Deep Intelligence</h2>
                  <p className={`text-xs mt-1 ${themeClasses.mutedText}`}>Detailed geographical distribution, engagement velocity, and viral performance telemetry.</p>
                </div>
                <button onClick={() => alert('Exporting full 30-Day Social Report (PDF)...')} className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700 rounded-xl shadow-xs transition">
                  📥 Download Analytics Report
                </button>
              </div>

              {/* Audience Geography Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Geographic Heatmap */}
                <div className={`p-6 rounded-3xl border space-y-4 ${themeClasses.card}`}>
                  <h3 className="font-bold text-base">Top Geographic Follower Distribution</h3>
                  <div className="space-y-3">
                    {[
                      { region: 'Oromia & Addis Ababa, Ethiopia', percent: 64, count: '101,120' },
                      { region: 'United States (Minneapolis, DC, Seattle)', percent: 18, count: '28,440' },
                      { region: 'Europe (UK, Germany, Norway, Sweden)', percent: 10, count: '15,800' },
                      { region: 'East Africa (Kenya, Nairobi, Uganda)', percent: 5, count: '7,900' },
                      { region: 'Australia & Canada', percent: 3, count: '4,740' },
                    ].map((loc, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium">{loc.region}</span>
                          <span className="font-bold">{loc.count} ({loc.percent}%)</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: `${loc.percent}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Age & Gender Demographics */}
                <div className={`p-6 rounded-3xl border space-y-4 ${themeClasses.card}`}>
                  <h3 className="font-bold text-base">Audience Age & Generation</h3>
                  <div className="grid grid-cols-4 gap-3 text-center my-4">
                    {[
                      { range: '18-24', share: '32%' },
                      { range: '25-34', share: '46%' },
                      { range: '35-44', share: '16%' },
                      { range: '45+', share: '6%' },
                    ].map((age, i) => (
                      <div key={i} className={`p-3 rounded-2xl border ${themeClasses.cardAlt}`}>
                        <span className="text-lg font-bold text-blue-600 block">{age.share}</span>
                        <span className={`text-[11px] ${themeClasses.mutedText}`}>{age.range} Yrs</span>
                      </div>
                    ))}
                  </div>

                  <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${themeClasses.cardAlt}`}>
                    💡 <strong>Insight:</strong> 78% of your readers and viewers are aged 18–34, making short-form cultural reels on TikTok and Facebook your highest return content format.
                  </div>
                </div>

              </div>

              {/* Top Performing Content Leaderboard */}
              <div className={`p-6 rounded-3xl border space-y-4 ${themeClasses.card}`}>
                <h3 className="font-bold text-base">Top Performing Posts (Leaderboard)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase text-slate-400 font-bold">
                      <tr>
                        <th className="pb-3">Content Snippet</th>
                        <th className="pb-3">Platform</th>
                        <th className="pb-3">Impressions</th>
                        <th className="pb-3">Engagement</th>
                        <th className="pb-3">Shares</th>
                        <th className="pb-3">Virality Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {[
                        { title: 'Ayyaantummaa Chapter 1 Teaser Video', platform: 'tiktok', views: '284,000', rate: '14.2%', shares: '4,120', score: '98/100' },
                        { title: 'Oromia Writers Association Official Speech', platform: 'facebook', views: '192,400', rate: '11.8%', shares: '1,890', score: '92/100' },
                        { title: 'Shanan Gadaa Traditional Concert Highlights', platform: 'youtube', views: '78,900', rate: '9.4%', shares: '840', score: '88/100' },
                      ].map((item, i) => (
                        <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900 transition">
                          <td className="py-3.5 font-medium max-w-xs truncate">{item.title}</td>
                          <td className="py-3.5 capitalize font-bold text-blue-600">{item.platform}</td>
                          <td className="py-3.5">{item.views}</td>
                          <td className="py-3.5 text-emerald-600 font-bold">{item.rate}</td>
                          <td className="py-3.5">{item.shares}</td>
                          <td className="py-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">{item.score}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 6: ACTIVE PROMOTIONAL CAMPAIGNS
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'campaigns' && (
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-heading font-bold">Active Promotional Campaigns</h2>
                  <p className={`text-xs mt-1 ${themeClasses.mutedText}`}>Multi-channel marketing objectives for books, band concerts, and cultural initiatives.</p>
                </div>
                <button onClick={() => alert('Creating new promotional campaign...')} className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl shadow">
                  + Launch New Campaign
                </button>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: 'Ayyaantummaa Book Worldwide Launch Tour',
                    tag: 'Primary Book Campaign',
                    progress: 68,
                    target: '10,000 Copies Pre-ordered',
                    current: '6,800 Copies',
                    posts: 34,
                    reach: '940K Reach',
                    channels: ['facebook', 'tiktok', 'telegram'],
                    status: 'Active',
                  },
                  {
                    title: 'Shanan Gadaa Cultural Concert Series 2026',
                    tag: 'Live Event Campaign',
                    progress: 84,
                    target: '50,000 Live Ticket Reach',
                    current: '42,000 Reached',
                    posts: 18,
                    reach: '580K Reach',
                    channels: ['facebook', 'youtube', 'tiktok'],
                    status: 'Active',
                  },
                  {
                    title: 'Daily Oromo Cultural Wisdom & Heritage Series',
                    tag: 'Community Education',
                    progress: 42,
                    target: '100 Daily Video Episodes',
                    current: '42 Episodes Produced',
                    posts: 42,
                    reach: '1.2M Reach',
                    channels: ['tiktok', 'instagram', 'youtube'],
                    status: 'In Progress',
                  },
                ].map((camp, idx) => (
                  <div key={idx} className={`p-6 rounded-3xl border space-y-4 ${themeClasses.card}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">{camp.tag}</span>
                        <h3 className="text-lg font-bold">{camp.title}</h3>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 self-start">
                        ● {camp.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className={themeClasses.mutedText}>Campaign Target: {camp.target}</span>
                        <span className="font-bold">{camp.progress}% Achieved ({camp.current})</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" style={{ width: `${camp.progress}%` }}></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <span>Active Networks:</span>
                        {camp.channels.map(c => (
                          <span key={c} className={`px-2 py-0.5 rounded text-[10px] font-bold ${platformMeta[c as Platform].bgBadge}`}>
                            {c.toUpperCase()}
                          </span>
                        ))}
                      </div>
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">{camp.posts}</strong> Posts Published • <strong className="text-slate-800 dark:text-slate-200">{camp.reach}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 7: BRAND LISTENING & SOCIAL MONITOR
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'listening' && (
            <div className="max-w-5xl mx-auto space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold">Social Listening & Brand Reputation</h2>
                <p className={`text-xs mt-1 ${themeClasses.mutedText}`}>Automatic web and social tracking for keywords related to Kanenus Kasa Bayisa and your publications.</p>
              </div>

              {/* Tracked Keywords */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { keyword: 'Kanenus Kasa', mentions: '1,420 mentions', sentiment: '96% Positive' },
                  { keyword: 'Ayyaantummaa', mentions: '2,890 mentions', sentiment: '94% Positive' },
                  { keyword: 'Shanan Gadaa', mentions: '940 mentions', sentiment: '92% Positive' },
                  { keyword: 'Oromia Writers', mentions: '620 mentions', sentiment: '98% Positive' },
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${themeClasses.card}`}>
                    <span className="text-xs font-bold text-blue-600 block mb-1">"{item.keyword}"</span>
                    <p className="text-lg font-bold mb-1">{item.mentions}</p>
                    <span className="text-[11px] text-emerald-600 font-bold">{item.sentiment}</span>
                  </div>
                ))}
              </div>

              {/* Feed */}
              <div className={`p-6 rounded-3xl border space-y-4 ${themeClasses.card}`}>
                <h3 className="font-bold text-base">Incoming Public Mentions Stream</h3>
                <div className="space-y-3">
                  {[
                    { source: 'Facebook Public Group', user: 'Oromia Literary Society', text: 'Obbo Kanenus Kasa Bayisa kitaaba haaraa Ayyaantummaa jedhamu eebbisiisuuf deema. Baga gammaddan!', time: '2h ago' },
                    { source: 'TikTok Viral Clip', user: '@afaan_oromoo_edu', text: 'Barnoota aadaa obbo Kanenus irraa argannu baay\'ee nama bohaarsa.', time: '5h ago' },
                    { source: 'News Article', user: 'Addis Standard Culture', text: 'Kanenus Kasa Bayisa advocates for modernizing indigenous African literature through digital platforms.', time: '1d ago' },
                  ].map((m, i) => (
                    <div key={i} className={`p-4 rounded-2xl border text-xs space-y-1.5 ${themeClasses.cardAlt}`}>
                      <div className="flex justify-between text-slate-400">
                        <span className="font-bold text-blue-600">{m.source} • {m.user}</span>
                        <span>{m.time}</span>
                      </div>
                      <p className="leading-relaxed">{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 8: ACCOUNTS & API SETTINGS
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'settings' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold">Social Media API & Connection Hub</h2>
                <p className={`text-xs mt-1 ${themeClasses.mutedText}`}>Manage OAuth tokens, automatic response triggers, and social network integrations.</p>
              </div>

              <div className={`p-6 rounded-3xl border space-y-5 ${themeClasses.card}`}>
                <h3 className="font-bold text-base">Connected Channel Accounts</h3>
                
                <div className="space-y-3">
                  {(['facebook', 'tiktok', 'youtube', 'instagram', 'telegram'] as Platform[]).map(p => {
                    const info = platformMeta[p];
                    return (
                      <div key={p} className={`p-4 rounded-2xl border flex items-center justify-between ${themeClasses.cardAlt}`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl ${info.bgBadge} flex items-center justify-center`}>
                            {info.icon}
                          </div>
                          <div>
                            <p className="font-bold text-sm">{info.name}</p>
                            <p className={`text-xs ${themeClasses.mutedText}`}>{info.handle} • Status: <span className="text-emerald-600 font-bold">Active & Synced</span></p>
                          </div>
                        </div>
                        <button onClick={() => alert(`${info.name} credentials refreshed successfully.`)} className="px-3.5 py-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium transition shadow-xs">
                          Sync Account
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Automation Rules */}
              <div className={`p-6 rounded-3xl border space-y-4 ${themeClasses.card}`}>
                <h3 className="font-bold text-base">Smart Automation Triggers</h3>
                <div className="space-y-3 text-xs">
                  {[
                    { label: 'Auto-reply to book purchase inquiries with official order link', active: true },
                    { label: 'Auto-cross-post TikTok videos directly to Facebook Reels', active: true },
                    { label: 'Auto-publish new YouTube videos to Telegram channel', active: true },
                    { label: 'Filter spam and toxic language across all comment streams', active: true },
                  ].map((rule, i) => (
                    <div key={i} className={`p-3.5 rounded-xl border flex items-center justify-between ${themeClasses.cardAlt}`}>
                      <span>{rule.label}</span>
                      <span className="px-2.5 py-1 rounded-full font-bold bg-emerald-100 text-emerald-800">Active</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
