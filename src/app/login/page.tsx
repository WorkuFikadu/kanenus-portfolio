'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));

    // Simple hardcoded credentials
    if (form.username === 'kanenus' && form.password === 'kanenus2026') {
      localStorage.setItem('kkb_auth', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid username or password. Try kanenus / kanenus2026');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071324] via-[#0b1a30] to-[#122a4f] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] rounded-full bg-accent opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[25rem] h-[25rem] rounded-full bg-blue-400 opacity-10 blur-[80px]"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl items-center justify-center mb-6 shadow-2xl">
            <span className="font-heading text-white text-2xl font-bold">KKB</span>
          </div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Admin Login</h1>
          <p className="text-gray-400 text-sm">Sign in to manage your social media & content</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Username</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                </div>
                <input
                  type="text"
                  value={form.username}
                  onChange={e => setForm({...form, username: e.target.value})}
                  placeholder="Enter username"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                </div>
                <input
                  type="password"
                  value={form.password}
                  onChange={e => setForm({...form, password: e.target.value})}
                  placeholder="Enter password"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-accent text-white font-bold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                  Signing In...
                </>
              ) : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl text-center">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Demo Credentials</p>
            <p className="text-gray-300 text-sm"><span className="text-accent font-bold">kanenus</span> / <span className="text-accent font-bold">kanenus2026</span></p>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-600 text-sm">
          <a href="/" className="text-gray-400 hover:text-accent transition">← Back to Website</a>
        </p>
      </div>
    </div>
  );
}
