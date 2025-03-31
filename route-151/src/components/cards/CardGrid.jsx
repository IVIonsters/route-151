import PokemonCard from "./PokemonCard";

function CardGrid() {
  // Using an array to render multiple cards for demo layout
  const demoCards = Array(12).fill(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {demoCards.map((_, index) => (
        <PokemonCard key={index} />
      ))}
    </div>
  );
}

export default CardGrid;
