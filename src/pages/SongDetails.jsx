import { useParams } from "react-router-dom";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

import spotify from "../assets/spotify.png";
import youtube from "../assets/youtube.svg";
import shazam from "../assets/shazam.svg";
import apple from "../assets/apple.svg";
import deezer from "../assets/deezer.png";
import { Loader } from "../components";

const SongDetails = () => {
  const { songid } = useParams();
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error: songError,
  } = useGetSongDetailsQuery({ songid });

  const openNewTab = (url) => {
    console.log(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (isFetchingSongDetails) {
    // return <Loader title="Loading songs..." />;
    return "Loading...";
  }

  if (songError) return "Error...";

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-start  md:items-start">
          <img
            src={songData.images.coverart}
            alt={songData.title}
            className="rounded-full md:w-1/4 w-3/6 mb-10 md:mb-0"
          />
          <div className="flex flex-col ml-0 px-8 md:ml-10 items-start font-black ">
            <h1 className="text-4xl ">{songData.title}</h1>
            <p className="text-2xl ">{songData.subtitle}</p>
            <p className="text-xl ">{songData.genres.primary}</p>
            <div className="flex flex-row justify-start items-center">
              <img
                className="w-7 md:w-9  mr-3 cursor-pointer mt-3 hover:scale-150 transition-transform "
                src={spotify}
                alt="Spotify Logo"
                onClick={() => {
                  openNewTab(songData.hub.providers[0].actions[0].uri);
                }}
              />
              <img
                className="w-7 md:w-10 mr-3 cursor-pointer mt-3 hover:scale-150 transition-transform"
                src={youtube}
                alt="Youtube Logo"
                onClick={() => {
                  openNewTab(songData.sections[2].youtubeurl.actions[0].uri);
                }}
              />
              <img
                className="w-7 md:w-10 mr-3 cursor-pointer mt-3 hover:scale-150 transition-transform"
                src={shazam}
                alt="Shazam Logo"
                onClick={() => {
                  openNewTab(songData.url);
                }}
              />
              <img
                className="w-7 md:w-10 mr-3 cursor-pointer mt-3 hover:scale-150 transition-transform"
                src={apple}
                alt="Apple Logo"
                onClick={() => {
                  openNewTab(songData.hub.options[0].actions[1].uri);
                }}
              />
              <img
                className="w-7 md:w-10 mr-3 cursor-pointer mt-3 hover:scale-150 transition-transform"
                src={deezer}
                alt="Deezer Logo"
                onClick={() => {
                  const data =
                    "https" +
                    songData.hub.providers[1].actions[0].uri.slice(12);
                  openNewTab(data);
                }}
              />
            </div>
            <div className="mt-9  w-full">
              <h1 className="mb-3 text-4xl">Lyrics: </h1>
              {songData.sections[1].type === "LYRICS" ? (
                songData.sections[1].text.map((songLine) => (
                  <p className="text-md md:text-xl font-normal leading-6 md:leading-8 ">
                    {songLine}
                  </p>
                ))
              ) : (
                <p className="text-xl font-normal ">Not Available 😥</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongDetails;
