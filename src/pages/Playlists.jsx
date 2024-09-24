import React from "react";
import { useGetPlaylistsDetailsQuery } from "../redux/services/shazamCore";
import { SongCard } from "../components";
import { Loader } from "../components";

function Playlists() {
  const { data, isFetching: isFetchingPlaylistDetails } =
    useGetPlaylistsDetailsQuery();
  console.log(data);
  if (isFetchingPlaylistDetails) return <Loader title="Loading..." />;

  return (
    <>
      <div className="flex flex-wrap sm:justify-start justify-center gap-0 ">
        {data.tracks.map((song, i) => (
          <SongCard key={song.key} song={song} data={data} i={i} />
        ))}
      </div>
    </>
  );
}

export default Playlists;
