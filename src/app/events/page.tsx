'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-3xl font-bold font-heading tabular-nums">
            {String(value).padStart(2, '0')}
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-widest mt-2">{unit}</span>
        </div>
      ))}
    </div>
  );
}

const upcomingEvents = [
  {
    title: "Oromia Cultural Literature Forum",
    type: "Panel Discussion",
    date: "October 18, 2026",
    location: "Addis Ababa Cultural Center",
    description: "Kanenus will moderate a panel of leading Oromo authors discussing the future of indigenous literature in the digital age.",
    spots: 12,
    badge: "Upcoming"
  },
  {
    title: "Shanan Gadaa Band — Grand Performance",
    type: "Live Performance",
    date: "November 5, 2026",
    location: "Jimma National Theater",
    description: "A landmark cultural evening featuring the Shanan Gadaa Band under Kanenus's artistic direction, celebrating Oromo musical heritage.",
    spots: 200,
    badge: "Tickets Available"
  },
  {
    title: "East Africa Writers Summit",
    type: "Keynote Speech",
    date: "December 2, 2026",
    location: "Nairobi, Kenya",
    description: "Kanenus delivers a keynote on 'The Role of Social Media in Preserving African Languages and Literature' at the regional writers summit.",
    spots: 8,
    badge: "Featured Speaker"
  },
];

const speakingTopics = [
  "Cultural Heritage Preservation Through Literature",
  "Digital Storytelling for African Creators",
  "Public Relations in the Literary Sector",
  "Building Online Communities Around Culture",
  "The Future of Oromo Language and Literature",
  "Leadership in Creative Organizations",
];

export default function EventsPage() {
  const [form, setForm] = useState({ name: '', org: '', email: '', topic: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fcfdfd] dark:bg-gray-900 min-h-screen">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-12 h-px bg-accent"></span>
            Events & Speaking
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Live Events & <br/>Speaking Engagements</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-16">
            Book Kanenus Kasa Bayisa for your conference, cultural event, or literary festival. Available for keynotes, panels, workshops, and live performances.
          </p>

          {/* Next Event Countdown */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 max-w-2xl mx-auto">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Next Event Starts In</p>
            <h3 className="text-2xl font-heading font-bold mb-8">Oromia Cultural Literature Forum</h3>
            <CountdownTimer targetDate="2026-10-18T09:00:00" />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-accent"></span>
              Schedule
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white">Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="h-1.5 bg-gradient-to-r from-accent to-blue-400"></div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">{event.type}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">{event.badge}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition leading-snug">{event.title}</h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {event.location}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6">{event.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-400">{event.spots} spots remaining</span>
                    <Link href="#book" className="text-accent font-bold text-sm hover:underline flex items-center gap-1">
                      Request Seat
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-accent"></span>
              Speaking Topics
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white">Areas of Expertise</h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {speakingTopics.map((topic, idx) => (
              <span key={idx} className="px-5 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-accent hover:text-accent transition-all duration-200 cursor-default shadow-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-accent"></span>
              Book a Session
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white">Request a Speaking Engagement</h2>
            <p className="text-gray-500 text-lg">Fill out the form below and Kanenus's team will respond within 48 hours.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-3xl p-16 text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary dark:text-white mb-3">Booking Request Received!</h3>
              <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. Kanenus's team will review your request and respond within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Your Name *</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Full name" className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition text-gray-800 dark:text-white"/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Organization *</label>
                  <input type="text" required value={form.org} onChange={e => setForm({...form, org: e.target.value})} placeholder="Company / Event organizer" className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition text-gray-800 dark:text-white"/>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Email *</label>
                  <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition text-gray-800 dark:text-white"/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Preferred Date *</label>
                  <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition text-gray-800 dark:text-white"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Speaking Topic</label>
                <select value={form.topic} onChange={e => setForm({...form, topic: e.target.value})} className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition text-gray-800 dark:text-white">
                  <option value="">Select a topic...</option>
                  {speakingTopics.map((t, i) => <option key={i} value={t}>{t}</option>)}
                  <option value="other">Other / Custom Topic</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Event Details *</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about your event, expected audience, duration, and any special requirements..." className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition resize-none text-gray-800 dark:text-white"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-primary text-white font-bold uppercase tracking-widest rounded-xl hover:bg-accent transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm">
                Submit Booking Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
