import image from "../assets/img/BG.png";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import joiner3 from "../assets/img/image3.png";
import joiner2 from "../assets/img/image2.png";
import joiner1 from "../assets/img/image1.png";
import Calendar from "./calander";

const Tradecomp = () => {
  const events = [
    { date: new Date(2024, 0, 10), color: "red" },
    { date: new Date(2024, 0, 10), color: "green" },
    { date: new Date(2024, 0, 26), color: "red" },
    { date: new Date(2024, 0, 26), color: "green" },
  ];

  return (
    <div className="bg-Background w-full">
      <nav className="mx-4 pt-4">
        <div className="flex justify-between items-center">
          <p className="text-Blue text-2xl font-bold font-myFont">
            Trade Booths
          </p>
          <div className="flex gap-5">
            <div className="bg-White flex p-2 items-center gap-2 rounded-lg w-96">
              <CiSearch />
              <input
                type="search"
                placeholder="Search in Dashboard..."
                className="outline-none font-semibold font-myFont"
              />
              {/* <IoIosArrowDown className="ml-20" /> */}
            </div>
            <div className="bg-White rounded-lg p-2">
              <VscSettings className="w-7 h-7" />
            </div>
            <img src={image} className="h-12" alt="User" />
          </div>
        </div>
      </nav>

      <div className="mt-5 mx-8 flex ">
        <div className="bg-red-30 p-4 w-[70%] mr-10 ">
          <div className="flex justify-between mb-10">
            <p className="font-semibold text-Blue font-myFont">Booths List</p>
            <button className="text-blue-600 font-semibold hover:underline underline-offset-2">
              View All
            </button>
          </div>
          <div className="bg-White rounded-2xl mt-4  h-20 ">
            <div className="mx-3  pt-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={joiner3} alt="" className="h-12" />
                <p>Enhancing Engagement: Unleashin...</p>
              </div>
              <p>24 Jan, 2024 / 10:00 AM</p>
              <button className="bg-Blue hover:bg-White hover:text-Blue hover:border-2 hover:border-Blue text-White cursor-pointer p-2 w-20 rounded-lg ">
                Join
              </button>
            </div>
          </div>
          <div className="bg-White rounded-2xl mt-4 w-full h-20 ">
            <div className="mx-3  pt-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={joiner2} alt="" className="h-12" />
                <p>Enhancing Engagement: Unleashin...</p>
              </div>
              <p>24 Jan, 2024 / 10:00 AM</p>
              <button className="bg-Blue hover:bg-White hover:text-Blue hover:border-2 hover:border-Blue  cursor-pointer  text-White p-2 w-20 rounded-lg ">
                Join
              </button>
            </div>
          </div>
          <div className="bg-White rounded-2xl mt-4 w-full h-20 ">
            <div className="mx-3  pt-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={joiner1} alt="" className="h-12" />
                <p>Enhancing Engagement: Unleashin...</p>
              </div>
              <p>24 Jan, 2024 / 10:00 AM</p>
              <button className="bg-Blue hover:bg-White hover:text-Blue hover:border-2 hover:border-Blue cursor-pointer text-White p-2 w-20 rounded-lg ">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="bg-transparent rounded-2xl shadow-md gap-5 w-[435px] h-[325px]">
          <Calendar initialDate={new Date(2024, 0, 1)} events={events} />
        </div>
       
      </div>
     
    </div>
  );
};

export default Tradecomp;
