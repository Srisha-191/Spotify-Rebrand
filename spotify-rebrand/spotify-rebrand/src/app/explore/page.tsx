'use client'
import React from 'react'

export default function Explore() {
  const tracks = [
    {
      title: "🔥 Trending Now",
      poster: "https://i.scdn.co/image/ab67616d0000b273a6d5c08a4694e2c34146c010",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      bg: "bg-red-500",
    },
    {
      title: "🌙 Chill Vibes",
      poster: "https://i.scdn.co/image/ab67616d0000b273e1c54062d5cfb61b83c5c897",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      bg: "bg-blue-600",
    },
    {
      title: "💪 Workout Mix",
      poster: "https://i.scdn.co/image/ab67616d0000b2734f2baf9dc4d1b1c9b6d225e6",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      bg: "bg-green-600",
    },
    {
      title: "🎧 Focus Beats",
      poster: "https://i.scdn.co/image/ab67616d0000b273fc9249f3e3b898f79b3fa1c0",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      bg: "bg-purple-600",
    },
    {
      title: "🎉 Party Time",
      poster: "https://i.scdn.co/image/ab67616d0000b273a99f56eb3f437a1b44f9448b",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      bg: "bg-yellow-400 text-black",
    },
    {
      title: "🚗 Road Trip",
      poster: "https://i.scdn.co/image/ab67616d0000b273e3beceebf64e1d5b57f7c727",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
      bg: "bg-orange-500",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">🎵 Explore Top Tracks</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-center space-y-4 shadow-lg hover:scale-105 transition ${track.bg}`}
          >
            <h3 className="text-xl font-bold">{track.title}</h3>
            <img
              src={track.poster}
              alt={track.title}
              className="w-48 h-48 mx-auto rounded-lg shadow-md"
            />
            <audio controls className="w-full">
              <source src={track.audio} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-12">
        <a
          href="/"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
