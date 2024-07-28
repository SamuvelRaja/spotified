import { useCallback, useEffect, useState } from "react";
import { useGetSearchQuery } from "../redux/slice/shazamapi";
import search from "/src/assets/search.svg";
import { debounce } from "/src/assets/utility/debounce";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../redux/features/playerSlice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const pquery = useSelector((state) => state.song.queryText);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Use the RTK Query hook
  const { data: results, isFetching } = useGetSearchQuery(debouncedQuery, {
    skip: debouncedQuery.length === 0,
  });

  const debouncedSearch = useCallback(
    debounce((query) => {
      setDebouncedQuery(query);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  
  useEffect(() => {
    if (results && results.albums.items.length > 1) {
      const songs = results.albums.items;
      dispatch(searchAction({ songs, query }));
    }
  }, [results, query, dispatch]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  console.log(results,"res")
  return (
    <div className="flex items-center">
      <div className="relative right-[-30px]">
        <img src={search} alt="" className="w-[18px] h-[18px]" />
      </div>
      <input
        type="text"
        className="rounded-3xl py-2 md:py-3 px-4 pl-9 search md:w-[360px] w-[240px] bg-[#242424]"
        value={query||pquery}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;
