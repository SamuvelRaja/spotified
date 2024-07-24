import { useGetGenreQuery,useGetAllGenreQuery } from "../redux/slice/shazamapi";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Label from "../components/label";
import ArtistCard from "../components/ArtistCard";
import { labels } from "../assets/constants";
import { useState, useEffect } from "react";

const Discover = () => {
    const { data: genreListData, isFetching: isFetchingGenres, error: genresError } = useGetAllGenreQuery();
    console.log(genreListData, "gg");
    const genres=["Tamil","Malayalam","Love","Hindi","Charts","Party","Pop"]
    let myList=[];
    if(genreListData){
        myList= genreListData?.categories?.items.filter((item)=>{
        return genres.includes(item.name)
    })
    }
    console.log(myList,"ml")
  // Initial query should be undefined until data is fetched
  const initialQuery = [...myList].shift()?.id;

  const [genreQuery, setGenreQuery] = useState(initialQuery);

  // Update genreQuery when initialQuery changes
  useEffect(() => {
    if (initialQuery) {
      setGenreQuery(initialQuery);
    }
  }, [initialQuery]);

  const { data: genreData, isFetching: isFetchingGenreData } = useGetGenreQuery(genreQuery,{
    skip: !genreQuery,
  });
  console.log("gid", genreQuery, genreData, "gd");

  if (isFetchingGenres) return <Loader />;
  if (genresError) return <Error />;

    
return (
    <div>
        <div className="flex gap-2 mt-4 flex-wrap">
            {
                // labels.map((item)=>{
                //     return <Label key={item.name} name={item.name} value={item.value} query={genreQuery} setQuery={setGenreQuery}/>
                // })
                myList.map((item)=>{
                    return <Label key={item.id} name={item.name} value={item.id} query={genreQuery} setQuery={setGenreQuery}/>
                })
            }
        </div>
        <div className="flex flex-wrap gap-1  rounded-[8px]">
            {
                genreData?.playlists.items.map((item,i)=>{
                    return <ArtistCard key={item.id+i} img={item.images[0].url} title={item.name} description={""} />
                })
            }
        </div>
    </div>
)
};

export default Discover;
