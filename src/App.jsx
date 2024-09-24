import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
// npm run dev : to run the project.
import { Sidebar, MusicPlayer, TopPlay } from "./components";

import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Playlists from "./pages/Playlists.jsx";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";
import NotAvailable from "./pages/NotAvailable.jsx";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  useEffect(() => {
    if (document.getElementById("top")) {
      document
        .getElementById("top")
        .scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
  return (
    <>
      <div id="top" className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-neutral-100">
          <Navbar />
          <div className="w-full flex flex-col justify-between items-center sm:flex-row  mt-4  ">
            <div className="flex flex-row  md:justify-between justify-center items-center w-5/6">
              <h2 className="font-bold text-3xl text-center md:text-left text-black ml-0 md:ml-4 ">
                For you
              </h2>
              <IoChevronForwardOutline className="text-2xl hidden md:block text-gray-500 cursor-pointer hover:text-black mr-1" />
            </div>
          </div>
          <div className="flex flex-row justify-center md:justify-start pb-2 items-center ml-0 md:ml-4 md:mt-0 mt-2">
            <Link
              to="/"
              className="text-gray-400 font-black hover:text-orange-500 cursor-pointer mr-5"
            >
              new
            </Link>
            <Link
              to="/playlists"
              className="text-gray-400 font-black hover:text-orange-500 cursor-pointer mr-5"
            >
              playlists
            </Link>
            <Link
              to="/top-artists"
              className="text-gray-400 font-black hover:text-orange-500 cursor-pointer "
            >
              artists
            </Link>
          </div>

          <div className="px-2 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse md:px-6">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/playlists" element={<Playlists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
                <Route path="/not-available" element={<NotAvailable />} />
              </Routes>
            </div>
            <div className="xl:sticky relative top-0 h-fit">
              {/* <TopPlay /> */}
            </div>
          </div>
        </div>

        {activeSong?.title && (
          <div className="absolute h-52 md:h-36 md:pt-5 bottom-10 md:bottom-12 left-0 right-0 flex animate-slideup bg-orange-500 backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
