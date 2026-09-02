"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');
    
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Name</label>
          <input type="text" id="name" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Email</label>
          <input type="email" id="email" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition" placeholder="john@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="inquiry" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Inquiry Type</label>
        <select id="inquiry" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition appearance-none">
          <option>Media/Press</option>
          <option>Speaking/Event Invitation</option>
          <option>Publishing Inquiry</option>
          <option>Collaboration</option>
          <option>General Contact</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Message</label>
        <textarea id="message" rows={6} required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none" placeholder="Tell me about your project..."></textarea>
      </div>
      <button type="submit" className="w-full py-4 bg-primary text-white font-bold tracking-widest uppercase rounded-xl hover:bg-accent transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Send Message
      </button>
      {formStatus && (
        <div className="p-4 bg-green-50 text-green-700 text-center rounded-xl font-medium animate-pulse">
          {formStatus}
        </div>
      )}
    </form>
  );
}
