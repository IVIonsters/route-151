//Grab Elements 
const generateBtn = document.getElementById('generate')
const clearFavorites = document.getElementById('clear-favorites')

//Event Listeners 
generateBtn.addEventListener('click', fetchPokeData)


// fetch API Data
async function fetchPokeData() {
  const url = "https://pokeapi.co/api/v2/pokemon/35/"
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response statues: ${response.status}`)
    }
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.error("API failed to find data", error.message)
  }
}

