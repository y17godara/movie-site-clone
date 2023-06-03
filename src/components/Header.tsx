import { useState } from "react";
import logo from "../assets/images/icons8-movie-100.png";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full z-10 bg-[#0c111b] shadow shadow-zinc-800 h-[80px] ease-in-out delay-1000 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <img src={logo} className="h-[60px]" />
              </a>
              {/* Menu */}
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* Large Devices */}
            <div
              className={`hidden flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-zinc-200  hover:text-blue-600">
                  <a href="/">Home</a>
                </li>
                <li className="text-zinc-200  hover:text-blue-600">
                  <a href="/">Blog</a>
                </li>
                <li className="text-zinc-200  hover:text-blue-600">
                  <a href="/">About US</a>
                </li>
                <li className="text-zinc-200  hover:text-blue-600">
                  <a href="/">Contact US</a>
                </li>
              </ul>
            </div>
            {/* Mobile */}
            <div
              className={`flex-1 z-50 fixed shad border-r border-zinc-800 bg-[#0f1014] top-0 bottom-0  left-0 px-4 justify-center w-[50%] h-screen md:hidden md:pb-0 md:mt-0 
            ${navbar ? "block" : "hidden"}`}
            >
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="/">
                  <img src={logo} className="h-[60px]" />
                </a>
              </div>
              <ul className="items-center px-2 pt-5 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-200 hover:text-blue-600">
                  <a href="/">Home</a>
                </li>
                <li className="text-gray-200 hover:text-blue-600">
                  <a href="/">Blog</a>
                </li>
                <li className="text-gray-200 hover:text-blue-600">
                  <a href="/">About US</a>
                </li>
                <li className="text-gray-200 hover:text-blue-600">
                  <a href="/">Contact US</a>
                </li>
              </ul>
            </div>
            {/* Mobile End */}
          </div>
        </div>
      </nav>
    </>
  );
}

// <NavLink
//   to="/"
//   className={({ isActive }) =>
//     isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
//   }
// >
//   Users
// </NavLink>
