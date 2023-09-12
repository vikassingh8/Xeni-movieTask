import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 sticky top-0 z-50 drop-shadow-lg p-4">
      <div className="container mx-auto  flex flex-wrap justify-between items-center">

        <div className="text-white font-bold text-xl mb-4 md:mb-0">
          <Link to="/" className="text-white hover:text-blue-300 transition duration-300">
            My Movie App
          </Link>
        </div>


        <div className="flex items-center">
          <ul className="flex space-x-5 mb-4 md:mb-0">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="Top_rated"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                Top Rated
              </Link>
            </li>
            <li>
              <Link
                to="watchlist"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                Watchlist
              </Link>
            </li>
          </ul>
          <Outlet />


        </div>
        <div className="w-[10%]"></div>
      </div>
    </nav>
  );
};

export default Navbar;
