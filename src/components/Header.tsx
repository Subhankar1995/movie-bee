import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const darkModeImage = require("../assets/images/dark.png");
const lightModeImage = require("../assets/images/light.png");
const logoImage = require("../assets/images/logo.png")

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [showHambergerMenu, setShowHambergerMenu] = useState<boolean>(false);

  useEffect(() => {
    const isDarkModeOn: boolean = JSON.parse(
      localStorage.getItem("dakModeOn") || "false"
    );
    addOrRemoveDarkModeClass(isDarkModeOn);
  }, []);

  function handleDarkModeToggle() {
    addOrRemoveDarkModeClass(!darkMode);
  }

  function addOrRemoveDarkModeClass(isAdd: boolean) {
    if (isAdd) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dakModeOn", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dakModeOn", "false");
    }
    setDarkMode(isAdd);
  }

  const active =
    "p-2 rounded text-gray-900 bg-gray-500 text-yellow-300 dark:text-yellow-300 dark:hover:bg-gray";
  const inactive =
    "p-2 rounded text-gray-900 hover:bg-gray-500 hover:text-yellow-300 dark:text-white dark:hover:bg-gray dark:hover:text-yellow-300";
  const inactiveSmSize =
    "block py-2 px-3 text-white bg-gray-400 rounded-sm hover:text-yellow-300 hover:bg-gray-500 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-800 dark:hover:text-yellow-300";
  const activeSmSize =
    "block py-2 px-3 rounded-sm text-yellow-300 bg-gray-500 dark:bg-gray-800 dark:text-yellow-300";
  return (
    <div className="m-0 p-0 sticky top-0">
      <nav className="p-4 pb-1 flex justify-between items-center border-b dark:border-b-0 bg-white  dark:bg-gray-800">
        <NavLink className="flex items-center" to={"/"}>
          <svg
            id="visual"
            viewBox="0 0 60 60"
            width="60"
            height="60"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(31.17545042543526 32.17633525535602)">
              <path
                d="M17.6 -14.8C22.9 -7.3 27.6 0 26.3 6.2C25.1 12.4 18 17.5 10.2 21.2C2.5 24.9 -5.9 27.3 -13.4 24.9C-20.9 22.4 -27.5 15.1 -28.7 7.3C-29.8 -0.4 -25.4 -8.6 -19.8 -16.2C-14.1 -23.7 -7 -30.6 -0.5 -30.2C6.1 -29.9 12.2 -22.2 17.6 -14.8"
                fill="#FFFFFF"
              ></path>
            </g>
            <image
              xlinkHref={logoImage}
              width="90%"
              height="90%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#bg-c)"
            />
          </svg>
          <span className="text-2xl pl-2 dark:text-white">MovieBee</span>
        </NavLink>
        <div className="hidden xl:flex gap-8">
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to="/movies/popular"
          >
            Popular
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to="/movies/top"
          >
            Top Rated
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to="/movies/upcoming"
          >
            Upcoming
          </NavLink>
        </div>
        <div className="flex">
          <button
            type="button"
            aria-expanded="false"
            className="flex items-center p-2 mr-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => handleDarkModeToggle()}
          >
            {!darkMode && <img className="w-6 h-6" src={darkModeImage} />}
            {darkMode && <img className="w-6 h-6" src={lightModeImage} />}
          </button>
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="sm:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            onClick={() => setShowSearchBar(!showSearchBar)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="hidden relative sm:block mr-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg  bg-gray-100 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            data-collapse-toggle="navbar-menu"
            type="button"
            className="inline-flex items-center p-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={() => setShowHambergerMenu(!showHambergerMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className={`${showSearchBar ? "block" : "hidden"}  relative sm:hidden m-2`}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg  bg-gray-100 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div
        className={`${
          showHambergerMenu ? "block" : "hidden"
        } xl:hidden p-0 m-2`}
      >
        <ul className="flex flex-col font-medium   bg-gray-50  dark:bg-gray-800 dark:bg-transparent dark:border-gray-700">
          <li className="border-b">
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? activeSmSize : inactiveSmSize
              } onClick={()=>setShowHambergerMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="border-b">
            <NavLink
              to="/movies/popular"
              className={({ isActive }) =>
                isActive ? activeSmSize : inactiveSmSize
              }
              onClick={()=>setShowHambergerMenu(false)}
            >
              Popular
            </NavLink>
          </li>
          <li className="border-b">
            <NavLink
              to="/movies/top"
              className={({ isActive }) =>
                isActive ? activeSmSize : inactiveSmSize
              }
              onClick={()=>setShowHambergerMenu(false)}
            >
              Top Rated
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies/upcoming"
              className={({ isActive }) =>
                isActive ? activeSmSize : inactiveSmSize
              }
              onClick={()=>setShowHambergerMenu(false)}
            >
              Upcoming
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
