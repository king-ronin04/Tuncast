import React from "react";
import { Link } from "react-router-dom";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data: artistsData, isFetching: isFetchingArtistsDetails } =
    useGetTopChartsQuery();

  if (isFetchingArtistsDetails) return "Loading...";
  console.log(artistsData.tracks);
  return (
    <>
      <div
        id="artists"
        className="flex flex-row w-full flex-wrap gap-5 py-8 justify-center md:justify-start "
      >
        {artistsData.tracks.map((item, i) => (
          <Link
            className="flex flex-col justify-center  items-center "
            to={`/artists/${
              item?.artists ? item?.artists[0].adamid : "not-available"
            }`}
          >
            <img
              src={
                item.share.avatar
                  ? item.share.avatar
                  : "https://secure.gravatar.com/avatar/4b21ce3917fcb75324268ba4d3143c37?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png"
              }
              alt="name"
              className="rounded-full object-cover w-48 transition hover:-translate-y-2 "
            />
            <p className="mt-1 font-bold text-gray-50 px-2 text-xs md:text-sm truncate w-1/2 text-center bg-orange-400 rounded-lg py-1">
              {item.subtitle}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TopArtists;
