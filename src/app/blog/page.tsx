import NewsletterForm from '@/components/NewsletterForm';

const articles = [
  {
    category: "Culture",
    title: "The Role of Literature in Preserving Oromo Heritage",
    excerpt: "In an era of rapid globalization, written literature serves as the most durable vessel for oral traditions. Kanenus explores how Oromo storytelling, passed down through generations, can be captured in written form without losing its spiritual and communal essence.",
    readTime: "6 min read",
    date: "August 2026",
  },
  {
    category: "Digital Media",
    title: "Digital Storytelling and the African Creator Economy",
    excerpt: "The rise of TikTok and Facebook has created an unprecedented opportunity for African cultural creators to reach global audiences. This essay examines how platforms built for entertainment can become powerful tools for cultural education and identity affirmation.",
    readTime: "8 min read",
    date: "July 2026",
  },
  {
    category: "PR & Strategy",
    title: "Public Relations in the Literary World",
    excerpt: "Managing communications for authors and cultural institutions requires a unique blend of storytelling instinct and strategic thinking. Drawing from his experience at the Oromia Writers Association, Kanenus outlines a modern PR framework for the literary sector.",
    readTime: "5 min read",
    date: "June 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#fcfdfd] dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            Written Insights
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Articles & Essays</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cultural reflections, literary insights, and public discourse from Kanenus Kasa Bayisa — published to inform, inspire, and preserve.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">
                {/* Color Top Bar */}
                <div className="h-1.5 bg-gradient-to-r from-accent to-blue-400"></div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">{article.category}</span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>

                  <h2 className="text-xl font-heading font-bold text-primary dark:text-white mb-4 group-hover:text-accent transition leading-snug">{article.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6">{article.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      {article.readTime}
                    </span>
                    <button disabled className="flex items-center gap-1 px-4 py-2 text-xs font-bold text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full cursor-not-allowed">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0b1a30] to-[#122a4f] text-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">More Articles Coming Soon</h2>
          <p className="text-gray-300 mb-8">Subscribe to be the first to receive new essays and cultural reflections directly in your inbox.</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
