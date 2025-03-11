
import logo from "../assets/img/whitelogo.png"
import { FiBox } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className="bg-white h-screen">
        
            <div className="">
              <div className="">
                <div className="bg-Blue h-screen  ">
                    <div className="mx-4 flex flex-col justify-center items-center pt-16">
                    <img src={logo} alt="" className="h-20  "/>
                    <button className="w-full bg-White p-4 rounded-lg flex r items-center gap-2 mt-10 text-Blue hover:bg-Blue hover:text-White border-2 border-White" >
                    <CiGrid41  className="size-7 "/>
                        <p className="font-bold font-myFont text-lg ">Trade Booths</p>
                    </button>

                    <button className="w-full  p-4 rounded-lg flex  items-center gap-2 mt-5  text-White" >
                    <IoChatboxEllipsesOutline  className="size-7 "/>
                        <p className="font-bold font-myFont text-lg ">Support</p>
                    </button>
                    <button className="w-full  p-4 rounded-lg flex  items-center gap-2 mt-5 mx-8 text-White" >
                    <FiBox className="size-7 "/>
                        <p className="font-bold font-myFont text-lg ">Trade Booths List</p>
                    </button>

                    
                    </div>
                </div>
              </div>
            </div>
        
        
    </div>
  )
}

export default Sidebar