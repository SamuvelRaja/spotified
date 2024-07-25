import { useGetGenreQuery,useGetAllGenreQuery } from "../redux/slice/shazamapi";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Label from "../components/label";
import ArtistCard from "../components/ArtistCard";
import { labels } from "../assets/constants";
import { useState, useEffect } from "react";

const Discover = () => {
    // Fetch genre list data
    const { data: genreListData, isFetching: isFetchingGenres, error: genresError } = useGetAllGenreQuery();
    console.log(genreListData, "gg");

    // Set initial state for genre query and myList
    const [genreQuery, setGenreQuery] = useState(null);
    const [myList, setMyList] = useState([]);
    const genres = ["Tamil", "Malayalam", "Love", "Hindi", "Charts", "Party", "Pop"];

    // Update genre query and myList once the genre list data is fetched
    useEffect(() => {
        if (genreListData) {
            const filteredList = genreListData?.categories?.items.filter((item) => genres.includes(item.name));
            setMyList(filteredList);
            if (filteredList.length > 0) {
                setGenreQuery(filteredList[0]?.id);
            }
        }
    }, [genreListData]);

    // Fetch genre data based on genre query
    const { data: genreData, isFetching: isFetchingGenreData } = useGetGenreQuery(genreQuery, {
        skip: !genreQuery,
    });

    // Handle loading and error states
    if (isFetchingGenres ) return <Loader />;
    if (genresError) return <Error />;
    
return (
    <div>
        <div className="flex gap-2 mt-4 flex-wrap">
            {
                
                myList?.map((item)=>{
                    return <Label key={item.id} name={item.name} value={item.id} query={genreQuery} setQuery={setGenreQuery}/>
                })
            }
        </div>
        <div className="flex flex-wrap justify-between gap-1  rounded-[8px]">
            {
                genreData?.playlists.items.map((item,i)=>{
                    return <ArtistCard key={item.id+i} img={item.images[0].url} title={item.name} description={item.description} id={item.id} />
                })
            }
        </div>
    </div>
)
};

export default Discover;
