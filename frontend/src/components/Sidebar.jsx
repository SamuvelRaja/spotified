import Home from "/src/assets/home.svg"
import Search from "/src/assets/search.svg"
import lib from "/src/assets/lib.svg"
import plus from "/src/assets/plus.svg"
import { Link } from "react-router-dom"

const Sidebar = () => (
  <nav className="max-w-[420px] min-w-[280px] lg:w-[25%] p-2 ">
    <div className="flex gap-6 flex-col ntop bg-primary-bg p-8 mb-2 rounded-md ">
      <Link to={"/"}>
        <div className="flex  gap-6 nav-txt "><img src={Home} className="w-[24px] h-[24px]" alt=""  /> <span className=" font-medium tran-1 text-secondary-text "> Home</span></div>
      </Link>
      <Link to={"/search"}>
        <div className="flex  gap-6 nav-txt"><img src={Search} className="w-[24px] h-[24px]" alt=""  /> <span className=" font-medium tran-1 text-secondary-text ">Search</span></div>
      </Link>
    </div>
    <div className="flex flex-col nbottom  bg-primary-bg rounded-md p-[6px]">
      <div className="lib-top items-center justify-between flex mb-6">
        <div className="p-4 gap-6 flex nav-txt">
          <img src={lib} className="w-[24px] h-[24px]" alt=""  />
          <span className="font-medium tran-1 text-secondary-text ">Your Library</span>
        </div>
        <div className="lib-actions pr-4">
          <div className="hover:rounded-full p-1 hover:bg-tertiary-bg w-[24px] h-[24px] my-auto tran-1"><img src={plus} className="w-[20px] " alt="" /></div>
        </div>
      </div>

      <div className="add-playlist p-4 rounded-md bg-tertiary-bg">
        <h2 className="font-semibold text-[16px] ">Create your first playlist</h2>
        <p className="font-thin text-[14px] mt-2">
          It's easy, we'll help you
        </p>
        <button className="btn-white mt-6"> Create playlist</button>
      </div>
    </div>
  </nav>
);

export default Sidebar;
