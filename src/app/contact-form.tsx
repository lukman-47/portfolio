'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError('Failed to send. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center space-y-4 py-10">
        <div className="text-5xl animate-bounce">🎉</div>
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-slate-400">Thank you for reaching out. I'll reply to your email soon.</p>
        <Button
          variant="outline"
          onClick={() => setSuccess(false)}
          className="border-white/20 text-white hover:bg-white/10"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Field */}
      <div className="space-y-2 text-left">
        <Label htmlFor="name" className="text-slate-300 font-medium">Your Name</Label>
        <Input
          required
          type="text"
          id="name"
          name="name"
          placeholder="Lukman Shaikh"
          className="bg-white/5 border-white/15 text-white placeholder:text-slate-500 focus:border-purple-500 transition-colors"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2 text-left">
        <Label htmlFor="email" className="text-slate-300 font-medium">Your Email</Label>
        <Input
          required
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          className="bg-white/5 border-white/15 text-white placeholder:text-slate-500 focus:border-purple-500 transition-colors"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2 text-left">
        <Label htmlFor="message" className="text-slate-300 font-medium">Message</Label>
        <Textarea
          required
          id="message"
          name="message"
          placeholder="Hi Lukman, I'd like to talk about..."
          rows={5}
          className="bg-white/5 border-white/15 text-white placeholder:text-slate-500 focus:border-purple-500 transition-colors resize-none"
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full relative group overflow-hidden rounded-full py-3 font-bold tracking-wide text-white"
        style={{ background: 'linear-gradient(135deg, #6d28d9, #4f46e5)' }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Sending...
            </>
          ) : (
            <>
              📨 Send Message
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </Button>
    </form>
  );
}
