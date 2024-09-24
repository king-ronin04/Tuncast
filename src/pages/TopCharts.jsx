import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { SongCard } from "../components";
const TopCharts = () => {
  const { data: dataDiscover, isFetching: isFetchingDiscoveryDetails } =
    useGetTopChartsQuery();
  if (isFetchingDiscoveryDetails) return "Loading...";
  console.log(dataDiscover);
  return (
    <>
      <div className="flex flex-wrap sm:justify-start justify-center gap-0 ">
        {dataDiscover.tracks.map((song, i) => (
          <SongCard key={song.key} song={song} data={dataDiscover} i={i} />
        ))}
      </div>
    </>
  );
};

export default TopCharts;
