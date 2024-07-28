import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import {  Sidebar, MusicPlayer, TopPlay } from './components';
import {Tracks,  Discover, Search,ArtistDetails,Album } from './pages';
import { useEffect } from 'react';
import { fetchAccessToken} from './assets/utility/fetchaccess';

const App = () => {


  useEffect(() => {
    if(!localStorage.getItem("acctk")){
      fetchAccessToken();
    }
  }, []);

  return (
    <div className="relative flex font-spotify h-screen">
      <Sidebar />
      <div className="flex-1 h-[calc(100vh-76px)] lg:h-[calc(100vh-96px)]  flex flex-col bg-primary-bg m-2 ml-2 lg:ml-0 rounded-md">
        {/* <Searchbar /> */}
        <div className=" sticky top-2 h-[0px] z-50 bg-fixed bg-tertiary-bg ">
            <TopPlay />
          </div>
        <div className=" rounded-md overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/tracks/:id" element={<Tracks />} />
              <Route path="/albums/:id" element={<Album />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
          
        </div>
      </div>
      <div className="fixed h-[72px] backdrop-filter backdrop-blur-sm bg-opacity-70 bottom-[75px] lg:bottom-2 left-0 right-0 flex animate-slideup bg-black z-50 px-2 mx-6 rounded-md ">
          <MusicPlayer />
        </div>
   
    </div>
  );
};

export default App;
