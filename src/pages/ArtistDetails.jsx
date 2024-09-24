import React from "react";
import { useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { SongCard } from "../components";
import NotAvailable from "./NotAvailable";
const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { data: artistData, isFetching: isFetchingArtistData } =
    useGetArtistDetailsQuery({ artistId });
  if (isFetchingArtistData) return "Loading...";
  console.log("Artist Data", artistData);
  return (
    <>
      {artistData.errors ? (
        <NotAvailable />
      ) : (
        <div className="flex flex-wrap sm:justify-start justify-center gap-0 ">
          {Object.values(artistData.resources.songs).map((song, i) => (
            <SongCard key={song.key} song={song} data={artistData} i={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default ArtistDetails;
