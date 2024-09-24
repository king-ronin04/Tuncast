import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { FiSearch } from "react-icons/fi";
import LoadingGif from "../assets/loadingGif.gif";
import { useGetSearchTextsQuery } from "../redux/services/shazamCore";
import { Link } from "react-router-dom";
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedValue] = useDebounce(searchTerm, 1000);
  const [keyFocus, setKeyFocus] = useState(false);
  const { data: searchData, isFetching: isFetchingSearchTexts } =
    useGetSearchTextsQuery({ debouncedValue });

  return (
    <>
      <div className="w-full mr-12 md:w-3/6 mx-0 md:mx-auto flex flex-row items-center justify-start md:justify-center bg-white rounded-3xl pl-3  ">
        <FiSearch className="text-lg mx-2 text-gray-400 md:text-2xl " />
        <div className="w-11/12 md:w-full flex flex-col items-start relative">
          <input
            type="text"
            className="w-11/12  py-2 outline-none font-bold text-xs sm:text-sm md:text-lg "
            placeholder="Search for songs, podcasts, and many more..."
            value={searchTerm}
            onChange={(e) => {
              const input = e.target.value;
              setSearchTerm(input);
            }}
            onFocus={() => {
              setKeyFocus(true);
            }}
            onBlur={() => {
              setTimeout((e) => {
                setKeyFocus(false);
              }, 100);
            }}
          />

          <div className="results flex rounded-lg flex-col z-10 bg-white w-full absolute top-9 left-1  ">
            {isFetchingSearchTexts && searchTerm ? (
              <div className="flex flex-row justify-center items-start">
                <img
                  src={LoadingGif}
                  alt="Loading..."
                  className="w-20 md:w-40"
                />
              </div>
            ) : debouncedValue && keyFocus ? (
              searchData.hints.map((searchText) => (
                <Link
                  to={`/search/${searchText.term}`}
                  onClick={() => setKeyFocus(false)}
                >
                  <p className=" py-1 w-11/12 truncate  flex text-xs sm:text-sm md:text-lg px-1  flex-row items-center justify-start  cursor-pointer hover:bg-slate-200">
                    <FiSearch className="text-sm md:text-lg mr-2 text-gray-400 " />
                    {searchText.term}
                  </p>
                </Link>
              ))
            ) : (
              ""
            )}
          </div>
        </div>
        <Link to={`/search/${debouncedValue}`}>
          <button
            type="button"
            className=" pl-2 pr-3 py-2  md:pr-10  rounded-r-full sm:text-sm md:pl-6 text-xs md:text-lg text-gray-50 font-black bg-orange-400 hover:bg-orange-500 md:py-3"
          >
            Search
          </button>
        </Link>
      </div>
    </>
  );
};

export default Searchbar;
