import NavigationBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col">
      <NavigationBar />

      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-[#0f172a]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">Route-151</h1>
            <p className="mb-5 text-gray-400 text-lg">
              Journey through Route-151 to become the ultimate Pokémon master! Collect, battle, and trade Pokémon cards.
            </p>
            <button className="bg-gradient-to-r from-[#6366f1] to-[#9333ea] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-[#6366f1]/20 hover:from-[#4f46e5] hover:to-[#7e22ce] transition-all duration-300 transform hover:-translate-y-1">Generate Pokémon</button>
            <button className="bg-[#334155] px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-gray-500/20 hover:bg-[#475569] transition-all duration-300 transform hover:-translate-y-1 ml-4">My Collection</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-[#1e293b]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
              A better way to collect Pokémon
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              Explore our interactive Pokémon card collection system with battles and trading.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="bg-[#1e293b]/50 rounded-2xl p-6 backdrop-blur-sm shadow-xl border border-[#334155]/50 transform transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="text-center">
                  <div className="bg-indigo-500/10 rounded-xl p-4 mb-4 inline-block">
                    <img src="https://via.placeholder.com/96" alt="Collection" className="h-24 w-24 rounded-xl" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">Card Collection</h2>
                  <p className="text-gray-400">Collect unique Pokémon cards and build your ultimate collection.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1e293b]/50 rounded-2xl p-6 backdrop-blur-sm shadow-xl border border-[#334155]/50 transform transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="text-center">
                  <div className="bg-purple-500/10 rounded-xl p-4 mb-4 inline-block">
                    <img src="https://via.placeholder.com/96" alt="Battles" className="h-24 w-24 rounded-xl" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">Battle System</h2>
                  <p className="text-gray-400">Challenge other trainers with your collected Pokémon cards.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1e293b]/50 rounded-2xl p-6 backdrop-blur-sm shadow-xl border border-[#334155]/50 transform transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="text-center">
                  <div className="bg-pink-500/10 rounded-xl p-4 mb-4 inline-block">
                    <img src="https://via.placeholder.com/96" alt="Trading" className="h-24 w-24 rounded-xl" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">Trading Platform</h2>
                  <p className="text-gray-400">Trade cards with friends to complete your collection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#6366f1] to-[#9333ea] text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">Ready to start your journey?</span>
            <span className="block">Create your trainer profile today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="btn bg-white text-[#6366f1] hover:bg-gray-100 border-0">
                Sign Up
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="#" className="btn glass text-white">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;