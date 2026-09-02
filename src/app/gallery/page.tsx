import fs from 'fs';
import path from 'path';

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  let galleryImages: string[] = [];
  try {
    if (fs.existsSync(galleryDir)) {
      galleryImages = fs.readdirSync(galleryDir).filter(file => 
        file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')
      );
    }
  } catch (error) {
    console.error("Failed to read gallery images", error);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-accent"></span>
              Visual Portfolio
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading text-primary font-bold">Cultural Promotion in Pictures</h1>
            <p className="text-gray-500 text-lg">
              A curated visual journey showcasing Kanenus's active engagement in cultural events, public speaking, literary gatherings, and community leadership.
            </p>
          </div>
          
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 group cursor-pointer">
                  <img 
                    src={`/gallery/${img}`} 
                    alt={`Kanenus Cultural Event ${idx + 1}`} 
                    className="object-cover w-full h-full transform transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a30]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md">Archive</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-16 text-center rounded-2xl border border-gray-200">
              <p className="text-gray-400 italic text-lg">Gallery images are being prepared...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
