import { useSelector } from "react-redux";
import { Loader, SongCard } from "../components";
import { useGetDiscoverQuery } from "../redux/services/shazamCore";

const Discover = () => {
  // const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetDiscoverQuery();

  if (isFetching) return <Loader title="Loading songs..." />;

  return (
    <div className="flex flex-col ">
      <div className="flex flex-wrap sm:justify-start justify-center gap-0  ">
        {data.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
      {/* <div className="flex flex-col flex-wrap w-full sm:justify-start justify-center gap-0">
        <div className="w-11/12 py-4">
          <div className="flex flex-row justify-between items-center ">
            <h1 className="text-2xl font-black ml-3">Continue listening</h1>
            <IoChevronForwardOutline className="text-2xl text-gray-500 cursor-pointer hover:text-black " />
          </div>
        </div>
      </div> */}
      {/* <div className="flex flex-wrap sm:justify-start justify-center gap-0 ">
        {data.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Discover;
