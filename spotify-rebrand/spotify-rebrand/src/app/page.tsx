export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-green-500 text-black px-6 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">🎧 SRISHA-SPOTIFY</h1>
        <nav className="space-x-6 text-lg font-medium">
          <a href="/" className="hover:underline">Home</a>
          <a href="/explore" className="hover:underline">Explore</a>
          <a href="/plans" className="hover:underline">Plans</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-5xl font-bold mb-4">Welcome to Srisha Spotify app</h2>
        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
          Every mood has a melody.Discover playlist curated just for you
        </p>
        <a href="/explore">
          <button className="bg-green-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-green-400 transition">
            Explore Now
          </button>
        </a>
      </section>

      {/* Features Section */}
      <section className="bg-black py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">✨ Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2">🎵 Smart Playlists</h4>
            <p className="text-gray-300">Driven recommendations that adapt to your mood and behavior.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2">📱 Fully Responsive</h4>
            <p className="text-gray-300">Beautiful experience across desktop, tablet, and mobile devices.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2">🎨 Branding</h4>
            <p className="text-gray-300">Modern look & feel built with Tailwind CSS.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-400 border-t border-gray-700">
        © 2025 SRISHA-SPOTIFY. Built with interest and i love music as well as, so I like to create. 
      </footer>
    </main>
  );
}
