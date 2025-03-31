function FilterSidebar() {
  const pokemonTypes = [
    "Normal", "Fire", "Water", "Electric", "Grass", "Ice",
    "Fighting", "Poison", "Ground", "Flying", "Psychic",
    "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3 text-white">Pokémon Type</h3>
        <div className="flex flex-wrap gap-2">
          {pokemonTypes.map(type => (
            <label key={type} className="cursor-pointer inline-flex items-center">
              <input type="checkbox" className="checkbox checkbox-xs checkbox-primary mr-1" />
              <span className="text-sm text-slate-300">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      <div>
        <h3 className="font-medium mb-3 text-white">Generation</h3>
        <div className="space-y-2">
          <label className="cursor-pointer flex items-center">
            <input type="checkbox" className="checkbox checkbox-xs checkbox-primary mr-2" />
            <span className="text-slate-300">Generation I</span>
          </label>
          <label className="cursor-pointer flex items-center">
            <input type="checkbox" className="checkbox checkbox-xs checkbox-primary mr-2" />
            <span className="text-slate-300">Generation II</span>
          </label>
          <label className="cursor-pointer flex items-center">
            <input type="checkbox" className="checkbox checkbox-xs checkbox-primary mr-2" />
            <span className="text-slate-300">Generation III</span>
          </label>
          <label className="cursor-pointer flex items-center">
            <input type="checkbox" className="checkbox checkbox-xs checkbox-primary mr-2" />
            <span className="text-slate-300">Generation IV</span>
          </label>
          <label className="cursor-pointer flex items-center">
            <input type="checkbox" className="checkbox checkbox-xs checkbox-primary mr-2" />
            <span className="text-slate-300">Generation V</span>
          </label>
        </div>
      </div>

      <div className="divider"></div>

      <div>
        <h3 className="font-medium mb-3 text-white">Sort By</h3>
        <select className="select select-bordered w-full bg-slate-800 border-slate-700 text-slate-300">
          <option>Number (Ascending)</option>
          <option>Number (Descending)</option>
          <option>Name (A-Z)</option>
          <option>Name (Z-A)</option>
        </select>
      </div>

      <div className="pt-4 flex gap-2">
        <button className="gradient-button w-full text-sm py-2">Apply Filters</button>
        <button className="secondary-button w-1/3 text-sm py-2">Reset</button>
      </div>
    </div>
  );
}

export default FilterSidebar;
