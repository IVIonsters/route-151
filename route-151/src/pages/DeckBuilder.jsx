import NavigationBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function DeckBuilder() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-text">Deck Builder</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Card Selection */}
          <div className="lg:col-span-8 card-container">
            <div>
              <h2 className="text-xl font-bold mb-6 text-white">Available Cards</h2>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="form-control flex-1">
                  <div className="input-group">
                    <input type="text" placeholder="Search cards..." className="input input-bordered w-full bg-slate-800 border-slate-700 text-white" />
                    <button className="btn bg-indigo-500 border-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <select className="select select-bordered w-full sm:w-auto bg-slate-800 border-slate-700 text-slate-300">
                  <option disabled selected>Type</option>
                  <option>Water</option>
                  <option>Fire</option>
                  <option>Grass</option>
                  <option>Electric</option>
                  <option>Psychic</option>
                </select>

                <select className="select select-bordered w-full sm:w-auto bg-slate-800 border-slate-700 text-slate-300">
                  <option disabled selected>Sort by</option>
                  <option>Name</option>
                  <option>Power</option>
                  <option>Rarity</option>
                </select>
              </div>

              {/* Card Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {Array(10).fill(null).map((_, i) => (
                  <div key={i} className="card bg-slate-700 shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-lg overflow-hidden">
                    <figure className="px-3 pt-3">
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} alt="Pokemon" className="rounded-md bg-slate-600/50 p-2" />
                    </figure>
                    <div className="card-body p-3 text-center">
                      <h3 className="font-medium text-sm text-white">Pokemon #{i + 1}</h3>
                      <div className="flex justify-center gap-1">
                        <span className="badge badge-sm bg-indigo-500 border-0 text-white">Fire</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-6">
                <div className="join">
                  <button className="join-item btn btn-sm bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">«</button>
                  <button className="join-item btn btn-sm bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">1</button>
                  <button className="join-item btn btn-sm bg-indigo-500 border-indigo-500 text-white hover:bg-indigo-600">2</button>
                  <button className="join-item btn btn-sm bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">3</button>
                  <button className="join-item btn btn-sm bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">»</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Deck Preview */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Deck Info */}
            <div className="card-container">
              <h2 className="text-xl font-bold mb-4 text-white">Deck Information</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Deck Name</span>
                </label>
                <input type="text" placeholder="My Awesome Deck" className="input input-bordered bg-slate-800 border-slate-700 text-white" />
              </div>

              <div className="stats bg-slate-700 shadow mt-4 text-slate-300">
                <div className="stat">
                  <div className="stat-title text-slate-400">Cards</div>
                  <div className="stat-value text-white">12/20</div>
                </div>
                <div className="stat">
                  <div className="stat-title text-slate-400">Types</div>
                  <div className="stat-value text-indigo-400">4</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <div className="badge badge-lg bg-blue-500/20 text-blue-300 border-blue-500/30">Water: 3</div>
                <div className="badge badge-lg bg-red-500/20 text-red-300 border-red-500/30">Fire: 4</div>
                <div className="badge badge-lg bg-green-500/20 text-green-300 border-green-500/30">Grass: 2</div>
                <div className="badge badge-lg bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Electric: 3</div>
              </div>

              <div className="card-actions justify-end mt-4">
                <button className="gradient-button py-2">Save Deck</button>
                <button className="secondary-button py-2">Clear</button>
              </div>
            </div>

            {/* Deck Preview */}
            <div className="card-container flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Deck Preview</h2>
                <button className="btn btn-sm btn-ghost text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
                {/* Deck Card (repeated) */}
                {Array(6).fill(null).map((_, i) => (
                  <div key={i} className="card bg-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <figure className="px-2 pt-2">
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 10}.png`} alt="Pokemon" className="rounded-md h-16 w-16 bg-slate-600/50 p-1" />
                    </figure>
                    <div className="p-2 text-center">
                      <h3 className="font-medium text-xs text-white">Pokemon #{i + 10}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DeckBuilder;
