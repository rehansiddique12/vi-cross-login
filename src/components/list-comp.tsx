import image from "../assets/img/BG.png";
import { CiSearch } from "react-icons/ci";
import { data } from "../lib/constants";
import { IoIosArrowDown } from "react-icons/io";
import { RiNotification4Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
const Listcomp = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="bg-Background w-full flex flex-col h-[950px]">
      <nav className="mx-10 pt-4">
        <div className="flex justify-between items-center">
          <p className="text-Blue text-3xl font-bold font-myFont">
            Trade Booths List
          </p>
          <div className="flex gap-5">
            <div className="bg-White flex px-4 items-center gap-2 rounded-lg p-2 w-96">
              <CiSearch />
              <input
                type="search"
                placeholder="Search in Dashboard..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none font-semibold font-myFont w-full"
              />
            </div>
            <div className="bg-White rounded-lg p-2 relative">
              <div className="bg-red-500 w-4 h-4 rounded-full absolute right-1 top-1">
                <p className="text-xs  text-White text-center">8</p>
              </div>
              <RiNotification4Line className="size-7" />
            </div>
            <img src={image} className="h-12" alt="User" />
          </div>
        </div>
      </nav>

      <div className="flex items-end justify-end">
        <button className="bg-Blue text-White p-2 rounded-lg gap-2 mx-10 mt-6 w-20 flex items-center">
          Filter <IoIosArrowDown />
        </button>
      </div>


      <div className="mx-9 px-10 mt-5 bg-White rounded-2xl flex py-3 text-Blue font-bold font-myFont ">
          <div className="w-[25%]">
            <p>Company Name</p>
          </div>
          <div className="w-[50%]">
            <p>Location</p>
          </div>
          <div className="w-[25%]">
            <p>Company size</p>
          </div>
        </div>
      <div className="px-10  h-[90%] scroll-auto overflow-scroll pb-15 hide-scrollbar ">
       
        {filteredData.map((p, index) => (
          <div
            className={`${index % 2 === 0 ? "bg-transparent mt-3" : "bg-white"}
                      w-full rounded-2xl flex px-6 py-3 text-Blue font-bold font-myFont`}
          >
            <div className="w-[25%] flex items-center gap-3 ">
              <img src={p.image} alt="" />
              <p>{p.name}</p>
            </div>
            <div className="w-[50%] flex items-center">
              <p>{p.location}</p>
            </div>
            <div className="w-[25%] flex justify-between items-center">
              <p>{p.size}</p>
              <BsThreeDotsVertical />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listcomp;
