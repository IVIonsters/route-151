import NavigationBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Settings() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-text">Account Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="card-container">
              <ul className="menu rounded-box gap-2">
                <li>
                  <a className="active bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile
                  </a>
                </li>
                <li>
                  <a className="text-slate-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Security
                  </a>
                </li>
                <li>
                  <a className="text-slate-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    Notifications
                  </a>
                </li>
                <li>
                  <a className="text-slate-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-slate-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Preferences
                  </a>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <a className="text-red-400 hover:text-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Settings Area */}
          <div className="md:col-span-3">
            <div className="card-container">
              <h2 className="text-xl font-bold mb-4 text-white">Profile Settings</h2>

              <form className="space-y-6">
                {/* Profile Picture */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://api.dicebear.com/6.x/personas/svg?seed=PokemonTrainer" alt="Profile" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-white">Profile Picture</h3>
                    <div className="flex gap-2">
                      <button className="btn btn-sm bg-slate-700 text-white hover:bg-slate-600">Upload New</button>
                      <button className="btn btn-sm btn-outline border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-white">Remove</button>
                    </div>
                  </div>
                </div>

                <div className="divider"></div>

                {/* Personal Information */}
                <div>
                  <h3 className="font-semibold mb-4 text-white">Personal Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-slate-300">First Name</span>
                      </label>
                      <input type="text" placeholder="Ash" className="input input-bordered bg-slate-800 border-slate-700 text-white" defaultValue="Ash" />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-slate-300">Last Name</span>
                      </label>
                      <input type="text" placeholder="Ketchum" className="input input-bordered bg-slate-800 border-slate-700 text-white" defaultValue="Ketchum" />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-slate-300">Username</span>
                      </label>
                      <input type="text" placeholder="PokeMaster99" className="input input-bordered bg-slate-800 border-slate-700 text-white" defaultValue="PokeMaster99" />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-slate-300">Email</span>
                      </label>
                      <input type="email" placeholder="ash@example.com" className="input input-bordered bg-slate-800 border-slate-700 text-white" defaultValue="ash@example.com" />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-slate-300">Region</span>
                      </label>
                      <select className="select select-bordered bg-slate-800 border-slate-700 text-white">
                        <option>Kanto</option>
                        <option>Johto</option>
                        <option>Hoenn</option>
                        <option>Sinnoh</option>
                        <option>Unova</option>
                        <option>Kalos</option>
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-slate-300">Trainer Type</span>
                      </label>
                      <select className="select select-bordered bg-slate-800 border-slate-700 text-white">
                        <option>Pokémon Trainer</option>
                        <option>Gym Leader</option>
                        <option>Pokémon Researcher</option>
                        <option>Elite Four</option>
                        <option>Champion</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="divider"></div>

                {/* Bio */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-300">Bio</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24 bg-slate-800 border-slate-700 text-white" placeholder="Tell us about yourself..." defaultValue="I want to be the very best like no one ever was. To catch them is my real test, to train them is my cause!"></textarea>
                </div>

                <div className="divider"></div>

                {/* Preferences */}
                <div>
                  <h3 className="font-semibold mb-4 text-white">Display Preferences</h3>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <span className="label-text text-slate-300">Dark Mode</span>
                      <input type="checkbox" className="toggle toggle-primary" />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <span className="label-text text-slate-300">Show battle animations</span>
                      <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <span className="label-text text-slate-300">Enable sound effects</span>
                      <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <span className="label-text text-slate-300">Show notifications</span>
                      <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                    </label>
                  </div>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button className="gradient-button py-2">Save Changes</button>
                  <button className="secondary-button py-2">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Settings;
