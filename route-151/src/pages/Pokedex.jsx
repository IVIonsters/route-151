import NavigationBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import SearchBar from "../components/pokedex/SearchBar";
import FilterSidebar from "../components/pokedex/FilterSidebar";
import CardGrid from "../components/cards/CardGrid";

function Pokedex() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters */}
          <aside className="w-full md:w-64 lg:w-72">
            <div className="sticky top-4">
              <div className="card-container">
                <h2 className="text-xl font-bold mb-6 text-white">Filters</h2>
                <FilterSidebar />
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4 gradient-text">Pokédex</h1>
              <p className="text-slate-400 mb-6">
                Explore and discover all Pokémon in your collection
              </p>

              {/* Search bar */}
              <SearchBar />
            </div>

            {/* Cards grid */}
            <div className="card-container mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Browse Pokémon</h2>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-ghost text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                  <button className="btn btn-sm btn-ghost text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9h18v10H3V9zm1-5h16v4H4V4zm8 14v3m-4-3v3m8-3v3"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <CardGrid />

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="join">
                  <button className="join-item btn bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">«</button>
                  <button className="join-item btn bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">1</button>
                  <button className="join-item btn bg-indigo-500 border-indigo-500 text-white hover:bg-indigo-600">2</button>
                  <button className="join-item btn bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">3</button>
                  <button className="join-item btn bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700">»</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Pokedex;
