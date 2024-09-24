import React from "react";
import { useParams } from "react-router-dom";
import { useGetSearchResultsQuery } from "../redux/services/shazamCore";
import { SongCard } from "../components";
import { Link } from "react-router-dom";
const Search = () => {
  const query = useParams();
  const { data: searchResultsData, isFetching: isFetchingSearchResults } =
    useGetSearchResultsQuery(query);
  console.log(searchResultsData);
  if (isFetchingSearchResults) return "Loading...";
  return (
    <>
      <h1 className="text-lg md:text-xl  ml-5 md:ml-0  text-gray-500 font-black">
        Search Results: {searchResultsData.tracks.hits.length}
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-0 ">
        {searchResultsData.tracks.hits.map((song, i) => (
          <SongCard
            key={song.track.key}
            song={song.track}
            data={searchResultsData}
            i={i}
          />
        ))}
      </div>
      <h1 className="text-xl mt-9 font-black">Related Artists</h1>
      <div
        id="artists"
        className="flex flex-row w-full flex-wrap gap-5 py-8 justify-center md:justify-start "
      >
        {searchResultsData.artists.hits.map((item, i) => (
          <Link
            className="flex flex-col justify-center  items-center "
            to={`/artists/${
              item?.artist ? item?.artist.adamid : "not-available"
            }`}
          >
            <img
              src={
                item.artist.avatar
                  ? item.artist.avatar
                  : "https://secure.gravatar.com/avatar/4b21ce3917fcb75324268ba4d3143c37?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png"
              }
              alt="name"
              className="rounded-full object-cover w-48 transition hover:-translate-y-2 "
            />
            <p className="mt-1 font-bold text-gray-50 px-2 text-xs md:text-sm truncate w-1/2 text-center bg-orange-400 rounded-lg py-1">
              {item.artist.name}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Search;
