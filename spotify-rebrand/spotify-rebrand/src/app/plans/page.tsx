'use client';
import React from 'react';
import Link from 'next/link';

export default function Plans() {
  const plans = [
    {
      name: 'Free',
      price: '₹0/mo',
      features: [
        'AI-curated playlists (limited)',
        'Ad-supported listening',
        'Standard audio quality',
      ],
      bg: 'bg-gray-800',
    },
    {
      name: 'Premium',
      price: '₹199/mo',
      features: [
        'Unlimited skips',
        'No ads',
        'Offline listening',
        'High-quality audio',
      ],
      bg: 'bg-green-600',
    },
    {
      name: 'Pro',
      price: '₹399/mo',
      features: [
        'AI DJ & mood engine',
        'Priority support',
        'Multi-device streaming',
        'Lossless audio',
      ],
      bg: 'bg-purple-700',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* 🔙 Back to Home Button */}
        <div className="mb-6">
          <Link href="/">
            <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              ← Back to Home
            </button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">💎 Choose Your Plan</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-xl hover:scale-105 transition-all duration-300 ${plan.bg}`}
            >
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-3xl font-extrabold mb-4">{plan.price}</p>

              <ul className="text-white/90 text-sm mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>

              <button className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
