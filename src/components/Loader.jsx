import loader from "../assets/loader.svg"
const Loader = () => (
  <div className="flex justify-center items-center">
    <div className="bg-[#1c1c1c] border border-[#858585]">
      <img src={loader} alt="" />
      <h3>loading</h3>
    </div>
  </div>
);

export default Loader;
