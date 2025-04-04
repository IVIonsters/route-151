function SearchBar() {
  return (
    <div className="form-control mb-6">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search for Pokémon..."
          className="input input-bordered bg-slate-800 border-slate-700 text-white w-full focus:outline-none focus:border-indigo-500"
        />
        <button className="btn bg-indigo-500 border-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
