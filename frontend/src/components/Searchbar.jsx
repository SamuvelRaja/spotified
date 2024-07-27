import { useCallback, useEffect, useState } from "react";
import { useGetSearchQuery } from "../redux/slice/shazamapi";
import search from "/src/assets/search.svg"
import {debounce} from "/src/assets/utility/debounce"

const Searchbar = () => 
{
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Use the RTK Query hook
  const { data: results = [], isFetching } = useGetSearchQuery(debouncedQuery, {
    skip: debouncedQuery.length === 0,
  });
  console.log(results,"res")
  const debouncedSearch = useCallback(
    debounce((query) => {
      setDebouncedQuery(query);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  // Handle input change
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (<div className="flex items-center">
          <div className=" relative right-[-30px]">
            <img src={search} alt="" className="w-[18px] h-[18px] " />
          </div>
          <input type="text" className=" rounded-3xl py-3 px-4 pl-9 search md:w-[360px] w-[260px] bg-[#242424]" value={query} onChange={(e)=>handleChange(e)}/>
        </div>);
};

export default Searchbar;
