'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <div className="text-center py-3 px-6 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 font-medium text-sm">
        ✓ Thank you! You're now subscribed.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent text-sm backdrop-blur-sm"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-accent text-white font-bold rounded-full hover:bg-blue-500 transition text-sm whitespace-nowrap shadow-lg"
      >
        Subscribe
      </button>
    </form>
  );
}
