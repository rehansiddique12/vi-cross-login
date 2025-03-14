import image from "../assets/img/BG.png";
import { CiSearch } from "react-icons/ci";
import call from "../assets/img/call.png";
import { BsTelegram } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa6";
import callman from "../assets/img/callman.png";
import callgirl from "../assets/img/callgirl.png";
import { MdOutlineCallEnd } from "react-icons/md";
import { RiNotification4Line } from "react-icons/ri";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { IoVideocamOffOutline } from "react-icons/io5";

const Callcomp = () => {
  return (
    <div className="bg-Background w-full h-screen flex flex-col justify-between">
      <nav className="mx-4 pt-4">
        <div className="flex justify-between items-center">
          <p className="text-Blue text-3xl font-bold font-myFont">
            Directly Conversation
          </p>
          <div className="flex gap-5">
            <div className="bg-White flex px-4 items-center gap-2 rounded-lg p-2 w-96">
              <CiSearch />
              <input
                type="search"
                placeholder="Search in Dashboard..."
                className="outline-none font-semibold font-myFont"
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

      <div className=" w-full h-[90%] flex px-6">
        <div className=" w-full relative flex justify-center items-center">
          <img src={call} alt="" className="w-full h-full object-fill drop-shadow-xl" />
          <div className="absolute bottom-10 flex gap-3.5 mb-10">
            <div className="bg-White h-14 w-16 rounded-2xl text- flex justify-center items-center mt-2 ">
              <AiOutlineAudioMuted className="size-8 " />
            </div>
            <div className="bg-Red h-16 w-20 rounded-3xl text-White flex justify-center items-center ">
              <MdOutlineCallEnd className="size-10 " />
            </div>
            <div className="bg-White h-14 w-16 rounded-2xl  flex justify-center items-center mt-2 ">
              <IoVideocamOffOutline className="size-8 " />
            </div>
          </div>
        </div>
        <div className=" w-full pt-6 pr-8 pb-10">
          <div className="bg-white drop-shadow-xl w-full h-full p-6 rounded-4xl text-Blue">
            <p className="font-bold font-myFont text-2xl"> Chat</p>
            <fieldset className="w-full border-t mt-5 border-gray-400 text-center"></fieldset>

            <div className="relative flex w-full">
              <img src={callman} alt="" className="relative h-14 w-14" />
              <div className="bg-Background w-4 h-4 rounded-full absolute top-7 left-9">
                <div className="bg-green-400 w-2 h-2 rounded-full absolute top-1 left-1"></div>
              </div>
              <div className="flex justify-between w-full mt-4">
                <div className="flex flex-col ">
                  <p className="text-Blue font-bold font-myFont text-xl ">
                    Join Wick
                  </p>
                  <div className="bg-Background h-[40px] w-[200px] rounded-b-4xl rounded-r-4xl">
                    <p className="text-Blue font-smbold font-myFont text-center my-2 ">
                      Is VR safe to use?
                    </p>
                  </div>
                </div>
                <p>10:00 AM</p>
              </div>
            </div>

            <div className="relative flex w-full">
              <div className="flex justify-between w-full mt-4">
                <p>10:00 AM</p>
                <div className="flex flex-col items-end">
                  <p className="text-Blue font-bold font-myFont text-xl ">
                    Sarah
                  </p>
                  <div className="bg-Background h-[65px] w-[255px] rounded-b-4xl rounded-l-4xl">
                    <p className="text-Blue font-smbold font-myFont text-center my-2 ">
                    Yes, VR is generally safe
                    when used properly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-Background w-4 h-4 rounded-full absolute right-0 top-7 ">
                <div className="bg-green-400 w-2 h-2 rounded-full absolute top-1 left-1"></div>
              </div>
              <img src={callgirl} alt="" className="relative h-14 w-14" />
            </div>

            <div className="relative flex w-full">
              <img src={callman} alt="" className="relative h-14 w-14" />
              <div className="bg-Background w-4 h-4 rounded-full absolute top-7 left-9">
                <div className="bg-green-400 w-2 h-2 rounded-full absolute top-1 left-1"></div>
              </div>
              <div className="flex justify-between w-full mt-4">
                <div className="flex flex-col ">
                  <p className="text-Blue font-bold font-myFont text-xl ">
                    Join Wick
                  </p>
                  <div className="bg-Background h-[66px] w-[250px] rounded-b-4xl rounded-r-4xl">
                    <p className="text-Blue font-smbold font-myFont text-center my-2 ">
                      Is VR safe to use? Is VR safe to use?
                    </p>
                  </div>
                </div>
                <p>10:01 AM</p>
              </div>
            </div>


            <fieldset className="w-full border-t mt-5 border-gray-400 text-center">
              <legend className="px-2 text-[15px]">Monday, 23 Jan 2024</legend>
            </fieldset>


            <div className="relative flex w-full">
              <div className="flex justify-between w-full mt-4">
                <p>10:00 AM</p>
                <div className="flex flex-col items-end">
                  <p className="text-Blue font-bold font-myFont text-xl ">
                    Sarah
                  </p>
                  <div className="bg-Background h-[65px] w-[255px] rounded-b-4xl rounded-l-4xl">
                    <p className="text-Blue font-smbold font-myFont text-center my-2 ">
                    Yes, VR is generally safe
                    when used properly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-Background w-4 h-4 rounded-full absolute right-0 top-7 ">
                <div className="bg-green-400 w-2 h-2 rounded-full absolute top-1 left-1"></div>
              </div>
              <img src={callgirl} alt="" className="relative h-14 w-14" />
            </div>
        <div className="mx-10 mt-40 drop-shadow-xl ">
           <div className=" flex w-full h-14 bg-[#F3F6FF] rounded-2xl px-5 justify-between">
           <input type="text" name=""
            placeholder="Enter Here"
            className="w-full h-full  outline-none" />
           <div className="flex items-center gap-5">
           <FaMicrophone className="text-Gray hover:text-Blue hover:size-6" />
           <BsTelegram className="size-8" />
           </div>
           </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callcomp;
