import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useDispatch } from "react-redux";
import { FaRegHeart, FaHeadphonesAlt } from "react-icons/fa";
import audioPlay from "../assets/icons8-audio-wave.gif";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
    setIsSongPlaying(false);
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    setIsSongPlaying(true);
  };
  const [isLiked, setIsLiked] = useState(false);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  useEffect(() => {
    if (document.getElementById("topSec")) {
      document
        .getElementById("topSec")
        .scrollIntoView({ block: "end", behavior: "auto" });
    }
  });
  return (
    <>
      <div
        id="topSec"
        className="flex flex-col song-card w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div className="relative w-full h-54  group">
          <div
            className={`absolute inset-0 justify-center items-center rounded-2xl bg-black bg-opacity-50 group-hover:flex ${
              activeSong?.title === song.title
                ? "flex bg-black bg-opacity-70"
                : "hidden"
            }`}
          >
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
          <div
            className=" absolute top-3 right-3 p-1.5 bg-gray-50 rounded-3xl"
            onClick={() => (isLiked ? setIsLiked(false) : setIsLiked(true))}
          >
            {isLiked ? (
              <img
                className="w-5"
                src="https://img.icons8.com/color/48/null/like--v3.png"
              />
            ) : (
              <FaRegHeart className="text-lg text-gray-500 " />
            )}
          </div>
          <div className=" absolute bottom-3 left-3 p-1.5 bg-gray-50 rounded-3xl">
            {isSongPlaying ? (
              <img className="w-4" src={audioPlay} alt="Audio Play" />
            ) : (
              <FaHeadphonesAlt className=" text-md text-black  " />
            )}
          </div>

          {song.images ? (
            <img
              alt="song_img"
              src={
                song.images
                  ? song.images.coverart
                  : "https://pbs.twimg.com/media/FLtvzvoXoAQ7BCw.jpg"
              }
              className="rounded-xl"
            />
          ) : (
            <img
              src={
                song.attributes
                  ? song.attributes.artwork.url.slice(
                      0,
                      song.attributes.artwork.url.length - 13
                    ) + "300x300bb.jpg"
                  : "https://pbs.twimg.com/media/FLtvzvoXoAQ7BCw.jpg"
              }
            />
          )}
        </div>
        <div className="mt-1 flex flex-col ">
          <h1 className=" text-lg text-black truncate ">
            <Link className="font-extrabold" to={`/songs/${song?.key}`}>
              {song.title ? song.title : song.attributes.name}
            </Link>
          </h1>
          <p className="text-sm font-extrabold truncate text-gray-500 ">
            <Link
              to={
                song.artists
                  ? `/artists/${song?.artists[0]?.adamid}`
                  : "/top-artists"
              }
            >
              by {song.subtitle ? song.subtitle : song.attributes.composerName}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SongCard;
