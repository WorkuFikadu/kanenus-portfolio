'use client';
import fs from 'fs';
import path from 'path';
import { useLang } from '@/components/LangContext';

const galleryContent = {
  en: {
    badge: 'Visual Portfolio',
    heading: 'Cultural Promotion in Pictures',
    desc: "A curated visual journey showcasing Kanenus's active engagement in cultural events, public speaking, literary gatherings, and community leadership.",
    archiveBadge: 'Cultural Moment',
    emptyMsg: 'Gallery moments are being prepared...',
  },
  om: {
    badge: 'Suuraalee Aadaa',
    heading: 'Sochii Aadaa Suuraadhaan',
    desc: 'Walgahii aadaa, qophiilee ogbarruu, waltajjiiwwan haasaa, fi hoggansa hawaasaa Kanenus suuraalee filatamaniin dhihaatan.',
    archiveBadge: 'Yeroo Aadaa',
    emptyMsg: 'Suuraaleen qophaa\'aa jiru...',
  },
  am: {
    badge: 'የፎቶ ማዕከል',
    heading: 'የባህል እንቅስቃሴ በምስል',
    desc: 'ቀነኑስ በባህል መድረኮች፣ በስነ-ጽሁፍ ዝግጅቶች እና በማህበረሰብ አመራር ወቅት የነበረውን ተሳትፎ የሚያሳዩ የተመረጡ ፎቶዎች።',
    archiveBadge: 'የባህል ትውስታ',
    emptyMsg: 'ፎቶዎች በመዘጋጀት ላይ ናቸው...',
  }
};

const sampleImages = [
  '541162491_2943637469155328_6917349338980761886_n.jpg',
  '542215310_2944985872353821_1862807247037575291_n.jpg',
  '543118958_2947552745430467_1368589313288512120_n.jpg',
  '544884853_2947567858762289_8646088527851460264_n.jpg',
  '571111242_2997132293805845_7069421411883888637_n.jpg',
  '574101259_3006179576234450_5052014067433980813_n.jpg',
];

export default function GalleryPage() {
  const { lang } = useLang();
  const t = galleryContent[lang];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-accent"></span>
              {t.badge}
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading text-primary dark:text-white font-bold">{t.heading}</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t.desc}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {sampleImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer bg-gray-100 dark:bg-gray-800">
                <img 
                  src={`/gallery/${img}`} 
                  alt={`Kanenus Cultural Moment ${idx + 1}`} 
                  className="object-cover w-full h-full transform transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a30]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                  <span className="inline-block px-3.5 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md">{t.archiveBadge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
