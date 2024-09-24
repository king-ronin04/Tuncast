import React, { useEffect } from "react";
import { Searchbar } from "../components";
import User from "../components/User.jsx";
import { useNavigate } from "react-router-dom";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
function Navbar() {
  const navigate = useNavigate();
  const goPreviousPage = () => {
    navigate(-1);
  };
  const goForwardPage = () => {
    navigate(+1);
  };

  return (
    <>
      <div className="w-full  flex flex-row justify-between items-center pt-7 pb-3 px-1 ">
        <div className="flex flex-row">
          <IoChevronBackOutline
            className="text-l hidden md:inline cursor-pointer text-gray-500 ml-5 mr-3 hover:text-black md:text-2xl md:ml-8 md:mr-5 "
            onClick={goPreviousPage}
          />
          <IoChevronForwardOutline
            className="text-l hidden md:inline text-gray-500 cursor-pointer hover:text-black md:text-2xl "
            onClick={goForwardPage}
          />
        </div>
        <Searchbar />
        <User />
      </div>
    </>
  );
}

export default Navbar;
