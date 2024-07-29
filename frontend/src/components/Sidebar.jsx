import Home from "/src/assets/home.svg"
import Search from "/src/assets/search.svg"
import lib from "/src/assets/lib.svg"
import plus from "/src/assets/plus.svg"
import { Link } from "react-router-dom"

const Sidebar = () => (
  <nav className="fixed bg-black bottom-0 lg:relative z-50  md:max-w-[420px] md:min-w-[280px] w-full lg:w-[25%] p-2 ">
    <div className="flex gap-6 flex-row lg:flex-col justify-center w-full ntop lg:bg-primary-bg lg:p-8 lg:mb-2 rounded-md ">
      <Link to={"/"}>
        <div className="flex flex-col items-center lg:flex-row lg:gap-6 nav-txt "><img src={Home} className="w-[24px] h-[24px]" alt=""  /> <span className=" font-medium tran-1 text-[14px] lg:text-[16px] text-secondary-text "> Home</span></div>
      </Link>
      <Link to={"/search"}>
        <div className="flex flex-col items-center lg:flex-row lg:gap-6 nav-txt"><img src={Search} className="w-[24px] h-[24px]" alt=""  /> <span className=" font-medium tran-1 text-[14px] lg:text-[16px] text-secondary-text ">Search</span></div>
      </Link>
    </div>
    <div className="hidden lg:flex flex-col nbottom  bg-primary-bg rounded-md p-[6px]">
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
