'use client';

export default function CVPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Print Button - Hidden on Print */}
      <div className="print:hidden bg-primary py-6 text-center">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-blue-500 transition shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
          </svg>
          Print / Download PDF
        </button>
        <p className="text-white/60 text-sm mt-2">Use your browser's Print dialog to save as PDF</p>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto px-8 py-16 print:py-8 print:px-6">

        {/* Header */}
        <div className="border-b-4 border-accent pb-8 mb-10">
          <h1 className="text-5xl font-heading font-bold text-primary mb-2">Kanenus Kasa Bayisa</h1>
          <p className="text-xl text-accent font-medium mb-4">Professional Author | PR Manager | Cultural Leader | Digital Creator</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium transition">
              ✈️ Telegram
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent rounded"></span>
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            A distinguished professional writer, cultural ambassador, and creative leader with extensive experience in literary authorship, public relations, and digital media. Kanenus Kasa Bayisa has dedicated his career to elevating African heritage through storytelling, strategic communications, and digital content creation, building an online community of over 125,000 engaged followers. Currently serving as PR Manager at the Oromia Writers Association and Director of the Shanan Gadaa Band.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent rounded"></span>
            Professional Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Professional Author",
                company: "Independent",
                date: "August 2025 – Present",
                bullets: [
                  "Authored 'Ayyaantummaa' (2026), a landmark publication exploring Oromo cultural identity and heritage",
                  "Writes essays, cultural commentary, and literary works that serve as educational and historical records",
                  "Engages with national and international literary communities to promote indigenous narratives",
                ]
              },
              {
                title: "Digital Creator & CEO",
                company: "Hizbii Keenya",
                date: "September 2024 – Present",
                bullets: [
                  "Founded and leads Hizbii Keenya, a digital platform for cultural education and promotion",
                  "Built an engaged online community of 125,000+ active followers across TikTok and Facebook",
                  "Directs production of viral, culturally resonant video content reaching millions of views",
                ]
              },
              {
                title: "Director",
                company: "Shanan Gadaa Band",
                date: "March 2023 – Present",
                bullets: [
                  "Provides executive and artistic leadership for the renowned Shanan Gadaa Band",
                  "Oversees performance curation, event management, and strategic artist development",
                  "Successfully positioned the band as a premier ambassador for traditional Oromo music",
                ]
              },
              {
                title: "Public Relations Manager",
                company: "Oromia Writers Association",
                date: "March 2023 – Present",
                bullets: [
                  "Manages all external communications, press releases, and media relations for the organization",
                  "Orchestrates national literary events, author showcases, and public campaigns",
                  "Expanded the association's public profile significantly across print and digital channels",
                ]
              },
            ].map((job, idx) => (
              <div key={idx} className="border-l-4 border-gray-200 pl-6 hover:border-accent transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                  <span className="text-sm text-accent font-bold">{job.date}</span>
                </div>
                <p className="text-gray-500 font-medium mb-3">{job.company}</p>
                <ul className="space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
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
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent rounded"></span>
            Skills & Competencies
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Literary Authorship", "Public Relations", "Digital Content Creation",
              "Cultural Promotion", "Event Management", "Strategic Communications",
              "Audience Building", "Social Media Strategy", "Media Relations",
              "Leadership", "Community Management", "Brand Development"
            ].map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-10">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent rounded"></span>
            Publications
          </h2>
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-bold text-primary">Ayyaantummaa</h3>
            <p className="text-accent font-medium text-sm mb-2">Published 2026</p>
            <p className="text-gray-600">A landmark publication exploring profound cultural themes, identity, tradition, and modernity within the Oromo experience.</p>
          </div>
        </section>

        {/* Digital Presence */}
        <section className="mb-10">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent rounded"></span>
            Digital Presence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-gray-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">125K+</p>
              <p className="text-sm text-gray-500 mt-1">Social Media Followers</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">Facebook</p>
              <p className="text-sm text-gray-500 mt-1">Primary Platform</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">TikTok</p>
              <p className="text-sm text-gray-500 mt-1">Video Content</p>
            </div>
          </div>
        </section>

        {/* Print Footer */}
        <div className="hidden print:block border-t border-gray-200 pt-6 text-center text-gray-400 text-xs">
          Kanenus Kasa Bayisa — kanenusskasabayisa.com — &copy; 2026
        </div>
      </div>
    </div>
  );
}
