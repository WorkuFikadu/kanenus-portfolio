'use client';
import { useState } from 'react';
import { useLang } from '@/components/LangContext';
import { translations } from '@/lib/translations';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Books', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const { lang } = useLang();
  const t = translations[lang].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setForm({ name: '', email: '', subject: 'Books', message: '' });
  };

  return (
    <div className="bg-[#fcfdfd] dark:bg-gray-900 text-gray-800 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            {t.badge}
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{t.heading}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{t.desc}</p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-14 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">{t.successMsg}</h3>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-blue-600 transition"
                >
                  {lang === 'om' ? 'Ergaa Biroo Ergi' : lang === 'am' ? 'ሌላ መልእክት ላክ' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.nameLabel}</label>
                    <input
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.emailLabel}</label>
                    <input
                      type="email"
                      required
                      placeholder={t.emailPlaceholder}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.typeLabel}</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
                  >
                    <option value="Events">{t.type5}</option>
                    <option value="Promotion">{t.type6}</option>
                    <option value="Books">{t.type1}</option>
                    <option value="Speaking">{t.type2}</option>
                    <option value="Music">{t.type3}</option>
                    <option value="Media">{t.type4}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.msgLabel}</label>
                  <textarea
                    required
                    rows={5}
                    placeholder={t.msgPlaceholder}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent transition shadow-lg text-base"
                >
                  {t.submitBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
