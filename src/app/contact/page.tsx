import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16 space-y-6">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-accent"></span>
              Inquiries
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading text-primary font-bold">Connect With Kanenus</h1>
            <p className="text-gray-500 text-lg">
              Available for media interviews, speaking engagements, literary collaborations, and strategic partnerships.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-12 mb-12">
            <ContactForm />
          </div>

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Or Connect Across Official Channels</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://web.facebook.com/kanenus.kasa.33" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition text-xs font-bold flex items-center gap-2 border border-blue-200">
                Facebook
              </a>
              <a href="https://www.tiktok.com/@kanenus_kasa_bayisa" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-800 hover:bg-black hover:text-white transition text-xs font-bold flex items-center gap-2 border border-slate-300">
                TikTok
              </a>
              <a href="https://youtu.be/2iz2uTZde4s" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-red-50 text-red-700 hover:bg-red-600 hover:text-white transition text-xs font-bold flex items-center gap-2 border border-red-200">
                YouTube
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white transition text-xs font-bold flex items-center gap-2 border border-pink-200">
                Instagram
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white transition text-xs font-bold flex items-center gap-2 border border-sky-200">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
