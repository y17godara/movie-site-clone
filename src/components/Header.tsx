import { useState } from "react";
import logo from "../assets/images/icons8-movie-100.png";
import DropdownAvatar from "./DropdownAvt";


const links = [
  {
    id: 1,
    name: "Categories",
    path: "/categories",
  },
  {
    id: 2,
    name: "Movies",
    path: "/movies",
  },
  {
    id: 3,
    name: "Series",
    path: "/series",
  },
  {
    id: 4,
    name: "Original",
    path: "/original",
  },
]

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-10 bg-[--bg-navbar] shadow shadow-zinc-700 ease-in-out delay-1000 ">
        <div className="flex items-center justify-between px-4 mx-auto lg:max-w-7xl md:px-8">
          {/* Logo */}
          <div className="flex items-center justify-between py-3 md:py-5">
            <a href="/" className="text-[20px] font-bold flex items-center justify-between">
              <img src={logo} className="h-[30px]" />
              FilWx
            </a>
          </div>

          {/* Menu */}
          <div className="md:flex flex-row md:gap-4  items-center">
            {/* Desktop */}
            <div
              className={`hidden flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {/* Map */}
                {links.map((link) => (
                  <li key={link.id} className="text-zinc-200  hover:text-blue-300">
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mobile */}
            <div
              className={`flex-1 z-50 fixed shad border-r border-zinc-800 bg-[--bg-navbar] top-0 bottom-0  left-0 px-4 justify-center w-[50%] h-screen md:hidden md:pb-0 md:mt-0 
            ${navbar ? "block" : "hidden"}`}
            >
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="/">
                  <img src={logo} className="h-[60px]" />
                </a>
              </div>
              <ul className="items-center px-2 pt-5 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {/* Map */}
                {links.map((link) => (
                  <li key={link.id} className="text-zinc-200  hover:text-blue-300">
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex">
            <div className="md:hidden">
              <div className="flex flex-row items-center gap-2">
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
            <DropdownAvatar imgLink={"https://tecdn.b-cdn.net/img/new/avatars/2.webp"} />
          </div>
        </div>
      </nav>
    </>
  );
}
