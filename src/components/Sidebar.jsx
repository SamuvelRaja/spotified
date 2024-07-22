import Home from "/src/assets/home"
import Search from "/src/assets/search"
import lib from "/src/assets/lib.svg"
import plus from "/src/assets/plus.svg"

const Sidebar = () => (
  <nav className="max-w-[420px] min-w-[280px] p-2 ">
    <div className="flex gap-4 flex-col ntop bg-primary-bg p-8 mb-2 rounded-md ">
      <div className="flex  gap-4 nav-txt "><Home/> <span className=" font-medium tran-1 text-secondary-text "> Home</span></div>
      <div className="flex  gap-4 nav-txt"><Search/> <span className=" font-medium tran-1 text-secondary-text ">Search</span></div>
    </div>
    <div className="flex flex-col nbottom  bg-primary-bg rounded-md">
      <div className="lib-top items-center justify-between flex p-1">
        <div className="p-4 gap-4 flex nav-txt">
          <img src={lib} className="w-[24px] h-[24px]" alt=""  />
          <span className="font-medium tran-1 text-secondary-text ">Your Library</span>
        </div>
        <div className="lib-actions pr-4">
          <div className="hover:rounded-full p-1 hover:bg-tertiary-bg w-[24px] h-[24px] my-auto tran-1"><img src={plus} className="w-[20px] " alt="" /></div>
        </div>
      </div>
    </div>
  </nav>
);

export default Sidebar;
