import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { links } from "../assets/constants";
const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10 ">
      <h4 className="inline ml-0 sm:ml-8  text-gray-600 ">Menu</h4>
      <div className="mt-4 mb-4 ">
        {links.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            className="flex flex-row justify-start mx-0 sm:mx-4 my-1 text-gray-700 items-center font-black text-black-10 hover:text-orange-600 hover:bg-gray-50 rounded-lg
      py-2 px-3 "
            onClick={() => handleClick()}
          >
            <item.icon className="w-6 h-6 mr-2 " />
            {item.name}
          </NavLink>
        ))}
      </div>
      <h4 className="inline ml-0 sm:ml-8  text-gray-600 ">Playlists</h4>
      <Link to="/not-available">
        <h1 className="ml-0 sm:ml-8 text-gray-800 my-2 mt-5 cursor-pointer font-medium hover:text-orange-500">
          Meditations
        </h1>
      </Link>
      <Link to="/not-available">
        <h1 className="ml-0 sm:ml-8 cursor-pointer text-gray-800 my-2 font-medium hover:text-orange-500">
          About space
        </h1>
      </Link>
      <Link to="/not-available">
        <h1 className="ml-0 sm:ml-8 cursor-pointer text-gray-800 my-2 font-medium hover:text-orange-500">
          Bookcast
        </h1>
      </Link>
      <Link to="/not-available">
        <h1 className="ml-0 sm:ml-8 cursor-pointer text-gray-800 my-2 font-medium hover:text-orange-500">
          Design practice
        </h1>
      </Link>
      <Link to="/not-available">
        <h1 className="ml-0 sm:ml-8 cursor-pointer text-gray-800 my-2 font-medium hover:text-orange-500">
          Motivating & Focus
        </h1>
      </Link>
      <h1 className="ml-0 sm:ml-8 text-md md:text-xl md:mt-10 cursor-pointer text-gray-800 my-2 font-medium ">
        Copyright Chirag Suthar &copy; | All Rights Reserved
      </h1>
    </div>
  );
};
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="lg:flex hidden flex-col  w-[240px] py-14 md:py-10  bg-[#f2f1f6]">
        <Link to="/">
          <div className="flex flex-row justify-center items-center cursor-pointer">
            <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
            <h1 className="ml-2 text-xl font-black">Tunecast</h1>
          </div>
        </Link>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-8 right-1">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="text-black text-2xl mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="text-black text-2xl mr-2 "
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      {/* bg-gradient-to-tl from-gray-50 to-orange-500 */}
      <div
        className={`absolute top-0 h-screen w-2/3 bg-orange-200 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <Link to="/">
          <div className="flex flex-row justify-center items-center cursor-pointer">
            <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
            <h1 className="ml-2 text-xl font-black">Tunecast</h1>
          </div>
        </Link>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
