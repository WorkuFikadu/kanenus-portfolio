export default function AboutPage() {
  return (
    <div className="bg-[#fcfdfd] dark:bg-gray-900 text-gray-800 selection:bg-accent selection:text-white min-h-screen">

      {/* Header */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            Biography
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">The Voice Behind the Words</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Cultural ambassador, literary pioneer, and digital community builder</p>
        </div>
      </section>

      {/* Bio + Stats */}
      <section className="py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-loose">
              <p>
                <strong className="text-primary dark:text-white font-bold">Kanenus Kasa Bayisa</strong> is a distinguished professional writer, cultural ambassador, and creative leader dedicated to the elevation of African heritage. Operating at the intersection of literature, public relations, and digital media, Kanenus captures the essence of cultural identity while addressing contemporary themes.
              </p>
              <p>
                As the <span className="text-primary dark:text-white font-medium">Public Relations Manager at the Oromia Writers Association</span>, he orchestrates strategic communications, fostering institutional partnerships and advocating for emerging authors on national and international stages.
              </p>
              <p>
                Beyond literature, Kanenus guides the artistic vision of the <span className="text-primary dark:text-white font-medium">Shanan Gadaa Band</span> as its Director. Under his leadership, the ensemble serves as a dynamic vehicle for cultural expression, utilizing traditional melodies to inspire audiences across generations.
              </p>
              <p>
                Through his digital platform <span className="text-primary dark:text-white font-medium">Hizbii Keenya</span>, Kanenus has built an extraordinary online community of over <strong>125,000 active followers</strong> on Facebook and TikTok — proving that cultural promotion and modern technology can coexist powerfully.
              </p>
            </div>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { number: "125K+", label: "Active Followers", desc: "Digital Community" },
                { number: "PR", label: "Manager", desc: "Oromia Writers Assoc." },
                { number: "Director", label: "Leadership", desc: "Shanan Gadaa Band" },
                { number: "Author", label: "Literature", desc: "Cultural Storytelling" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-accent/30 hover:shadow-xl transition duration-300 group flex flex-col justify-center">
                  <h3 className="text-4xl font-heading font-bold text-primary dark:text-white mb-2 group-hover:text-accent transition">{stat.number}</h3>
                  <p className="font-bold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 bg-[#0b1a30] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Core Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>,
                title: "Literary Authorship",
                desc: "Crafting profound cultural narratives, historical records, and thought-provoking literature that endures."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>,
                title: "Public Relations",
                desc: "Directing high-level communications, media strategies, and institutional networking for literary bodies."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>,
                title: "Digital Community",
                desc: "Building massive, engaged online audiences and shaping digital cultural discourse for new generations."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300 group">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-accent"></span>
              Testimonials
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white">What People Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Lemma Girma",
                role: "Chair, Ethiopian Writers Guild",
                quote: "Kanenus represents the future of African literature. His ability to blend cultural depth with modern communication is truly unmatched in our generation."
              },
              {
                name: "Fatuma Abdella",
                role: "Senior Editor, Oromia Publishing House",
                quote: "Working with Kanenus as our PR Manager has been transformative. He elevated our organization's profile on the national stage in ways we had never imagined possible."
              },
              {
                name: "Mulugeta Bekele",
                role: "Cultural Affairs Advisor",
                quote: "His digital reach of 125,000+ is not just a number — it represents a community he has genuinely built through authentic storytelling and relentless dedication to culture."
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 p-8 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="text-6xl font-heading text-accent leading-none mb-4 opacity-40">&ldquo;</div>
                <p className="italic text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-1 mb-8">{t.quote}</p>
                <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
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
