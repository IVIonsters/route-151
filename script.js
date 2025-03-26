//Grab Elements 
const generateBtn = document.getElementById('generate')
const clearFavorites = document.getElementById('clear-favorites')
const pokemonCardContainer = document.getElementById('pokemon-card')

//Event Listeners 
generateBtn.addEventListener('click', function () {
  // Get a random Pokemon ID
  const randomId = randomPokemon();
  // Pass it to the fetch function
  fetchPokeData(randomId);
})

//Generate Random ID
function randomPokemon() {
  let max = 152;
  let min = 1;
  let pokemonId = Math.floor(Math.random() * (max - min) + min);
  console.log("Random Pokemon ID:", pokemonId);
  return pokemonId
}

// fetch API Data
async function fetchPokeData(pokemonId) {
  // Default to ID 25 (Pikachu) if no ID is provided
  const id = pokemonId || 25;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response statues: ${response.status}`)
    }
    const pokemon = await response.json();
    // console.log(pokemon)
    displayPokemon(pokemon)
  } catch (error) {
    console.error("API failed to find data", error.message)
  }
}

//Display PokemonData
function displayPokemon(pokemon) {
  // Format the ID with leading zeros
  const formattedId = String(pokemon.id).padStart(3, '0');

  // Get primary type for theming
  const primaryType = pokemon.types[0].type.name;
  const typeColor = getTypeColor(primaryType);
  const gradientColors = getTypeGradient(primaryType);

  // Create HTML for the pokemon card
  const pokemonCard = `
    <article class="pokemon-card relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-${typeColor}/50 transform hover:-translate-y-1">
      <!-- Card Background with Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-90"></div>
      
      <!-- Card Content -->
      <div class="relative p-6 z-10">
        <!-- Card Header with Name and ID -->
        <header class="card-header flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold capitalize text-white">${pokemon.name}</h2>
          <span class="text-white/70 font-mono bg-black/20 px-2 py-1 rounded-md text-sm">#${formattedId}</span>
        </header>
        
        <!-- Pokemon Image -->
        <figure class="card-image bg-white/10 backdrop-blur-sm rounded-xl flex justify-center items-center p-4 mb-6 border border-white/20">
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-40 h-40 object-contain drop-shadow-lg">
        </figure>
        
        <!-- Type Badges -->
        <ul class="type-badges flex gap-2 mb-6">
          ${pokemon.types.map(typeInfo =>
    `<li class="type-badge px-4 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm border border-white/10 shadow-md">${typeInfo.type.name}</li>`
  ).join('')}
        </ul>
        
        <!-- Stats -->
        <section class="stats-container bg-black/20 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
          <h3 class="text-lg font-semibold mb-3 text-white">Stats</h3>
          <dl class="stats space-y-2">
            ${pokemon.stats.map(stat => {
    const percentage = (stat.base_stat / 255) * 100;
    return `
              <div class="stat">
                <div class="flex justify-between items-center mb-1">
                  <dt class="stat-name text-white/70 text-sm">${formatStatName(stat.stat.name)}</dt>
                  <dd class="stat-value text-white font-medium">${stat.base_stat}</dd>
                </div>
                <div class="w-full bg-black/30 rounded-full h-2">
                  <div class="bg-white/80 h-2 rounded-full" style="width: ${percentage}%"></div>
                </div>
              </div>`;
  }).join('')}
          </dl>
        </section>
        
        <!-- Physical Attributes -->
        <section class="physical-attrs grid grid-cols-2 gap-4 mb-6">
          <dl class="attr bg-black/20 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
            <dt class="text-white/70 text-xs mb-1">Height</dt>
            <dd class="text-white font-medium">${(pokemon.height / 10).toFixed(1)}m</dd>
          </dl>
          <dl class="attr bg-black/20 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
            <dt class="text-white/70 text-xs mb-1">Weight</dt>
            <dd class="text-white font-medium">${(pokemon.weight / 10).toFixed(1)}kg</dd>
          </dl>
        </section>
        
        <!-- Save Button -->
        <footer>
          <button id="save-btn" class="favorite-btn w-full bg-white/90 text-gray-800 py-3 px-4 rounded-xl font-semibold shadow-lg hover:bg-white transition-all duration-300 flex justify-center items-center gap-2" data-id="${pokemon.id}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            Save to Favorites
          </button>
        </footer>
      </div>
    </article>
  `;

  // Insert the card into the container
  pokemonCardContainer.innerHTML = pokemonCard;
}

// Helper function to format stat names
function formatStatName(statName) {
  switch (statName) {
    case 'hp': return 'HP';
    case 'attack': return 'Attack';
    case 'defense': return 'Defense';
    case 'special-attack': return 'Sp. Attack';
    case 'special-defense': return 'Sp. Defense';
    case 'speed': return 'Speed';
    default: return statName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
}

// Helper function to get color class based on Pokémon type
function getTypeColor(type) {
  const typeColors = {
    normal: 'slate-500',
    fire: 'orange-500',
    water: 'blue-500',
    electric: 'amber-400',
    grass: 'emerald-500',
    ice: 'cyan-400',
    fighting: 'rose-600',
    poison: 'violet-500',
    ground: 'amber-700',
    flying: 'sky-400',
    psychic: 'fuchsia-500',
    bug: 'lime-500',
    rock: 'stone-600',
    ghost: 'indigo-600',
    dragon: 'indigo-500',
    dark: 'slate-800',
    steel: 'slate-400',
    fairy: 'pink-400'
  };

  return typeColors[type] || 'slate-500';
}

// New helper function to get gradient colors for each type
function getTypeGradient(type) {
  const typeGradients = {
    normal: 'from-slate-500 to-slate-700',
    fire: 'from-orange-500 to-red-700',
    water: 'from-blue-400 to-blue-700',
    electric: 'from-amber-300 to-amber-600',
    grass: 'from-emerald-400 to-emerald-700',
    ice: 'from-cyan-300 to-cyan-600',
    fighting: 'from-rose-500 to-rose-800',
    poison: 'from-violet-400 to-violet-700',
    ground: 'from-amber-600 to-amber-900',
    flying: 'from-sky-300 to-sky-600',
    psychic: 'from-fuchsia-400 to-fuchsia-700',
    bug: 'from-lime-400 to-lime-700',
    rock: 'from-stone-500 to-stone-800',
    ghost: 'from-indigo-500 to-indigo-800',
    dragon: 'from-indigo-400 to-purple-800',
    dark: 'from-slate-700 to-slate-900',
    steel: 'from-slate-300 to-slate-600',
    fairy: 'from-pink-300 to-pink-600'
  };

  return typeGradients[type] || 'from-slate-500 to-slate-700';
}

