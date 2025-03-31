import NavigationBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function UserProfile() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="card-container mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-indigo-500 ring-offset-slate-900 ring-offset-2">
                <img src="https://api.dicebear.com/6.x/personas/svg?seed=PokemonTrainer" alt="Profile" />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white">Ash Ketchum</h1>
              <p className="text-slate-400">@PokeMaster99</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="badge bg-indigo-500 text-white border-0">Elite Trainer</div>
                <div className="badge bg-slate-700 text-slate-300 border-slate-600">Kanto Champion</div>
                <div className="badge bg-purple-600 text-white border-0">100+ Battles</div>
              </div>
            </div>

            <div className="stats shadow bg-slate-800">
              <div className="stat place-items-center">
                <div className="stat-title text-slate-400">Collection</div>
                <div className="stat-value text-white">89</div>
                <div className="stat-desc text-slate-500">Pokémon Cards</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title text-slate-400">Wins</div>
                <div className="stat-value text-green-400">85%</div>
                <div className="stat-desc text-slate-500">120/142 battles</div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="flex justify-between flex-wrap gap-4">
            <div className="flex gap-2">
              <button className="gradient-button py-2 px-4">Edit Profile</button>
              <button className="secondary-button py-2 px-4">Share Profile</button>
            </div>

            <div className="flex gap-2">
              <button className="btn btn-ghost text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="tabs tabs-boxed mb-6 bg-slate-800">
          <a className="tab text-white bg-indigo-500">Collection</a>
          <a className="tab text-slate-400 hover:text-white">Battle History</a>
          <a className="tab text-slate-400 hover:text-white">Achievements</a>
          <a className="tab text-slate-400 hover:text-white">Decks</a>
        </div>

        {/* Collection Section */}
        <div className="grid grid-cols-1 gap-6">
          {/* Collection Stats */}
          <div className="card-container">
            <h2 className="text-xl font-bold mb-4 text-white">Collection Stats</h2>

            <div className="stats stats-vertical lg:stats-horizontal shadow bg-slate-800">
              <div className="stat">
                <div className="stat-figure text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="stat-title text-slate-400">Total Cards</div>
                <div className="stat-value text-white">89</div>
                <div className="stat-desc text-slate-500">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="stat-title text-slate-400">Unique Types</div>
                <div className="stat-value text-white">15</div>
                <div className="stat-desc text-slate-500">3 types missing</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-pink-500">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Charizard" />
                    </div>
                  </div>
                </div>
                <div className="stat-title text-slate-400">Rarest Card</div>
                <div className="stat-value text-white">Charizard</div>
                <div className="stat-desc text-green-400">Legendary</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-white">Type Distribution</h3>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-lg bg-blue-500/20 text-blue-300 border-blue-500/30">Water: 12</div>
                <div className="badge badge-lg bg-red-500/20 text-red-300 border-red-500/30">Fire: 15</div>
                <div className="badge badge-lg bg-green-500/20 text-green-300 border-green-500/30">Grass: 9</div>
                <div className="badge badge-lg bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Electric: 7</div>
                <div className="badge badge-lg bg-purple-500/20 text-purple-300 border-purple-500/30">Psychic: 11</div>
                <div className="badge badge-lg bg-amber-500/20 text-amber-300 border-amber-500/30">Fighting: 8</div>
                <div className="badge badge-lg bg-slate-500/20 text-slate-300 border-slate-500/30">Normal: 14</div>
                <div className="badge badge-lg bg-indigo-500/20 text-indigo-300 border-indigo-500/30">Ghost: 5</div>
              </div>
            </div>
          </div>

          {/* Card Collection */}
          <div className="card-container">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">My Collection</h2>
              <div className="flex gap-2">
                <select className="select select-bordered select-sm bg-slate-800 border-slate-700 text-slate-300">
                  <option disabled selected>Sort by</option>
                  <option>Date Added</option>
                  <option>Name</option>
                  <option>Type</option>
                  <option>Rarity</option>
                </select>
                <button className="btn btn-sm btn-ghost text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Card Items */}
              {Array(15).fill(null).map((_, i) => (
                <div key={i} className="card bg-slate-700 shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-lg overflow-hidden">
                  <figure className="px-3 pt-3">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 4}.png`} alt="Pokemon" className="rounded-md bg-slate-600/50 p-2" />
                  </figure>
                  <div className="card-body p-3 text-center">
                    <h3 className="font-medium text-sm text-white">Pokemon #{i + 4}</h3>
                    <div className="flex justify-center gap-1">
                      <span className="badge badge-xs bg-red-500/20 text-red-300 border-red-500/30">Fire</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="join">
                <button className="join-item btn btn-sm bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">«</button>
                <button className="join-item btn btn-sm bg-indigo-500 border-indigo-500 text-white hover:bg-indigo-600">1</button>
                <button className="join-item btn btn-sm bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">2</button>
                <button className="join-item btn btn-sm bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">3</button>
                <button className="join-item btn btn-sm bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">»</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default UserProfile;
