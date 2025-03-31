function PokemonCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      {/* Card Background - using a gradient based on type */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#7e22ce] opacity-90"></div>

      {/* Card Content */}
      <div className="relative p-4 z-10">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold capitalize text-white">Pikachu</h3>
          <span className="text-white/70 font-mono bg-black/20 px-2 py-1 rounded-md text-xs">#025</span>
        </div>

        <figure className="bg-white/10 backdrop-blur-sm rounded-xl flex justify-center items-center p-3 mb-3 border border-white/20">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
            className="h-24 w-24 object-contain drop-shadow-lg"
          />
        </figure>

        <div className="flex justify-center gap-2 mt-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm border border-white/10 shadow-md">Electric</span>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
