import search from "/src/assets/search.svg"

const Searchbar = () => {
  return (<div className="flex items-center">
          <div className=" relative right-[-30px]">
            <img src={search} alt="" className="w-[16px] h-[16px]" />
          </div>
          <input type="text" className=" rounded-3xl py-1 px-4 border "/>
        </div>);
};

export default Searchbar;
