import NavigationBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function BattleField() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 gradient-text">Battle Arena</h1>
          <p className="text-slate-400">Challenge other trainers and climb the leaderboard!</p>
        </div>

        {/* Battle Field */}
        <div className="card-container">
          {/* Battle Status */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-semibold text-white">Battle #428</div>
            <div className="badge badge-lg bg-indigo-500 text-white border-0">TURN 3</div>
            <div className="text-lg font-semibold text-white">02:15 remaining</div>
          </div>

          {/* Battle Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Opponent Side */}
            <div className="order-2 lg:order-1">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-white">Opponent: PokeMaster42</h2>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="badge badge-primary">Rank: 24</div>
                  <div className="badge bg-slate-700 text-slate-300">Win: 87%</div>
                </div>
              </div>

              <div className="card-container bg-gradient-to-br from-red-500/30 to-orange-600/30 border-red-500/30">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">HP:</span>
                    <div className="w-40 h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full" style={{ width: '35%' }}></div>
                    </div>
                    <span className="text-white">35/100</span>
                  </div>
                  <div>
                    <span className="badge bg-red-500/20 text-red-300 border-red-500/30">Fire</span>
                  </div>
                </div>

                <div className="flex items-center justify-center my-4">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                    alt="Opponent Pokemon"
                    className="h-40 w-40 object-contain drop-shadow-lg transform scale-x-[-1]"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-white">Charizard</h3>
                  <div className="flex justify-center gap-2 mt-2">
                    <div className="badge badge-sm bg-slate-700 text-slate-300">Power: 84</div>
                    <div className="badge badge-sm bg-slate-700 text-slate-300">Defense: 78</div>
                    <div className="badge badge-sm bg-slate-700 text-slate-300">Speed: 100</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Battle Log & VS */}
            <div className="col-span-1 lg:col-span-2 order-1 lg:order-2 flex flex-col items-center">
              <div className="w-full max-w-lg flex flex-col items-center">
                <div className="text-4xl font-bold my-4 gradient-text">VS</div>

                <div className="card-container w-full">
                  <h3 className="card-title text-lg text-white">Battle Log</h3>
                  <div className="overflow-y-auto h-32 bg-slate-800 rounded-lg p-3 text-sm space-y-2 mt-2">
                    <p><span className="font-bold text-indigo-400">Turn 1:</span> Pikachu used Thunder Shock! It's super effective!</p>
                    <p><span className="font-bold text-red-400">Turn 2:</span> Charizard used Flamethrower! Pikachu loses 25 HP.</p>
                    <p><span className="font-bold text-indigo-400">Turn 3:</span> Pikachu used Quick Attack! Charizard loses 15 HP.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Player Side */}
            <div className="order-3 lg:order-3">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-white">You: ElectricTrainer</h2>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="badge badge-secondary">Rank: 45</div>
                  <div className="badge bg-slate-700 text-slate-300">Win: 72%</div>
                </div>
              </div>

              <div className="card-container bg-gradient-to-br from-yellow-500/30 to-amber-600/30 border-yellow-500/30">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">HP:</span>
                    <div className="w-40 h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-white">75/100</span>
                  </div>
                  <div>
                    <span className="badge bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Electric</span>
                  </div>
                </div>

                <div className="flex items-center justify-center my-4">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="Your Pokemon"
                    className="h-40 w-40 object-contain drop-shadow-lg"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-white">Pikachu</h3>
                  <div className="flex justify-center gap-2 mt-2">
                    <div className="badge badge-sm bg-slate-700 text-slate-300">Power: 55</div>
                    <div className="badge badge-sm bg-slate-700 text-slate-300">Defense: 40</div>
                    <div className="badge badge-sm bg-slate-700 text-slate-300">Speed: 90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8">
            <h3 className="font-bold text-lg mb-4 text-white">Choose Your Move:</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="btn bg-indigo-500 border-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white">Thunder Shock</button>
              <button className="btn bg-purple-600 border-purple-600 hover:bg-purple-700 hover:border-purple-700 text-white">Quick Attack</button>
              <button className="btn bg-pink-500 border-pink-500 hover:bg-pink-600 hover:border-pink-600 text-white">Iron Tail</button>
              <button className="btn bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 text-white">Thunder Wave</button>
            </div>

            <div className="divider text-slate-400">OR</div>

            <div className="flex justify-center gap-4">
              <button className="btn bg-slate-700 border-slate-700 hover:bg-slate-600 hover:border-slate-600 text-white">Switch Pokémon</button>
              <button className="btn bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 text-white">Surrender</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default BattleField;
