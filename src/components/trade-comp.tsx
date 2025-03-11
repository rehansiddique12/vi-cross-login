import * as React from "react";
import image from "../assets/img/BG.png";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

// Function to generate dots on specific dates
const tileContent = ({ date, view }: { date: Date; view: string }) => {
  const markedDates = [
    { date: new Date(2024, 0, 10), color: "bg-green-500" }, // Jan 10
    { date: new Date(2024, 0, 26), color: "bg-red-500" }, // Jan 26
  ];

  return (
    view === "month" && (
      <div className="flex justify-center items-center gap-1 mt-1">
        {markedDates.map((marked, index) =>
          marked.date.toDateString() === date.toDateString() ? (
            <span key={index} className={`w-1.5 h-1.5 rounded-full ${marked.color}`}></span>
          ) : null
        )}
      </div>
    )
  );
};

const Tradecomp = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="bg-Background w-full p-6">
      {/* Navigation Bar */}
      <nav className="mx-4 mt-4">
        <div className="flex justify-between items-center">
          <p className="text-Blue text-2xl font-bold font-myFont">Trade Booths</p>
          <div className="flex gap-5">
            {/* Search Bar */}
            <div className="bg-White flex justify-center items-center gap-2 rounded-lg p-2 w-96">
              <CiSearch />
              <input
                type="search"
                placeholder="Search in Dashboard..."
                className="outline-none font-semibold font-myFont"
              />
              <IoIosArrowDown className="ml-20" />
            </div>
            {/* Settings Icon */}
            <div className="bg-White rounded-lg p-2">
              <VscSettings className="w-7 h-7" />
            </div>
            {/* User Avatar or Logo */}
            <img src={image} className="h-12" alt="Background" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex justify-between gap-8 mt-6">
        {/* Booths List */}
        <div className="bg-red-300 p-4 w-1/2 rounded-lg shadow-md">
          <div className="flex justify-between">
            <p className="font-semibold">Booths List</p>
            <button className="text-blue-600 font-semibold">View All</button>
          </div>
        </div>

        {/* Custom Calendar */}
        <div className="p-6 bg-gray-100 rounded-2xl shadow-lg w-[350px]">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={tileContent}
            prevLabel={<IoIosArrowBack className="text-gray-600 text-xl" />}
            nextLabel={<IoIosArrowForward className="text-gray-600 text-xl" />}
            className="w-full bg-white rounded-2xl border-none shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Tradecomp;
