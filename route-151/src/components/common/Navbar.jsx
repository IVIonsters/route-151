function NavigationBar() {
  return (
    <div className="navbar bg-[#1e293b]/70 backdrop-blur-sm px-4 lg:px-8 py-3 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow bg-[#1e293b] rounded-box w-52">
            <li><a className="text-gray-400 hover:text-white">Pokédex</a></li>
            <li><a className="text-gray-400 hover:text-white">Card Collection</a></li>
            <li><a className="text-gray-400 hover:text-white">Deck Builder</a></li>
            <li><a className="text-gray-400 hover:text-white">Battle Arena</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent font-bold">Route-151</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="text-gray-400 hover:text-white mx-2 font-medium">Pokédex</a></li>
          <li><a className="text-gray-400 hover:text-white mx-2 font-medium">Card Collection</a></li>
          <li><a className="text-gray-400 hover:text-white mx-2 font-medium">Deck Builder</a></li>
          <li><a className="text-gray-400 hover:text-white mx-2 font-medium">Battle Arena</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="bg-gradient-to-r from-[#6366f1] to-[#9333ea] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-[#6366f1]/20 hover:from-[#4f46e5] hover:to-[#7e22ce] transition-all duration-300 transform hover:-translate-y-1">Battle Now</a>
      </div>
    </div>
  );
}

export default NavigationBar;