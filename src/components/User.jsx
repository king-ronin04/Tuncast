import React from "react";
import userImg from "../assets/user.jpeg";
import { IoChevronDown } from "react-icons/io5";
function User() {
  return (
    <>
      <div className=" flex flex-row justify-center items-center">
        <h1 className="text-sm hidden md:inline md:text-lg ml-4">Miku</h1>
        <img
          src={userImg}
          className=" hidden md:inline ml-3 rounded-full  md:w-8 lg:w-12"
          alt="User"
        />
        <IoChevronDown className="text-2xl hidden md:inline ml-2 mr-4 text-gray-500 hover:text-black cursor-pointer" />
      </div>
    </>
  );
}

export default User;
