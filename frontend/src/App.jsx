import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loader from "./components/Loader";
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails,Tracks, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import { useEffect } from 'react';
import jsCookie from 'js-cookie';
import { fetchAccessToken} from './assets/utility/fetchaccess';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  useEffect(() => {
    console.log(!localStorage.getItem("acctk"))
    if(!localStorage.getItem("acctk")){
      fetchAccessToken();
    }
  }, []);

  return (
    <div className="relative flex font-spotify">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-primary-bg m-2 ml-0 rounded-md">
        {/* <Searchbar /> */}
        <div className=" sticky top-2 h-[0px] z-50 bg-fixed bg-tertiary-bg ">
            <TopPlay />
          </div>
        <div className=" h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/tracks/:id" element={<Tracks />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
