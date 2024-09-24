import React from "react";
import { useGetAroundYouDetailsQuery } from "../redux/services/shazamCore";
import { SongCard } from "../components";
const CountryTracks = () => {
  const { data: aroundYouData, isFetching: isFetchingAroundYou } =
    useGetAroundYouDetailsQuery();
  console.log(aroundYouData);
  if (isFetchingAroundYou) return "Loading...";
  return (
    <>
      <div className="flex flex-wrap sm:justify-start justify-center gap-0 ">
        {aroundYouData.tracks.map((song, i) => (
          <SongCard key={song.key} song={song} data={aroundYouData} i={i} />
        ))}
      </div>
    </>
  );
};

export default CountryTracks;
