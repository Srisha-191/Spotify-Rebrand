'use client';
import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">

        {/* 🔙 Back to Home */}
        <div className="mb-6">
          <Link href="/">
            <button className="bg-white text-black font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition">
              ← Back to Home
            </button>
          </Link>
        </div>

        {/* 📬 Title */}
        <h1 className="text-4xl font-bold mb-8 text-center">📬 Contact Us</h1>

        {/* 📋 Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded bg-white text-black"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded bg-white text-black"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Type your message..."
              className="w-full p-3 rounded bg-white text-black"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
