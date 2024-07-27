import { useSelector } from "react-redux";

import ArtistCard from "../components/ArtistCard";

const Search = () => 

{
  const result=useSelector((state)=>state.song.searchSongs)
  return <div className="pt-[88px] px-6">
    <div className="flex flex-wrap justify-between gap-1  rounded-[8px]">
            {
                result?.map((item,i)=>{
                  
                    return <ArtistCard key={item.id+i} img={item.images[0].url} title={item.name} description={item.description} id={item.id} />
                })
            }
        </div>
  </div>
};

export default Search;
